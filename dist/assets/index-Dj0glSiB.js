(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ch(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ke={},ei=[],On=()=>{},gw=()=>!1,$l=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Rh=t=>t.startsWith("onUpdate:"),bt=Object.assign,Dh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yw=Object.prototype.hasOwnProperty,He=(t,e)=>yw.call(t,e),me=Array.isArray,ti=t=>Ho(t)==="[object Map]",wi=t=>Ho(t)==="[object Set]",Kf=t=>Ho(t)==="[object Date]",Ce=t=>typeof t=="function",ut=t=>typeof t=="string",$n=t=>typeof t=="symbol",Ye=t=>t!==null&&typeof t=="object",ry=t=>(Ye(t)||Ce(t))&&Ce(t.then)&&Ce(t.catch),sy=Object.prototype.toString,Ho=t=>sy.call(t),_w=t=>Ho(t).slice(8,-1),iy=t=>Ho(t)==="[object Object]",kh=t=>ut(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,so=Ch(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vw=/-(\w)/g,qr=Fl(t=>t.replace(vw,(e,n)=>n?n.toUpperCase():"")),bw=/\B([A-Z])/g,Os=Fl(t=>t.replace(bw,"-$1").toLowerCase()),oy=Fl(t=>t.charAt(0).toUpperCase()+t.slice(1)),jc=Fl(t=>t?`on${oy(t)}`:""),Mr=(t,e)=>!Object.is(t,e),ja=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wu=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},sl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ww=t=>{const e=ut(t)?Number(t):NaN;return isNaN(e)?t:e};let Yf;const Ul=()=>Yf||(Yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bl(t){if(me(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ut(r)?Sw(r):Bl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ut(t)||Ye(t))return t}const Ew=/;(?![^(]*\))/g,Tw=/:([^]+)/,Iw=/\/\*[^]*?\*\//g;function Sw(t){const e={};return t.replace(Iw,"").split(Ew).forEach(n=>{if(n){const r=n.split(Tw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ts(t){let e="";if(ut(t))e=t;else if(me(t))for(let n=0;n<t.length;n++){const r=Ts(t[n]);r&&(e+=r+" ")}else if(Ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Aw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pw=Ch(Aw);function ay(t){return!!t||t===""}function Cw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=zo(t[r],e[r]);return n}function zo(t,e){if(t===e)return!0;let n=Kf(t),r=Kf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=$n(t),r=$n(e),n||r)return t===e;if(n=me(t),r=me(e),n||r)return n&&r?Cw(t,e):!1;if(n=Ye(t),r=Ye(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(c&&!a||!c&&a||!zo(t[o],e[o]))return!1}}return String(t)===String(e)}function Oh(t,e){return t.findIndex(n=>zo(n,e))}const ly=t=>!!(t&&t.__v_isRef===!0),I=t=>ut(t)?t:t==null?"":me(t)||Ye(t)&&(t.toString===sy||!Ce(t.toString))?ly(t)?I(t.value):JSON.stringify(t,cy,2):String(t),cy=(t,e)=>ly(e)?cy(t,e.value):ti(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[qc(r,i)+" =>"]=s,n),{})}:wi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qc(n))}:$n(e)?qc(e):Ye(e)&&!me(e)&&!iy(e)?String(e):e,qc=(t,e="")=>{var n;return $n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;class uy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Mt,!e&&Mt&&(this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){++this._on===1&&(this.prevScope=Mt,Mt=this)}off(){this._on>0&&--this._on===0&&(Mt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hy(t){return new uy(t)}function dy(){return Mt}function Rw(t,e=!1){Mt&&Mt.cleanups.push(t)}let Xe;const Hc=new WeakSet;class fy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mt&&Mt.active&&Mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hc.has(this)&&(Hc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||my(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qf(this),gy(this);const e=Xe,n=vn;Xe=this,vn=!0;try{return this.fn()}finally{yy(this),Xe=e,vn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vh(e);this.deps=this.depsTail=void 0,Qf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Eu(this)&&this.run()}get dirty(){return Eu(this)}}let py=0,io,oo;function my(t,e=!1){if(t.flags|=8,e){t.next=oo,oo=t;return}t.next=io,io=t}function xh(){py++}function Nh(){if(--py>0)return;if(oo){let e=oo;for(oo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;io;){let e=io;for(io=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function gy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yy(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Vh(r),Dw(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Eu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_y(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _y(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===To)||(t.globalVersion=To,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Eu(t))))return;t.flags|=2;const e=t.dep,n=Xe,r=vn;Xe=t,vn=!0;try{gy(t);const s=t.fn(t._value);(e.version===0||Mr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Xe=n,vn=r,yy(t),t.flags&=-3}}function Vh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Dw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let vn=!0;const vy=[];function sr(){vy.push(vn),vn=!1}function ir(){const t=vy.pop();vn=t===void 0?!0:t}function Qf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Xe;Xe=void 0;try{e()}finally{Xe=n}}}let To=0;class kw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Xe||!vn||Xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Xe)n=this.activeLink=new kw(Xe,this),Xe.deps?(n.prevDep=Xe.depsTail,Xe.depsTail.nextDep=n,Xe.depsTail=n):Xe.deps=Xe.depsTail=n,by(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Xe.depsTail,n.nextDep=void 0,Xe.depsTail.nextDep=n,Xe.depsTail=n,Xe.deps===n&&(Xe.deps=r)}return n}trigger(e){this.version++,To++,this.notify(e)}notify(e){xh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nh()}}}function by(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)by(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const il=new WeakMap,bs=Symbol(""),Tu=Symbol(""),Io=Symbol("");function $t(t,e,n){if(vn&&Xe){let r=il.get(t);r||il.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Mh),s.map=r,s.key=n),s.track()}}function Yn(t,e,n,r,s,i){const o=il.get(t);if(!o){To++;return}const c=a=>{a&&a.trigger()};if(xh(),e==="clear")o.forEach(c);else{const a=me(t),u=a&&kh(n);if(a&&n==="length"){const h=Number(r);o.forEach((m,f)=>{(f==="length"||f===Io||!$n(f)&&f>=h)&&c(m)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Io)),e){case"add":a?u&&c(o.get("length")):(c(o.get(bs)),ti(t)&&c(o.get(Tu)));break;case"delete":a||(c(o.get(bs)),ti(t)&&c(o.get(Tu)));break;case"set":ti(t)&&c(o.get(bs));break}}Nh()}function Ow(t,e){const n=il.get(t);return n&&n.get(e)}function js(t){const e=Fe(t);return e===t?e:($t(e,"iterate",Io),dn(t)?e:e.map(Ct))}function jl(t){return $t(t=Fe(t),"iterate",Io),t}const xw={__proto__:null,[Symbol.iterator](){return zc(this,Symbol.iterator,Ct)},concat(...t){return js(this).concat(...t.map(e=>me(e)?js(e):e))},entries(){return zc(this,"entries",t=>(t[1]=Ct(t[1]),t))},every(t,e){return zn(this,"every",t,e,void 0,arguments)},filter(t,e){return zn(this,"filter",t,e,n=>n.map(Ct),arguments)},find(t,e){return zn(this,"find",t,e,Ct,arguments)},findIndex(t,e){return zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zn(this,"findLast",t,e,Ct,arguments)},findLastIndex(t,e){return zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wc(this,"includes",t)},indexOf(...t){return Wc(this,"indexOf",t)},join(t){return js(this).join(t)},lastIndexOf(...t){return Wc(this,"lastIndexOf",t)},map(t,e){return zn(this,"map",t,e,void 0,arguments)},pop(){return zi(this,"pop")},push(...t){return zi(this,"push",t)},reduce(t,...e){return Xf(this,"reduce",t,e)},reduceRight(t,...e){return Xf(this,"reduceRight",t,e)},shift(){return zi(this,"shift")},some(t,e){return zn(this,"some",t,e,void 0,arguments)},splice(...t){return zi(this,"splice",t)},toReversed(){return js(this).toReversed()},toSorted(t){return js(this).toSorted(t)},toSpliced(...t){return js(this).toSpliced(...t)},unshift(...t){return zi(this,"unshift",t)},values(){return zc(this,"values",Ct)}};function zc(t,e,n){const r=jl(t),s=r[e]();return r!==t&&!dn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Nw=Array.prototype;function zn(t,e,n,r,s,i){const o=jl(t),c=o!==t&&!dn(t),a=o[e];if(a!==Nw[e]){const m=a.apply(t,i);return c?Ct(m):m}let u=n;o!==t&&(c?u=function(m,f){return n.call(this,Ct(m),f,t)}:n.length>2&&(u=function(m,f){return n.call(this,m,f,t)}));const h=a.call(o,u,r);return c&&s?s(h):h}function Xf(t,e,n,r){const s=jl(t);let i=n;return s!==t&&(dn(t)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,t)}):i=function(o,c,a){return n.call(this,o,Ct(c),a,t)}),s[e](i,...r)}function Wc(t,e,n){const r=Fe(t);$t(r,"iterate",Io);const s=r[e](...n);return(s===-1||s===!1)&&Fh(n[0])?(n[0]=Fe(n[0]),r[e](...n)):s}function zi(t,e,n=[]){sr(),xh();const r=Fe(t)[e].apply(t,n);return Nh(),ir(),r}const Vw=Ch("__proto__,__v_isRef,__isVue"),wy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($n));function Mw(t){$n(t)||(t=String(t));const e=Fe(this);return $t(e,"has",t),e.hasOwnProperty(t)}class Ey{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ww:Ay:i?Sy:Iy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=me(e);if(!s){let a;if(o&&(a=xw[n]))return a;if(n==="hasOwnProperty")return Mw}const c=Reflect.get(e,n,ct(e)?e:r);return($n(n)?wy.has(n):Vw(n))||(s||$t(e,"get",n),i)?c:ct(c)?o&&kh(n)?c:c.value:Ye(c)?s?Cy(c):Un(c):c}}class Ty extends Ey{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=Hr(i);if(!dn(r)&&!Hr(r)&&(i=Fe(i),r=Fe(r)),!me(e)&&ct(i)&&!ct(r))return a?!1:(i.value=r,!0)}const o=me(e)&&kh(n)?Number(n)<e.length:He(e,n),c=Reflect.set(e,n,r,ct(e)?e:s);return e===Fe(s)&&(o?Mr(r,i)&&Yn(e,"set",n,r):Yn(e,"add",n,r)),c}deleteProperty(e,n){const r=He(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!$n(n)||!wy.has(n))&&$t(e,"has",n),r}ownKeys(e){return $t(e,"iterate",me(e)?"length":bs),Reflect.ownKeys(e)}}class Lw extends Ey{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $w=new Ty,Fw=new Lw,Uw=new Ty(!0);const Iu=t=>t,Pa=t=>Reflect.getPrototypeOf(t);function Bw(t,e,n){return function(...r){const s=this.__v_raw,i=Fe(s),o=ti(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,u=s[t](...r),h=n?Iu:e?ol:Ct;return!e&&$t(i,"iterate",a?Tu:bs),{next(){const{value:m,done:f}=u.next();return f?{value:m,done:f}:{value:c?[h(m[0]),h(m[1])]:h(m),done:f}},[Symbol.iterator](){return this}}}}function Ca(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jw(t,e){const n={get(s){const i=this.__v_raw,o=Fe(i),c=Fe(s);t||(Mr(s,c)&&$t(o,"get",s),$t(o,"get",c));const{has:a}=Pa(o),u=e?Iu:t?ol:Ct;if(a.call(o,s))return u(i.get(s));if(a.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&$t(Fe(s),"iterate",bs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Fe(i),c=Fe(s);return t||(Mr(s,c)&&$t(o,"has",s),$t(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,a=Fe(c),u=e?Iu:t?ol:Ct;return!t&&$t(a,"iterate",bs),c.forEach((h,m)=>s.call(i,u(h),u(m),o))}};return bt(n,t?{add:Ca("add"),set:Ca("set"),delete:Ca("delete"),clear:Ca("clear")}:{add(s){!e&&!dn(s)&&!Hr(s)&&(s=Fe(s));const i=Fe(this);return Pa(i).has.call(i,s)||(i.add(s),Yn(i,"add",s,s)),this},set(s,i){!e&&!dn(i)&&!Hr(i)&&(i=Fe(i));const o=Fe(this),{has:c,get:a}=Pa(o);let u=c.call(o,s);u||(s=Fe(s),u=c.call(o,s));const h=a.call(o,s);return o.set(s,i),u?Mr(i,h)&&Yn(o,"set",s,i):Yn(o,"add",s,i),this},delete(s){const i=Fe(this),{has:o,get:c}=Pa(i);let a=o.call(i,s);a||(s=Fe(s),a=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return a&&Yn(i,"delete",s,void 0),u},clear(){const s=Fe(this),i=s.size!==0,o=s.clear();return i&&Yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Bw(s,t,e)}),n}function Lh(t,e){const n=jw(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(He(n,s)&&s in r?n:r,s,i)}const qw={get:Lh(!1,!1)},Hw={get:Lh(!1,!0)},zw={get:Lh(!0,!1)};const Iy=new WeakMap,Sy=new WeakMap,Ay=new WeakMap,Ww=new WeakMap;function Gw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kw(t){return t.__v_skip||!Object.isExtensible(t)?0:Gw(_w(t))}function Un(t){return Hr(t)?t:$h(t,!1,$w,qw,Iy)}function Py(t){return $h(t,!1,Uw,Hw,Sy)}function Cy(t){return $h(t,!0,Fw,zw,Ay)}function $h(t,e,n,r,s){if(!Ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Kw(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Lr(t){return Hr(t)?Lr(t.__v_raw):!!(t&&t.__v_isReactive)}function Hr(t){return!!(t&&t.__v_isReadonly)}function dn(t){return!!(t&&t.__v_isShallow)}function Fh(t){return t?!!t.__v_raw:!1}function Fe(t){const e=t&&t.__v_raw;return e?Fe(e):t}function Uh(t){return!He(t,"__v_skip")&&Object.isExtensible(t)&&wu(t,"__v_skip",!0),t}const Ct=t=>Ye(t)?Un(t):t,ol=t=>Ye(t)?Cy(t):t;function ct(t){return t?t.__v_isRef===!0:!1}function Te(t){return Ry(t,!1)}function Yw(t){return Ry(t,!0)}function Ry(t,e){return ct(t)?t:new Qw(t,e)}class Qw{constructor(e,n){this.dep=new Mh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Fe(e),this._value=n?e:Ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||dn(e)||Hr(e);e=r?e:Fe(e),Mr(e,n)&&(this._rawValue=e,this._value=r?e:Ct(e),this.dep.trigger())}}function y(t){return ct(t)?t.value:t}const Xw={get:(t,e,n)=>e==="__v_raw"?t:y(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ct(s)&&!ct(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Dy(t){return Lr(t)?t:new Proxy(t,Xw)}function Jw(t){const e=me(t)?new Array(t.length):{};for(const n in t)e[n]=eE(t,n);return e}class Zw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ow(Fe(this._object),this._key)}}function eE(t,e,n){const r=t[e];return ct(r)?r:new Zw(t,e,n)}class tE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Mh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=To-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Xe!==this)return my(this,!0),!0}get value(){const e=this.dep.track();return _y(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nE(t,e,n=!1){let r,s;return Ce(t)?r=t:(r=t.get,s=t.set),new tE(r,s,n)}const Ra={},al=new WeakMap;let ps;function rE(t,e=!1,n=ps){if(n){let r=al.get(n);r||al.set(n,r=[]),r.push(t)}}function sE(t,e,n=Ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,u=$=>s?$:dn($)||s===!1||s===0?Qn($,1):Qn($);let h,m,f,_,C=!1,E=!1;if(ct(t)?(m=()=>t.value,C=dn(t)):Lr(t)?(m=()=>u(t),C=!0):me(t)?(E=!0,C=t.some($=>Lr($)||dn($)),m=()=>t.map($=>{if(ct($))return $.value;if(Lr($))return u($);if(Ce($))return a?a($,2):$()})):Ce(t)?e?m=a?()=>a(t,2):t:m=()=>{if(f){sr();try{f()}finally{ir()}}const $=ps;ps=h;try{return a?a(t,3,[_]):t(_)}finally{ps=$}}:m=On,e&&s){const $=m,W=s===!0?1/0:s;m=()=>Qn($(),W)}const T=dy(),N=()=>{h.stop(),T&&T.active&&Dh(T.effects,h)};if(i&&e){const $=e;e=(...W)=>{$(...W),N()}}let x=E?new Array(t.length).fill(Ra):Ra;const V=$=>{if(!(!(h.flags&1)||!h.dirty&&!$))if(e){const W=h.run();if(s||C||(E?W.some((J,P)=>Mr(J,x[P])):Mr(W,x))){f&&f();const J=ps;ps=h;try{const P=[W,x===Ra?void 0:E&&x[0]===Ra?[]:x,_];x=W,a?a(e,3,P):e(...P)}finally{ps=J}}}else h.run()};return c&&c(V),h=new fy(m),h.scheduler=o?()=>o(V,!1):V,_=$=>rE($,!1,h),f=h.onStop=()=>{const $=al.get(h);if($){if(a)a($,4);else for(const W of $)W();al.delete(h)}},e?r?V(!0):x=h.run():o?o(V.bind(null,!0),!0):h.run(),N.pause=h.pause.bind(h),N.resume=h.resume.bind(h),N.stop=N,N}function Qn(t,e=1/0,n){if(e<=0||!Ye(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ct(t))Qn(t.value,e,n);else if(me(t))for(let r=0;r<t.length;r++)Qn(t[r],e,n);else if(wi(t)||ti(t))t.forEach(r=>{Qn(r,e,n)});else if(iy(t)){for(const r in t)Qn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Qn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wo(t,e,n,r){try{return r?t(...r):t()}catch(s){ql(s,e,n)}}function wn(t,e,n,r){if(Ce(t)){const s=Wo(t,e,n,r);return s&&ry(s)&&s.catch(i=>{ql(i,e,n)}),s}if(me(t)){const s=[];for(let i=0;i<t.length;i++)s.push(wn(t[i],e,n,r));return s}}function ql(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ke;if(e){let c=e.parent;const a=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const h=c.ec;if(h){for(let m=0;m<h.length;m++)if(h[m](t,a,u)===!1)return}c=c.parent}if(i){sr(),Wo(i,null,10,[t,a,u]),ir();return}}iE(t,n,s,r,o)}function iE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Wt=[];let Pn=-1;const ni=[];let Ar=null,Ws=0;const ky=Promise.resolve();let ll=null;function Hl(t){const e=ll||ky;return t?e.then(this?t.bind(this):t):e}function oE(t){let e=Pn+1,n=Wt.length;for(;e<n;){const r=e+n>>>1,s=Wt[r],i=So(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Bh(t){if(!(t.flags&1)){const e=So(t),n=Wt[Wt.length-1];!n||!(t.flags&2)&&e>=So(n)?Wt.push(t):Wt.splice(oE(e),0,t),t.flags|=1,Oy()}}function Oy(){ll||(ll=ky.then(Ny))}function aE(t){me(t)?ni.push(...t):Ar&&t.id===-1?Ar.splice(Ws+1,0,t):t.flags&1||(ni.push(t),t.flags|=1),Oy()}function Jf(t,e,n=Pn+1){for(;n<Wt.length;n++){const r=Wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function xy(t){if(ni.length){const e=[...new Set(ni)].sort((n,r)=>So(n)-So(r));if(ni.length=0,Ar){Ar.push(...e);return}for(Ar=e,Ws=0;Ws<Ar.length;Ws++){const n=Ar[Ws];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Ws=0}}const So=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ny(t){try{for(Pn=0;Pn<Wt.length;Pn++){const e=Wt[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<Wt.length;Pn++){const e=Wt[Pn];e&&(e.flags&=-2)}Pn=-1,Wt.length=0,xy(),ll=null,(Wt.length||ni.length)&&Ny()}}let Jt=null,Vy=null;function cl(t){const e=Jt;return Jt=t,Vy=t&&t.type.__scopeId||null,e}function ns(t,e=Jt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&lp(-1);const i=cl(e);let o;try{o=t(...s)}finally{cl(i),r._d&&lp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function le(t,e){if(Jt===null)return t;const n=Yl(Jt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=Ke]=e[s];i&&(Ce(i)&&(i={mounted:i,updated:i}),i.deep&&Qn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function us(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(sr(),wn(a,n,8,[t.el,c,t,e]),ir())}}const lE=Symbol("_vte"),My=t=>t.__isTeleport,Pr=Symbol("_leaveCb"),Da=Symbol("_enterCb");function cE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qh(()=>{t.isMounted=!0}),Hy(()=>{t.isUnmounting=!0}),t}const cn=[Function,Array],Ly={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:cn,onEnter:cn,onAfterEnter:cn,onEnterCancelled:cn,onBeforeLeave:cn,onLeave:cn,onAfterLeave:cn,onLeaveCancelled:cn,onBeforeAppear:cn,onAppear:cn,onAfterAppear:cn,onAppearCancelled:cn},$y=t=>{const e=t.subTree;return e.component?$y(e.component):e},uE={name:"BaseTransition",props:Ly,setup(t,{slots:e}){const n=i0(),r=cE();return()=>{const s=e.default&&By(e.default(),!0);if(!s||!s.length)return;const i=Fy(s),o=Fe(t),{mode:c}=o;if(r.isLeaving)return Gc(i);const a=Zf(i);if(!a)return Gc(i);let u=Su(a,o,r,n,m=>u=m);a.type!==Gt&&Ao(a,u);let h=n.subTree&&Zf(n.subTree);if(h&&h.type!==Gt&&!gs(a,h)&&$y(n).type!==Gt){let m=Su(h,o,r,n);if(Ao(h,m),c==="out-in"&&a.type!==Gt)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete m.afterLeave,h=void 0},Gc(i);c==="in-out"&&a.type!==Gt?m.delayLeave=(f,_,C)=>{const E=Uy(r,h);E[String(h.key)]=h,f[Pr]=()=>{_(),f[Pr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{C(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Fy(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Gt){e=n;break}}return e}const hE=uE;function Uy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Su(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:h,onEnterCancelled:m,onBeforeLeave:f,onLeave:_,onAfterLeave:C,onLeaveCancelled:E,onBeforeAppear:T,onAppear:N,onAfterAppear:x,onAppearCancelled:V}=e,$=String(t.key),W=Uy(n,t),J=(w,A)=>{w&&wn(w,r,9,A)},P=(w,A)=>{const O=A[1];J(w,A),me(w)?w.every(D=>D.length<=1)&&O():w.length<=1&&O()},b={mode:o,persisted:c,beforeEnter(w){let A=a;if(!n.isMounted)if(i)A=T||a;else return;w[Pr]&&w[Pr](!0);const O=W[$];O&&gs(t,O)&&O.el[Pr]&&O.el[Pr](),J(A,[w])},enter(w){let A=u,O=h,D=m;if(!n.isMounted)if(i)A=N||u,O=x||h,D=V||m;else return;let S=!1;const xe=w[Da]=ae=>{S||(S=!0,ae?J(D,[w]):J(O,[w]),b.delayedLeave&&b.delayedLeave(),w[Da]=void 0)};A?P(A,[w,xe]):xe()},leave(w,A){const O=String(t.key);if(w[Da]&&w[Da](!0),n.isUnmounting)return A();J(f,[w]);let D=!1;const S=w[Pr]=xe=>{D||(D=!0,A(),xe?J(E,[w]):J(C,[w]),w[Pr]=void 0,W[O]===t&&delete W[O])};W[O]=t,_?P(_,[w,S]):S()},clone(w){const A=Su(w,e,n,r,s);return s&&s(A),A}};return b}function Gc(t){if(zl(t))return t=zr(t),t.children=null,t}function Zf(t){if(!zl(t))return My(t.type)&&t.children?Fy(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ce(n.default))return n.default()}}function Ao(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ao(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function By(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===et?(o.patchFlag&128&&s++,r=r.concat(By(o.children,e,c))):(e||o.type!==Gt)&&r.push(c!=null?zr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function jh(t,e){return Ce(t)?bt({name:t.name},e,{setup:t}):t}function jy(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ao(t,e,n,r,s=!1){if(me(t)){t.forEach((C,E)=>ao(C,e&&(me(e)?e[E]:e),n,r,s));return}if(lo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ao(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Yl(r.component):r.el,o=s?null:i,{i:c,r:a}=t,u=e&&e.r,h=c.refs===Ke?c.refs={}:c.refs,m=c.setupState,f=Fe(m),_=m===Ke?()=>!1:C=>He(f,C);if(u!=null&&u!==a&&(ut(u)?(h[u]=null,_(u)&&(m[u]=null)):ct(u)&&(u.value=null)),Ce(a))Wo(a,c,12,[o,h]);else{const C=ut(a),E=ct(a);if(C||E){const T=()=>{if(t.f){const N=C?_(a)?m[a]:h[a]:a.value;s?me(N)&&Dh(N,i):me(N)?N.includes(i)||N.push(i):C?(h[a]=[i],_(a)&&(m[a]=h[a])):(a.value=[i],t.k&&(h[t.k]=a.value))}else C?(h[a]=o,_(a)&&(m[a]=o)):E&&(a.value=o,t.k&&(h[t.k]=o))};o?(T.id=-1,en(T,n)):T()}}}Ul().requestIdleCallback;Ul().cancelIdleCallback;const lo=t=>!!t.type.__asyncLoader,zl=t=>t.type.__isKeepAlive;function dE(t,e){qy(t,"a",e)}function fE(t,e){qy(t,"da",e)}function qy(t,e,n=Rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Wl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zl(s.parent.vnode)&&pE(r,e,n,s),s=s.parent}}function pE(t,e,n,r){const s=Wl(e,t,r,!0);zy(()=>{Dh(r[e],s)},n)}function Wl(t,e,n=Rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{sr();const c=Go(n),a=wn(e,n,t,o);return c(),ir(),a});return r?s.unshift(i):s.push(i),i}}const dr=t=>(e,n=Rt)=>{(!Co||t==="sp")&&Wl(t,(...r)=>e(...r),n)},mE=dr("bm"),qh=dr("m"),gE=dr("bu"),yE=dr("u"),Hy=dr("bum"),zy=dr("um"),_E=dr("sp"),vE=dr("rtg"),bE=dr("rtc");function wE(t,e=Rt){Wl("ec",t,e)}const EE=Symbol.for("v-ndc");function fn(t,e,n,r){let s;const i=n,o=me(t);if(o||ut(t)){const c=o&&Lr(t);let a=!1,u=!1;c&&(a=!dn(t),u=Hr(t),t=jl(t)),s=new Array(t.length);for(let h=0,m=t.length;h<m;h++)s[h]=e(a?u?ol(Ct(t[h])):Ct(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ye(t))if(t[Symbol.iterator])s=Array.from(t,(c,a)=>e(c,a,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let a=0,u=c.length;a<u;a++){const h=c[a];s[a]=e(t[h],h,a,i)}}else s=[];return s}const Au=t=>t?d_(t)?Yl(t):Au(t.parent):null,co=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Au(t.parent),$root:t=>Au(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Gy(t),$forceUpdate:t=>t.f||(t.f=()=>{Bh(t.update)}),$nextTick:t=>t.n||(t.n=Hl.bind(t.proxy)),$watch:t=>HE.bind(t)}),Kc=(t,e)=>t!==Ke&&!t.__isScriptSetup&&He(t,e),TE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Kc(r,e))return o[e]=1,r[e];if(s!==Ke&&He(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&He(u,e))return o[e]=3,i[e];if(n!==Ke&&He(n,e))return o[e]=4,n[e];Pu&&(o[e]=0)}}const h=co[e];let m,f;if(h)return e==="$attrs"&&$t(t.attrs,"get",""),h(t);if((m=c.__cssModules)&&(m=m[e]))return m;if(n!==Ke&&He(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,He(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Kc(s,e)?(s[e]=n,!0):r!==Ke&&He(r,e)?(r[e]=n,!0):He(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ke&&He(t,o)||Kc(e,o)||(c=i[0])&&He(c,o)||He(r,o)||He(co,o)||He(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:He(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ep(t){return me(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pu=!0;function IE(t){const e=Gy(t),n=t.proxy,r=t.ctx;Pu=!1,e.beforeCreate&&tp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:u,created:h,beforeMount:m,mounted:f,beforeUpdate:_,updated:C,activated:E,deactivated:T,beforeDestroy:N,beforeUnmount:x,destroyed:V,unmounted:$,render:W,renderTracked:J,renderTriggered:P,errorCaptured:b,serverPrefetch:w,expose:A,inheritAttrs:O,components:D,directives:S,filters:xe}=e;if(u&&SE(u,r,null),o)for(const Y in o){const ke=o[Y];Ce(ke)&&(r[Y]=ke.bind(n))}if(s){const Y=s.call(n,n);Ye(Y)&&(t.data=Un(Y))}if(Pu=!0,i)for(const Y in i){const ke=i[Y],pt=Ce(ke)?ke.bind(n,n):Ce(ke.get)?ke.get.bind(n,n):On,Et=!Ce(ke)&&Ce(ke.set)?ke.set.bind(n):On,Qe=Pe({get:pt,set:Et});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:Ue=>Qe.value=Ue})}if(c)for(const Y in c)Wy(c[Y],r,n,Y);if(a){const Y=Ce(a)?a.call(n):a;Reflect.ownKeys(Y).forEach(ke=>{Nr(ke,Y[ke])})}h&&tp(h,t,"c");function U(Y,ke){me(ke)?ke.forEach(pt=>Y(pt.bind(n))):ke&&Y(ke.bind(n))}if(U(mE,m),U(qh,f),U(gE,_),U(yE,C),U(dE,E),U(fE,T),U(wE,b),U(bE,J),U(vE,P),U(Hy,x),U(zy,$),U(_E,w),me(A))if(A.length){const Y=t.exposed||(t.exposed={});A.forEach(ke=>{Object.defineProperty(Y,ke,{get:()=>n[ke],set:pt=>n[ke]=pt})})}else t.exposed||(t.exposed={});W&&t.render===On&&(t.render=W),O!=null&&(t.inheritAttrs=O),D&&(t.components=D),S&&(t.directives=S),w&&jy(t)}function SE(t,e,n=On){me(t)&&(t=Cu(t));for(const r in t){const s=t[r];let i;Ye(s)?"default"in s?i=$e(s.from||r,s.default,!0):i=$e(s.from||r):i=$e(s),ct(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function tp(t,e,n){wn(me(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wy(t,e,n,r){let s=r.includes(".")?o_(n,r):()=>n[r];if(ut(t)){const i=e[t];Ce(i)&&tt(s,i)}else if(Ce(t))tt(s,t.bind(n));else if(Ye(t))if(me(t))t.forEach(i=>Wy(i,e,n,r));else{const i=Ce(t.handler)?t.handler.bind(n):e[t.handler];Ce(i)&&tt(s,i,t)}}function Gy(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(u=>ul(a,u,o,!0)),ul(a,e,o)),Ye(e)&&i.set(e,a),a}function ul(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ul(t,i,n,!0),s&&s.forEach(o=>ul(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=AE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const AE={data:np,props:rp,emits:rp,methods:Yi,computed:Yi,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:Yi,directives:Yi,watch:CE,provide:np,inject:PE};function np(t,e){return e?t?function(){return bt(Ce(t)?t.call(this,this):t,Ce(e)?e.call(this,this):e)}:e:t}function PE(t,e){return Yi(Cu(t),Cu(e))}function Cu(t){if(me(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function zt(t,e){return t?[...new Set([].concat(t,e))]:e}function Yi(t,e){return t?bt(Object.create(null),t,e):e}function rp(t,e){return t?me(t)&&me(e)?[...new Set([...t,...e])]:bt(Object.create(null),ep(t),ep(e??{})):e}function CE(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const r in e)n[r]=zt(t[r],e[r]);return n}function Ky(){return{app:null,config:{isNativeTag:gw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let RE=0;function DE(t,e){return function(r,s=null){Ce(r)||(r=bt({},r)),s!=null&&!Ye(s)&&(s=null);const i=Ky(),o=new WeakSet,c=[];let a=!1;const u=i.app={_uid:RE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:h0,get config(){return i.config},set config(h){},use(h,...m){return o.has(h)||(h&&Ce(h.install)?(o.add(h),h.install(u,...m)):Ce(h)&&(o.add(h),h(u,...m))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,m){return m?(i.components[h]=m,u):i.components[h]},directive(h,m){return m?(i.directives[h]=m,u):i.directives[h]},mount(h,m,f){if(!a){const _=u._ceVNode||Se(r,s);return _.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),t(_,h,f),a=!0,u._container=h,h.__vue_app__=u,Yl(_.component)}},onUnmount(h){c.push(h)},unmount(){a&&(wn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,m){return i.provides[h]=m,u},runWithContext(h){const m=ws;ws=u;try{return h()}finally{ws=m}}};return u}}let ws=null;function Nr(t,e){if(Rt){let n=Rt.provides;const r=Rt.parent&&Rt.parent.provides;r===n&&(n=Rt.provides=Object.create(r)),n[t]=e}}function $e(t,e,n=!1){const r=Rt||Jt;if(r||ws){let s=ws?ws._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ce(e)?e.call(r&&r.proxy):e}}function kE(){return!!(Rt||Jt||ws)}const Yy={},Qy=()=>Object.create(Yy),Xy=t=>Object.getPrototypeOf(t)===Yy;function OE(t,e,n,r=!1){const s={},i=Qy();t.propsDefaults=Object.create(null),Jy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Py(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function xE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Fe(s),[a]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let m=0;m<h.length;m++){let f=h[m];if(Gl(t.emitsOptions,f))continue;const _=e[f];if(a)if(He(i,f))_!==i[f]&&(i[f]=_,u=!0);else{const C=qr(f);s[C]=Ru(a,c,C,_,t,!1)}else _!==i[f]&&(i[f]=_,u=!0)}}}else{Jy(t,e,s,i)&&(u=!0);let h;for(const m in c)(!e||!He(e,m)&&((h=Os(m))===m||!He(e,h)))&&(a?n&&(n[m]!==void 0||n[h]!==void 0)&&(s[m]=Ru(a,c,m,void 0,t,!0)):delete s[m]);if(i!==c)for(const m in i)(!e||!He(e,m))&&(delete i[m],u=!0)}u&&Yn(t.attrs,"set","")}function Jy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(so(a))continue;const u=e[a];let h;s&&He(s,h=qr(a))?!i||!i.includes(h)?n[h]=u:(c||(c={}))[h]=u:Gl(t.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,o=!0)}if(i){const a=Fe(n),u=c||Ke;for(let h=0;h<i.length;h++){const m=i[h];n[m]=Ru(s,a,m,u[m],t,!He(u,m))}}return o}function Ru(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=He(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&Ce(a)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Go(s);r=u[n]=a.call(null,e),h()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Os(n))&&(r=!0))}return r}const NE=new WeakMap;function Zy(t,e,n=!1){const r=n?NE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!Ce(t)){const h=m=>{a=!0;const[f,_]=Zy(m,e,!0);bt(o,f),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!a)return Ye(t)&&r.set(t,ei),ei;if(me(i))for(let h=0;h<i.length;h++){const m=qr(i[h]);sp(m)&&(o[m]=Ke)}else if(i)for(const h in i){const m=qr(h);if(sp(m)){const f=i[h],_=o[m]=me(f)||Ce(f)?{type:f}:bt({},f),C=_.type;let E=!1,T=!0;if(me(C))for(let N=0;N<C.length;++N){const x=C[N],V=Ce(x)&&x.name;if(V==="Boolean"){E=!0;break}else V==="String"&&(T=!1)}else E=Ce(C)&&C.name==="Boolean";_[0]=E,_[1]=T,(E||He(_,"default"))&&c.push(m)}}const u=[o,c];return Ye(t)&&r.set(t,u),u}function sp(t){return t[0]!=="$"&&!so(t)}const Hh=t=>t[0]==="_"||t==="$stable",zh=t=>me(t)?t.map(Rn):[Rn(t)],VE=(t,e,n)=>{if(e._n)return e;const r=ns((...s)=>zh(e(...s)),n);return r._c=!1,r},e_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Hh(s))continue;const i=t[s];if(Ce(i))e[s]=VE(s,i,r);else if(i!=null){const o=zh(i);e[s]=()=>o}}},t_=(t,e)=>{const n=zh(e);t.slots.default=()=>n},n_=(t,e,n)=>{for(const r in e)(n||!Hh(r))&&(t[r]=e[r])},ME=(t,e,n)=>{const r=t.slots=Qy();if(t.vnode.shapeFlag&32){const s=e.__;s&&wu(r,"__",s,!0);const i=e._;i?(n_(r,e,n),n&&wu(r,"_",i,!0)):e_(e,r)}else e&&t_(t,e)},LE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ke;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:n_(s,e,n):(i=!e.$stable,e_(e,s)),o=e}else e&&(t_(t,e),o={default:1});if(i)for(const c in s)!Hh(c)&&o[c]==null&&delete s[c]},en=XE;function $E(t){return FE(t)}function FE(t,e){const n=Ul();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:u,setElementText:h,parentNode:m,nextSibling:f,setScopeId:_=On,insertStaticContent:C}=t,E=(R,k,M,H=null,Q=null,z=null,se=void 0,te=null,ee=!!k.dynamicChildren)=>{if(R===k)return;R&&!gs(R,k)&&(H=j(R),Ue(R,Q,z,!0),R=null),k.patchFlag===-2&&(ee=!1,k.dynamicChildren=null);const{type:X,ref:pe,shapeFlag:re}=k;switch(X){case Kl:T(R,k,M,H);break;case Gt:N(R,k,M,H);break;case qa:R==null&&x(k,M,H,se);break;case et:D(R,k,M,H,Q,z,se,te,ee);break;default:re&1?W(R,k,M,H,Q,z,se,te,ee):re&6?S(R,k,M,H,Q,z,se,te,ee):(re&64||re&128)&&X.process(R,k,M,H,Q,z,se,te,ee,he)}pe!=null&&Q?ao(pe,R&&R.ref,z,k||R,!k):pe==null&&R&&R.ref!=null&&ao(R.ref,null,z,R,!0)},T=(R,k,M,H)=>{if(R==null)r(k.el=c(k.children),M,H);else{const Q=k.el=R.el;k.children!==R.children&&u(Q,k.children)}},N=(R,k,M,H)=>{R==null?r(k.el=a(k.children||""),M,H):k.el=R.el},x=(R,k,M,H)=>{[R.el,R.anchor]=C(R.children,k,M,H,R.el,R.anchor)},V=({el:R,anchor:k},M,H)=>{let Q;for(;R&&R!==k;)Q=f(R),r(R,M,H),R=Q;r(k,M,H)},$=({el:R,anchor:k})=>{let M;for(;R&&R!==k;)M=f(R),s(R),R=M;s(k)},W=(R,k,M,H,Q,z,se,te,ee)=>{k.type==="svg"?se="svg":k.type==="math"&&(se="mathml"),R==null?J(k,M,H,Q,z,se,te,ee):w(R,k,Q,z,se,te,ee)},J=(R,k,M,H,Q,z,se,te)=>{let ee,X;const{props:pe,shapeFlag:re,transition:de,dirs:we}=R;if(ee=R.el=o(R.type,z,pe&&pe.is,pe),re&8?h(ee,R.children):re&16&&b(R.children,ee,null,H,Q,Yc(R,z),se,te),we&&us(R,null,H,"created"),P(ee,R,R.scopeId,se,H),pe){for(const Re in pe)Re!=="value"&&!so(Re)&&i(ee,Re,null,pe[Re],z,H);"value"in pe&&i(ee,"value",null,pe.value,z),(X=pe.onVnodeBeforeMount)&&Sn(X,H,R)}we&&us(R,null,H,"beforeMount");const ye=UE(Q,de);ye&&de.beforeEnter(ee),r(ee,k,M),((X=pe&&pe.onVnodeMounted)||ye||we)&&en(()=>{X&&Sn(X,H,R),ye&&de.enter(ee),we&&us(R,null,H,"mounted")},Q)},P=(R,k,M,H,Q)=>{if(M&&_(R,M),H)for(let z=0;z<H.length;z++)_(R,H[z]);if(Q){let z=Q.subTree;if(k===z||l_(z.type)&&(z.ssContent===k||z.ssFallback===k)){const se=Q.vnode;P(R,se,se.scopeId,se.slotScopeIds,Q.parent)}}},b=(R,k,M,H,Q,z,se,te,ee=0)=>{for(let X=ee;X<R.length;X++){const pe=R[X]=te?Cr(R[X]):Rn(R[X]);E(null,pe,k,M,H,Q,z,se,te)}},w=(R,k,M,H,Q,z,se)=>{const te=k.el=R.el;let{patchFlag:ee,dynamicChildren:X,dirs:pe}=k;ee|=R.patchFlag&16;const re=R.props||Ke,de=k.props||Ke;let we;if(M&&hs(M,!1),(we=de.onVnodeBeforeUpdate)&&Sn(we,M,k,R),pe&&us(k,R,M,"beforeUpdate"),M&&hs(M,!0),(re.innerHTML&&de.innerHTML==null||re.textContent&&de.textContent==null)&&h(te,""),X?A(R.dynamicChildren,X,te,M,H,Yc(k,Q),z):se||ke(R,k,te,null,M,H,Yc(k,Q),z,!1),ee>0){if(ee&16)O(te,re,de,M,Q);else if(ee&2&&re.class!==de.class&&i(te,"class",null,de.class,Q),ee&4&&i(te,"style",re.style,de.style,Q),ee&8){const ye=k.dynamicProps;for(let Re=0;Re<ye.length;Re++){const Me=ye[Re],Tt=re[Me],It=de[Me];(It!==Tt||Me==="value")&&i(te,Me,Tt,It,Q,M)}}ee&1&&R.children!==k.children&&h(te,k.children)}else!se&&X==null&&O(te,re,de,M,Q);((we=de.onVnodeUpdated)||pe)&&en(()=>{we&&Sn(we,M,k,R),pe&&us(k,R,M,"updated")},H)},A=(R,k,M,H,Q,z,se)=>{for(let te=0;te<k.length;te++){const ee=R[te],X=k[te],pe=ee.el&&(ee.type===et||!gs(ee,X)||ee.shapeFlag&198)?m(ee.el):M;E(ee,X,pe,null,H,Q,z,se,!0)}},O=(R,k,M,H,Q)=>{if(k!==M){if(k!==Ke)for(const z in k)!so(z)&&!(z in M)&&i(R,z,k[z],null,Q,H);for(const z in M){if(so(z))continue;const se=M[z],te=k[z];se!==te&&z!=="value"&&i(R,z,te,se,Q,H)}"value"in M&&i(R,"value",k.value,M.value,Q)}},D=(R,k,M,H,Q,z,se,te,ee)=>{const X=k.el=R?R.el:c(""),pe=k.anchor=R?R.anchor:c("");let{patchFlag:re,dynamicChildren:de,slotScopeIds:we}=k;we&&(te=te?te.concat(we):we),R==null?(r(X,M,H),r(pe,M,H),b(k.children||[],M,pe,Q,z,se,te,ee)):re>0&&re&64&&de&&R.dynamicChildren?(A(R.dynamicChildren,de,M,Q,z,se,te),(k.key!=null||Q&&k===Q.subTree)&&r_(R,k,!0)):ke(R,k,M,pe,Q,z,se,te,ee)},S=(R,k,M,H,Q,z,se,te,ee)=>{k.slotScopeIds=te,R==null?k.shapeFlag&512?Q.ctx.activate(k,M,H,se,ee):xe(k,M,H,Q,z,se,ee):ae(R,k,ee)},xe=(R,k,M,H,Q,z,se)=>{const te=R.component=s0(R,H,Q);if(zl(R)&&(te.ctx.renderer=he),o0(te,!1,se),te.asyncDep){if(Q&&Q.registerDep(te,U,se),!R.el){const ee=te.subTree=Se(Gt);N(null,ee,k,M)}}else U(te,R,k,M,Q,z,se)},ae=(R,k,M)=>{const H=k.component=R.component;if(YE(R,k,M))if(H.asyncDep&&!H.asyncResolved){Y(H,k,M);return}else H.next=k,H.update();else k.el=R.el,H.vnode=k},U=(R,k,M,H,Q,z,se)=>{const te=()=>{if(R.isMounted){let{next:re,bu:de,u:we,parent:ye,vnode:Re}=R;{const Ot=s_(R);if(Ot){re&&(re.el=Re.el,Y(R,re,se)),Ot.asyncDep.then(()=>{R.isUnmounted||te()});return}}let Me=re,Tt;hs(R,!1),re?(re.el=Re.el,Y(R,re,se)):re=Re,de&&ja(de),(Tt=re.props&&re.props.onVnodeBeforeUpdate)&&Sn(Tt,ye,re,Re),hs(R,!0);const It=op(R),an=R.subTree;R.subTree=It,E(an,It,m(an.el),j(an),R,Q,z),re.el=It.el,Me===null&&QE(R,It.el),we&&en(we,Q),(Tt=re.props&&re.props.onVnodeUpdated)&&en(()=>Sn(Tt,ye,re,Re),Q)}else{let re;const{el:de,props:we}=k,{bm:ye,m:Re,parent:Me,root:Tt,type:It}=R,an=lo(k);hs(R,!1),ye&&ja(ye),!an&&(re=we&&we.onVnodeBeforeMount)&&Sn(re,Me,k),hs(R,!0);{Tt.ce&&Tt.ce._def.shadowRoot!==!1&&Tt.ce._injectChildStyle(It);const Ot=R.subTree=op(R);E(null,Ot,M,H,R,Q,z),k.el=Ot.el}if(Re&&en(Re,Q),!an&&(re=we&&we.onVnodeMounted)){const Ot=k;en(()=>Sn(re,Me,Ot),Q)}(k.shapeFlag&256||Me&&lo(Me.vnode)&&Me.vnode.shapeFlag&256)&&R.a&&en(R.a,Q),R.isMounted=!0,k=M=H=null}};R.scope.on();const ee=R.effect=new fy(te);R.scope.off();const X=R.update=ee.run.bind(ee),pe=R.job=ee.runIfDirty.bind(ee);pe.i=R,pe.id=R.uid,ee.scheduler=()=>Bh(pe),hs(R,!0),X()},Y=(R,k,M)=>{k.component=R;const H=R.vnode.props;R.vnode=k,R.next=null,xE(R,k.props,H,M),LE(R,k.children,M),sr(),Jf(R),ir()},ke=(R,k,M,H,Q,z,se,te,ee=!1)=>{const X=R&&R.children,pe=R?R.shapeFlag:0,re=k.children,{patchFlag:de,shapeFlag:we}=k;if(de>0){if(de&128){Et(X,re,M,H,Q,z,se,te,ee);return}else if(de&256){pt(X,re,M,H,Q,z,se,te,ee);return}}we&8?(pe&16&&qt(X,Q,z),re!==X&&h(M,re)):pe&16?we&16?Et(X,re,M,H,Q,z,se,te,ee):qt(X,Q,z,!0):(pe&8&&h(M,""),we&16&&b(re,M,H,Q,z,se,te,ee))},pt=(R,k,M,H,Q,z,se,te,ee)=>{R=R||ei,k=k||ei;const X=R.length,pe=k.length,re=Math.min(X,pe);let de;for(de=0;de<re;de++){const we=k[de]=ee?Cr(k[de]):Rn(k[de]);E(R[de],we,M,null,Q,z,se,te,ee)}X>pe?qt(R,Q,z,!0,!1,re):b(k,M,H,Q,z,se,te,ee,re)},Et=(R,k,M,H,Q,z,se,te,ee)=>{let X=0;const pe=k.length;let re=R.length-1,de=pe-1;for(;X<=re&&X<=de;){const we=R[X],ye=k[X]=ee?Cr(k[X]):Rn(k[X]);if(gs(we,ye))E(we,ye,M,null,Q,z,se,te,ee);else break;X++}for(;X<=re&&X<=de;){const we=R[re],ye=k[de]=ee?Cr(k[de]):Rn(k[de]);if(gs(we,ye))E(we,ye,M,null,Q,z,se,te,ee);else break;re--,de--}if(X>re){if(X<=de){const we=de+1,ye=we<pe?k[we].el:H;for(;X<=de;)E(null,k[X]=ee?Cr(k[X]):Rn(k[X]),M,ye,Q,z,se,te,ee),X++}}else if(X>de)for(;X<=re;)Ue(R[X],Q,z,!0),X++;else{const we=X,ye=X,Re=new Map;for(X=ye;X<=de;X++){const St=k[X]=ee?Cr(k[X]):Rn(k[X]);St.key!=null&&Re.set(St.key,X)}let Me,Tt=0;const It=de-ye+1;let an=!1,Ot=0;const yr=new Array(It);for(X=0;X<It;X++)yr[X]=0;for(X=we;X<=re;X++){const St=R[X];if(Tt>=It){Ue(St,Q,z,!0);continue}let ln;if(St.key!=null)ln=Re.get(St.key);else for(Me=ye;Me<=de;Me++)if(yr[Me-ye]===0&&gs(St,k[Me])){ln=Me;break}ln===void 0?Ue(St,Q,z,!0):(yr[ln-ye]=X+1,ln>=Ot?Ot=ln:an=!0,E(St,k[ln],M,null,Q,z,se,te,ee),Tt++)}const Oi=an?BE(yr):ei;for(Me=Oi.length-1,X=It-1;X>=0;X--){const St=ye+X,ln=k[St],ha=St+1<pe?k[St+1].el:H;yr[X]===0?E(null,ln,M,ha,Q,z,se,te,ee):an&&(Me<0||X!==Oi[Me]?Qe(ln,M,ha,2):Me--)}}},Qe=(R,k,M,H,Q=null)=>{const{el:z,type:se,transition:te,children:ee,shapeFlag:X}=R;if(X&6){Qe(R.component.subTree,k,M,H);return}if(X&128){R.suspense.move(k,M,H);return}if(X&64){se.move(R,k,M,he);return}if(se===et){r(z,k,M);for(let re=0;re<ee.length;re++)Qe(ee[re],k,M,H);r(R.anchor,k,M);return}if(se===qa){V(R,k,M);return}if(H!==2&&X&1&&te)if(H===0)te.beforeEnter(z),r(z,k,M),en(()=>te.enter(z),Q);else{const{leave:re,delayLeave:de,afterLeave:we}=te,ye=()=>{R.ctx.isUnmounted?s(z):r(z,k,M)},Re=()=>{re(z,()=>{ye(),we&&we()})};de?de(z,ye,Re):Re()}else r(z,k,M)},Ue=(R,k,M,H=!1,Q=!1)=>{const{type:z,props:se,ref:te,children:ee,dynamicChildren:X,shapeFlag:pe,patchFlag:re,dirs:de,cacheIndex:we}=R;if(re===-2&&(Q=!1),te!=null&&(sr(),ao(te,null,M,R,!0),ir()),we!=null&&(k.renderCache[we]=void 0),pe&256){k.ctx.deactivate(R);return}const ye=pe&1&&de,Re=!lo(R);let Me;if(Re&&(Me=se&&se.onVnodeBeforeUnmount)&&Sn(Me,k,R),pe&6)gn(R.component,M,H);else{if(pe&128){R.suspense.unmount(M,H);return}ye&&us(R,null,k,"beforeUnmount"),pe&64?R.type.remove(R,k,M,he,H):X&&!X.hasOnce&&(z!==et||re>0&&re&64)?qt(X,k,M,!1,!0):(z===et&&re&384||!Q&&pe&16)&&qt(ee,k,M),H&&We(R)}(Re&&(Me=se&&se.onVnodeUnmounted)||ye)&&en(()=>{Me&&Sn(Me,k,R),ye&&us(R,null,k,"unmounted")},M)},We=R=>{const{type:k,el:M,anchor:H,transition:Q}=R;if(k===et){jt(M,H);return}if(k===qa){$(R);return}const z=()=>{s(M),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(R.shapeFlag&1&&Q&&!Q.persisted){const{leave:se,delayLeave:te}=Q,ee=()=>se(M,z);te?te(R.el,z,ee):ee()}else z()},jt=(R,k)=>{let M;for(;R!==k;)M=f(R),s(R),R=M;s(k)},gn=(R,k,M)=>{const{bum:H,scope:Q,job:z,subTree:se,um:te,m:ee,a:X,parent:pe,slots:{__:re}}=R;ip(ee),ip(X),H&&ja(H),pe&&me(re)&&re.forEach(de=>{pe.renderCache[de]=void 0}),Q.stop(),z&&(z.flags|=8,Ue(se,R,k,M)),te&&en(te,k),en(()=>{R.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},qt=(R,k,M,H=!1,Q=!1,z=0)=>{for(let se=z;se<R.length;se++)Ue(R[se],k,M,H,Q)},j=R=>{if(R.shapeFlag&6)return j(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const k=f(R.anchor||R.el),M=k&&k[lE];return M?f(M):k};let ce=!1;const oe=(R,k,M)=>{R==null?k._vnode&&Ue(k._vnode,null,null,!0):E(k._vnode||null,R,k,null,null,null,M),k._vnode=R,ce||(ce=!0,Jf(),xy(),ce=!1)},he={p:E,um:Ue,m:Qe,r:We,mt:xe,mc:b,pc:ke,pbc:A,n:j,o:t};return{render:oe,hydrate:void 0,createApp:DE(oe)}}function Yc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function UE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function r_(t,e,n=!1){const r=t.children,s=e.children;if(me(r)&&me(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Cr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&r_(o,c)),c.type===Kl&&(c.el=o.el),c.type===Gt&&!c.el&&(c.el=o.el)}}function BE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function s_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:s_(e)}function ip(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const jE=Symbol.for("v-scx"),qE=()=>$e(jE);function tt(t,e,n){return i_(t,e,n)}function i_(t,e,n=Ke){const{immediate:r,deep:s,flush:i,once:o}=n,c=bt({},n),a=e&&r||!e&&i!=="post";let u;if(Co){if(i==="sync"){const _=qE();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=On,_.resume=On,_.pause=On,_}}const h=Rt;c.call=(_,C,E)=>wn(_,h,C,E);let m=!1;i==="post"?c.scheduler=_=>{en(_,h&&h.suspense)}:i!=="sync"&&(m=!0,c.scheduler=(_,C)=>{C?_():Bh(_)}),c.augmentJob=_=>{e&&(_.flags|=4),m&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const f=sE(t,e,c);return Co&&(u?u.push(f):a&&f()),f}function HE(t,e,n){const r=this.proxy,s=ut(t)?t.includes(".")?o_(r,t):()=>r[t]:t.bind(r,r);let i;Ce(e)?i=e:(i=e.handler,n=e);const o=Go(this),c=i_(s,i.bind(r),n);return o(),c}function o_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const zE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qr(e)}Modifiers`]||t[`${Os(e)}Modifiers`];function WE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ke;let s=n;const i=e.startsWith("update:"),o=i&&zE(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>ut(h)?h.trim():h)),o.number&&(s=n.map(sl)));let c,a=r[c=jc(e)]||r[c=jc(qr(e))];!a&&i&&(a=r[c=jc(Os(e))]),a&&wn(a,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,wn(u,t,6,s)}}function a_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!Ce(t)){const a=u=>{const h=a_(u,e,!0);h&&(c=!0,bt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(Ye(t)&&r.set(t,null),null):(me(i)?i.forEach(a=>o[a]=null):bt(o,i),Ye(t)&&r.set(t,o),o)}function Gl(t,e){return!t||!$l(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(t,e[0].toLowerCase()+e.slice(1))||He(t,Os(e))||He(t,e))}function op(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:u,renderCache:h,props:m,data:f,setupState:_,ctx:C,inheritAttrs:E}=t,T=cl(t);let N,x;try{if(n.shapeFlag&4){const $=s||r,W=$;N=Rn(u.call(W,$,h,m,_,f,C)),x=c}else{const $=e;N=Rn($.length>1?$(m,{attrs:c,slots:o,emit:a}):$(m,null)),x=e.props?c:GE(c)}}catch($){uo.length=0,ql($,t,1),N=Se(Gt)}let V=N;if(x&&E!==!1){const $=Object.keys(x),{shapeFlag:W}=V;$.length&&W&7&&(i&&$.some(Rh)&&(x=KE(x,i)),V=zr(V,x,!1,!0))}return n.dirs&&(V=zr(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&Ao(V,n.transition),N=V,cl(T),N}const GE=t=>{let e;for(const n in t)(n==="class"||n==="style"||$l(n))&&((e||(e={}))[n]=t[n]);return e},KE=(t,e)=>{const n={};for(const r in t)(!Rh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function YE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?ap(r,o,u):!!o;if(a&8){const h=e.dynamicProps;for(let m=0;m<h.length;m++){const f=h[m];if(o[f]!==r[f]&&!Gl(u,f))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?ap(r,o,u):!0:!!o;return!1}function ap(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Gl(n,i))return!0}return!1}function QE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const l_=t=>t.__isSuspense;function XE(t,e){e&&e.pendingBranch?me(t)?e.effects.push(...t):e.effects.push(t):aE(t)}const et=Symbol.for("v-fgt"),Kl=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),qa=Symbol.for("v-stc"),uo=[];let nn=null;function B(t=!1){uo.push(nn=t?null:[])}function JE(){uo.pop(),nn=uo[uo.length-1]||null}let Po=1;function lp(t,e=!1){Po+=t,t<0&&nn&&e&&(nn.hasOnce=!0)}function c_(t){return t.dynamicChildren=Po>0?nn||ei:null,JE(),Po>0&&nn&&nn.push(t),t}function G(t,e,n,r,s,i){return c_(p(t,e,n,r,s,i,!0))}function Bn(t,e,n,r,s){return c_(Se(t,e,n,r,s,!0))}function hl(t){return t?t.__v_isVNode===!0:!1}function gs(t,e){return t.type===e.type&&t.key===e.key}const u_=({key:t})=>t??null,Ha=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ut(t)||ct(t)||Ce(t)?{i:Jt,r:t,k:e,f:!!n}:t:null);function p(t,e=null,n=null,r=0,s=null,i=t===et?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&u_(e),ref:e&&Ha(e),scopeId:Vy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Jt};return c?(Wh(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ut(n)?8:16),Po>0&&!o&&nn&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&nn.push(a),a}const Se=ZE;function ZE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===EE)&&(t=Gt),hl(t)){const c=zr(t,e,!0);return n&&Wh(c,n),Po>0&&!i&&nn&&(c.shapeFlag&6?nn[nn.indexOf(t)]=c:nn.push(c)),c.patchFlag=-2,c}if(u0(t)&&(t=t.__vccOpts),e){e=e0(e);let{class:c,style:a}=e;c&&!ut(c)&&(e.class=Ts(c)),Ye(a)&&(Fh(a)&&!me(a)&&(a=bt({},a)),e.style=Bl(a))}const o=ut(t)?1:l_(t)?128:My(t)?64:Ye(t)?4:Ce(t)?2:0;return p(t,e,n,r,s,o,i,!0)}function e0(t){return t?Fh(t)||Xy(t)?bt({},t):t:null}function zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,u=e?t0(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&u_(u),ref:e&&e.ref?n&&i?me(i)?i.concat(Ha(e)):[i,Ha(e)]:Ha(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&Ao(h,a.clone(h)),h}function mt(t=" ",e=0){return Se(Kl,null,t,e)}function h_(t,e){const n=Se(qa,null,t);return n.staticCount=e,n}function Ee(t="",e=!1){return e?(B(),Bn(Gt,null,t)):Se(Gt,null,t)}function Rn(t){return t==null||typeof t=="boolean"?Se(Gt):me(t)?Se(et,null,t.slice()):hl(t)?Cr(t):Se(Kl,null,String(t))}function Cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function Wh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(me(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Wh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Xy(e)?e._ctx=Jt:s===3&&Jt&&(Jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ce(e)?(e={default:e,_ctx:Jt},n=32):(e=String(e),r&64?(n=16,e=[mt(e)]):n=8);t.children=e,t.shapeFlag|=n}function t0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ts([e.class,r.class]));else if(s==="style")e.style=Bl([e.style,r.style]);else if($l(s)){const i=e[s],o=r[s];o&&i!==o&&!(me(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Sn(t,e,n,r=null){wn(t,e,7,[n,r])}const n0=Ky();let r0=0;function s0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||n0,i={uid:r0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new uy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zy(r,s),emitsOptions:a_(r,s),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:r.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=WE.bind(null,i),t.ce&&t.ce(i),i}let Rt=null;const i0=()=>Rt||Jt;let dl,Du;{const t=Ul(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};dl=e("__VUE_INSTANCE_SETTERS__",n=>Rt=n),Du=e("__VUE_SSR_SETTERS__",n=>Co=n)}const Go=t=>{const e=Rt;return dl(t),t.scope.on(),()=>{t.scope.off(),dl(e)}},cp=()=>{Rt&&Rt.scope.off(),dl(null)};function d_(t){return t.vnode.shapeFlag&4}let Co=!1;function o0(t,e=!1,n=!1){e&&Du(e);const{props:r,children:s}=t.vnode,i=d_(t);OE(t,r,i,e),ME(t,s,n||e);const o=i?a0(t,e):void 0;return e&&Du(!1),o}function a0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,TE);const{setup:r}=n;if(r){sr();const s=t.setupContext=r.length>1?c0(t):null,i=Go(t),o=Wo(r,t,0,[t.props,s]),c=ry(o);if(ir(),i(),(c||t.sp)&&!lo(t)&&jy(t),c){if(o.then(cp,cp),e)return o.then(a=>{up(t,a)}).catch(a=>{ql(a,t,0)});t.asyncDep=o}else up(t,o)}else f_(t)}function up(t,e,n){Ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ye(e)&&(t.setupState=Dy(e)),f_(t)}function f_(t,e,n){const r=t.type;t.render||(t.render=r.render||On);{const s=Go(t);sr();try{IE(t)}finally{ir(),s()}}}const l0={get(t,e){return $t(t,"get",""),t[e]}};function c0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,l0),slots:t.slots,emit:t.emit,expose:e}}function Yl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Dy(Uh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in co)return co[n](t)},has(e,n){return n in e||n in co}})):t.proxy}function u0(t){return Ce(t)&&"__vccOpts"in t}const Pe=(t,e)=>nE(t,e,Co);function ci(t,e,n){const r=arguments.length;return r===2?Ye(e)&&!me(e)?hl(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hl(n)&&(n=[n]),Se(t,e,n))}const h0="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ku;const hp=typeof window<"u"&&window.trustedTypes;if(hp)try{ku=hp.createPolicy("vue",{createHTML:t=>t})}catch{}const p_=ku?t=>ku.createHTML(t):t=>t,d0="http://www.w3.org/2000/svg",f0="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,dp=Kn&&Kn.createElement("template"),p0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Kn.createElementNS(d0,t):e==="mathml"?Kn.createElementNS(f0,t):n?Kn.createElement(t,{is:n}):Kn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Kn.createTextNode(t),createComment:t=>Kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{dp.innerHTML=p_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=dp.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wr="transition",Wi="animation",Ro=Symbol("_vtc"),m_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m0=bt({},Ly,m_),g0=t=>(t.displayName="Transition",t.props=m0,t),xs=g0((t,{slots:e})=>ci(hE,y0(t),e)),ds=(t,e=[])=>{me(t)?t.forEach(n=>n(...e)):t&&t(...e)},fp=t=>t?me(t)?t.some(e=>e.length>1):t.length>1:!1;function y0(t){const e={};for(const D in t)D in m_||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:u=o,appearToClass:h=c,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,C=_0(s),E=C&&C[0],T=C&&C[1],{onBeforeEnter:N,onEnter:x,onEnterCancelled:V,onLeave:$,onLeaveCancelled:W,onBeforeAppear:J=N,onAppear:P=x,onAppearCancelled:b=V}=e,w=(D,S,xe,ae)=>{D._enterCancelled=ae,fs(D,S?h:c),fs(D,S?u:o),xe&&xe()},A=(D,S)=>{D._isLeaving=!1,fs(D,m),fs(D,_),fs(D,f),S&&S()},O=D=>(S,xe)=>{const ae=D?P:x,U=()=>w(S,D,xe);ds(ae,[S,U]),pp(()=>{fs(S,D?a:i),Wn(S,D?h:c),fp(ae)||mp(S,r,E,U)})};return bt(e,{onBeforeEnter(D){ds(N,[D]),Wn(D,i),Wn(D,o)},onBeforeAppear(D){ds(J,[D]),Wn(D,a),Wn(D,u)},onEnter:O(!1),onAppear:O(!0),onLeave(D,S){D._isLeaving=!0;const xe=()=>A(D,S);Wn(D,m),D._enterCancelled?(Wn(D,f),_p()):(_p(),Wn(D,f)),pp(()=>{D._isLeaving&&(fs(D,m),Wn(D,_),fp($)||mp(D,r,T,xe))}),ds($,[D,xe])},onEnterCancelled(D){w(D,!1,void 0,!0),ds(V,[D])},onAppearCancelled(D){w(D,!0,void 0,!0),ds(b,[D])},onLeaveCancelled(D){A(D),ds(W,[D])}})}function _0(t){if(t==null)return null;if(Ye(t))return[Qc(t.enter),Qc(t.leave)];{const e=Qc(t);return[e,e]}}function Qc(t){return ww(t)}function Wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ro]||(t[Ro]=new Set)).add(e)}function fs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ro];n&&(n.delete(e),n.size||(t[Ro]=void 0))}function pp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let v0=0;function mp(t,e,n,r){const s=t._endId=++v0,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:a}=b0(t,e);if(!o)return r();const u=o+"end";let h=0;const m=()=>{t.removeEventListener(u,f),i()},f=_=>{_.target===t&&++h>=a&&m()};setTimeout(()=>{h<a&&m()},c+1),t.addEventListener(u,f)}function b0(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${wr}Delay`),i=r(`${wr}Duration`),o=gp(s,i),c=r(`${Wi}Delay`),a=r(`${Wi}Duration`),u=gp(c,a);let h=null,m=0,f=0;e===wr?o>0&&(h=wr,m=o,f=i.length):e===Wi?u>0&&(h=Wi,m=u,f=a.length):(m=Math.max(o,u),h=m>0?o>u?wr:Wi:null,f=h?h===wr?i.length:a.length:0);const _=h===wr&&/\b(transform|all)(,|$)/.test(r(`${wr}Property`).toString());return{type:h,timeout:m,propCount:f,hasTransform:_}}function gp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>yp(n)+yp(t[r])))}function yp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function _p(){return document.body.offsetHeight}function w0(t,e,n){const r=t[Ro];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vp=Symbol("_vod"),E0=Symbol("_vsh"),T0=Symbol(""),I0=/(^|;)\s*display\s*:/;function S0(t,e,n){const r=t.style,s=ut(n);let i=!1;if(n&&!s){if(e)if(ut(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&za(r,c,"")}else for(const o in e)n[o]==null&&za(r,o,"");for(const o in n)o==="display"&&(i=!0),za(r,o,n[o])}else if(s){if(e!==n){const o=r[T0];o&&(n+=";"+o),r.cssText=n,i=I0.test(n)}}else e&&t.removeAttribute("style");vp in t&&(t[vp]=i?r.display:"",t[E0]&&(r.display="none"))}const bp=/\s*!important$/;function za(t,e,n){if(me(n))n.forEach(r=>za(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=A0(t,e);bp.test(n)?t.setProperty(Os(r),n.replace(bp,""),"important"):t[r]=n}}const wp=["Webkit","Moz","ms"],Xc={};function A0(t,e){const n=Xc[e];if(n)return n;let r=qr(e);if(r!=="filter"&&r in t)return Xc[e]=r;r=oy(r);for(let s=0;s<wp.length;s++){const i=wp[s]+r;if(i in t)return Xc[e]=i}return e}const Ep="http://www.w3.org/1999/xlink";function Tp(t,e,n,r,s,i=Pw(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ep,e.slice(6,e.length)):t.setAttributeNS(Ep,e,n):n==null||i&&!ay(n)?t.removeAttribute(e):t.setAttribute(e,i?"":$n(n)?String(n):n)}function Ip(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?p_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ay(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Dr(t,e,n,r){t.addEventListener(e,n,r)}function P0(t,e,n,r){t.removeEventListener(e,n,r)}const Sp=Symbol("_vei");function C0(t,e,n,r,s=null){const i=t[Sp]||(t[Sp]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=R0(e);if(r){const u=i[e]=O0(r,s);Dr(t,c,u,a)}else o&&(P0(t,c,o,a),i[e]=void 0)}}const Ap=/(?:Once|Passive|Capture)$/;function R0(t){let e;if(Ap.test(t)){e={};let r;for(;r=t.match(Ap);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Os(t.slice(2)),e]}let Jc=0;const D0=Promise.resolve(),k0=()=>Jc||(D0.then(()=>Jc=0),Jc=Date.now());function O0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;wn(x0(r,n.value),e,5,[r])};return n.value=t,n.attached=k0(),n}function x0(t,e){if(me(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Pp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,N0=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?w0(t,r,o):e==="style"?S0(t,n,r):$l(e)?Rh(e)||C0(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):V0(t,e,r,o))?(Ip(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Tp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ut(r))?Ip(t,qr(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Tp(t,e,r,o))};function V0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pp(e)&&Ce(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pp(e)&&ut(n)?!1:e in t}const ui=t=>{const e=t.props["onUpdate:modelValue"]||!1;return me(e)?n=>ja(e,n):e};function M0(t){t.target.composing=!0}function Cp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tr=Symbol("_assign"),_e={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[tr]=ui(s);const i=r||s.props&&s.props.type==="number";Dr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=sl(c)),t[tr](c)}),n&&Dr(t,"change",()=>{t.value=t.value.trim()}),e||(Dr(t,"compositionstart",M0),Dr(t,"compositionend",Cp),Dr(t,"change",Cp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[tr]=ui(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?sl(t.value):t.value,a=e??"";c!==a&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===a)||(t.value=a))}},Ql={deep:!0,created(t,e,n){t[tr]=ui(n),Dr(t,"change",()=>{const r=t._modelValue,s=Do(t),i=t.checked,o=t[tr];if(me(r)){const c=Oh(r,s),a=c!==-1;if(i&&!a)o(r.concat(s));else if(!i&&a){const u=[...r];u.splice(c,1),o(u)}}else if(wi(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(g_(t,i))})},mounted:Rp,beforeUpdate(t,e,n){t[tr]=ui(n),Rp(t,e,n)}};function Rp(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(me(e))s=Oh(e,r.props.value)>-1;else if(wi(e))s=e.has(r.props.value);else{if(e===n)return;s=zo(e,g_(t,!0))}t.checked!==s&&(t.checked=s)}const vt={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=wi(e);Dr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?sl(Do(o)):Do(o));t[tr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Hl(()=>{t._assigning=!1})}),t[tr]=ui(r)},mounted(t,{value:e}){Dp(t,e)},beforeUpdate(t,e,n){t[tr]=ui(n)},updated(t,{value:e}){t._assigning||Dp(t,e)}};function Dp(t,e){const n=t.multiple,r=me(e);if(!(n&&!r&&!wi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Do(o);if(n)if(r){const a=typeof c;a==="string"||a==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=Oh(e,c)>-1}else o.selected=e.has(c);else if(zo(Do(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Do(t){return"_value"in t?t._value:t.value}function g_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const L0=["ctrl","shift","alt","meta"],$0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>L0.some(n=>t[`${n}Key`]&&!e.includes(n))},rt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=$0[e[o]];if(c&&c(s,e))return}return t(s,...i)})},F0=bt({patchProp:N0},p0);let kp;function U0(){return kp||(kp=$E(F0))}const B0=(...t)=>{const e=U0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=q0(r);if(!s)return;const i=e._component;!Ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,j0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function j0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function q0(t){return ut(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Gs=typeof document<"u";function y_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function H0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&y_(t.default)}const qe=Object.assign;function Zc(t,e){const n={};for(const r in e){const s=e[r];n[r]=En(s)?s.map(t):t(s)}return n}const ho=()=>{},En=Array.isArray,__=/#/g,z0=/&/g,W0=/\//g,G0=/=/g,K0=/\?/g,v_=/\+/g,Y0=/%5B/g,Q0=/%5D/g,b_=/%5E/g,X0=/%60/g,w_=/%7B/g,J0=/%7C/g,E_=/%7D/g,Z0=/%20/g;function Gh(t){return encodeURI(""+t).replace(J0,"|").replace(Y0,"[").replace(Q0,"]")}function eT(t){return Gh(t).replace(w_,"{").replace(E_,"}").replace(b_,"^")}function Ou(t){return Gh(t).replace(v_,"%2B").replace(Z0,"+").replace(__,"%23").replace(z0,"%26").replace(X0,"`").replace(w_,"{").replace(E_,"}").replace(b_,"^")}function tT(t){return Ou(t).replace(G0,"%3D")}function nT(t){return Gh(t).replace(__,"%23").replace(K0,"%3F")}function rT(t){return t==null?"":nT(t).replace(W0,"%2F")}function ko(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const sT=/\/$/,iT=t=>t.replace(sT,"");function eu(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=cT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ko(o)}}function oT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Op(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function aT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hi(e.matched[r],n.matched[s])&&T_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function T_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lT(t[n],e[n]))return!1;return!0}function lT(t,e){return En(t)?xp(t,e):En(e)?xp(e,t):t===e}function xp(t,e){return En(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function cT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Er={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Oo;(function(t){t.pop="pop",t.push="push"})(Oo||(Oo={}));var fo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fo||(fo={}));function uT(t){if(!t)if(Gs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iT(t)}const hT=/^[^#]+#/;function dT(t,e){return t.replace(hT,"#")+e}function fT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Xl=()=>({left:window.scrollX,top:window.scrollY});function pT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=fT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Np(t,e){return(history.state?history.state.position-e:-1)+t}const xu=new Map;function mT(t,e){xu.set(t,e)}function gT(t){const e=xu.get(t);return xu.delete(t),e}let yT=()=>location.protocol+"//"+location.host;function I_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Op(a,"")}return Op(n,t)+r+s}function _T(t,e,n,r){let s=[],i=[],o=null;const c=({state:f})=>{const _=I_(t,location),C=n.value,E=e.value;let T=0;if(f){if(n.value=_,e.value=f,o&&o===C){o=null;return}T=E?f.position-E.position:0}else r(_);s.forEach(N=>{N(n.value,C,{delta:T,type:Oo.pop,direction:T?T>0?fo.forward:fo.back:fo.unknown})})};function a(){o=n.value}function u(f){s.push(f);const _=()=>{const C=s.indexOf(f);C>-1&&s.splice(C,1)};return i.push(_),_}function h(){const{history:f}=window;f.state&&f.replaceState(qe({},f.state,{scroll:Xl()}),"")}function m(){for(const f of i)f();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:a,listen:u,destroy:m}}function Vp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Xl():null}}function vT(t){const{history:e,location:n}=window,r={value:I_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,u,h){const m=t.indexOf("#"),f=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+a:yT()+t+a;try{e[h?"replaceState":"pushState"](u,"",f),s.value=u}catch(_){console.error(_),n[h?"replace":"assign"](f)}}function o(a,u){const h=qe({},e.state,Vp(s.value.back,a,s.value.forward,!0),u,{position:s.value.position});i(a,h,!0),r.value=a}function c(a,u){const h=qe({},s.value,e.state,{forward:a,scroll:Xl()});i(h.current,h,!0);const m=qe({},Vp(r.value,a,null),{position:h.position+1},u);i(a,m,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function bT(t){t=uT(t);const e=vT(t),n=_T(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=qe({location:"",base:t,go:r,createHref:dT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function wT(t){return typeof t=="string"||t&&typeof t=="object"}function S_(t){return typeof t=="string"||typeof t=="symbol"}const A_=Symbol("");var Mp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mp||(Mp={}));function di(t,e){return qe(new Error,{type:t,[A_]:!0},e)}function Gn(t,e){return t instanceof Error&&A_ in t&&(e==null||!!(t.type&e))}const Lp="[^/]+?",ET={sensitive:!1,strict:!1,start:!0,end:!0},TT=/[.+*?^${}()[\]/\\]/g;function IT(t,e){const n=qe({},ET,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let m=0;m<u.length;m++){const f=u[m];let _=40+(n.sensitive?.25:0);if(f.type===0)m||(s+="/"),s+=f.value.replace(TT,"\\$&"),_+=40;else if(f.type===1){const{value:C,repeatable:E,optional:T,regexp:N}=f;i.push({name:C,repeatable:E,optional:T});const x=N||Lp;if(x!==Lp){_+=10;try{new RegExp(`(${x})`)}catch($){throw new Error(`Invalid custom RegExp for param "${C}" (${x}): `+$.message)}}let V=E?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;m||(V=T&&u.length<2?`(?:/${V})`:"/"+V),T&&(V+="?"),s+=V,_+=20,T&&(_+=-8),E&&(_+=-20),x===".*"&&(_+=-50)}h.push(_)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const h=u.match(o),m={};if(!h)return null;for(let f=1;f<h.length;f++){const _=h[f]||"",C=i[f-1];m[C.name]=_&&C.repeatable?_.split("/"):_}return m}function a(u){let h="",m=!1;for(const f of t){(!m||!h.endsWith("/"))&&(h+="/"),m=!1;for(const _ of f)if(_.type===0)h+=_.value;else if(_.type===1){const{value:C,repeatable:E,optional:T}=_,N=C in u?u[C]:"";if(En(N)&&!E)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const x=En(N)?N.join("/"):N;if(!x)if(T)f.length<2&&(h.endsWith("/")?h=h.slice(0,-1):m=!0);else throw new Error(`Missing required param "${C}"`);h+=x}}return h||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function ST(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function P_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ST(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if($p(r))return 1;if($p(s))return-1}return s.length-r.length}function $p(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const AT={type:0,value:""},PT=/[a-zA-Z0-9_]/;function CT(t){if(!t)return[[]];if(t==="/")return[[AT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,u="",h="";function m(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(u&&m(),o()):a===":"?(m(),n=1):f();break;case 4:f(),n=r;break;case 1:a==="("?n=2:PT.test(a)?f():(m(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+a:n=3:h+=a;break;case 3:m(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),m(),o(),s}function RT(t,e,n){const r=IT(CT(t.path),n),s=qe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function DT(t,e){const n=[],r=new Map;e=jp({strict:!1,end:!0,sensitive:!1},e);function s(m){return r.get(m)}function i(m,f,_){const C=!_,E=Up(m);E.aliasOf=_&&_.record;const T=jp(e,m),N=[E];if("alias"in m){const $=typeof m.alias=="string"?[m.alias]:m.alias;for(const W of $)N.push(Up(qe({},E,{components:_?_.record.components:E.components,path:W,aliasOf:_?_.record:E})))}let x,V;for(const $ of N){const{path:W}=$;if(f&&W[0]!=="/"){const J=f.record.path,P=J[J.length-1]==="/"?"":"/";$.path=f.record.path+(W&&P+W)}if(x=RT($,f,T),_?_.alias.push(x):(V=V||x,V!==x&&V.alias.push(x),C&&m.name&&!Bp(x)&&o(m.name)),C_(x)&&a(x),E.children){const J=E.children;for(let P=0;P<J.length;P++)i(J[P],x,_&&_.children[P])}_=_||x}return V?()=>{o(V)}:ho}function o(m){if(S_(m)){const f=r.get(m);f&&(r.delete(m),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(m);f>-1&&(n.splice(f,1),m.record.name&&r.delete(m.record.name),m.children.forEach(o),m.alias.forEach(o))}}function c(){return n}function a(m){const f=xT(m,n);n.splice(f,0,m),m.record.name&&!Bp(m)&&r.set(m.record.name,m)}function u(m,f){let _,C={},E,T;if("name"in m&&m.name){if(_=r.get(m.name),!_)throw di(1,{location:m});T=_.record.name,C=qe(Fp(f.params,_.keys.filter(V=>!V.optional).concat(_.parent?_.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),m.params&&Fp(m.params,_.keys.map(V=>V.name))),E=_.stringify(C)}else if(m.path!=null)E=m.path,_=n.find(V=>V.re.test(E)),_&&(C=_.parse(E),T=_.record.name);else{if(_=f.name?r.get(f.name):n.find(V=>V.re.test(f.path)),!_)throw di(1,{location:m,currentLocation:f});T=_.record.name,C=qe({},f.params,m.params),E=_.stringify(C)}const N=[];let x=_;for(;x;)N.unshift(x.record),x=x.parent;return{name:T,path:E,params:C,matched:N,meta:OT(N)}}t.forEach(m=>i(m));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:c,getRecordMatcher:s}}function Fp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Up(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:kT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function kT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Bp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OT(t){return t.reduce((e,n)=>qe(e,n.meta),{})}function jp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function xT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;P_(t,e[i])<0?r=i:n=i+1}const s=NT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function NT(t){let e=t;for(;e=e.parent;)if(C_(e)&&P_(t,e)===0)return e}function C_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function VT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(v_," "),o=i.indexOf("="),c=ko(o<0?i:i.slice(0,o)),a=o<0?null:ko(i.slice(o+1));if(c in e){let u=e[c];En(u)||(u=e[c]=[u]),u.push(a)}else e[c]=a}return e}function qp(t){let e="";for(let n in t){const r=t[n];if(n=tT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(En(r)?r.map(i=>i&&Ou(i)):[r&&Ou(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function MT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=En(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const LT=Symbol(""),Hp=Symbol(""),Jl=Symbol(""),Kh=Symbol(""),Nu=Symbol("");function Gi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const u=f=>{f===!1?a(di(4,{from:n,to:e})):f instanceof Error?a(f):wT(f)?a(di(2,{from:e,to:f})):(o&&r.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),c())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let m=Promise.resolve(h);t.length<3&&(m=m.then(u)),m.catch(f=>a(f))})}function tu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(y_(a)){const h=(a.__vccOpts||a)[e];h&&i.push(Rr(h,n,r,o,c,s))}else{let u=a();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const m=H0(h)?h.default:h;o.mods[c]=h,o.components[c]=m;const _=(m.__vccOpts||m)[e];return _&&Rr(_,n,r,o,c,s)()}))}}return i}function zp(t){const e=$e(Jl),n=$e(Kh),r=Pe(()=>{const a=y(t.to);return e.resolve(a)}),s=Pe(()=>{const{matched:a}=r.value,{length:u}=a,h=a[u-1],m=n.matched;if(!h||!m.length)return-1;const f=m.findIndex(hi.bind(null,h));if(f>-1)return f;const _=Wp(a[u-2]);return u>1&&Wp(h)===_&&m[m.length-1].path!==_?m.findIndex(hi.bind(null,a[u-2])):f}),i=Pe(()=>s.value>-1&&jT(n.params,r.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&T_(n.params,r.value.params));function c(a={}){if(BT(a)){const u=e[y(t.replace)?"replace":"push"](y(t.to)).catch(ho);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function $T(t){return t.length===1?t[0]:t}const FT=jh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zp,setup(t,{slots:e}){const n=Un(zp(t)),{options:r}=$e(Jl),s=Pe(()=>({[Gp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&$T(e.default(n));return t.custom?i:ci("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),UT=FT;function BT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!En(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Wp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gp=(t,e,n)=>t??e??n,qT=jh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$e(Nu),s=Pe(()=>t.route||r.value),i=$e(Hp,0),o=Pe(()=>{let u=y(i);const{matched:h}=s.value;let m;for(;(m=h[u])&&!m.components;)u++;return u}),c=Pe(()=>s.value.matched[o.value]);Nr(Hp,Pe(()=>o.value+1)),Nr(LT,c),Nr(Nu,s);const a=Te();return tt(()=>[a.value,c.value,t.name],([u,h,m],[f,_,C])=>{h&&(h.instances[m]=u,_&&_!==h&&u&&u===f&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!hi(h,_)||!f)&&(h.enterCallbacks[m]||[]).forEach(E=>E(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,m=c.value,f=m&&m.components[h];if(!f)return Kp(n.default,{Component:f,route:u});const _=m.props[h],C=_?_===!0?u.params:typeof _=="function"?_(u):_:null,T=ci(f,qe({},C,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(m.instances[h]=null)},ref:a}));return Kp(n.default,{Component:T,route:u})||T}}});function Kp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const R_=qT;function HT(t){const e=DT(t.routes,t),n=t.parseQuery||VT,r=t.stringifyQuery||qp,s=t.history,i=Gi(),o=Gi(),c=Gi(),a=Yw(Er);let u=Er;Gs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Zc.bind(null,j=>""+j),m=Zc.bind(null,rT),f=Zc.bind(null,ko);function _(j,ce){let oe,he;return S_(j)?(oe=e.getRecordMatcher(j),he=ce):he=j,e.addRoute(he,oe)}function C(j){const ce=e.getRecordMatcher(j);ce&&e.removeRoute(ce)}function E(){return e.getRoutes().map(j=>j.record)}function T(j){return!!e.getRecordMatcher(j)}function N(j,ce){if(ce=qe({},ce||a.value),typeof j=="string"){const M=eu(n,j,ce.path),H=e.resolve({path:M.path},ce),Q=s.createHref(M.fullPath);return qe(M,H,{params:f(H.params),hash:ko(M.hash),redirectedFrom:void 0,href:Q})}let oe;if(j.path!=null)oe=qe({},j,{path:eu(n,j.path,ce.path).path});else{const M=qe({},j.params);for(const H in M)M[H]==null&&delete M[H];oe=qe({},j,{params:m(M)}),ce.params=m(ce.params)}const he=e.resolve(oe,ce),Be=j.hash||"";he.params=h(f(he.params));const R=oT(r,qe({},j,{hash:eT(Be),path:he.path})),k=s.createHref(R);return qe({fullPath:R,hash:Be,query:r===qp?MT(j.query):j.query||{}},he,{redirectedFrom:void 0,href:k})}function x(j){return typeof j=="string"?eu(n,j,a.value.path):qe({},j)}function V(j,ce){if(u!==j)return di(8,{from:ce,to:j})}function $(j){return P(j)}function W(j){return $(qe(x(j),{replace:!0}))}function J(j){const ce=j.matched[j.matched.length-1];if(ce&&ce.redirect){const{redirect:oe}=ce;let he=typeof oe=="function"?oe(j):oe;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=x(he):{path:he},he.params={}),qe({query:j.query,hash:j.hash,params:he.path!=null?{}:j.params},he)}}function P(j,ce){const oe=u=N(j),he=a.value,Be=j.state,R=j.force,k=j.replace===!0,M=J(oe);if(M)return P(qe(x(M),{state:typeof M=="object"?qe({},Be,M.state):Be,force:R,replace:k}),ce||oe);const H=oe;H.redirectedFrom=ce;let Q;return!R&&aT(r,he,oe)&&(Q=di(16,{to:H,from:he}),Qe(he,he,!0,!1)),(Q?Promise.resolve(Q):A(H,he)).catch(z=>Gn(z)?Gn(z,2)?z:Et(z):ke(z,H,he)).then(z=>{if(z){if(Gn(z,2))return P(qe({replace:k},x(z.to),{state:typeof z.to=="object"?qe({},Be,z.to.state):Be,force:R}),ce||H)}else z=D(H,he,!0,k,Be);return O(H,he,z),z})}function b(j,ce){const oe=V(j,ce);return oe?Promise.reject(oe):Promise.resolve()}function w(j){const ce=jt.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(j):j()}function A(j,ce){let oe;const[he,Be,R]=zT(j,ce);oe=tu(he.reverse(),"beforeRouteLeave",j,ce);for(const M of he)M.leaveGuards.forEach(H=>{oe.push(Rr(H,j,ce))});const k=b.bind(null,j,ce);return oe.push(k),qt(oe).then(()=>{oe=[];for(const M of i.list())oe.push(Rr(M,j,ce));return oe.push(k),qt(oe)}).then(()=>{oe=tu(Be,"beforeRouteUpdate",j,ce);for(const M of Be)M.updateGuards.forEach(H=>{oe.push(Rr(H,j,ce))});return oe.push(k),qt(oe)}).then(()=>{oe=[];for(const M of R)if(M.beforeEnter)if(En(M.beforeEnter))for(const H of M.beforeEnter)oe.push(Rr(H,j,ce));else oe.push(Rr(M.beforeEnter,j,ce));return oe.push(k),qt(oe)}).then(()=>(j.matched.forEach(M=>M.enterCallbacks={}),oe=tu(R,"beforeRouteEnter",j,ce,w),oe.push(k),qt(oe))).then(()=>{oe=[];for(const M of o.list())oe.push(Rr(M,j,ce));return oe.push(k),qt(oe)}).catch(M=>Gn(M,8)?M:Promise.reject(M))}function O(j,ce,oe){c.list().forEach(he=>w(()=>he(j,ce,oe)))}function D(j,ce,oe,he,Be){const R=V(j,ce);if(R)return R;const k=ce===Er,M=Gs?history.state:{};oe&&(he||k?s.replace(j.fullPath,qe({scroll:k&&M&&M.scroll},Be)):s.push(j.fullPath,Be)),a.value=j,Qe(j,ce,oe,k),Et()}let S;function xe(){S||(S=s.listen((j,ce,oe)=>{if(!gn.listening)return;const he=N(j),Be=J(he);if(Be){P(qe(Be,{replace:!0,force:!0}),he).catch(ho);return}u=he;const R=a.value;Gs&&mT(Np(R.fullPath,oe.delta),Xl()),A(he,R).catch(k=>Gn(k,12)?k:Gn(k,2)?(P(qe(x(k.to),{force:!0}),he).then(M=>{Gn(M,20)&&!oe.delta&&oe.type===Oo.pop&&s.go(-1,!1)}).catch(ho),Promise.reject()):(oe.delta&&s.go(-oe.delta,!1),ke(k,he,R))).then(k=>{k=k||D(he,R,!1),k&&(oe.delta&&!Gn(k,8)?s.go(-oe.delta,!1):oe.type===Oo.pop&&Gn(k,20)&&s.go(-1,!1)),O(he,R,k)}).catch(ho)}))}let ae=Gi(),U=Gi(),Y;function ke(j,ce,oe){Et(j);const he=U.list();return he.length?he.forEach(Be=>Be(j,ce,oe)):console.error(j),Promise.reject(j)}function pt(){return Y&&a.value!==Er?Promise.resolve():new Promise((j,ce)=>{ae.add([j,ce])})}function Et(j){return Y||(Y=!j,xe(),ae.list().forEach(([ce,oe])=>j?oe(j):ce()),ae.reset()),j}function Qe(j,ce,oe,he){const{scrollBehavior:Be}=t;if(!Gs||!Be)return Promise.resolve();const R=!oe&&gT(Np(j.fullPath,0))||(he||!oe)&&history.state&&history.state.scroll||null;return Hl().then(()=>Be(j,ce,R)).then(k=>k&&pT(k)).catch(k=>ke(k,j,ce))}const Ue=j=>s.go(j);let We;const jt=new Set,gn={currentRoute:a,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:T,getRoutes:E,resolve:N,options:t,push:$,replace:W,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:U.add,isReady:pt,install(j){const ce=this;j.component("RouterLink",UT),j.component("RouterView",R_),j.config.globalProperties.$router=ce,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>y(a)}),Gs&&!We&&a.value===Er&&(We=!0,$(s.location).catch(Be=>{}));const oe={};for(const Be in Er)Object.defineProperty(oe,Be,{get:()=>a.value[Be],enumerable:!0});j.provide(Jl,ce),j.provide(Kh,Py(oe)),j.provide(Nu,a);const he=j.unmount;jt.add(j),j.unmount=function(){jt.delete(j),jt.size<1&&(u=Er,S&&S(),S=null,a.value=Er,We=!1,Y=!1),he()}}};function qt(j){return j.reduce((ce,oe)=>ce.then(()=>w(oe)),Promise.resolve())}return gn}function zT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>hi(u,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(u=>hi(u,a))||s.push(a))}return[n,r,s]}function Ns(){return $e(Jl)}function WT(t){return $e(Kh)}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let D_;const Zl=t=>D_=t,k_=Symbol();function Vu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var po;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(po||(po={}));function GT(){const t=hy(!0),e=t.run(()=>Te({}));let n=[],r=[];const s=Uh({install(i){Zl(s),s._a=i,i.provide(k_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const O_=()=>{};function Yp(t,e,n,r=O_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&dy()&&Rw(s),s}function qs(t,...e){t.slice().forEach(n=>{n(...e)})}const KT=t=>t(),Qp=Symbol(),nu=Symbol();function Mu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Vu(s)&&Vu(r)&&t.hasOwnProperty(n)&&!ct(r)&&!Lr(r)?t[n]=Mu(s,r):t[n]=r}return t}const YT=Symbol();function QT(t){return!Vu(t)||!Object.prototype.hasOwnProperty.call(t,YT)}const{assign:Sr}=Object;function XT(t){return!!(ct(t)&&t.effect)}function JT(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let a;function u(){c||(n.state.value[t]=s?s():{});const h=Jw(n.state.value[t]);return Sr(h,i,Object.keys(o||{}).reduce((m,f)=>(m[f]=Uh(Pe(()=>{Zl(n);const _=n._s.get(t);return o[f].call(_,_)})),m),{}))}return a=x_(t,u,e,n,r,!0),a}function x_(t,e,n={},r,s,i){let o;const c=Sr({actions:{}},n),a={deep:!0};let u,h,m=[],f=[],_;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),Te({});let E;function T(b){let w;u=h=!1,typeof b=="function"?(b(r.state.value[t]),w={type:po.patchFunction,storeId:t,events:_}):(Mu(r.state.value[t],b),w={type:po.patchObject,payload:b,storeId:t,events:_});const A=E=Symbol();Hl().then(()=>{E===A&&(u=!0)}),h=!0,qs(m,w,r.state.value[t])}const N=i?function(){const{state:w}=n,A=w?w():{};this.$patch(O=>{Sr(O,A)})}:O_;function x(){o.stop(),m=[],f=[],r._s.delete(t)}const V=(b,w="")=>{if(Qp in b)return b[nu]=w,b;const A=function(){Zl(r);const O=Array.from(arguments),D=[],S=[];function xe(Y){D.push(Y)}function ae(Y){S.push(Y)}qs(f,{args:O,name:A[nu],store:W,after:xe,onError:ae});let U;try{U=b.apply(this&&this.$id===t?this:W,O)}catch(Y){throw qs(S,Y),Y}return U instanceof Promise?U.then(Y=>(qs(D,Y),Y)).catch(Y=>(qs(S,Y),Promise.reject(Y))):(qs(D,U),U)};return A[Qp]=!0,A[nu]=w,A},$={_p:r,$id:t,$onAction:Yp.bind(null,f),$patch:T,$reset:N,$subscribe(b,w={}){const A=Yp(m,b,w.detached,()=>O()),O=o.run(()=>tt(()=>r.state.value[t],D=>{(w.flush==="sync"?h:u)&&b({storeId:t,type:po.direct,events:_},D)},Sr({},a,w)));return A},$dispose:x},W=Un($);r._s.set(t,W);const P=(r._a&&r._a.runWithContext||KT)(()=>r._e.run(()=>(o=hy()).run(()=>e({action:V}))));for(const b in P){const w=P[b];if(ct(w)&&!XT(w)||Lr(w))i||(C&&QT(w)&&(ct(w)?w.value=C[b]:Mu(w,C[b])),r.state.value[t][b]=w);else if(typeof w=="function"){const A=V(w,b);P[b]=A,c.actions[b]=w}}return Sr(W,P),Sr(Fe(W),P),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:b=>{T(w=>{Sr(w,b)})}}),r._p.forEach(b=>{Sr(W,o.run(()=>b({store:W,app:r._a,pinia:r,options:c})))}),C&&i&&n.hydrate&&n.hydrate(W.$state,C),u=!0,h=!0,W}/*! #__NO_SIDE_EFFECTS__ */function N_(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const a=kE();return o=o||(a?$e(k_,null):null),o&&Zl(o),o=D_,o._s.has(t)||(s?x_(t,e,r,o):JT(t,r,o)),o._s.get(t)}return i.$id=t,i}const ZT=()=>{};var Xp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},M_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,h=i>>2,m=(i&3)<<4|c>>4;let f=(c&15)<<2|u>>6,_=u&63;a||(_=64,o||(f=64)),r.push(n[h],n[m],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(V_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||m==null)throw new tI;const f=i<<2|c>>4;if(r.push(f),u!==64){const _=c<<4&240|u>>2;if(r.push(_),m!==64){const C=u<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nI=function(t){const e=V_(t);return M_.encodeByteArray(e,!0)},fl=function(t){return nI(t).replace(/\./g,"")},L_=function(t){try{return M_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const sI=()=>rI().__FIREBASE_DEFAULTS__,iI=()=>{if(typeof process>"u"||typeof Xp>"u")return;const t=Xp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&L_(t[1]);return e&&JSON.parse(e)},ec=()=>{try{return ZT()||sI()||iI()||oI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$_=t=>{var e,n;return(n=(e=ec())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aI=t=>{const e=$_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},F_=()=>{var t;return(t=ec())===null||t===void 0?void 0:t.config},U_=t=>{var e;return(e=ec())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ei(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function B_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function cI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fl(JSON.stringify(n)),fl(JSON.stringify(o)),""].join(".")}const mo={};function uI(){const t={prod:[],emulator:[]};for(const e of Object.keys(mo))mo[e]?t.emulator.push(e):t.prod.push(e);return t}function hI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Jp=!1;function j_(t,e){if(typeof window>"u"||typeof document>"u"||!Ei(window.location.host)||mo[t]===e||mo[t]||Jp)return;mo[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",i=uI().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function c(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function a(f,_){f.setAttribute("width","24"),f.setAttribute("id",_),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Jp=!0,o()},f}function h(f,_){f.setAttribute("id",_),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function m(){const f=hI(r),_=n("text"),C=document.getElementById(_)||document.createElement("span"),E=n("learnmore"),T=document.getElementById(E)||document.createElement("a"),N=n("preprendIcon"),x=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const V=f.element;c(V),h(T,E);const $=u();a(x,N),V.append(x,C,T,$),document.body.appendChild(V)}i?(C.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const wI="FirebaseError";class fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wI,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ko.prototype.create)}}class Ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?EI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new fr(s,c,r)}}function EI(t,e){return t.replace(TI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TI=/\{\$([^}]+)}/g;function II(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Zp(i)&&Zp(o)){if(!Is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var Ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ne||(Ne={}));const OI={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},xI=Ne.INFO,NI={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},VI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=NI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yh{constructor(e){this.name=e,this._logLevel=xI,this._logHandler=VI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const MI=(t,e)=>e.some(n=>t instanceof n);let em,tm;function LI(){return em||(em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $I(){return tm||(tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q_=new WeakMap,Lu=new WeakMap,H_=new WeakMap,su=new WeakMap,Qh=new WeakMap;function FI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&q_.set(n,t)}).catch(()=>{}),Qh.set(e,t),e}function UI(t){if(Lu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lu.set(t,e)}let $u={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||H_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BI(t){$u=t($u)}function jI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(iu(this),e,...n);return H_.set(r,e.sort?e.sort():[e]),$r(r)}:$I().includes(t)?function(...e){return t.apply(iu(this),e),$r(q_.get(this))}:function(...e){return $r(t.apply(iu(this),e))}}function qI(t){return typeof t=="function"?jI(t):(t instanceof IDBTransaction&&UI(t),MI(t,LI())?new Proxy(t,$u):t)}function $r(t){if(t instanceof IDBRequest)return FI(t);if(su.has(t))return su.get(t);const e=qI(t);return e!==t&&(su.set(t,e),Qh.set(e,t)),e}const iu=t=>Qh.get(t);function HI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=$r(o);return r&&o.addEventListener("upgradeneeded",a=>{r($r(o.result),a.oldVersion,a.newVersion,$r(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const zI=["get","getKey","getAll","getAllKeys","count"],WI=["put","add","delete","clear"],ou=new Map;function nm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ou.get(e))return ou.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=WI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zI.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&a.done]))[0]};return ou.set(e,i),i}BI(t=>({...t,get:(e,n,r)=>nm(e,n)||t.get(e,n,r),has:(e,n)=>!!nm(e,n)||t.has(e,n)}));/**
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
 */const or=new Yh("@firebase/app"),YI="@firebase/app-compat",QI="@firebase/analytics-compat",XI="@firebase/analytics",JI="@firebase/app-check-compat",ZI="@firebase/app-check",eS="@firebase/auth",tS="@firebase/auth-compat",nS="@firebase/database",rS="@firebase/data-connect",sS="@firebase/database-compat",iS="@firebase/functions",oS="@firebase/functions-compat",aS="@firebase/installations",lS="@firebase/installations-compat",cS="@firebase/messaging",uS="@firebase/messaging-compat",hS="@firebase/performance",dS="@firebase/performance-compat",fS="@firebase/remote-config",pS="@firebase/remote-config-compat",mS="@firebase/storage",gS="@firebase/storage-compat",yS="@firebase/firestore",_S="@firebase/ai",vS="@firebase/firestore-compat",bS="firebase",wS="11.10.0";/**
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
 */const Uu="[DEFAULT]",ES={[Fu]:"fire-core",[YI]:"fire-core-compat",[XI]:"fire-analytics",[QI]:"fire-analytics-compat",[ZI]:"fire-app-check",[JI]:"fire-app-check-compat",[eS]:"fire-auth",[tS]:"fire-auth-compat",[nS]:"fire-rtdb",[rS]:"fire-data-connect",[sS]:"fire-rtdb-compat",[iS]:"fire-fn",[oS]:"fire-fn-compat",[aS]:"fire-iid",[lS]:"fire-iid-compat",[cS]:"fire-fcm",[uS]:"fire-fcm-compat",[hS]:"fire-perf",[dS]:"fire-perf-compat",[fS]:"fire-rc",[pS]:"fire-rc-compat",[mS]:"fire-gcs",[gS]:"fire-gcs-compat",[yS]:"fire-fst",[vS]:"fire-fst-compat",[_S]:"fire-vertex","fire-js":"fire-js",[bS]:"fire-js-all"};/**
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
 */const pl=new Map,TS=new Map,Bu=new Map;function sm(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(Bu.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Bu.set(e,t);for(const n of pl.values())sm(n,t);for(const n of TS.values())sm(n,t);return!0}function Xh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const IS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fr=new Ko("app","Firebase",IS);/**
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
 */class SS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ti=wS;function z_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Fr.create("bad-app-name",{appName:String(s)});if(n||(n=F_()),!n)throw Fr.create("no-options");const i=pl.get(s);if(i){if(Is(n,i.options)&&Is(r,i.config))return i;throw Fr.create("duplicate-app",{appName:s})}const o=new kI(s);for(const a of Bu.values())o.addComponent(a);const c=new SS(n,r,o);return pl.set(s,c),c}function W_(t=Uu){const e=pl.get(t);if(!e&&t===Uu&&F_())return z_();if(!e)throw Fr.create("no-app",{appName:t});return e}function Ur(t,e,n){var r;let s=(r=ES[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(c.join(" "));return}fi(new Ss(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const AS="firebase-heartbeat-database",PS=1,xo="firebase-heartbeat-store";let au=null;function G_(){return au||(au=HI(AS,PS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})})),au}async function CS(t){try{const n=(await G_()).transaction(xo),r=await n.objectStore(xo).get(K_(t));return await n.done,r}catch(e){if(e instanceof fr)or.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e?.message});or.warn(n.message)}}}async function im(t,e){try{const r=(await G_()).transaction(xo,"readwrite");await r.objectStore(xo).put(e,K_(t)),await r.done}catch(n){if(n instanceof fr)or.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n?.message});or.warn(r.message)}}}function K_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RS=1024,DS=30;class kS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=om();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>DS){const o=NS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=om(),{heartbeatsToSend:r,unsentEntries:s}=OS(this._heartbeatsCache.heartbeats),i=fl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return or.warn(n),""}}}function om(){return new Date().toISOString().substring(0,10)}function OS(t,e=RS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),am(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),am(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vI()?bI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CS(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function am(t){return fl(JSON.stringify({version:2,heartbeats:t})).length}function NS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function VS(t){fi(new Ss("platform-logger",e=>new GI(e),"PRIVATE")),fi(new Ss("heartbeat",e=>new kS(e),"PRIVATE")),Ur(Fu,rm,t),Ur(Fu,rm,"esm2017"),Ur("fire-js","")}VS("");function Jh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MS=Y_,Q_=new Ko("auth","Firebase",Y_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Yh("@firebase/auth");function LS(t,...e){ml.logLevel<=Ne.WARN&&ml.warn(`Auth (${Ti}): ${t}`,...e)}function Wa(t,...e){ml.logLevel<=Ne.ERROR&&ml.error(`Auth (${Ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,...e){throw ed(t,...e)}function bn(t,...e){return ed(t,...e)}function Zh(t,e,n){const r=Object.assign(Object.assign({},MS()),{[e]:n});return new Ko("auth","Firebase",r).create(e,{appName:t.name})}function nr(t){return Zh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $S(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pn(t,"argument-error"),Zh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ed(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Q_.create(t,...e)}function ve(t,e,...n){if(!t)throw ed(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wa(e),new Error(e)}function ar(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HS=new Qo(3e4,6e4);function jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function In(t,e,n,r,s={}){return J_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Yo(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},i);return pI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(u.credentials="include"),X_.fetch()(await Z_(t,t.config.apiHost,n,c),u)})}async function J_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jS),e);try{const s=new WS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ka(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,u]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ka(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ka(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ka(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zh(t,h,u);pn(t,h)}}catch(s){if(s instanceof fr)throw s;pn(t,"network-request-failed",{message:String(s)})}}async function Xo(t,e,n,r,s={}){const i=await In(t,e,n,r,s);return"mfaPendingCredential"in i&&pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Z_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?td(t.config,s):`${t.config.apiScheme}://${s}`;return qS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function zS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),HS.get())})}}function ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bn(t,e,r);return s.customData._tokenResponse=n,s}function cm(t){return t!==void 0&&t.enterprise!==void 0}class GS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function KS(t,e){return In(t,"GET","/v2/recaptchaConfig",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e){return In(t,"POST","/v1/accounts:delete",e)}async function gl(t,e){return In(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function yl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await pi(t,gl(n,{idToken:r}));ve(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ev(i.providerUserInfo):[],c=eA(t.providerData,o),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!c?.length,h=a?u:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new qu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function ZS(t){const e=ot(t);await yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ev(t){return t.map(e=>{var{providerId:n}=e,r=Jh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e){const n=await J_(t,{},async()=>{const r=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Z_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:c,body:r};return t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(a.credentials="include"),X_.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nA(t,e){return In(t,"POST","/v2/accounts:revokeToken",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Tr(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Jh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await pi(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QS(this,e)}reload(){return ZS(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await pi(this,YS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,u,h;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(c=n.tenantId)!==null&&c!==void 0?c:void 0,T=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:V,emailVerified:$,isAnonymous:W,providerData:J,stsTokenManager:P}=n;ve(V&&P,e,"internal-error");const b=ri.fromJSON(this.name,P);ve(typeof V=="string",e,"internal-error"),Tr(m,e.name),Tr(f,e.name),ve(typeof $=="boolean",e,"internal-error"),ve(typeof W=="boolean",e,"internal-error"),Tr(_,e.name),Tr(C,e.name),Tr(E,e.name),Tr(T,e.name),Tr(N,e.name),Tr(x,e.name);const w=new _n({uid:V,auth:e,email:f,emailVerified:$,displayName:m,isAnonymous:W,photoURL:C,phoneNumber:_,tenantId:E,stsTokenManager:b,createdAt:N,lastLoginAt:x});return J&&Array.isArray(J)&&(w.providerData=J.map(A=>Object.assign({},A))),T&&(w._redirectEventId=T),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new ri;s.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ve(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ev(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new ri;c.updateFromIdToken(r);const a=new _n({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ga(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ga(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ga("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await gl(this.auth,{idToken:e}).catch(()=>{});return n?_n._fromGetAccountInfoResponse(this.auth,n,e):null}return _n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new si(er(dm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||er(dm);const o=Ga(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const h=await u._get(o);if(h){let m;if(typeof h=="string"){const f=await gl(e,{idToken:h}).catch(()=>{});if(!f)break;m=await _n._fromGetAccountInfoResponse(e,f,h)}else m=_n._fromJSON(e,h);u!==i&&(c=m),i=u;break}}catch{}const a=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new si(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new si(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function oA(t,e={}){return In(t,"GET","/v2/passwordPolicy",jn(t,e))}/**
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
 */const aA=6;class lA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pm(this),this.idTokenSubscription=new pm(this),this.beforeStateQueue=new iA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gl(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&a?.user&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yl(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(nr(this));const n=e?ot(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oA(this),n=new lA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ko("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&LS(`Error while retrieving App Check token: ${n.error}`),n?.token}}function pr(t){return ot(t)}class pm{constructor(e){this.auth=e,this.observer=null,this.addObserver=SI(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uA(t){tc=t}function hv(t){return tc.loadJS(t)}function hA(){return tc.recaptchaEnterpriseScript}function dA(){return tc.gapiScript}function fA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class pA{constructor(){this.enterprise=new mA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class mA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const gA="recaptcha-enterprise",dv="NO_RECAPTCHA";class yA{constructor(e){this.type=gA,this.auth=pr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{KS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new GS(a);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;cm(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(dv)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&cm(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=hA();a.length!==0&&(a+=c),hv(a).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function mm(t,e,n,r=!1,s=!1){const i=new yA(t);let o;if(s)o=dv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const a=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const a=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function _l(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await mm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await mm(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t,e){const n=Xh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Is(i,e??{}))return s;pn(s,"already-initialized")}return n.initialize({options:e})}function vA(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(er);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function bA(t,e,n){const r=pr(t);ve(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=fv(e),{host:o,port:c}=wA(e),a=c===null?"":`:${c}`,u={url:`${i}//${o}${a}/`},h=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ve(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ve(Is(u,r.config.emulator)&&Is(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Ei(o)?(B_(`${i}//${o}${a}`),j_("Auth",!0)):EA()}function fv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wA(t){const e=fv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gm(o)}}}function gm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function TA(t,e){return In(t,"POST","/v1/accounts:resetPassword",jn(t,e))}async function IA(t,e){return In(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,e){return Xo(t,"POST","/v1/accounts:signInWithPassword",jn(t,e))}async function AA(t,e){return In(t,"POST","/v1/accounts:sendOobCode",jn(t,e))}async function PA(t,e){return AA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class No extends sd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new No(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new No(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,n,"signInWithPassword",SA);case"emailLink":return CA(e,{email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,r,"signUpPassword",IA);case"emailLink":return RA(e,{idToken:n,email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const DA="http://localhost";class As extends sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Jh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new As(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OA(t){const e=Qi(Xi(t)).link,n=e?Qi(Xi(e)).deep_link_id:null,r=Qi(Xi(t)).deep_link_id;return(r?Qi(Xi(r)).link:null)||r||n||e||t}class id{constructor(e){var n,r,s,i,o,c;const a=Qi(Xi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,h=(r=a.oobCode)!==null&&r!==void 0?r:null,m=kA((s=a.mode)!==null&&s!==void 0?s:null);ve(u&&h&&m,"argument-error"),this.apiKey=u,this.operation=m,this.code=h,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=OA(e);try{return new id(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.providerId=Ii.PROVIDER_ID}static credential(e,n){return No._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=id.parseLink(n);return ve(r,"argument-error"),No._fromEmailAndCode(e,r.code,r.tenantId)}}Ii.PROVIDER_ID="password";Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xr extends Jo{constructor(){super("twitter.com")}static credential(e,n){return As._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(t,e){return Xo(t,"POST","/v1/accounts:signUp",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await _n._fromIdTokenResponse(e,r,s),o=ym(r);return new Ps({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ym(r);return new Ps({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ym(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends fr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vl(e,n,r,s)}}function pv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(t,i,e,r):i})}async function NA(t,e,n=!1){const r=await pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ps._forOperation(t,"link",r)}/**
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
 */async function VA(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(nr(r));const s="reauthenticate";try{const i=await pi(t,pv(r,s,e,t),n);ve(i.idToken,r,"internal-error");const o=nd(i.idToken);ve(o,r,"internal-error");const{sub:c}=o;return ve(t.uid===c,r,"user-mismatch"),Ps._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&pn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(t,e,n=!1){if(tn(t.app))return Promise.reject(nr(t));const r="signIn",s=await pv(t,r,e),i=await Ps._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function MA(t,e){return mv(pr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(t){const e=pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LA(t,e,n){const r=pr(t);await _l(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",PA)}async function $A(t,e,n){await TA(ot(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ad(t),r})}async function FA(t,e,n){if(tn(t.app))return Promise.reject(nr(t));const r=pr(t),o=await _l(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xA).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&ad(t),a}),c=await Ps._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function UA(t,e,n){return tn(t.app)?Promise.reject(nr(t)):MA(ot(t),Ii.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ad(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e){return In(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ot(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pi(r,BA(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:a})=>a==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function qA(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function HA(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function gv(t,e,n,r){return ot(t).onAuthStateChanged(e,n,r)}function zA(t){return ot(t).signOut()}const bl="__sak";/**
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
 */const WA=1e3,GA=10;class _v extends yv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_v.type="LOCAL";const KA=_v;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),a=await YA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class QA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const u=ld("",20);s.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const f=m;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(f.data.response);break;default:clearTimeout(h),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function XA(t){xn().location.href=t}/**
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
 */function wv(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function JA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZA(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eP(){return wv()?self:null}/**
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
 */const Ev="firebaseLocalStorageDb",tP=1,wl="firebaseLocalStorage",Tv="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rc(t,e){return t.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function nP(){const t=indexedDB.deleteDatabase(Ev);return new Zo(t).toPromise()}function Hu(){const t=indexedDB.open(Ev,tP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wl,{keyPath:Tv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wl)?e(r):(r.close(),await nP(),e(await Hu()))})})}async function _m(t,e,n){const r=rc(t,!0).put({[Tv]:e,value:n});return new Zo(r).toPromise()}async function rP(t,e){const n=rc(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function vm(t,e){const n=rc(t,!0).delete(e);return new Zo(n).toPromise()}const sP=800,iP=3;class Iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(eP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JA(),!this.activeServiceWorker)return;this.sender=new QA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hu();return await _m(e,bl,"1"),await vm(e,bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_m(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rc(s,!1).getAll();return new Zo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iv.type="LOCAL";const oP=Iv;new Qo(3e4,6e4);/**
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
 */class cd extends sd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aP(t){return mv(t.auth,new cd(t),t.bypassAuthState)}function lP(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),VA(n,new cd(t),t.bypassAuthState)}async function cP(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),NA(n,new cd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aP;case"linkViaPopup":case"linkViaRedirect":return cP;case"reauthViaPopup":case"reauthViaRedirect":return lP;default:pn(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=new Qo(2e3,1e4);async function hP(t,e,n){if(tn(t.app))return Promise.reject(bn(t,"operation-not-supported-in-this-environment"));const r=pr(t);$S(t,e,od);const s=Sv(r,n);return new ys(r,"signInViaPopup",e,s).executeNotNull()}class ys extends Av{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uP.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP="pendingRedirect",Ka=new Map;class fP extends Av{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ka.get(this.auth._key());if(!e){try{const r=await pP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ka.set(this.auth._key(),e)}return this.bypassAuthState||Ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pP(t,e){const n=yP(e),r=gP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function mP(t,e){Ka.set(t._key(),e)}function gP(t){return er(t._redirectPersistence)}function yP(t){return Ga(dP,t.config.apiKey,t.name)}async function _P(t,e,n=!1){if(tn(t.app))return Promise.reject(nr(t));const r=pr(t),s=Sv(r,e),o=await new fP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=10*60*1e3;class bP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vP&&this.cachedEventUids.clear(),this.cachedEventUids.has(bm(e))}saveEventToCache(e){this.cachedEventUids.add(bm(e)),this.lastProcessedEventTime=Date.now()}}function bm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pv({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function wP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e={}){return In(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const PP=new Qo(3e4,6e4);function wm(){const t=xn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CP(t){return new Promise((e,n)=>{var r,s,i;function o(){wm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wm(),n(bn(t,"network-request-failed"))},timeout:PP.get()})}if(!((s=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=xn().gapi)===null||i===void 0)&&i.load)o();else{const c=fA("iframefcb");return xn()[c]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},hv(`${dA()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw Ya=null,e})}let Ya=null;function RP(t){return Ya=Ya||CP(t),Ya}/**
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
 */const DP=new Qo(5e3,15e3),kP="__/auth/iframe",OP="emulator/auth/iframe",xP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VP(t){const e=t.config;ve(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?td(e,OP):`https://${t.config.authDomain}/${kP}`,r={apiKey:e.apiKey,appName:t.name,v:Ti},s=NP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Yo(r).slice(1)}`}async function MP(t){const e=await RP(t),n=xn().gapi;return ve(n,t,"internal-error"),e.open({where:document.body,url:VP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),c=xn().setTimeout(()=>{i(o)},DP.get());function a(){xn().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const LP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$P=500,FP=600,UP="_blank",BP="http://localhost";class Em{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jP(t,e,n,r=$P,s=FP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},LP),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ut().toLowerCase();n&&(c=sv(u)?UP:n),nv(u)&&(e=e||BP,a.scrollbars="yes");const h=Object.entries(a).reduce((f,[_,C])=>`${f}${_}=${C},`,"");if(rA(u)&&c!=="_self")return qP(e||"",c),new Em(null);const m=window.open(e||"",c,h);ve(m,t,"popup-blocked");try{m.focus()}catch{}return new Em(m)}function qP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HP="__/auth/handler",zP="emulator/auth/handler",WP=encodeURIComponent("fac");async function Tm(t,e,n,r,s,i){ve(t.config.authDomain,t,"auth-domain-config-required"),ve(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ti,eventId:s};if(e instanceof od){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",II(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof Jo){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const a=await t._getAppCheckToken(),u=a?`#${WP}=${encodeURIComponent(a)}`:"";return`${GP(t)}?${Yo(c).slice(1)}${u}`}function GP({config:t}){return t.emulator?td(t,zP):`https://${t.authDomain}/${HP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="webStorageSupport";class KP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bv,this._completeRedirectFn=_P,this._overrideRedirectResult=mP}async _openPopup(e,n,r,s){var i;ar((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Tm(e,n,r,ju(),s);return jP(e,o,ld())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Tm(e,n,r,ju(),s);return XA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MP(e),r=new bP(e);return n.register("authEvent",s=>(ve(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cu,{type:cu},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[cu];o!==void 0&&n(!!o),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cv()||rv()||rd()}}const YP=KP;var Im="@firebase/auth",Sm="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function XP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JP(t){fi(new Ss("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uv(t)},u=new cA(r,s,i,a);return vA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new Ss("auth-internal",e=>{const n=pr(e.getProvider("auth").getImmediate());return(r=>new QP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ur(Im,Sm,XP(t)),Ur(Im,Sm,"esm2017")}/**
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
 */const ZP=5*60,eC=U_("authIdTokenMaxAge")||ZP;let Am=null;const tC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eC)return;const s=n?.token;Am!==s&&(Am=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nC(t=W_()){const e=Xh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_A(t,{popupRedirectResolver:YP,persistence:[oP,KA,bv]}),r=U_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=tC(i.toString());HA(n,o,()=>o(n.currentUser)),qA(n,c=>o(c))}}const s=$_("auth");return s&&bA(n,`http://${s}`),n}function rC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=bn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JP("Browser");var Pm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,Cv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,b){function w(){}w.prototype=b.prototype,P.D=b.prototype,P.prototype=new w,P.prototype.constructor=P,P.C=function(A,O,D){for(var S=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)S[xe-2]=arguments[xe];return b.prototype[O].apply(A,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(P,b,w){w||(w=0);var A=Array(16);if(typeof b=="string")for(var O=0;16>O;++O)A[O]=b.charCodeAt(w++)|b.charCodeAt(w++)<<8|b.charCodeAt(w++)<<16|b.charCodeAt(w++)<<24;else for(O=0;16>O;++O)A[O]=b[w++]|b[w++]<<8|b[w++]<<16|b[w++]<<24;b=P.g[0],w=P.g[1],O=P.g[2];var D=P.g[3],S=b+(D^w&(O^D))+A[0]+3614090360&4294967295;b=w+(S<<7&4294967295|S>>>25),S=D+(O^b&(w^O))+A[1]+3905402710&4294967295,D=b+(S<<12&4294967295|S>>>20),S=O+(w^D&(b^w))+A[2]+606105819&4294967295,O=D+(S<<17&4294967295|S>>>15),S=w+(b^O&(D^b))+A[3]+3250441966&4294967295,w=O+(S<<22&4294967295|S>>>10),S=b+(D^w&(O^D))+A[4]+4118548399&4294967295,b=w+(S<<7&4294967295|S>>>25),S=D+(O^b&(w^O))+A[5]+1200080426&4294967295,D=b+(S<<12&4294967295|S>>>20),S=O+(w^D&(b^w))+A[6]+2821735955&4294967295,O=D+(S<<17&4294967295|S>>>15),S=w+(b^O&(D^b))+A[7]+4249261313&4294967295,w=O+(S<<22&4294967295|S>>>10),S=b+(D^w&(O^D))+A[8]+1770035416&4294967295,b=w+(S<<7&4294967295|S>>>25),S=D+(O^b&(w^O))+A[9]+2336552879&4294967295,D=b+(S<<12&4294967295|S>>>20),S=O+(w^D&(b^w))+A[10]+4294925233&4294967295,O=D+(S<<17&4294967295|S>>>15),S=w+(b^O&(D^b))+A[11]+2304563134&4294967295,w=O+(S<<22&4294967295|S>>>10),S=b+(D^w&(O^D))+A[12]+1804603682&4294967295,b=w+(S<<7&4294967295|S>>>25),S=D+(O^b&(w^O))+A[13]+4254626195&4294967295,D=b+(S<<12&4294967295|S>>>20),S=O+(w^D&(b^w))+A[14]+2792965006&4294967295,O=D+(S<<17&4294967295|S>>>15),S=w+(b^O&(D^b))+A[15]+1236535329&4294967295,w=O+(S<<22&4294967295|S>>>10),S=b+(O^D&(w^O))+A[1]+4129170786&4294967295,b=w+(S<<5&4294967295|S>>>27),S=D+(w^O&(b^w))+A[6]+3225465664&4294967295,D=b+(S<<9&4294967295|S>>>23),S=O+(b^w&(D^b))+A[11]+643717713&4294967295,O=D+(S<<14&4294967295|S>>>18),S=w+(D^b&(O^D))+A[0]+3921069994&4294967295,w=O+(S<<20&4294967295|S>>>12),S=b+(O^D&(w^O))+A[5]+3593408605&4294967295,b=w+(S<<5&4294967295|S>>>27),S=D+(w^O&(b^w))+A[10]+38016083&4294967295,D=b+(S<<9&4294967295|S>>>23),S=O+(b^w&(D^b))+A[15]+3634488961&4294967295,O=D+(S<<14&4294967295|S>>>18),S=w+(D^b&(O^D))+A[4]+3889429448&4294967295,w=O+(S<<20&4294967295|S>>>12),S=b+(O^D&(w^O))+A[9]+568446438&4294967295,b=w+(S<<5&4294967295|S>>>27),S=D+(w^O&(b^w))+A[14]+3275163606&4294967295,D=b+(S<<9&4294967295|S>>>23),S=O+(b^w&(D^b))+A[3]+4107603335&4294967295,O=D+(S<<14&4294967295|S>>>18),S=w+(D^b&(O^D))+A[8]+1163531501&4294967295,w=O+(S<<20&4294967295|S>>>12),S=b+(O^D&(w^O))+A[13]+2850285829&4294967295,b=w+(S<<5&4294967295|S>>>27),S=D+(w^O&(b^w))+A[2]+4243563512&4294967295,D=b+(S<<9&4294967295|S>>>23),S=O+(b^w&(D^b))+A[7]+1735328473&4294967295,O=D+(S<<14&4294967295|S>>>18),S=w+(D^b&(O^D))+A[12]+2368359562&4294967295,w=O+(S<<20&4294967295|S>>>12),S=b+(w^O^D)+A[5]+4294588738&4294967295,b=w+(S<<4&4294967295|S>>>28),S=D+(b^w^O)+A[8]+2272392833&4294967295,D=b+(S<<11&4294967295|S>>>21),S=O+(D^b^w)+A[11]+1839030562&4294967295,O=D+(S<<16&4294967295|S>>>16),S=w+(O^D^b)+A[14]+4259657740&4294967295,w=O+(S<<23&4294967295|S>>>9),S=b+(w^O^D)+A[1]+2763975236&4294967295,b=w+(S<<4&4294967295|S>>>28),S=D+(b^w^O)+A[4]+1272893353&4294967295,D=b+(S<<11&4294967295|S>>>21),S=O+(D^b^w)+A[7]+4139469664&4294967295,O=D+(S<<16&4294967295|S>>>16),S=w+(O^D^b)+A[10]+3200236656&4294967295,w=O+(S<<23&4294967295|S>>>9),S=b+(w^O^D)+A[13]+681279174&4294967295,b=w+(S<<4&4294967295|S>>>28),S=D+(b^w^O)+A[0]+3936430074&4294967295,D=b+(S<<11&4294967295|S>>>21),S=O+(D^b^w)+A[3]+3572445317&4294967295,O=D+(S<<16&4294967295|S>>>16),S=w+(O^D^b)+A[6]+76029189&4294967295,w=O+(S<<23&4294967295|S>>>9),S=b+(w^O^D)+A[9]+3654602809&4294967295,b=w+(S<<4&4294967295|S>>>28),S=D+(b^w^O)+A[12]+3873151461&4294967295,D=b+(S<<11&4294967295|S>>>21),S=O+(D^b^w)+A[15]+530742520&4294967295,O=D+(S<<16&4294967295|S>>>16),S=w+(O^D^b)+A[2]+3299628645&4294967295,w=O+(S<<23&4294967295|S>>>9),S=b+(O^(w|~D))+A[0]+4096336452&4294967295,b=w+(S<<6&4294967295|S>>>26),S=D+(w^(b|~O))+A[7]+1126891415&4294967295,D=b+(S<<10&4294967295|S>>>22),S=O+(b^(D|~w))+A[14]+2878612391&4294967295,O=D+(S<<15&4294967295|S>>>17),S=w+(D^(O|~b))+A[5]+4237533241&4294967295,w=O+(S<<21&4294967295|S>>>11),S=b+(O^(w|~D))+A[12]+1700485571&4294967295,b=w+(S<<6&4294967295|S>>>26),S=D+(w^(b|~O))+A[3]+2399980690&4294967295,D=b+(S<<10&4294967295|S>>>22),S=O+(b^(D|~w))+A[10]+4293915773&4294967295,O=D+(S<<15&4294967295|S>>>17),S=w+(D^(O|~b))+A[1]+2240044497&4294967295,w=O+(S<<21&4294967295|S>>>11),S=b+(O^(w|~D))+A[8]+1873313359&4294967295,b=w+(S<<6&4294967295|S>>>26),S=D+(w^(b|~O))+A[15]+4264355552&4294967295,D=b+(S<<10&4294967295|S>>>22),S=O+(b^(D|~w))+A[6]+2734768916&4294967295,O=D+(S<<15&4294967295|S>>>17),S=w+(D^(O|~b))+A[13]+1309151649&4294967295,w=O+(S<<21&4294967295|S>>>11),S=b+(O^(w|~D))+A[4]+4149444226&4294967295,b=w+(S<<6&4294967295|S>>>26),S=D+(w^(b|~O))+A[11]+3174756917&4294967295,D=b+(S<<10&4294967295|S>>>22),S=O+(b^(D|~w))+A[2]+718787259&4294967295,O=D+(S<<15&4294967295|S>>>17),S=w+(D^(O|~b))+A[9]+3951481745&4294967295,P.g[0]=P.g[0]+b&4294967295,P.g[1]=P.g[1]+(O+(S<<21&4294967295|S>>>11))&4294967295,P.g[2]=P.g[2]+O&4294967295,P.g[3]=P.g[3]+D&4294967295}r.prototype.u=function(P,b){b===void 0&&(b=P.length);for(var w=b-this.blockSize,A=this.B,O=this.h,D=0;D<b;){if(O==0)for(;D<=w;)s(this,P,D),D+=this.blockSize;if(typeof P=="string"){for(;D<b;)if(A[O++]=P.charCodeAt(D++),O==this.blockSize){s(this,A),O=0;break}}else for(;D<b;)if(A[O++]=P[D++],O==this.blockSize){s(this,A),O=0;break}}this.h=O,this.o+=b},r.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var b=1;b<P.length-8;++b)P[b]=0;var w=8*this.o;for(b=P.length-8;b<P.length;++b)P[b]=w&255,w/=256;for(this.u(P),P=Array(16),b=w=0;4>b;++b)for(var A=0;32>A;A+=8)P[w++]=this.g[b]>>>A&255;return P};function i(P,b){var w=c;return Object.prototype.hasOwnProperty.call(w,P)?w[P]:w[P]=b(P)}function o(P,b){this.h=b;for(var w=[],A=!0,O=P.length-1;0<=O;O--){var D=P[O]|0;A&&D==b||(w[O]=D,A=!1)}this.g=w}var c={};function a(P){return-128<=P&&128>P?i(P,function(b){return new o([b|0],0>b?-1:0)}):new o([P|0],0>P?-1:0)}function u(P){if(isNaN(P)||!isFinite(P))return m;if(0>P)return T(u(-P));for(var b=[],w=1,A=0;P>=w;A++)b[A]=P/w|0,w*=4294967296;return new o(b,0)}function h(P,b){if(P.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P.charAt(0)=="-")return T(h(P.substring(1),b));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(b,8)),A=m,O=0;O<P.length;O+=8){var D=Math.min(8,P.length-O),S=parseInt(P.substring(O,O+D),b);8>D?(D=u(Math.pow(b,D)),A=A.j(D).add(u(S))):(A=A.j(w),A=A.add(u(S)))}return A}var m=a(0),f=a(1),_=a(16777216);t=o.prototype,t.m=function(){if(E(this))return-T(this).m();for(var P=0,b=1,w=0;w<this.g.length;w++){var A=this.i(w);P+=(0<=A?A:4294967296+A)*b,b*=4294967296}return P},t.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(C(this))return"0";if(E(this))return"-"+T(this).toString(P);for(var b=u(Math.pow(P,6)),w=this,A="";;){var O=$(w,b).g;w=N(w,O.j(b));var D=((0<w.g.length?w.g[0]:w.h)>>>0).toString(P);if(w=O,C(w))return D+A;for(;6>D.length;)D="0"+D;A=D+A}},t.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function C(P){if(P.h!=0)return!1;for(var b=0;b<P.g.length;b++)if(P.g[b]!=0)return!1;return!0}function E(P){return P.h==-1}t.l=function(P){return P=N(this,P),E(P)?-1:C(P)?0:1};function T(P){for(var b=P.g.length,w=[],A=0;A<b;A++)w[A]=~P.g[A];return new o(w,~P.h).add(f)}t.abs=function(){return E(this)?T(this):this},t.add=function(P){for(var b=Math.max(this.g.length,P.g.length),w=[],A=0,O=0;O<=b;O++){var D=A+(this.i(O)&65535)+(P.i(O)&65535),S=(D>>>16)+(this.i(O)>>>16)+(P.i(O)>>>16);A=S>>>16,D&=65535,S&=65535,w[O]=S<<16|D}return new o(w,w[w.length-1]&-2147483648?-1:0)};function N(P,b){return P.add(T(b))}t.j=function(P){if(C(this)||C(P))return m;if(E(this))return E(P)?T(this).j(T(P)):T(T(this).j(P));if(E(P))return T(this.j(T(P)));if(0>this.l(_)&&0>P.l(_))return u(this.m()*P.m());for(var b=this.g.length+P.g.length,w=[],A=0;A<2*b;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var O=0;O<P.g.length;O++){var D=this.i(A)>>>16,S=this.i(A)&65535,xe=P.i(O)>>>16,ae=P.i(O)&65535;w[2*A+2*O]+=S*ae,x(w,2*A+2*O),w[2*A+2*O+1]+=D*ae,x(w,2*A+2*O+1),w[2*A+2*O+1]+=S*xe,x(w,2*A+2*O+1),w[2*A+2*O+2]+=D*xe,x(w,2*A+2*O+2)}for(A=0;A<b;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=b;A<2*b;A++)w[A]=0;return new o(w,0)};function x(P,b){for(;(P[b]&65535)!=P[b];)P[b+1]+=P[b]>>>16,P[b]&=65535,b++}function V(P,b){this.g=P,this.h=b}function $(P,b){if(C(b))throw Error("division by zero");if(C(P))return new V(m,m);if(E(P))return b=$(T(P),b),new V(T(b.g),T(b.h));if(E(b))return b=$(P,T(b)),new V(T(b.g),b.h);if(30<P.g.length){if(E(P)||E(b))throw Error("slowDivide_ only works with positive integers.");for(var w=f,A=b;0>=A.l(P);)w=W(w),A=W(A);var O=J(w,1),D=J(A,1);for(A=J(A,2),w=J(w,2);!C(A);){var S=D.add(A);0>=S.l(P)&&(O=O.add(w),D=S),A=J(A,1),w=J(w,1)}return b=N(P,O.j(b)),new V(O,b)}for(O=m;0<=P.l(b);){for(w=Math.max(1,Math.floor(P.m()/b.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),D=u(w),S=D.j(b);E(S)||0<S.l(P);)w-=A,D=u(w),S=D.j(b);C(D)&&(D=f),O=O.add(D),P=N(P,S)}return new V(O,P)}t.A=function(P){return $(this,P).h},t.and=function(P){for(var b=Math.max(this.g.length,P.g.length),w=[],A=0;A<b;A++)w[A]=this.i(A)&P.i(A);return new o(w,this.h&P.h)},t.or=function(P){for(var b=Math.max(this.g.length,P.g.length),w=[],A=0;A<b;A++)w[A]=this.i(A)|P.i(A);return new o(w,this.h|P.h)},t.xor=function(P){for(var b=Math.max(this.g.length,P.g.length),w=[],A=0;A<b;A++)w[A]=this.i(A)^P.i(A);return new o(w,this.h^P.h)};function W(P){for(var b=P.g.length+1,w=[],A=0;A<b;A++)w[A]=P.i(A)<<1|P.i(A-1)>>>31;return new o(w,P.h)}function J(P,b){var w=b>>5;b%=32;for(var A=P.g.length-w,O=[],D=0;D<A;D++)O[D]=0<b?P.i(D+w)>>>b|P.i(D+w+1)<<32-b:P.i(D+w);return new o(O,P.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Cv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Br=o}).apply(typeof Pm<"u"?Pm:typeof self<"u"?self:typeof window<"u"?window:{});var Oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rv,Ji,Dv,Qa,zu,kv,Ov,xv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oa=="object"&&Oa];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(l,d){if(d)e:{var g=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var L=l[v];if(!(L in g))break e;g=g[L]}l=l[l.length-1],v=g[l],d=d(v),d!=v&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var g=0,v=!1,L={next:function(){if(!v&&g<l.length){var F=g++;return{value:d(F,l[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(l){return l||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function a(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,g){return l.call.apply(l.bind,arguments)}function m(l,d,g){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),l.apply(d,L)}}return function(){return l.apply(d,arguments)}}function f(l,d,g){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:m,f.apply(null,arguments)}function _(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function C(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(v,L,F){for(var ne=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)ne[Ge-2]=arguments[Ge];return d.prototype[L].apply(v,ne)}}function E(l){const d=l.length;if(0<d){const g=Array(d);for(let v=0;v<d;v++)g[v]=l[v];return g}return[]}function T(l,d){for(let g=1;g<arguments.length;g++){const v=arguments[g];if(a(v)){const L=l.length||0,F=v.length||0;l.length=L+F;for(let ne=0;ne<F;ne++)l[L+ne]=v[ne]}else l.push(v)}}class N{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function x(l){return/^[\s\xa0]*$/.test(l)}function V(){var l=c.navigator;return l&&(l=l.userAgent)?l:""}function $(l){return $[" "](l),l}$[" "]=function(){};var W=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function J(l,d,g){for(const v in l)d.call(g,l[v],v,l)}function P(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function b(l){const d={};for(const g in l)d[g]=l[g];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,d){let g,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(g in v)l[g]=v[g];for(let F=0;F<w.length;F++)g=w[F],Object.prototype.hasOwnProperty.call(v,g)&&(l[g]=v[g])}}function O(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function D(l){c.setTimeout(()=>{throw l},0)}function S(){var l=pt;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class xe{constructor(){this.h=this.g=null}add(d,g){const v=ae.get();v.set(d,g),this.h?this.h.next=v:this.g=v,this.h=v}}var ae=new N(()=>new U,l=>l.reset());class U{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,ke=!1,pt=new xe,Et=()=>{const l=c.Promise.resolve(void 0);Y=()=>{l.then(Qe)}};var Qe=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){D(g)}var d=ae;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}ke=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var jt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};c.addEventListener("test",g,d),c.removeEventListener("test",g,d)}catch{}return l}();function gn(l,d){if(We.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(W){e:{try{$(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:qt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&gn.aa.h.call(this)}}C(gn,We);var qt={2:"touch",3:"pen",4:"mouse"};gn.prototype.h=function(){gn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),ce=0;function oe(l,d,g,v,L){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!v,this.ha=L,this.key=++ce,this.da=this.fa=!1}function he(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Be(l){this.src=l,this.g={},this.h=0}Be.prototype.add=function(l,d,g,v,L){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var ne=k(l,d,v,L);return-1<ne?(d=l[ne],g||(d.fa=!1)):(d=new oe(d,this.src,F,!!v,L),d.fa=g,l.push(d)),d};function R(l,d){var g=d.type;if(g in l.g){var v=l.g[g],L=Array.prototype.indexOf.call(v,d,void 0),F;(F=0<=L)&&Array.prototype.splice.call(v,L,1),F&&(he(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function k(l,d,g,v){for(var L=0;L<l.length;++L){var F=l[L];if(!F.da&&F.listener==d&&F.capture==!!g&&F.ha==v)return L}return-1}var M="closure_lm_"+(1e6*Math.random()|0),H={};function Q(l,d,g,v,L){if(Array.isArray(d)){for(var F=0;F<d.length;F++)Q(l,d[F],g,v,L);return null}return g=we(g),l&&l[j]?l.K(d,g,u(v)?!!v.capture:!1,L):z(l,d,g,!1,v,L)}function z(l,d,g,v,L,F){if(!d)throw Error("Invalid event type");var ne=u(L)?!!L.capture:!!L,Ge=re(l);if(Ge||(l[M]=Ge=new Be(l)),g=Ge.add(d,g,v,ne,F),g.proxy)return g;if(v=se(),g.proxy=v,v.src=l,v.listener=g,l.addEventListener)jt||(L=ne),L===void 0&&(L=!1),l.addEventListener(d.toString(),v,L);else if(l.attachEvent)l.attachEvent(X(d.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function se(){function l(g){return d.call(l.src,l.listener,g)}const d=pe;return l}function te(l,d,g,v,L){if(Array.isArray(d))for(var F=0;F<d.length;F++)te(l,d[F],g,v,L);else v=u(v)?!!v.capture:!!v,g=we(g),l&&l[j]?(l=l.i,d=String(d).toString(),d in l.g&&(F=l.g[d],g=k(F,g,v,L),-1<g&&(he(F[g]),Array.prototype.splice.call(F,g,1),F.length==0&&(delete l.g[d],l.h--)))):l&&(l=re(l))&&(d=l.g[d.toString()],l=-1,d&&(l=k(d,g,v,L)),(g=-1<l?d[l]:null)&&ee(g))}function ee(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[j])R(d.i,l);else{var g=l.type,v=l.proxy;d.removeEventListener?d.removeEventListener(g,v,l.capture):d.detachEvent?d.detachEvent(X(g),v):d.addListener&&d.removeListener&&d.removeListener(v),(g=re(d))?(R(g,l),g.h==0&&(g.src=null,d[M]=null)):he(l)}}}function X(l){return l in H?H[l]:H[l]="on"+l}function pe(l,d){if(l.da)l=!0;else{d=new gn(d,this);var g=l.listener,v=l.ha||l.src;l.fa&&ee(l),l=g.call(v,d)}return l}function re(l){return l=l[M],l instanceof Be?l:null}var de="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(l){return typeof l=="function"?l:(l[de]||(l[de]=function(d){return l.handleEvent(d)}),l[de])}function ye(){Ue.call(this),this.i=new Be(this),this.M=this,this.F=null}C(ye,Ue),ye.prototype[j]=!0,ye.prototype.removeEventListener=function(l,d,g,v){te(this,l,d,g,v)};function Re(l,d){var g,v=l.F;if(v)for(g=[];v;v=v.F)g.push(v);if(l=l.M,v=d.type||d,typeof d=="string")d=new We(d,l);else if(d instanceof We)d.target=d.target||l;else{var L=d;d=new We(v,l),A(d,L)}if(L=!0,g)for(var F=g.length-1;0<=F;F--){var ne=d.g=g[F];L=Me(ne,v,!0,d)&&L}if(ne=d.g=l,L=Me(ne,v,!0,d)&&L,L=Me(ne,v,!1,d)&&L,g)for(F=0;F<g.length;F++)ne=d.g=g[F],L=Me(ne,v,!1,d)&&L}ye.prototype.N=function(){if(ye.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],v=0;v<g.length;v++)he(g[v]);delete l.g[d],l.h--}}this.F=null},ye.prototype.K=function(l,d,g,v){return this.i.add(String(l),d,!1,g,v)},ye.prototype.L=function(l,d,g,v){return this.i.add(String(l),d,!0,g,v)};function Me(l,d,g,v){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,F=0;F<d.length;++F){var ne=d[F];if(ne&&!ne.da&&ne.capture==g){var Ge=ne.listener,At=ne.ha||ne.src;ne.fa&&R(l.i,ne),L=Ge.call(At,v)!==!1&&L}}return L&&!v.defaultPrevented}function Tt(l,d,g){if(typeof l=="function")g&&(l=f(l,g));else if(l&&typeof l.handleEvent=="function")l=f(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(l,d||0)}function It(l){l.g=Tt(()=>{l.g=null,l.i&&(l.i=!1,It(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class an extends Ue{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:It(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ot(l){Ue.call(this),this.h=l,this.g={}}C(Ot,Ue);var yr=[];function Oi(l){J(l.g,function(d,g){this.g.hasOwnProperty(g)&&ee(d)},l),l.g={}}Ot.prototype.N=function(){Ot.aa.N.call(this),Oi(this)},Ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var St=c.JSON.stringify,ln=c.JSON.parse,ha=class{stringify(l){return c.JSON.stringify(l,void 0)}parse(l){return c.JSON.parse(l,void 0)}};function Pc(){}Pc.prototype.h=null;function nf(l){return l.h||(l.h=l.i())}function rf(){}var xi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cc(){We.call(this,"d")}C(Cc,We);function Rc(){We.call(this,"c")}C(Rc,We);var os={},sf=null;function da(){return sf=sf||new ye}os.La="serverreachability";function of(l){We.call(this,os.La,l)}C(of,We);function Ni(l){const d=da();Re(d,new of(d))}os.STAT_EVENT="statevent";function af(l,d){We.call(this,os.STAT_EVENT,l),this.stat=d}C(af,We);function Ht(l){const d=da();Re(d,new af(d,l))}os.Ma="timingevent";function lf(l,d){We.call(this,os.Ma,l),this.size=d}C(lf,We);function Vi(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){l()},d)}function Mi(){this.g=!0}Mi.prototype.xa=function(){this.g=!1};function Gb(l,d,g,v,L,F){l.info(function(){if(l.g)if(F)for(var ne="",Ge=F.split("&"),At=0;At<Ge.length;At++){var je=Ge[At].split("=");if(1<je.length){var xt=je[0];je=je[1];var Nt=xt.split("_");ne=2<=Nt.length&&Nt[1]=="type"?ne+(xt+"="+je+"&"):ne+(xt+"=redacted&")}}else ne=null;else ne=F;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+d+`
`+g+`
`+ne})}function Kb(l,d,g,v,L,F,ne){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+d+`
`+g+`
`+F+" "+ne})}function $s(l,d,g,v){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+Qb(l,g)+(v?" "+v:"")})}function Yb(l,d){l.info(function(){return"TIMEOUT: "+d})}Mi.prototype.info=function(){};function Qb(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var v=g[l];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var ne=1;ne<L.length;ne++)L[ne]=""}}}}return St(g)}catch{return d}}var fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dc;function pa(){}C(pa,Pc),pa.prototype.g=function(){return new XMLHttpRequest},pa.prototype.i=function(){return{}},Dc=new pa;function _r(l,d,g,v){this.j=l,this.i=d,this.l=g,this.R=v||1,this.U=new Ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uf}function uf(){this.i=null,this.g="",this.h=!1}var hf={},kc={};function Oc(l,d,g){l.L=1,l.v=_a(qn(d)),l.m=g,l.P=!0,df(l,null)}function df(l,d){l.F=Date.now(),ma(l),l.A=qn(l.v);var g=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),Af(g.i,"t",v),l.C=0,g=l.j.J,l.h=new uf,l.g=Hf(l.j,g?d:null,!l.m),0<l.O&&(l.M=new an(f(l.Y,l,l.g),l.O)),d=l.U,g=l.g,v=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(yr[0]=L.toString()),L=yr);for(var F=0;F<L.length;F++){var ne=Q(g,L[F],v||d.handleEvent,!1,d.h||d);if(!ne)break;d.g[ne.key]=ne}d=l.H?b(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Ni(),Gb(l.i,l.u,l.A,l.l,l.R,l.m)}_r.prototype.ca=function(l){l=l.target;const d=this.M;d&&Hn(l)==3?d.j():this.Y(l)},_r.prototype.Y=function(l){try{if(l==this.g)e:{const Nt=Hn(this.g);var d=this.g.Ba();const Bs=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||xf(this.g)))){this.J||Nt!=4||d==7||(d==8||0>=Bs?Ni(3):Ni(2)),xc(this);var g=this.g.Z();this.X=g;t:if(ff(this)){var v=xf(this.g);l="";var L=v.length,F=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){as(this),Li(this);var ne="";break t}this.h.i=new c.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,l+=this.h.i.decode(v[d],{stream:!(F&&d==L-1)});v.length=0,this.h.g+=l,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=g==200,Kb(this.i,this.u,this.A,this.l,this.R,Nt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ge,At=this.g;if((Ge=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Ge)){var je=Ge;break t}}je=null}if(g=je)$s(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nc(this,g);else{this.o=!1,this.s=3,Ht(12),as(this),Li(this);break e}}if(this.P){g=!0;let yn;for(;!this.J&&this.C<ne.length;)if(yn=Xb(this,ne),yn==kc){Nt==4&&(this.s=4,Ht(14),g=!1),$s(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==hf){this.s=4,Ht(15),$s(this.i,this.l,ne,"[Invalid Chunk]"),g=!1;break}else $s(this.i,this.l,yn,null),Nc(this,yn);if(ff(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||ne.length!=0||this.h.h||(this.s=1,Ht(16),g=!1),this.o=this.o&&g,!g)$s(this.i,this.l,ne,"[Invalid Chunked Response]"),as(this),Li(this);else if(0<ne.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Uc(xt),xt.M=!0,Ht(11))}}else $s(this.i,this.l,ne,null),Nc(this,ne);Nt==4&&as(this),this.o&&!this.J&&(Nt==4?Uf(this.j,this):(this.o=!1,ma(this)))}else pw(this.g),g==400&&0<ne.indexOf("Unknown SID")?(this.s=3,Ht(12)):(this.s=0,Ht(13)),as(this),Li(this)}}}catch{}finally{}};function ff(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Xb(l,d){var g=l.C,v=d.indexOf(`
`,g);return v==-1?kc:(g=Number(d.substring(g,v)),isNaN(g)?hf:(v+=1,v+g>d.length?kc:(d=d.slice(v,v+g),l.C=v+g,d)))}_r.prototype.cancel=function(){this.J=!0,as(this)};function ma(l){l.S=Date.now()+l.I,pf(l,l.I)}function pf(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Vi(f(l.ba,l),d)}function xc(l){l.B&&(c.clearTimeout(l.B),l.B=null)}_r.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Yb(this.i,this.A),this.L!=2&&(Ni(),Ht(17)),as(this),this.s=2,Li(this)):pf(this,this.S-l)};function Li(l){l.j.G==0||l.J||Uf(l.j,l)}function as(l){xc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Oi(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Nc(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||Vc(g.h,l))){if(!l.K&&Vc(g.h,l)&&g.G==3){try{var v=g.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Ia(g),Ea(g);else break e;Fc(g),Ht(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=Vi(f(g.Za,g),6e3));if(1>=yf(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else cs(g,11)}else if((l.K||g.g==l)&&Ia(g),!x(d))for(L=g.Da.g.parse(d),d=0;d<L.length;d++){let je=L[d];if(g.T=je[0],je=je[1],g.G==2)if(je[0]=="c"){g.K=je[1],g.ia=je[2];const xt=je[3];xt!=null&&(g.la=xt,g.j.info("VER="+g.la));const Nt=je[4];Nt!=null&&(g.Aa=Nt,g.j.info("SVER="+g.Aa));const Bs=je[5];Bs!=null&&typeof Bs=="number"&&0<Bs&&(v=1.5*Bs,g.L=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const yn=l.g;if(yn){const Aa=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Aa){var F=v.h;F.g||Aa.indexOf("spdy")==-1&&Aa.indexOf("quic")==-1&&Aa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Mc(F,F.h),F.h=null))}if(v.D){const Bc=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bc&&(v.ya=Bc,Ze(v.I,v.D,Bc))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),v=g;var ne=l;if(v.qa=qf(v,v.J?v.ia:null,v.W),ne.K){_f(v.h,ne);var Ge=ne,At=v.L;At&&(Ge.I=At),Ge.B&&(xc(Ge),ma(Ge)),v.g=ne}else $f(v);0<g.i.length&&Ta(g)}else je[0]!="stop"&&je[0]!="close"||cs(g,7);else g.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?cs(g,7):$c(g):je[0]!="noop"&&g.l&&g.l.ta(je),g.v=0)}}Ni(4)}catch{}}var Jb=class{constructor(l,d){this.g=l,this.map=d}};function mf(l){this.l=l||10,c.PerformanceNavigationTiming?(l=c.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function yf(l){return l.h?1:l.g?l.g.size:0}function Vc(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Mc(l,d){l.g?l.g.add(d):l.h=d}function _f(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}mf.prototype.cancel=function(){if(this.i=vf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function vf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return E(l.i)}function Zb(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(a(l)){for(var d=[],g=l.length,v=0;v<g;v++)d.push(l[v]);return d}d=[],g=0;for(v in l)d[g++]=l[v];return d}function ew(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(a(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const v in l)d[g++]=v;return d}}}function bf(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(a(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=ew(l),v=Zb(l),L=v.length,F=0;F<L;F++)d.call(void 0,v[F],g&&g[F],l)}var wf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tw(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var v=l[g].indexOf("="),L=null;if(0<=v){var F=l[g].substring(0,v);L=l[g].substring(v+1)}else F=l[g];d(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ls(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ls){this.h=l.h,ga(this,l.j),this.o=l.o,this.g=l.g,ya(this,l.s),this.l=l.l;var d=l.i,g=new Ui;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),Ef(this,g),this.m=l.m}else l&&(d=String(l).match(wf))?(this.h=!1,ga(this,d[1]||"",!0),this.o=$i(d[2]||""),this.g=$i(d[3]||"",!0),ya(this,d[4]),this.l=$i(d[5]||"",!0),Ef(this,d[6]||"",!0),this.m=$i(d[7]||"")):(this.h=!1,this.i=new Ui(null,this.h))}ls.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Fi(d,Tf,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Fi(d,Tf,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Fi(g,g.charAt(0)=="/"?sw:rw,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Fi(g,ow)),l.join("")};function qn(l){return new ls(l)}function ga(l,d,g){l.j=g?$i(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function ya(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Ef(l,d,g){d instanceof Ui?(l.i=d,aw(l.i,l.h)):(g||(d=Fi(d,iw)),l.i=new Ui(d,l.h))}function Ze(l,d,g){l.i.set(d,g)}function _a(l){return Ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function $i(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Fi(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,nw),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function nw(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Tf=/[#\/\?@]/g,rw=/[#\?:]/g,sw=/[#\?]/g,iw=/[#\?@]/g,ow=/#/g;function Ui(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function vr(l){l.g||(l.g=new Map,l.h=0,l.i&&tw(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=Ui.prototype,t.add=function(l,d){vr(this),this.i=null,l=Fs(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function If(l,d){vr(l),d=Fs(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Sf(l,d){return vr(l),d=Fs(l,d),l.g.has(d)}t.forEach=function(l,d){vr(this),this.g.forEach(function(g,v){g.forEach(function(L){l.call(d,L,v,this)},this)},this)},t.na=function(){vr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let v=0;v<d.length;v++){const L=l[v];for(let F=0;F<L.length;F++)g.push(d[v])}return g},t.V=function(l){vr(this);let d=[];if(typeof l=="string")Sf(this,l)&&(d=d.concat(this.g.get(Fs(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},t.set=function(l,d){return vr(this),this.i=null,l=Fs(this,l),Sf(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Af(l,d,g){If(l,d),0<g.length&&(l.i=null,l.g.set(Fs(l,d),E(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var v=d[g];const F=encodeURIComponent(String(v)),ne=this.V(v);for(v=0;v<ne.length;v++){var L=F;ne[v]!==""&&(L+="="+encodeURIComponent(String(ne[v]))),l.push(L)}}return this.i=l.join("&")};function Fs(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function aw(l,d){d&&!l.j&&(vr(l),l.i=null,l.g.forEach(function(g,v){var L=v.toLowerCase();v!=L&&(If(this,v),Af(this,L,g))},l)),l.j=d}function lw(l,d){const g=new Mi;if(c.Image){const v=new Image;v.onload=_(br,g,"TestLoadImage: loaded",!0,d,v),v.onerror=_(br,g,"TestLoadImage: error",!1,d,v),v.onabort=_(br,g,"TestLoadImage: abort",!1,d,v),v.ontimeout=_(br,g,"TestLoadImage: timeout",!1,d,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else d(!1)}function cw(l,d){const g=new Mi,v=new AbortController,L=setTimeout(()=>{v.abort(),br(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:v.signal}).then(F=>{clearTimeout(L),F.ok?br(g,"TestPingServer: ok",!0,d):br(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),br(g,"TestPingServer: error",!1,d)})}function br(l,d,g,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(g)}catch{}}function uw(){this.g=new ha}function hw(l,d,g){const v=g||"";try{bf(l,function(L,F){let ne=L;u(L)&&(ne=St(L)),d.push(v+F+"="+encodeURIComponent(ne))})}catch(L){throw d.push(v+"type="+encodeURIComponent("_badmap")),L}}function va(l){this.l=l.Ub||null,this.j=l.eb||!1}C(va,Pc),va.prototype.g=function(){return new ba(this.l,this.j)},va.prototype.i=function(l){return function(){return l}}({});function ba(l,d){ye.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ba,ye),t=ba.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,ji(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pf(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pf(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Bi(this):ji(this),this.readyState==3&&Pf(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Bi(this))},t.Qa=function(l){this.g&&(this.response=l,Bi(this))},t.ga=function(){this.g&&Bi(this)};function Bi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ji(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function ji(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Cf(l){let d="";return J(l,function(g,v){d+=v,d+=":",d+=g,d+=`\r
`}),d}function Lc(l,d,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=Cf(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Ze(l,d,g))}function it(l){ye.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(it,ye);var dw=/^https?$/i,fw=["POST","PUT"];t=it.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dc.g(),this.v=this.o?nf(this.o):nf(Dc),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(F){Rf(this,F);return}if(l=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)g.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())g.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(F=>F.toLowerCase()=="content-type"),L=c.FormData&&l instanceof c.FormData,!(0<=Array.prototype.indexOf.call(fw,d,void 0))||v||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,ne]of g)this.g.setRequestHeader(F,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Of(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){Rf(this,F)}};function Rf(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Df(l),wa(l)}function Df(l){l.A||(l.A=!0,Re(l,"complete"),Re(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Re(this,"complete"),Re(this,"abort"),wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wa(this,!0)),it.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?kf(this):this.bb())},t.bb=function(){kf(this)};function kf(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Hn(l)!=4||l.Z()!=2)){if(l.u&&Hn(l)==4)Tt(l.Ea,0,l);else if(Re(l,"readystatechange"),Hn(l)==4){l.h=!1;try{const ne=l.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var v;if(v=ne===0){var L=String(l.D).match(wf)[1]||null;!L&&c.self&&c.self.location&&(L=c.self.location.protocol.slice(0,-1)),v=!dw.test(L?L.toLowerCase():"")}g=v}if(g)Re(l,"complete"),Re(l,"success");else{l.m=6;try{var F=2<Hn(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",Df(l)}}finally{wa(l)}}}}function wa(l,d){if(l.g){Of(l);const g=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||Re(l,"ready");try{g.onreadystatechange=v}catch{}}}function Of(l){l.I&&(c.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Hn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),ln(d)}};function xf(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function pw(l){const d={};l=(l.g&&2<=Hn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(x(l[v]))continue;var g=O(l[v]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const F=d[L]||[];d[L]=F,F.push(g)}P(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qi(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function Nf(l){this.Aa=0,this.i=[],this.j=new Mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qi("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qi("baseRetryDelayMs",5e3,l),this.cb=qi("retryDelaySeedMs",1e4,l),this.Wa=qi("forwardChannelMaxRetries",2,l),this.wa=qi("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new mf(l&&l.concurrentRequestLimit),this.Da=new uw,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nf.prototype,t.la=8,t.G=1,t.connect=function(l,d,g,v){Ht(0),this.W=l,this.H=d||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.I=qf(this,null,this.W),Ta(this)};function $c(l){if(Vf(l),l.G==3){var d=l.U++,g=qn(l.I);if(Ze(g,"SID",l.K),Ze(g,"RID",d),Ze(g,"TYPE","terminate"),Hi(l,g),d=new _r(l,l.j,d),d.L=2,d.v=_a(qn(g)),g=!1,c.navigator&&c.navigator.sendBeacon)try{g=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&c.Image&&(new Image().src=d.v,g=!0),g||(d.g=Hf(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ma(d)}jf(l)}function Ea(l){l.g&&(Uc(l),l.g.cancel(),l.g=null)}function Vf(l){Ea(l),l.u&&(c.clearTimeout(l.u),l.u=null),Ia(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&c.clearTimeout(l.s),l.s=null)}function Ta(l){if(!gf(l.h)&&!l.s){l.s=!0;var d=l.Ga;Y||Et(),ke||(Y(),ke=!0),pt.add(d,l),l.B=0}}function mw(l,d){return yf(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Vi(f(l.Ga,l,d),Bf(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new _r(this,this.j,l);let F=this.o;if(this.S&&(F?(F=b(F),A(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=Lf(this,L,d),g=qn(this.I),Ze(g,"RID",l),Ze(g,"CVER",22),this.D&&Ze(g,"X-HTTP-Session-Id",this.D),Hi(this,g),F&&(this.O?d="headers="+encodeURIComponent(String(Cf(F)))+"&"+d:this.m&&Lc(g,this.m,F)),Mc(this.h,L),this.Ua&&Ze(g,"TYPE","init"),this.P?(Ze(g,"$req",d),Ze(g,"SID","null"),L.T=!0,Oc(L,g,null)):Oc(L,g,d),this.G=2}}else this.G==3&&(l?Mf(this,l):this.i.length==0||gf(this.h)||Mf(this))};function Mf(l,d){var g;d?g=d.l:g=l.U++;const v=qn(l.I);Ze(v,"SID",l.K),Ze(v,"RID",g),Ze(v,"AID",l.T),Hi(l,v),l.m&&l.o&&Lc(v,l.m,l.o),g=new _r(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Lf(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Mc(l.h,g),Oc(g,v,d)}function Hi(l,d){l.H&&J(l.H,function(g,v){Ze(d,v,g)}),l.l&&bf({},function(g,v){Ze(d,v,g)})}function Lf(l,d,g){g=Math.min(l.i.length,g);var v=l.l?f(l.l.Na,l.l,l):null;e:{var L=l.i;let F=-1;for(;;){const ne=["count="+g];F==-1?0<g?(F=L[0].g,ne.push("ofs="+F)):F=0:ne.push("ofs="+F);let Ge=!0;for(let At=0;At<g;At++){let je=L[At].g;const xt=L[At].map;if(je-=F,0>je)F=Math.max(0,L[At].g-100),Ge=!1;else try{hw(xt,ne,"req"+je+"_")}catch{v&&v(xt)}}if(Ge){v=ne.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,v}function $f(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Y||Et(),ke||(Y(),ke=!0),pt.add(d,l),l.v=0}}function Fc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Vi(f(l.Fa,l),Bf(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Ff(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Vi(f(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ht(10),Ea(this),Ff(this))};function Uc(l){l.A!=null&&(c.clearTimeout(l.A),l.A=null)}function Ff(l){l.g=new _r(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=qn(l.qa);Ze(d,"RID","rpc"),Ze(d,"SID",l.K),Ze(d,"AID",l.T),Ze(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ze(d,"TO",l.ja),Ze(d,"TYPE","xmlhttp"),Hi(l,d),l.m&&l.o&&Lc(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=_a(qn(d)),g.m=null,g.P=!0,df(g,l)}t.Za=function(){this.C!=null&&(this.C=null,Ea(this),Fc(this),Ht(19))};function Ia(l){l.C!=null&&(c.clearTimeout(l.C),l.C=null)}function Uf(l,d){var g=null;if(l.g==d){Ia(l),Uc(l),l.g=null;var v=2}else if(Vc(l.h,d))g=d.D,_f(l.h,d),v=1;else return;if(l.G!=0){if(d.o)if(v==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var L=l.B;v=da(),Re(v,new lf(v,g)),Ta(l)}else $f(l);else if(L=d.s,L==3||L==0&&0<d.X||!(v==1&&mw(l,d)||v==2&&Fc(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),L){case 1:cs(l,5);break;case 4:cs(l,10);break;case 3:cs(l,6);break;default:cs(l,2)}}}function Bf(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function cs(l,d){if(l.j.info("Error code "+d),d==2){var g=f(l.fb,l),v=l.Xa;const L=!v;v=new ls(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ga(v,"https"),_a(v),L?lw(v.toString(),g):cw(v.toString(),g)}else Ht(2);l.G=0,l.l&&l.l.sa(d),jf(l),Vf(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))};function jf(l){if(l.G=0,l.ka=[],l.l){const d=vf(l.h);(d.length!=0||l.i.length!=0)&&(T(l.ka,d),T(l.ka,l.i),l.h.i.length=0,E(l.i),l.i.length=0),l.l.ra()}}function qf(l,d,g){var v=g instanceof ls?qn(g):new ls(g);if(v.g!="")d&&(v.g=d+"."+v.g),ya(v,v.s);else{var L=c.location;v=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var F=new ls(null);v&&ga(F,v),d&&(F.g=d),L&&ya(F,L),g&&(F.l=g),v=F}return g=l.D,d=l.ya,g&&d&&Ze(v,g,d),Ze(v,"VER",l.la),Hi(l,v),v}function Hf(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new it(new va({eb:g})):new it(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zf(){}t=zf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sa(){}Sa.prototype.g=function(l,d){return new Zt(l,d)};function Zt(l,d){ye.call(this),this.g=new Nf(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!x(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!x(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Us(this)}C(Zt,ye),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){$c(this.g)},Zt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=St(l),l=g);d.i.push(new Jb(d.Ya++,l)),d.G==3&&Ta(d)},Zt.prototype.N=function(){this.g.l=null,delete this.j,$c(this.g),delete this.g,Zt.aa.N.call(this)};function Wf(l){Cc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}C(Wf,Cc);function Gf(){Rc.call(this),this.status=1}C(Gf,Rc);function Us(l){this.g=l}C(Us,zf),Us.prototype.ua=function(){Re(this.g,"a")},Us.prototype.ta=function(l){Re(this.g,new Wf(l))},Us.prototype.sa=function(l){Re(this.g,new Gf)},Us.prototype.ra=function(){Re(this.g,"b")},Sa.prototype.createWebChannel=Sa.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,xv=function(){return new Sa},Ov=function(){return da()},kv=os,zu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fa.NO_ERROR=0,fa.TIMEOUT=8,fa.HTTP_ERROR=6,Qa=fa,cf.COMPLETE="complete",Dv=cf,rf.EventType=xi,xi.OPEN="a",xi.CLOSE="b",xi.ERROR="c",xi.MESSAGE="d",ye.prototype.listen=ye.prototype.K,Ji=rf,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,Rv=it}).apply(typeof Oa<"u"?Oa:typeof self<"u"?self:typeof window<"u"?window:{});const Cm="@firebase/firestore",Rm="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Cs=new Yh("@firebase/firestore");function Ks(){return Cs.logLevel}function ue(t,...e){if(Cs.logLevel<=Ne.DEBUG){const n=e.map(ud);Cs.debug(`Firestore (${Si}): ${t}`,...n)}}function lr(t,...e){if(Cs.logLevel<=Ne.ERROR){const n=e.map(ud);Cs.error(`Firestore (${Si}): ${t}`,...n)}}function Wr(t,...e){if(Cs.logLevel<=Ne.WARN){const n=e.map(ud);Cs.warn(`Firestore (${Si}): ${t}`,...n)}}function ud(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function be(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Nv(t,r,n)}function Nv(t,e,n){let r=`FIRESTORE (${Si}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw lr(r),new Error(r)}function ze(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Nv(e,s,r)}function Ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends fr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Lt.UNAUTHENTICATED))}shutdown(){}}class iC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oC{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ze(this.o===void 0,42304);let r=this.i;const s=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let i=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=i;e.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},c=a=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(a=>c(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?c(a):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string",31837,{l:r}),new Vv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Lt(e)}}class aC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new aC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ze(this.o===void 0,3512);const r=i=>{i.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ue("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Om="__name__";class Cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&be(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&be(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Cn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Oe(e.length,n.length)}static compareSegments(e,n){const r=Cn.isNumericId(e),s=Cn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Cn.extractNumericId(e).compare(Cn.extractNumericId(n)):Wu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Br.fromString(e.substring(4,e.length-2))}}class Je extends Cn{construct(e,n,r){return new Je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Je(n)}static emptyPath(){return new Je([])}}const dC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends Cn{construct(e,n,r){return new Dt(e,n,r)}static isValidIdentifier(e){return dC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Om}static keyField(){return new Dt([Om])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ie(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const a=e[s+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new ie(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=a,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ie(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(n)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Je.fromString(e))}static fromName(e){return new ge(Je.fromString(e).popFirst(5))}static empty(){return new ge(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Je(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e,n){if(!n)throw new ie(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fC(t,e,n,r){if(e===!0&&r===!0)throw new ie(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xm(t){if(!ge.isDocumentKey(t))throw new ie(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nm(t){if(ge.isDocumentKey(t))throw new ie(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $v(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function sc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":be(12329,{type:typeof t})}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sc(t);throw new ie(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function ea(t,e){if(!$v(t))throw new ie(q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ie(q.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=-62135596800,Mm=1e6;class De{static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Mm);return new De(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Vm)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mm}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:De._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ea(e,De._jsonSchema))return new De(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}De._jsonSchemaVersion="firestore/timestamp/1.0",De._jsonSchema={type:ft("string",De._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new De(0,0))}static max(){return new Ie(new De(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Vo=-1;function pC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ie.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new Gr(s,ge.empty(),e)}function mC(t){return new Gr(t.readTime,t.key,Vo)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(Ie.min(),ge.empty(),Vo)}static max(){return new Gr(Ie.max(),ge.empty(),Vo)}}function gC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(t.documentKey,e.documentKey),n!==0?n:Oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&be(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},a=>r(a))}),o=!0,i===s&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(s=>s?K.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new K((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let a=0;a<i;a++){const u=a;n(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new K((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function vC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Pi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const dd=-1;function oc(t){return t==null}function El(t){return t===0&&1/t==-1/0}function bC(t){return typeof t=="number"&&Number.isInteger(t)&&!El(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="";function wC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Lm(e)),e=EC(t.get(n),e);return Lm(e)}function EC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Fv:n+="";break;default:n+=i}}return n}function Lm(t){return t+Fv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Uv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){this.comparator=e,this.root=n||Pt.EMPTY}insert(e,n){return new st(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xa(this.root,e,this.comparator,!0)}}class xa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Pt.RED,this.left=s??Pt.EMPTY,this.right=i??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw be(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw be(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw be(57766)}get value(){throw be(16141)}get color(){throw be(16727)}get left(){throw be(29726)}get right(){throw be(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fm(this.data.getIterator())}getIteratorFrom(e){return new Fm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class Fm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new rn([])}unionWith(e){let n=new gt(Dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bv("Invalid base64 string: "+i):i}}(e);return new kt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const TC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(ze(!!t,39018),typeof t=="string"){let e=0;const n=TC.exec(t);if(ze(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="server_timestamp",qv="__type__",Hv="__previous_value__",zv="__local_write_time__";function fd(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[qv])===null||n===void 0?void 0:n.stringValue)===jv}function ac(t){const e=t.mapValue.fields[Hv];return fd(e)?ac(e):e}function Mo(t){const e=Kr(t.mapValue.fields[zv].timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,s,i,o,c,a,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=a,this.useFetchStreams=u,this.isUsingEmulator=h}}const Tl="(default)";class Lo{constructor(e,n){this.projectId=e,this.database=n||Tl}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database===Tl}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="__type__",SC="__max__",Na={mapValue:{}},Gv="__vector__",Il="value";function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fd(t)?4:PC(t)?9007199254740991:AC(t)?10:11:be(28295,{value:t})}function Fn(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mo(t).isEqual(Mo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Kr(s.timestampValue),c=Kr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Yr(s.bytesValue).isEqual(Yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return at(s.geoPointValue.latitude)===at(i.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return at(s.integerValue)===at(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=at(s.doubleValue),c=at(i.doubleValue);return o===c?El(o)===El(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if($m(o)!==$m(c))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(c[a]===void 0||!Fn(o[a],c[a])))return!1;return!0}(t,e);default:return be(52216,{left:t})}}function $o(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function gi(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return Oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=at(i.integerValue||i.doubleValue),a=at(o.integerValue||o.doubleValue);return c<a?-1:c>a?1:c===a?0:isNaN(c)?isNaN(a)?0:-1:1}(t,e);case 3:return Um(t.timestampValue,e.timestampValue);case 4:return Um(Mo(t),Mo(e));case 5:return Wu(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Yr(i),a=Yr(o);return c.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),a=o.split("/");for(let u=0;u<c.length&&u<a.length;u++){const h=Oe(c[u],a[u]);if(h!==0)return h}return Oe(c.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Oe(at(i.latitude),at(o.latitude));return c!==0?c:Oe(at(i.longitude),at(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Bm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,a,u,h;const m=i.fields||{},f=o.fields||{},_=(c=m[Il])===null||c===void 0?void 0:c.arrayValue,C=(a=f[Il])===null||a===void 0?void 0:a.arrayValue,E=Oe(((u=_?.values)===null||u===void 0?void 0:u.length)||0,((h=C?.values)===null||h===void 0?void 0:h.length)||0);return E!==0?E:Bm(_,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Na.mapValue&&o===Na.mapValue)return 0;if(i===Na.mapValue)return 1;if(o===Na.mapValue)return-1;const c=i.fields||{},a=Object.keys(c),u=o.fields||{},h=Object.keys(u);a.sort(),h.sort();for(let m=0;m<a.length&&m<h.length;++m){const f=Wu(a[m],h[m]);if(f!==0)return f;const _=gi(c[a[m]],u[h[m]]);if(_!==0)return _}return Oe(a.length,h.length)}(t.mapValue,e.mapValue);default:throw be(23264,{le:n})}}function Um(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Oe(t,e);const n=Kr(t),r=Kr(e),s=Oe(n.seconds,r.seconds);return s!==0?s:Oe(n.nanos,r.nanos)}function Bm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=gi(n[s],r[s]);if(i)return i}return Oe(n.length,r.length)}function yi(t){return Gu(t)}function Gu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ge.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gu(n.fields[o])}`;return s+"}"}(t.mapValue):be(61005,{value:t})}function Xa(t){switch(Qr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(t);return e?16+Xa(e):16;case 5:return 2*t.stringValue.length;case 6:return Yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Xa(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return rs(r.fields,(i,o)=>{s+=i.length+Xa(o)}),s}(t.mapValue);default:throw be(13486,{value:t})}}function jm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ku(t){return!!t&&"integerValue"in t}function pd(t){return!!t&&"arrayValue"in t}function qm(t){return!!t&&"nullValue"in t}function Hm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ja(t){return!!t&&"mapValue"in t}function AC(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Wv])===null||n===void 0?void 0:n.stringValue)===Gv}function yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===SC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(n)}setAll(e){let n=Dt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const a=this.getFieldsMap(n);this.applyChanges(a,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=yo(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ja(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){rs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Xt(yo(this.value))}}function Kv(t){const e=[];return rs(t.fields,(n,r)=>{const s=new Dt([n]);if(Ja(r)){const i=Kv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ft(e,0,Ie.min(),Ie.min(),Ie.min(),Xt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ft(e,1,n,Ie.min(),r,s,0)}static newNoDocument(e,n){return new Ft(e,2,n,Ie.min(),Ie.min(),Xt.empty(),0)}static newUnknownDocument(e,n){return new Ft(e,3,n,Ie.min(),Ie.min(),Xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sl{constructor(e,n){this.position=e,this.inclusive=n}}function zm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ge.comparator(ge.fromName(o.referenceValue),n.key):r=gi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yv{}class dt extends Yv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DC(e,n,r):n==="array-contains"?new xC(e,r):n==="in"?new NC(e,r):n==="not-in"?new VC(e,r):n==="array-contains-any"?new MC(e,r):new dt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kC(e,r):new OC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gi(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends Yv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Tn(e,n)}matches(e){return Qv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Qv(t){return t.op==="and"}function Xv(t){return RC(t)&&Qv(t)}function RC(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function Yu(t){if(t instanceof dt)return t.field.canonicalString()+t.op.toString()+yi(t.value);if(Xv(t))return t.filters.map(e=>Yu(e)).join(",");{const e=t.filters.map(n=>Yu(n)).join(",");return`${t.op}(${e})`}}function Jv(t,e){return t instanceof dt?function(r,s){return s instanceof dt&&r.op===s.op&&r.field.isEqual(s.field)&&Fn(r.value,s.value)}(t,e):t instanceof Tn?function(r,s){return s instanceof Tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Jv(o,s.filters[c]),!0):!1}(t,e):void be(19439)}function Zv(t){return t instanceof dt?function(n){return`${n.field.canonicalString()} ${n.op} ${yi(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(Zv).join(" ,")+"}"}(t):"Filter"}class DC extends dt{constructor(e,n,r){super(e,n,r),this.key=ge.fromName(r.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class kC extends dt{constructor(e,n){super(e,"in",n),this.keys=e1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OC extends dt{constructor(e,n){super(e,"not-in",n),this.keys=e1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function e1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ge.fromName(r.referenceValue))}class xC extends dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pd(n)&&$o(n.arrayValue,this.value)}}class NC extends dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$o(this.value.arrayValue,n)}}class VC extends dt{constructor(e,n){super(e,"not-in",n)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$o(this.value.arrayValue,n)}}class MC extends dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$o(this.value.arrayValue,r))}}/**
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
 */class LC{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Pe=null}}function Gm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new LC(t,e,n,r,s,i,o)}function md(t){const e=Ae(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yi(r)).join(",")),e.Pe=n}return e.Pe}function gd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wm(t.startAt,e.startAt)&&Wm(t.endAt,e.endAt)}function Qu(t){return ge.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,a=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=a,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function $C(t,e,n,r,s,i,o,c){return new Ci(t,e,n,r,s,i,o,c)}function yd(t){return new Ci(t)}function Km(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function t1(t){return t.collectionGroup!==null}function _o(t){const e=Ae(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new gt(Dt.comparator);return o.filters.forEach(a=>{a.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Fo(i,r))}),n.has(Dt.keyField().canonicalString())||e.Te.push(new Fo(Dt.keyField(),r))}return e.Te}function Nn(t){const e=Ae(t);return e.Ie||(e.Ie=FC(e,_o(t))),e.Ie}function FC(t,e){if(t.limitType==="F")return Gm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fo(s.field,i)});const n=t.endAt?new Sl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sl(t.startAt.position,t.startAt.inclusive):null;return Gm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xu(t,e){const n=t.filters.concat([e]);return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ju(t,e,n){return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return gd(Nn(t),Nn(e))&&t.limitType===e.limitType}function n1(t){return`${md(Nn(t))}|lt:${t.limitType}`}function Ys(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Zv(s)).join(", ")}]`),oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>yi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>yi(s)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function cc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ge.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of _o(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,a){const u=zm(o,c,a);return o.inclusive?u<=0:u<0}(r.startAt,_o(r),s)||r.endAt&&!function(o,c,a){const u=zm(o,c,a);return o.inclusive?u>=0:u>0}(r.endAt,_o(r),s))}(t,e)}function UC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function r1(t){return(e,n)=>{let r=!1;for(const s of _o(t)){const i=BC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function BC(t,e,n){const r=t.field.isKeyField()?ge.comparator(e.key,n.key):function(i,o,c){const a=o.data.field(i),u=c.data.field(i);return a!==null&&u!==null?gi(a,u):be(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return be(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const jC=new st(ge.comparator);function cr(){return jC}const s1=new st(ge.comparator);function Zi(...t){let e=s1;for(const n of t)e=e.insert(n.key,n);return e}function i1(t){let e=s1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _s(){return vo()}function o1(){return vo()}function vo(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const qC=new st(ge.comparator),HC=new gt(ge.comparator);function Ve(...t){let e=HC;for(const n of t)e=e.add(n);return e}const zC=new gt(Oe);function WC(){return zC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:El(e)?"-0":e}}function a1(t){return{integerValue:""+t}}function GC(t,e){return bC(e)?a1(e):_d(t,e)}/**
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
 */class uc{constructor(){this._=void 0}}function KC(t,e,n){return t instanceof Al?function(s,i){const o={fields:{[qv]:{stringValue:jv},[zv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&fd(i)&&(i=ac(i)),i&&(o.fields[Hv]=i),{mapValue:o}}(n,e):t instanceof Uo?c1(t,e):t instanceof Bo?u1(t,e):function(s,i){const o=l1(s,i),c=Ym(o)+Ym(s.Ee);return Ku(o)&&Ku(s.Ee)?a1(c):_d(s.serializer,c)}(t,e)}function YC(t,e,n){return t instanceof Uo?c1(t,e):t instanceof Bo?u1(t,e):n}function l1(t,e){return t instanceof Pl?function(r){return Ku(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Al extends uc{}class Uo extends uc{constructor(e){super(),this.elements=e}}function c1(t,e){const n=h1(e);for(const r of t.elements)n.some(s=>Fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Bo extends uc{constructor(e){super(),this.elements=e}}function u1(t,e){let n=h1(e);for(const r of t.elements)n=n.filter(s=>!Fn(s,r));return{arrayValue:{values:n}}}class Pl extends uc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Ym(t){return at(t.integerValue||t.doubleValue)}function h1(t){return pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function QC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Uo&&s instanceof Uo||r instanceof Bo&&s instanceof Bo?mi(r.elements,s.elements,Fn):r instanceof Pl&&s instanceof Pl?Fn(r.Ee,s.Ee):r instanceof Al&&s instanceof Al}(t.transform,e.transform)}class XC{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hc{}function d1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dc(t.key,Kt.none()):new ta(t.key,t.data,Kt.none());{const n=t.data,r=Xt.empty();let s=new gt(Dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ss(t.key,r,new rn(s.toArray()),Kt.none())}}function JC(t,e,n){t instanceof ta?function(s,i,o){const c=s.value.clone(),a=Xm(s.fieldTransforms,i,o.transformResults);c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof ss?function(s,i,o){if(!Za(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Xm(s.fieldTransforms,i,o.transformResults),a=i.data;a.setAll(f1(s)),a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,r){return t instanceof ta?function(i,o,c,a){if(!Za(i.precondition,o))return c;const u=i.value.clone(),h=Jm(i.fieldTransforms,a,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ss?function(i,o,c,a){if(!Za(i.precondition,o))return c;const u=Jm(i.fieldTransforms,a,o),h=o.data;return h.setAll(f1(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,c){return Za(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function ZC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=l1(r.transform,s||null);i!=null&&(n===null&&(n=Xt.empty()),n.set(r.field,i))}return n||null}function Qm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&mi(r,s,(i,o)=>QC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends hc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ss extends hc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function f1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xm(t,e,n){const r=new Map;ze(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,YC(o,c,n[s]))}return r}function Jm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,KC(i,o,e))}return r}class dc extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eR extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&JC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=o1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const a=d1(o,c);a!==null&&r.set(s.key,a),o.isValidDocument()||o.convertToNoDocument(Ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ve())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,r)=>Qm(n,r))&&mi(this.baseMutations,e.baseMutations,(n,r)=>Qm(n,r))}}class vd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ze(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return qC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vd(e,n,r,s)}}/**
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
 */var ht,Le;function sR(t){switch(t){case q.OK:return be(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return be(15467,{code:t})}}function p1(t){if(t===void 0)return lr("GRPC error has no .code"),q.UNKNOWN;switch(t){case ht.OK:return q.OK;case ht.CANCELLED:return q.CANCELLED;case ht.UNKNOWN:return q.UNKNOWN;case ht.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ht.INTERNAL:return q.INTERNAL;case ht.UNAVAILABLE:return q.UNAVAILABLE;case ht.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ht.NOT_FOUND:return q.NOT_FOUND;case ht.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ht.ABORTED:return q.ABORTED;case ht.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ht.DATA_LOSS:return q.DATA_LOSS;default:return be(39323,{code:t})}}(Le=ht||(ht={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class fc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fc(Ie.min(),s,new st(Oe),cr(),Ve())}}class na{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new na(r,n,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class m1{constructor(e,n){this.targetId=e,this.De=n}}class g1{constructor(e,n,r=kt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class tg{constructor(){this.ve=0,this.Ce=ng(),this.Fe=kt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ve(),n=Ve(),r=Ve();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:be(38017,{changeType:i})}}),new na(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=ng()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class oR{constructor(e){this.We=e,this.Ge=new Map,this.ze=cr(),this.je=Va(),this.Je=Va(),this.He=new st(Oe)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:be(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Qu(i))if(r===0){const o=new ge(i.path);this.Xe(n,o,Ft.newNoDocument(o,Ie.min()))}else ze(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const c=this._t(e),a=c?this.ut(c,e,o):1;if(a!==0){this.rt(n);const u=a===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Yr(r).toUint8Array()}catch(a){if(a instanceof Bv)return Wr("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{c=new bd(o,s,i)}catch(a){return Wr(a instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,o)=>{const c=this.st(o);if(c){if(i.current&&Qu(c.target)){const a=new ge(c.target.path);this.Tt(a).has(o)||this.It(o,a)||this.Xe(o,a,Ft.newNoDocument(a,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}});let r=Ve();this.Je.forEach((i,o)=>{let c=!0;o.forEachWhile(a=>{const u=this.st(a);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new fc(e,n,this.He,this.ze,r);return this.ze=cr(),this.je=Va(),this.Je=Va(),this.He=new st(Oe),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new tg,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new gt(Oe),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new gt(Oe),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ue("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new tg),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Va(){return new st(ge.comparator)}function ng(){return new st(ge.comparator)}const aR={asc:"ASCENDING",desc:"DESCENDING"},lR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cR={and:"AND",or:"OR"};class uR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zu(t,e){return t.useProto3Json||oc(e)?e:{value:e}}function Cl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hR(t,e){return Cl(t,e.toTimestamp())}function Vn(t){return ze(!!t,49232),Ie.fromTimestamp(function(n){const r=Kr(n);return new De(r.seconds,r.nanos)}(t))}function wd(t,e){return eh(t,e).canonicalString()}function eh(t,e){const n=function(s){return new Je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function _1(t){const e=Je.fromString(t);return ze(T1(e),10190,{key:e.toString()}),e}function th(t,e){return wd(t.databaseId,e.path)}function uu(t,e){const n=_1(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ge(b1(n))}function v1(t,e){return wd(t.databaseId,e)}function dR(t){const e=_1(t);return e.length===4?Je.emptyPath():b1(e)}function nh(t){return new Je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b1(t){return ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function rg(t,e,n){return{name:th(t,e),fields:n.value.mapValue.fields}}function fR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:be(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(ze(h===void 0||typeof h=="string",58123),kt.fromBase64String(h||"")):(ze(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),kt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?q.UNKNOWN:p1(u.code);return new ie(h,u.message||"")}(o);n=new g1(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=uu(t,r.document.name),i=Vn(r.document.updateTime),o=r.document.createTime?Vn(r.document.createTime):Ie.min(),c=new Xt({mapValue:{fields:r.document.fields}}),a=Ft.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];n=new el(u,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=uu(t,r.document),i=r.readTime?Vn(r.readTime):Ie.min(),o=Ft.newNoDocument(s,i),c=r.removedTargetIds||[];n=new el([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=uu(t,r.document),i=r.removedTargetIds||[];n=new el([],i,s,null)}else{if(!("filter"in e))return be(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new rR(s,i),c=r.targetId;n=new m1(c,o)}}return n}function pR(t,e){let n;if(e instanceof ta)n={update:rg(t,e.key,e.value)};else if(e instanceof dc)n={delete:th(t,e.key)};else if(e instanceof ss)n={update:rg(t,e.key,e.data),updateMask:TR(e.fieldMask)};else{if(!(e instanceof eR))return be(16599,{Rt:e.type});n={verify:th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Al)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Pl)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw be(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:be(27497)}(t,e.precondition)),n}function mR(t,e){return t&&t.length>0?(ze(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Vn(s.updateTime):Vn(i);return o.isEqual(Ie.min())&&(o=Vn(i)),new XC(o,s.transformResults||[])}(n,e))):[]}function gR(t,e){return{documents:[v1(t,e.path)]}}function yR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=v1(t,s);const i=function(u){if(u.length!==0)return E1(Tn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(f){return{field:Qs(f.field),direction:bR(f.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Zu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Vt:n,parent:s}}function _R(t){let e=dR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ze(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(m){const f=w1(m);return f instanceof Tn&&Xv(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(f=>function(C){return new Fo(Xs(C.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(f))}(n.orderBy));let c=null;n.limit&&(c=function(m){let f;return f=typeof m=="object"?m.value:m,oc(f)?null:f}(n.limit));let a=null;n.startAt&&(a=function(m){const f=!!m.before,_=m.values||[];return new Sl(_,f)}(n.startAt));let u=null;return n.endAt&&(u=function(m){const f=!m.before,_=m.values||[];return new Sl(_,f)}(n.endAt)),$C(e,s,o,i,c,"F",a,u)}function vR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function w1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xs(n.unaryFilter.field);return dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xs(n.unaryFilter.field);return dt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xs(n.unaryFilter.field);return dt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xs(n.unaryFilter.field);return dt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return be(61313);default:return be(60726)}}(t):t.fieldFilter!==void 0?function(n){return dt.create(Xs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return be(58110);default:return be(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>w1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return be(1026)}}(n.compositeFilter.op))}(t):be(30097,{filter:t})}function bR(t){return aR[t]}function wR(t){return lR[t]}function ER(t){return cR[t]}function Qs(t){return{fieldPath:t.canonicalString()}}function Xs(t){return Dt.fromServerFormat(t.fieldPath)}function E1(t){return t instanceof dt?function(n){if(n.op==="=="){if(Hm(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NAN"}};if(qm(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hm(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NAN"}};if(qm(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(n.field),op:wR(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(s=>E1(s));return r.length===1?r[0]:{compositeFilter:{op:ER(n.op),filters:r}}}(t):be(54877,{filter:t})}function TR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function T1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r,s,i=Ie.min(),o=Ie.min(),c=kt.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=a}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class AR{constructor(){this.Dn=new PR}addToCollectionParentIndex(e,n){return this.Dn.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(Gr.min())}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class PR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new gt(Je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new gt(Je.comparator)).toArray()}}/**
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
 */const sg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},I1=41943040;class Qt{static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(I1,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ig="LruGarbageCollector",CR=1048576;function og([t,e],[n,r]){const s=Oe(t,n);return s===0?Oe(e,r):s}class RR{constructor(e){this.Tr=e,this.buffer=new gt(og),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();og(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(ig,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Pi(n)?ue(ig,"Ignoring IndexedDB error during garbage collection: ",n):await Ai(n)}await this.Rr(3e5)})}}class kR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return K.resolve(ic.ue);const r=new RR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(sg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sg):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,c,a,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,a=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),Ks()<=Ne.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(a-c)+`ms
	Removed ${m} documents in `+(u-a)+`ms
Total Duration: ${u-h}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function OR(t,e){return new kR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class VR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&bo(r.mutation,s,rn.empty(),De.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ve()){const s=_s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Zi();return i.forEach((c,a)=>{o=o.insert(c,a.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_s();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=cr();const o=vo(),c=function(){return vo()}();return n.forEach((a,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof ss)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),bo(h.mutation,u,h.mutation.getFieldMask(),De.now())):o.set(u.key,rn.empty())}),this.recalculateAndSaveOverlays(e,i).next(a=>(a.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var m;return c.set(u,new NR(h,(m=o.get(u))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,n){const r=vo();let s=new st((o,c)=>o-c),i=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(a=>{const u=n.get(a);if(u===null)return;let h=r.get(a)||rn.empty();h=c.applyToLocalView(u,h),r.set(a,h);const m=(s.get(c.batchId)||Ve()).add(a);s=s.insert(c.batchId,m)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const a=c.getNext(),u=a.key,h=a.value,m=o1();h.forEach(f=>{if(!i.has(f)){const _=d1(n.get(f),r.get(f));_!==null&&m.set(f,_),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return K.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ge.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):t1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):K.resolve(_s());let c=Vo,a=i;return o.next(u=>K.forEach(u,(h,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(h)?K.resolve():this.remoteDocumentCache.getEntry(e,h).next(f=>{a=a.insert(h,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,a,u,Ve())).next(h=>({batchId:c,changes:i1(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next(r=>{let s=Zi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Zi();return this.indexManager.getCollectionParents(e,i).next(c=>K.forEach(c,a=>{const u=function(m,f){return new Ci(f,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((m,f)=>{o=o.insert(m,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((a,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ft.newInvalidDocument(h)))});let c=Zi();return o.forEach((a,u)=>{const h=i.get(a);h!==void 0&&bo(h.mutation,u,rn.empty(),De.now()),cc(n,u)&&(c=c.insert(a,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return K.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Vn(s.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:SR(s.bundledQuery),readTime:Vn(s.readTime)}}(n)),K.resolve()}}/**
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
 */class LR{constructor(){this.overlays=new st(ge.comparator),this.kr=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_s();return K.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const s=_s(),i=n.length+1,o=new ge(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const a=c.getNext().value,u=a.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&a.largestBatchId>r&&s.set(a.getKey(),a)}return K.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new st((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=_s(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=_s(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return K.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nR(n,r));let i=this.kr.get(n);i===void 0&&(i=Ve(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class $R{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.qr=new gt(yt.Qr),this.$r=new gt(yt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new yt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new yt(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new ge(new Je([])),r=new yt(n,e),s=new yt(n,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new ge(new Je([])),r=new yt(n,e),s=new yt(n,e+1);let i=Ve();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new yt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class yt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return ge.comparator(e.key,n.key)||Oe(e.Hr,n.Hr)}static Ur(e,n){return Oe(e.Hr,n.Hr)||ge.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new gt(yt.Qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Yr=this.Yr.add(new yt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,n){return K.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return K.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?dd:this.er-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new yt(n,0),s=new yt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const c=this.Zr(o.Hr);i.push(c)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(Oe);return n.forEach(s=>{const i=new yt(s,0),o=new yt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],c=>{r=r.add(c.Hr)})}),K.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ge.isDocumentKey(i)||(i=i.child(""));const o=new yt(new ge(i),0);let c=new gt(Oe);return this.Yr.forEachWhile(a=>{const u=a.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(a.Hr)),!0)},o),K.resolve(this.ei(c))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ze(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return K.forEach(n.mutations,s=>{const i=new yt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new yt(n,0),s=this.Yr.firstAfterOrEqual(r);return K.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.ni=e,this.docs=function(){return new st(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():Ft.newInvalidDocument(n))}getEntries(e,n){let r=cr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ft.newInvalidDocument(s))}),K.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=cr();const o=n.path,c=new ge(o.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(c);for(;a.hasNext();){const{key:u,value:{document:h}}=a.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||gC(mC(h),r)<=0||(s.has(h.key)||cc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,n,r,s){be(9500)}ri(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BR(this)}getSize(e){return K.resolve(this.size)}}class BR extends xR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.persistence=e,this.ii=new Vs(n=>md(n),gd),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.si=0,this.oi=new Ed,this.targetCount=0,this._i=_i.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),K.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new _i(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.hr(n),K.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),K.waitFor(i).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n){this.ai={},this.overlays={},this.ui=new ic(0),this.ci=!1,this.ci=!0,this.li=new $R,this.referenceDelegate=e(this),this.hi=new jR(this),this.indexManager=new AR,this.remoteDocumentCache=function(s){return new UR(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new IR(n),this.Ti=new MR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new FR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ue("MemoryPersistence","Starting transaction:",e);const s=new qR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return K.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class qR extends _C{constructor(e){super(),this.currentSequenceNumber=e}}class Td{constructor(e){this.persistence=e,this.Ai=new Ed,this.Ri=null}static Vi(e){return new Td(e)}get mi(){if(this.Ri)return this.Ri;throw be(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),K.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.mi,r=>{const s=ge.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,Ie.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return K.or([()=>K.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Rl{constructor(e,n){this.persistence=e,this.gi=new Vs(r=>wC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=OR(this,n)}static Vi(e,n){return new Rl(e,n)}Ii(){}di(e){return K.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return K.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?K.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,Ie.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),K.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),K.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Xa(e.data.value)),n}Sr(e,n,r){return K.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return K.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return _I()?8:vC(Ut())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new HR;return this.ws(e,n,o).next(c=>{if(i.result=c,this.Rs)return this.Ss(e,n,o,c.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ks()<=Ne.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(Ks()<=Ne.DEBUG&&ue("QueryEngine","Query:",Ys(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ks()<=Ne.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):K.resolve())}ps(e,n){if(Km(n))return K.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ju(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ve(...i);return this.gs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(a=>{const u=this.bs(n,c);return this.Ds(n,u,o,a.readTime)?this.ps(e,Ju(n,null,"F")):this.vs(e,u,n,a)}))})))}ys(e,n,r,s){return Km(n)||s.isEqual(Ie.min())?K.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?K.resolve(null):(Ks()<=Ne.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ys(n)),this.vs(e,o,n,pC(s,Vo)).next(c=>c))})}bs(e,n){let r=new gt(r1(e));return n.forEach((s,i)=>{cc(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ks()<=Ne.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Ys(n)),this.gs.getDocumentsMatchingQuery(e,n,Gr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="LocalStore",WR=3e8;class GR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new st(Oe),this.Ms=new Vs(i=>md(i),gd),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function KR(t,e,n,r){return new GR(t,e,n,r)}async function A1(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let a=Ve();for(const u of s){o.push(u.batchId);for(const h of u.mutations)a=a.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)a=a.add(h.key)}return n.localDocuments.getDocuments(r,a).next(u=>({Bs:u,removedBatchIds:o,addedBatchIds:c}))})})}function YR(t,e){const n=Ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(c,a,u,h){const m=u.batch,f=m.keys();let _=K.resolve();return f.forEach(C=>{_=_.next(()=>h.getEntry(a,C)).next(E=>{const T=u.docVersions.get(C);ze(T!==null,48541),E.version.compareTo(T)<0&&(m.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),h.addEntry(E)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(a,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let a=Ve();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(a=a.add(c.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function P1(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function QR(t,e){const n=Ae(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach((h,m)=>{const f=s.get(m);if(!f)return;c.push(n.hi.removeMatchingKeys(i,h.removedDocuments,m).next(()=>n.hi.addMatchingKeys(i,h.addedDocuments,m)));let _=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(kt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(m,_),function(E,T,N){return E.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=WR?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(f,_,h)&&c.push(n.hi.updateTargetData(i,_))});let a=cr(),u=Ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(XR(i,o,e.documentUpdates).next(h=>{a=h.Ls,u=h.ks})),!r.isEqual(Ie.min())){const h=n.hi.getLastRemoteSnapshotVersion(i).next(m=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return K.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,a,u)).next(()=>a)}).then(i=>(n.Fs=s,i))}function XR(t,e,n){let r=Ve(),s=Ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=cr();return n.forEach((c,a)=>{const u=i.get(c);a.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),a.isNoDocument()&&a.version.isEqual(Ie.min())?(e.removeEntry(c,a.readTime),o=o.insert(c,a)):!u.isValidDocument()||a.version.compareTo(u.version)>0||a.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(a),o=o.insert(c,a)):ue(Sd,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",a.version)}),{Ls:o,ks:s}})}function JR(t,e){const n=Ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=dd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZR(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,K.resolve(s)):n.hi.allocateTargetId(r).next(o=>(s=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function rh(t,e,n){const r=Ae(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Pi(o))throw o;ue(Sd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function ag(t,e,n){const r=Ae(t);let s=Ie.min(),i=Ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(a,u,h){const m=Ae(a),f=m.Ms.get(h);return f!==void 0?K.resolve(m.Fs.get(f)):m.hi.getTargetData(u,h)}(r,o,Nn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next(a=>{i=a})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Ie.min(),n?i:Ve())).next(c=>(eD(r,UC(e),c),{documents:c,qs:i})))}function eD(t,e,n){let r=t.xs.get(e)||Ie.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class lg{constructor(){this.activeTargetIds=WC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tD{constructor(){this.Fo=new lg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new lg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const hu="RestConnection",rD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sD{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Tl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=sh(),c=this.Go(e,n.toUriEncodedString());ue(hu,`Sending RPC '${e}' ${o}:`,c,r);const a={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(a,s,i);const{host:u}=new URL(c),h=Ei(u);return this.jo(e,c,a,r,h).then(m=>(ue(hu,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Wr(hu,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m})}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Si}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=rD[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Vt="WebChannelConnection";class oD extends sD{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=sh();return new Promise((c,a)=>{const u=new Rv;u.setWithCredentials(!0),u.listenOnce(Dv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Qa.NO_ERROR:const m=u.getResponseJson();ue(Vt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case Qa.TIMEOUT:ue(Vt,`RPC '${e}' ${o} timed out`),a(new ie(q.DEADLINE_EXCEEDED,"Request time out"));break;case Qa.HTTP_ERROR:const f=u.getStatus();if(ue(Vt,`RPC '${e}' ${o} failed with status:`,f,"response text:",u.getResponseText()),f>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_?.error;if(C&&C.status&&C.message){const E=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(x)>=0?x:q.UNKNOWN}(C.status);a(new ie(E,C.message))}else a(new ie(q.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new ie(q.UNAVAILABLE,"Connection failed."));break;default:be(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{ue(Vt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);ue(Vt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}P_(e,n,r){const s=sh(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xv(),c=Ov(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.zo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const h=i.join("");ue(Vt,`Creating RPC '${e}' stream ${s}: ${h}`,a);const m=o.createWebChannel(h,a);this.T_(m);let f=!1,_=!1;const C=new iD({Ho:T=>{_?ue(Vt,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(f||(ue(Vt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),f=!0),ue(Vt,`RPC '${e}' stream ${s} sending:`,T),m.send(T))},Yo:()=>m.close()}),E=(T,N,x)=>{T.listen(N,V=>{try{x(V)}catch($){setTimeout(()=>{throw $},0)}})};return E(m,Ji.EventType.OPEN,()=>{_||(ue(Vt,`RPC '${e}' stream ${s} transport opened.`),C.s_())}),E(m,Ji.EventType.CLOSE,()=>{_||(_=!0,ue(Vt,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(m))}),E(m,Ji.EventType.ERROR,T=>{_||(_=!0,Wr(Vt,`RPC '${e}' stream ${s} transport errored. Name:`,T.name,"Message:",T.message),C.__(new ie(q.UNAVAILABLE,"The operation could not be completed")))}),E(m,Ji.EventType.MESSAGE,T=>{var N;if(!_){const x=T.data[0];ze(!!x,16349);const V=x,$=V?.error||((N=V[0])===null||N===void 0?void 0:N.error);if($){ue(Vt,`RPC '${e}' stream ${s} received error:`,$);const W=$.status;let J=function(w){const A=ht[w];if(A!==void 0)return p1(A)}(W),P=$.message;J===void 0&&(J=q.INTERNAL,P="Unknown error status: "+W+" with message "+$.message),_=!0,C.__(new ie(J,P)),m.close()}else ue(Vt,`RPC '${e}' stream ${s} received:`,x),C.a_(x)}}),E(c,kv.STAT_EVENT,T=>{T.stat===zu.PROXY?ue(Vt,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===zu.NOPROXY&&ue(Vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function du(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const hg="PersistentStream";class R1{constructor(e,n,r,s,i,o,c,a){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=a,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new C1(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(lr(n.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new ie(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ue(hg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(ue(hg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aD extends R1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=fR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Ie.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Ie.min():o.readTime?Vn(o.readTime):Ie.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=nh(this.serializer),n.addTarget=function(i,o){let c;const a=o.target;if(c=Qu(a)?{documents:gR(i,a)}:{query:yR(i,a).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=y1(i,o.resumeToken);const u=Zu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(Ie.min())>0){c.readTime=Cl(i,o.snapshotVersion.toTimestamp());const u=Zu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=vR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=nh(this.serializer),n.removeTarget=e,this.k_(n)}}class lD extends R1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=mR(e.writeResults,e.commitTime),r=Vn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=nh(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pR(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{}class uD extends cD{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,eh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(q.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Jo(e,eh(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(q.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class hD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const Rs="RemoteStore";class dD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Ms(this)&&(ue(Rs,"Restarting streams for network reachability change."),await async function(a){const u=Ae(a);u.Ia.add(4),await ra(u),u.Aa.set("Unknown"),u.Ia.delete(4),await mc(u)}(this))})}),this.Aa=new hD(r,s)}}async function mc(t){if(Ms(t))for(const e of t.da)await e(!0)}async function ra(t){for(const e of t.da)await e(!1)}function D1(t,e){const n=Ae(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Rd(n)?Cd(n):Ri(n).x_()&&Pd(n,e))}function Ad(t,e){const n=Ae(t),r=Ri(n);n.Ta.delete(e),r.x_()&&k1(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ms(n)&&n.Aa.set("Unknown"))}function Pd(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ri(t).H_(e)}function k1(t,e){t.Ra.$e(e),Ri(t).Y_(e)}function Cd(t){t.Ra=new oR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ri(t).start(),t.Aa.aa()}function Rd(t){return Ms(t)&&!Ri(t).M_()&&t.Ta.size>0}function Ms(t){return Ae(t).Ia.size===0}function O1(t){t.Ra=void 0}async function fD(t){t.Aa.set("Online")}async function pD(t){t.Ta.forEach((e,n)=>{Pd(t,e)})}async function mD(t,e){O1(t),Rd(t)?(t.Aa.la(e),Cd(t)):t.Aa.set("Unknown")}async function gD(t,e,n){if(t.Aa.set("Online"),e instanceof g1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ta.delete(c),s.Ra.removeTarget(c))}(t,e)}catch(r){ue(Rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Dl(t,r)}else if(e instanceof el?t.Ra.Ye(e):e instanceof m1?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Ie.min()))try{const r=await P1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Ra.Pt(o);return c.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.Ta.get(u);h&&i.Ta.set(u,h.withResumeToken(a.resumeToken,o))}}),c.targetMismatches.forEach((a,u)=>{const h=i.Ta.get(a);if(!h)return;i.Ta.set(a,h.withResumeToken(kt.EMPTY_BYTE_STRING,h.snapshotVersion)),k1(i,a);const m=new Vr(h.target,a,u,h.sequenceNumber);Pd(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ue(Rs,"Failed to raise snapshot:",r),await Dl(t,r)}}async function Dl(t,e,n){if(!Pi(e))throw e;t.Ia.add(1),await ra(t),t.Aa.set("Offline"),n||(n=()=>P1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ue(Rs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await mc(t)})}function x1(t,e){return e().catch(n=>Dl(t,n,e))}async function gc(t){const e=Ae(t),n=Xr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:dd;for(;yD(e);)try{const s=await JR(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,_D(e,s)}catch(s){await Dl(e,s)}N1(e)&&V1(e)}function yD(t){return Ms(t)&&t.Pa.length<10}function _D(t,e){t.Pa.push(e);const n=Xr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function N1(t){return Ms(t)&&!Xr(t).M_()&&t.Pa.length>0}function V1(t){Xr(t).start()}async function vD(t){Xr(t).na()}async function bD(t){const e=Xr(t);for(const n of t.Pa)e.X_(n.mutations)}async function wD(t,e,n){const r=t.Pa.shift(),s=vd.from(r,e,n);await x1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gc(t)}async function ED(t,e){e&&Xr(t).Z_&&await async function(r,s){if(function(o){return sR(o)&&o!==q.ABORTED}(s.code)){const i=r.Pa.shift();Xr(r).N_(),await x1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gc(r)}}(t,e),N1(t)&&V1(t)}async function dg(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),ue(Rs,"RemoteStore received new credentials");const r=Ms(n);n.Ia.add(3),await ra(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await mc(n)}async function TD(t,e){const n=Ae(t);e?(n.Ia.delete(2),await mc(n)):e||(n.Ia.add(2),await ra(n),n.Aa.set("Unknown"))}function Ri(t){return t.Va||(t.Va=function(n,r,s){const i=Ae(n);return i.ia(),new aD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:fD.bind(null,t),e_:pD.bind(null,t),n_:mD.bind(null,t),J_:gD.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Rd(t)?Cd(t):t.Aa.set("Unknown")):(await t.Va.stop(),O1(t))})),t.Va}function Xr(t){return t.ma||(t.ma=function(n,r,s){const i=Ae(n);return i.ia(),new lD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:vD.bind(null,t),n_:ED.bind(null,t),ea:bD.bind(null,t),ta:wD.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await gc(t)):(await t.ma.stop(),t.Pa.length>0&&(ue(Rs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Dd(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kd(t,e){if(lr("AsyncQueue",`${e}: ${t}`),Pi(t))return new ie(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{static emptySet(e){return new oi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ge.comparator(n.key,r.key):(n,r)=>ge.comparator(n.key,r.key),this.keyedMap=Zi(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class fg{constructor(){this.fa=new st(ge.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):be(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class vi{constructor(e,n,r,s,i,o,c,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new vi(e,n,oi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class SD{constructor(){this.queries=pg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=Ae(n),i=s.queries;s.queries=pg(),i.forEach((o,c)=>{for(const a of c.wa)a.onError(r)})})(this,new ie(q.ABORTED,"Firestore shutting down"))}}function pg(){return new Vs(t=>n1(t),lc)}async function M1(t,e){const n=Ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new ID,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=kd(o,`Initialization of query '${Ys(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Od(n)}async function L1(t,e){const n=Ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AD(t,e){const n=Ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.wa)c.Ca(s)&&(r=!0);o.ya=s}}r&&Od(n)}function PD(t,e,n){const r=Ae(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Od(t){t.Da.forEach(e=>{e.next()})}var ih,mg;(mg=ih||(ih={})).Fa="default",mg.Cache="cache";class $1{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ih.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.key=e}}class U1{constructor(e){this.key=e}}class CD{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ve(),this.mutatedKeys=Ve(),this.Xa=r1(e),this.eu=new oi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new fg,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const a=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,m)=>{const f=s.get(h),_=cc(this.query,m)?m:null,C=!!f&&this.mutatedKeys.has(f.key),E=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let T=!1;f&&_?f.data.isEqual(_.data)?C!==E&&(r.track({type:3,doc:_}),T=!0):this.iu(f,_)||(r.track({type:2,doc:_}),T=!0,(a&&this.Xa(_,a)>0||u&&this.Xa(_,u)<0)&&(c=!0)):!f&&_?(r.track({type:0,doc:_}),T=!0):f&&!_&&(r.track({type:1,doc:f}),T=!0,(a||u)&&(c=!0)),T&&(_?(o=o.add(_),i=E?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{eu:o,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((h,m)=>function(_,C){const E=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be(20277,{At:T})}};return E(_)-E(C)}(h.type,m.type)||this.Xa(h.doc,m.doc)),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],a=this.Za.size===0&&this.current&&!s?1:0,u=a!==this.Ya;return this.Ya=a,o.length!==0||u?{snapshot:new vi(this.query,e.eu,i,o,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new fg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ve(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new U1(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new F1(r))}),n}uu(e){this.Ha=e.qs,this.Za=Ve();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return vi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const xd="SyncEngine";class RD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DD{constructor(e){this.key=e,this.lu=!1}}class kD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Vs(c=>n1(c),lc),this.Tu=new Map,this.Iu=new Set,this.du=new st(ge.comparator),this.Eu=new Map,this.Au=new Ed,this.Ru={},this.Vu=new Map,this.mu=_i.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function OD(t,e,n=!0){const r=W1(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await B1(r,e,n,!0),s}async function xD(t,e){const n=W1(t);await B1(n,e,!0,!1)}async function B1(t,e,n,r){const s=await ZR(t.localStore,Nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await ND(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&D1(t.remoteStore,s),c}async function ND(t,e,n,r,s){t.gu=(m,f,_)=>async function(E,T,N,x){let V=T.view.nu(N);V.Ds&&(V=await ag(E.localStore,T.query,!1).then(({documents:P})=>T.view.nu(P,V)));const $=x&&x.targetChanges.get(T.targetId),W=x&&x.targetMismatches.get(T.targetId)!=null,J=T.view.applyChanges(V,E.isPrimaryClient,$,W);return yg(E,T.targetId,J._u),J.snapshot}(t,m,f,_);const i=await ag(t.localStore,e,!0),o=new CD(e,i.qs),c=o.nu(i.documents),a=na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,a);yg(t,n,u._u);const h=new RD(e,n,o);return t.Pu.set(e,h),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function VD(t,e,n){const r=Ae(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!lc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ad(r.remoteStore,s.targetId),oh(r,s.targetId)}).catch(Ai)):(oh(r,s.targetId),await rh(r.localStore,s.targetId,!0))}async function MD(t,e){const n=Ae(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ad(n.remoteStore,r.targetId))}async function LD(t,e,n){const r=HD(t);try{const s=await function(o,c){const a=Ae(o),u=De.now(),h=c.reduce((_,C)=>_.add(C.key),Ve());let m,f;return a.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=cr(),E=Ve();return a.Os.getEntries(_,h).next(T=>{C=T,C.forEach((N,x)=>{x.isValidDocument()||(E=E.add(N))})}).next(()=>a.localDocuments.getOverlayedDocuments(_,C)).next(T=>{m=T;const N=[];for(const x of c){const V=ZC(x,m.get(x.key).overlayedDocument);V!=null&&N.push(new ss(x.key,V,Kv(V.value.mapValue),Kt.exists(!0)))}return a.mutationQueue.addMutationBatch(_,u,N,c)}).next(T=>{f=T;const N=T.applyToLocalDocumentSet(m,E);return a.documentOverlayCache.saveOverlays(_,T.batchId,N)})}).then(()=>({batchId:f.batchId,changes:i1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,a){let u=o.Ru[o.currentUser.toKey()];u||(u=new st(Oe)),u=u.insert(c,a),o.Ru[o.currentUser.toKey()]=u}(r,s.batchId,n),await sa(r,s.changes),await gc(r.remoteStore)}catch(s){const i=kd(s,"Failed to persist write");n.reject(i)}}async function j1(t,e){const n=Ae(t);try{const r=await QR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(ze(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?ze(o.lu,14607):s.removedDocuments.size>0&&(ze(o.lu,42227),o.lu=!1))}),await sa(n,r,e)}catch(r){await Ai(r)}}function gg(t,e,n){const r=Ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const a=Ae(o);a.onlineState=c;let u=!1;a.queries.forEach((h,m)=>{for(const f of m.wa)f.va(c)&&(u=!0)}),u&&Od(a)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $D(t,e,n){const r=Ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new st(ge.comparator);o=o.insert(i,Ft.newNoDocument(i,Ie.min()));const c=Ve().add(i),a=new fc(Ie.min(),new Map,new st(Oe),o,c);await j1(r,a),r.du=r.du.remove(i),r.Eu.delete(e),Nd(r)}else await rh(r.localStore,e,!1).then(()=>oh(r,e,n)).catch(Ai)}async function FD(t,e){const n=Ae(t),r=e.batch.batchId;try{const s=await YR(n.localStore,e);H1(n,r,null),q1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sa(n,s)}catch(s){await Ai(s)}}async function UD(t,e,n){const r=Ae(t);try{const s=await function(o,c){const a=Ae(o);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return a.mutationQueue.lookupMutationBatch(u,c).next(m=>(ze(m!==null,37113),h=m.keys(),a.mutationQueue.removeMutationBatch(u,m))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>a.localDocuments.getDocuments(u,h))})}(r.localStore,e);H1(r,e,n),q1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sa(r,s)}catch(s){await Ai(s)}}function q1(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function H1(t,e,n){const r=Ae(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function oh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||z1(t,r)})}function z1(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ad(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Nd(t))}function yg(t,e,n){for(const r of n)r instanceof F1?(t.Au.addReference(r.key,e),BD(t,r)):r instanceof U1?(ue(xd,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||z1(t,r.key)):be(19791,{yu:r})}function BD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ue(xd,"New document in limbo: "+n),t.Iu.add(r),Nd(t))}function Nd(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new ge(Je.fromString(e)),r=t.mu.next();t.Eu.set(r,new DD(n)),t.du=t.du.insert(n,r),D1(t.remoteStore,new Vr(Nn(yd(n.path)),r,"TargetPurposeLimboResolution",ic.ue))}}async function sa(t,e,n){const r=Ae(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((c,a)=>{o.push(r.gu(a,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const m=u?!u.fromCache:(h=n?.targetChanges.get(a.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(a.targetId,m?"current":"not-current")}if(u){s.push(u);const m=Id.Es(a.targetId,u);i.push(m)}}))}),await Promise.all(o),r.hu.J_(s),await async function(a,u){const h=Ae(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>K.forEach(u,f=>K.forEach(f.Is,_=>h.persistence.referenceDelegate.addReference(m,f.targetId,_)).next(()=>K.forEach(f.ds,_=>h.persistence.referenceDelegate.removeReference(m,f.targetId,_)))))}catch(m){if(!Pi(m))throw m;ue(Sd,"Failed to update sequence numbers: "+m)}for(const m of u){const f=m.targetId;if(!m.fromCache){const _=h.Fs.get(f),C=_.snapshotVersion,E=_.withLastLimboFreeSnapshotVersion(C);h.Fs=h.Fs.insert(f,E)}}}(r.localStore,i))}async function jD(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){ue(xd,"User change. New user:",e.toKey());const r=await A1(n.localStore,e);n.currentUser=e,function(i,o){i.Vu.forEach(c=>{c.forEach(a=>{a.reject(new ie(q.CANCELLED,o))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sa(n,r.Bs)}}function qD(t,e){const n=Ae(t),r=n.Eu.get(e);if(r&&r.lu)return Ve().add(r.key);{let s=Ve();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const c=n.Pu.get(o);s=s.unionWith(c.view.tu)}return s}}function W1(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=j1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$D.bind(null,e),e.hu.J_=AD.bind(null,e.eventManager),e.hu.pu=PD.bind(null,e.eventManager),e}function HD(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UD.bind(null,e),e}class kl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return KR(this.persistence,new zR,e.initialUser,this.serializer)}Du(e){return new S1(Td.Vi,this.serializer)}bu(e){return new tD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kl.provider={build:()=>new kl};class zD extends kl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ze(this.persistence.referenceDelegate instanceof Rl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new S1(r=>Rl.Vi(r,n),this.serializer)}}class ah{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jD.bind(null,this.syncEngine),await TD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SD}()}createDatastore(e){const n=pc(e.databaseInfo.databaseId),r=function(i){return new oD(i)}(e.databaseInfo);return function(i,o,c,a){return new uD(i,o,c,a)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new dD(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>gg(this.syncEngine,n,0),function(){return ug.C()?new ug:new nD}())}createSyncEngine(e,n){return function(s,i,o,c,a,u,h){const m=new kD(s,i,o,c,a,u);return h&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Ae(s);ue(Rs,"RemoteStore shutting down."),i.Ia.add(5),await ra(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ah.provider={build:()=>new ah};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Jr="FirestoreClient";class WD{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Lt.UNAUTHENTICATED,this.clientId=hd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ue(Jr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ue(Jr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fu(t,e){t.asyncQueue.verifyOperationInProgress(),ue(Jr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await A1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Wr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Wr("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function _g(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GD(t);ue(Jr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>dg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>dg(e.remoteStore,s)),t._onlineComponents=e}async function GD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ue(Jr,"Using user provided OfflineComponentProvider");try{await fu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Wr("Error using user provided cache. Falling back to memory cache: "+n),await fu(t,new kl)}}else ue(Jr,"Using default OfflineComponentProvider"),await fu(t,new zD(void 0));return t._offlineComponents}async function K1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ue(Jr,"Using user provided OnlineComponentProvider"),await _g(t,t._uninitializedComponentsProvider._online)):(ue(Jr,"Using default OnlineComponentProvider"),await _g(t,new ah))),t._onlineComponents}function KD(t){return K1(t).then(e=>e.syncEngine)}async function Y1(t){const e=await K1(t),n=e.eventManager;return n.onListen=OD.bind(null,e.syncEngine),n.onUnlisten=VD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=MD.bind(null,e.syncEngine),n}function YD(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,a,u){const h=new G1({next:f=>{h.Ou(),o.enqueueAndForget(()=>L1(i,m));const _=f.docs.has(c);!_&&f.fromCache?u.reject(new ie(q.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&f.fromCache&&a&&a.source==="server"?u.reject(new ie(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),m=new $1(yd(c.path),h,{includeMetadataChanges:!0,ka:!0});return M1(i,m)}(await Y1(t),t.asyncQueue,e,n,r)),r.promise}function QD(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,a,u){const h=new G1({next:f=>{h.Ou(),o.enqueueAndForget(()=>L1(i,m)),f.fromCache&&a.source==="server"?u.reject(new ie(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),m=new $1(c,h,{includeMetadataChanges:!0,ka:!0});return M1(i,m)}(await Y1(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const X1="firestore.googleapis.com",bg=!0;class wg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=X1,this.ssl=bg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:bg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=I1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CR)throw new ie(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sC;switch(r.type){case"firstParty":return new lC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vg.get(n);r&&(ue("ComponentProvider","Removing Datastore"),vg.delete(n),r.terminate())}(this),Promise.resolve()}}function XD(t,e,n,r={}){var s;t=mn(t,yc);const i=Ei(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;i&&(B_(`https://${a}`),j_("Firestore",!0)),o.host!==X1&&o.host!==a&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:a,ssl:i,emulatorOptions:r});if(!Is(u,c)&&(t._setSettings(u),r.mockUserToken)){let h,m;if(typeof r.mockUserToken=="string")h=r.mockUserToken,m=Lt.MOCK_USER;else{h=cI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new ie(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Lt(f)}t._authCredentials=new iC(new Vv(h,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ls(this.firestore,e,this._query)}}class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ea(n,lt._jsonSchema))return new lt(e,r||null,new ge(Je.fromString(n.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:ft("string",lt._jsonSchemaVersion),referencePath:ft("string")};class jr extends Ls{constructor(e,n,r){super(e,n,yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new ge(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function An(t,e,...n){if(t=ot(t),Lv("collection","path",e),t instanceof yc){const r=Je.fromString(e,...n);return Nm(r),new jr(t,null,r)}{if(!(t instanceof lt||t instanceof jr))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return Nm(r),new jr(t.firestore,null,r)}}function un(t,e,...n){if(t=ot(t),arguments.length===1&&(e=hd.newId()),Lv("doc","path",e),t instanceof yc){const r=Je.fromString(e,...n);return xm(r),new lt(t,null,new ge(r))}{if(!(t instanceof lt||t instanceof jr))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return xm(r),new lt(t.firestore,t instanceof jr?t.converter:null,new ge(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="AsyncQueue";class Tg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new C1(this,"async_queue_retry"),this.oc=()=>{const r=du();r&&ue(Eg,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=du();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=du();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new rr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Pi(e))throw e;ue(Eg,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,lr("INTERNAL UNHANDLED ERROR: ",Ig(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Dd.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&be(47125,{hc:Ig(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Ig(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class is extends yc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Tg,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tg(e),this._firestoreClient=void 0,await e}}}function Js(t,e){const n=typeof t=="object"?t:W_(),r=typeof t=="string"?t:Tl,s=Xh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=aI("firestore");i&&XD(s,...i)}return s}function _c(t){if(t._terminated)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||JD(t),t._firestoreClient}function JD(t){var e,n,r;const s=t._freezeSettings(),i=function(c,a,u,h){return new IC(c,a,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Q1(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new WD(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const a=c?._online.build();return{_offline:c?._offline.build(a),_online:a}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hn(kt.fromBase64String(e))}catch(n){throw new ie(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hn(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:hn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ea(e,hn._jsonSchema))return hn.fromBase64String(e.bytes)}}hn._jsonSchemaVersion="firestore/bytes/1.0",hn._jsonSchema={type:ft("string",hn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mn._jsonSchemaVersion}}static fromJSON(e){if(ea(e,Mn._jsonSchema))return new Mn(e.latitude,e.longitude)}}Mn._jsonSchemaVersion="firestore/geoPoint/1.0",Mn._jsonSchema={type:ft("string",Mn._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class Ln{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ln._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ea(e,Ln._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ln(e.vectorValues);throw new ie(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ln._jsonSchemaVersion="firestore/vectorValue/1.0",Ln._jsonSchema={type:ft("string",Ln._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=/^__.*__$/;class e2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new ta(e,this.data,n,this.fieldTransforms)}}class J1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Z1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be(40011,{Ec:t})}}class Md{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Md(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ol(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Z1(this.Ec)&&ZD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class t2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pc(e)}Dc(e,n,r,s=!1){return new Md({Ec:e,methodName:n,bc:r,path:Dt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oa(t){const e=t._freezeSettings(),n=pc(t._databaseId);return new t2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ld(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);$d("Data must be an object, but it was:",o,r);const c=nb(r,o);let a,u;if(i.merge)a=new rn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const m of i.mergeFields){const f=lh(e,m,n);if(!o.contains(f))throw new ie(q.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);sb(h,f)||h.push(f)}a=new rn(h),u=o.fieldTransforms.filter(m=>a.covers(m.field))}else a=null,u=o.fieldTransforms;return new e2(new Xt(c),a,u)}class vc extends Vd{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vc}}function eb(t,e,n,r){const s=t.Dc(1,e,n);$d("Data must be an object, but it was:",s,r);const i=[],o=Xt.empty();rs(r,(a,u)=>{const h=Fd(e,a,n);u=ot(u);const m=s.gc(h);if(u instanceof vc)i.push(h);else{const f=aa(u,m);f!=null&&(i.push(h),o.set(h,f))}});const c=new rn(i);return new J1(o,c,s.fieldTransforms)}function tb(t,e,n,r,s,i){const o=t.Dc(1,e,n),c=[lh(e,r,n)],a=[s];if(i.length%2!=0)throw new ie(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)c.push(lh(e,i[f])),a.push(i[f+1]);const u=[],h=Xt.empty();for(let f=c.length-1;f>=0;--f)if(!sb(u,c[f])){const _=c[f];let C=a[f];C=ot(C);const E=o.gc(_);if(C instanceof vc)u.push(_);else{const T=aa(C,E);T!=null&&(u.push(_),h.set(_,T))}}const m=new rn(u);return new J1(h,m,o.fieldTransforms)}function n2(t,e,n,r=!1){return aa(n,t.Dc(r?4:3,e))}function aa(t,e){if(rb(t=ot(t)))return $d("Unsupported field value:",e,t),nb(t,e);if(t instanceof Vd)return function(r,s){if(!Z1(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let a=aa(c,s.yc(o));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=De.fromDate(r);return{timestampValue:Cl(s.serializer,i)}}if(r instanceof De){const i=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cl(s.serializer,i)}}if(r instanceof Mn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hn)return{bytesValue:y1(s.serializer,r._byteString)};if(r instanceof lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ln)return function(o,c){return{mapValue:{fields:{[Wv]:{stringValue:Gv},[Il]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.wc("VectorValues must only contain numeric values.");return _d(c.serializer,u)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${sc(r)}`)}(t,e)}function nb(t,e){const n={};return Uv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(t,(r,s)=>{const i=aa(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function rb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Mn||t instanceof hn||t instanceof lt||t instanceof Vd||t instanceof Ln)}function $d(t,e,n){if(!rb(n)||!$v(n)){const r=sc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function lh(t,e,n){if((e=ot(e))instanceof ia)return e._internalPath;if(typeof e=="string")return Fd(t,e);throw Ol("Field path arguments must be of type string or ",t,!1,void 0,n)}const r2=new RegExp("[~\\*/\\[\\]]");function Fd(t,e,n){if(e.search(r2)>=0)throw Ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ia(...e.split("."))._internalPath}catch{throw Ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ol(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let a="";return(i||o)&&(a+=" (found",i&&(a+=` in field ${r}`),o&&(a+=` in document ${s}`),a+=")"),new ie(q.INVALID_ARGUMENT,c+t+a)}function sb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class s2 extends ib{data(){return super.data()}}function bc(t,e){return typeof e=="string"?Fd(t,e):e instanceof ia?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ud{}class ob extends Ud{}function Hs(t,e,...n){let r=[];e instanceof Ud&&r.push(e),r=r.concat(n),function(i){const o=i.filter(a=>a instanceof Bd).length,c=i.filter(a=>a instanceof wc).length;if(o>1||o>0&&c>0)throw new ie(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class wc extends ob{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new wc(e,n,r)}_apply(e){const n=this._parse(e);return ab(e._query,n),new Ls(e.firestore,e.converter,Xu(e._query,n))}_parse(e){const n=oa(e.firestore);return function(i,o,c,a,u,h,m){let f;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ie(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Ag(m,h);const C=[];for(const E of m)C.push(Sg(a,i,E));f={arrayValue:{values:C}}}else f=Sg(a,i,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Ag(m,h),f=n2(c,o,m,h==="in"||h==="not-in");return dt.create(u,h,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ki(t,e,n){const r=e,s=bc("where",t);return wc._create(s,r,n)}class Bd extends Ud{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const a of c)ab(o,a),o=Xu(o,a)}(e._query,n),new Ls(e.firestore,e.converter,Xu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jd extends ob{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ie(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ie(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fo(i,o)}(e._query,this._field,this._direction);return new Ls(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ci(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function La(t,e="asc"){const n=e,r=bc("orderBy",t);return jd._create(r,n)}function Sg(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new ie(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!t1(e)&&n.indexOf("/")!==-1)throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Je.fromString(n));if(!ge.isDocumentKey(r))throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jm(t,new ge(r))}if(n instanceof lt)return jm(t,n._key);throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sc(n)}.`)}function Ag(t,e){if(!Array.isArray(t)||t.length===0)throw new ie(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ab(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ie(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class o2{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw be(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return rs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Il].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>at(o.doubleValue));return new Ln(i)}convertGeoPoint(e){return new Mn(at(e.latitude),at(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ac(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Mo(e));default:return null}}convertTimestamp(e){const n=Kr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Je.fromString(e);ze(T1(r),9688,{name:e});const s=new Lo(r.get(1),r.get(3)),i=new ge(r.popFirst(5));return s.isEqual(n)||lr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Es extends ib{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Es._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Es._jsonSchemaVersion="firestore/documentSnapshot/1.0",Es._jsonSchema={type:ft("string",Es._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class tl extends Es{data(e={}){return super.data(e)}}class ai{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new to(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new tl(this._firestore,this._userDataWriter,r.key,r,new to(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const a=new tl(s._firestore,s._userDataWriter,c.doc.key,c.doc,new to(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:a,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const a=new tl(s._firestore,s._userDataWriter,c.doc.key,c.doc,new to(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:a2(c.type),doc:a,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ai._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=hd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function a2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){t=mn(t,lt);const e=mn(t.firestore,is);return YD(_c(e),t._key).then(n=>c2(e,t,n))}ai._jsonSchemaVersion="firestore/querySnapshot/1.0",ai._jsonSchema={type:ft("string",ai._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class lb extends o2{constructor(e){super(),this.firestore=e}convertBytes(e){return new hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function zs(t){t=mn(t,Ls);const e=mn(t.firestore,is),n=_c(e),r=new lb(e);return i2(t._query),QD(n,t._query).then(s=>new ai(e,r,t,s))}function l2(t,e,n){t=mn(t,lt);const r=mn(t.firestore,is),s=qd(t.converter,e,n);return la(r,[Ld(oa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Kt.none())])}function $a(t,e,n,...r){t=mn(t,lt);const s=mn(t.firestore,is),i=oa(s);let o;return o=typeof(e=ot(e))=="string"||e instanceof ia?tb(i,"updateDoc",t._key,e,n,r):eb(i,"updateDoc",t._key,e),la(s,[o.toMutation(t._key,Kt.exists(!0))])}function Pg(t){return la(mn(t.firestore,is),[new dc(t._key,Kt.none())])}function Fa(t,e){const n=mn(t.firestore,is),r=un(t),s=qd(t.converter,e);return la(n,[Ld(oa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function la(t,e){return function(r,s){const i=new rr;return r.asyncQueue.enqueueAndForget(async()=>LD(await KD(r),s,i)),i.promise}(_c(t),e)}function c2(t,e,n){const r=n.docs.get(e._key),s=new lb(t);return new Es(t,s,e._key,r,new to(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=oa(e)}set(e,n,r){this._verifyNotCommitted();const s=pu(e,this._firestore),i=qd(s.converter,n,r),o=Ld(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Kt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=pu(e,this._firestore);let o;return o=typeof(n=ot(n))=="string"||n instanceof ia?tb(this._dataReader,"WriteBatch.update",i._key,n,r,s):eb(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Kt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=pu(e,this._firestore);return this._mutations=this._mutations.concat(new dc(n._key,Kt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ie(q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function pu(t,e){if((t=ot(t)).firestore!==e)throw new ie(q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(t){return _c(t=mn(t,is)),new u2(t,e=>la(t,e))}(function(e,n=!0){(function(s){Si=s})(Ti),fi(new Ss("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new is(new oC(r.getProvider("auth-internal")),new cC(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ur(Cm,Rm,e),Ur(Cm,Rm,"esm2017")})();const sn=N_("auth",{state:()=>({user:null,userProfile:null,isAuthReady:!1,authInstance:null,loading:!1,error:null,successMessage:null,isProfileLoading:!1}),getters:{isProfileComplete:t=>!!t.userProfile?.role&&!!t.userProfile?.birthDate,role:t=>t.userProfile?.role},actions:{initAuth(t){t&&(this.authInstance=t,gv(this.authInstance,async e=>{if(e){this.user=e,this.isProfileLoading=!0;try{const n=Js(),s=un(n,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","users",e.uid),i=await ch(s);i.exists()?this.userProfile=i.data():this.userProfile=null}catch(n){console.error("Failed to fetch user profile:",n),this.userProfile=null}finally{this.isProfileLoading=!1}}else this.user=null,this.userProfile=null;this.isAuthReady=!0}))},setUserProfile(t){this.userProfile=t},async logout(){await zA(this.authInstance)},async signupWithEmail(t,e,n){this.loading=!0,this.error=null,this.successMessage=null;try{const r=await FA(this.authInstance,e,n);return await jA(r.user,{displayName:t}),this.user=r.user,this.successMessage="Account created successfully!",!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async signInWithEmail(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{const n=await UA(this.authInstance,t,e);return this.user=n.user,!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async signInWithGoogle(){this.loading=!0,this.error=null,this.successMessage=null;try{const t=new Xn,e=await hP(this.authInstance,t);return this.user=e.user,!0}catch(t){return this.error=t.message,!1}finally{this.loading=!1}},async sendPasswordReset(t){this.loading=!0,this.error=null,this.successMessage=null;try{return await LA(this.authInstance,t),this.successMessage="Password reset link sent to your email!",!0}catch(e){return this.error=e.message,!1}finally{this.loading=!1}},async confirmPasswordReset(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{return await $A(this.authInstance,t,e),this.successMessage="Your password has been reset successfully! You can now sign in with your new password.",!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}}}}),Di=N_("database",{state:()=>({loading:!1,error:null}),actions:{_getDBEssentials(){const t=sn();if(!t.user?.uid)return this.error="User not authenticated. Operation cancelled.",null;const e=Js(),n="1:382664693760:web:7582abe58d70b3260f20e5",r=t.user.uid;return{db:e,appId:n,userId:r}},async setUserProfile(t,e){console.log(`[DB_STORE] setUserProfile: Updating profile for user ID: ${t}`),this.loading=!0,this.error=null;try{const n=Js(),s=un(n,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","users",t);return await l2(s,e,{merge:!0}),console.log(`[DB_STORE] setUserProfile: Successfully updated profile for ${t}.`),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchUserProfile(t){this.loading=!0,this.error=null;try{const e=this._getDBEssentials();if(!e)return null;const{db:n,appId:r}=e,s=un(n,"artifacts",r,"users",t),i=await ch(s);return i.exists()?{id:i.id,...i.data()}:null}catch(e){return this.error=e.message,null}finally{this.loading=!1}},async addNewPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=An(n,"artifacts",r,"patients"),o={...t,creatorId:s,createdAt:De.now(),updatedAt:De.now()};return(await Fa(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async updatePatientProfile(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=un(r,"artifacts",s,"patients",t);return await $a(i,{...e,updatedAt:De.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchPatientsForDoctor(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=An(e,"artifacts",n,"patients"),i=Hs(s,Ki("creatorId","==",r),La("createdAt","desc"));return(await zs(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async deletePatientProfile(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=h2(n),i=un(n,"artifacts",r,"patients",t);s.delete(i);const o=An(n,"artifacts",r,"scans"),c=Hs(o,Ki("patientId","==",t));return(await zs(c)).forEach(u=>s.delete(u.ref)),await s.commit(),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async createScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=An(n,"artifacts",r,"scans"),o={...t};delete o.id;let c;const a=o.scanDate;if(a instanceof De)c=a;else if(a instanceof Date&&!isNaN(a.getTime()))c=De.fromDate(a);else if(typeof a=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(a)){const m=a.split("-"),f=new Date(Date.UTC(m[0],parseInt(m[1],10)-1,m[2],12,0,0));if(isNaN(f.getTime()))throw new RangeError("Provided scanDate string resulted in an invalid Date.");c=De.fromDate(f)}else throw console.error("Invalid scanDate received by createScan:",a),new RangeError('Invalid or unsupported type for scanDate. Must be a Timestamp, Date, or "YYYY-MM-DD" string.');const u={...o,scanDate:c,creatorId:s,isPersonalScan:o.patientId===s,createdAt:De.now()};if(!u.patientId)throw new Error("Cannot create a scan without a patientId.");return(await Fa(i,u)).id}catch(n){return console.error("[DB_STORE] Error details during scan creation:",n),this.error=n.message,null}finally{this.loading=!1}},async updateScan(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=un(r,"artifacts",s,"scans",t),o={...e,updatedAt:De.now()};return await $a(i,o),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async deleteScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=un(n,"artifacts",r,"scans",t);return await Pg(s),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchScansForPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return[];try{const{db:n,appId:r}=e,s=An(n,"artifacts",r,"scans"),i=Hs(s,Ki("patientId","==",t),La("scanDate","desc"));return(await zs(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(n){return console.error("Error in fetchScansForPatient. Is the Firestore index for 'scans' (patientId asc, scanDate desc) created?",n),this.error=n.message,[]}finally{this.loading=!1}},async fetchDoctorCreatedScans(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=An(e,"artifacts",n,"scans"),i=Hs(s,Ki("creatorId","==",r),La("scanDate","desc"));return(await zs(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async addPregnancyDeclaration(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=An(n,"artifacts",r,"users",s,"pregnancies"),o={...t,status:"active",endDate:null,createdAt:De.now()};return(await Fa(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async fetchPregnancyHistory(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=An(e,"artifacts",n,"users",r,"pregnancies"),i=Hs(s,La("declarationDate","desc"));return(await zs(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async updatePregnancyRecord(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s,userId:i}=n,o=un(r,"artifacts",s,"users",i,"pregnancies",t);return await $a(o,{...e,updatedAt:De.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchSinglePatient(t){this.loading=!0,this.error=null;try{const e=Js(),r=un(e,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","patients",t),s=await ch(r);return s.exists()?{id:s.id,...s.data()}:(this.error=`No patient found with ID: ${t}`,console.warn(`[DB_STORE] No patient found with ID: ${t}`),null)}catch(e){return this.error=e.message,null}finally{this.loading=!1}},async createOtherScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=An(n,"artifacts",r,"other_scans"),{id:o,...c}=t,a={...c,userId:s,createdAt:De.now()};return console.log("[DB_STORE] Attempting to createOtherScan with cleaned payload:",a),(await Fa(i,a)).id}catch(n){return this.error=n.message,console.error("[DB_STORE] Error creating other scan:",n),null}finally{this.loading=!1}},async updateOtherScan(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=un(r,"artifacts",s,"other_scans",t);return await $a(i,{...e,updatedAt:De.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async deleteOtherScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=un(n,"artifacts",r,"other_scans",t);return await Pg(s),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchOtherScansForUser(t){this.loading=!0,this.error=null;try{const e=Js(),r=Hs(An(e,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","other_scans"),Ki("userId","==",t)),i=(await zs(r)).docs.map(o=>({id:o.id,...o.data()}));return i.sort((o,c)=>c.date.toDate()-o.date.toDate()),i}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async fetchAllDosesForUser(t,e){this.loading=!0,this.error=null,console.log(`[DB_STORE] Starting fetchAllDosesForUser for userId: ${t}, role: ${e}`);try{const n=[],r=await this.fetchOtherScansForUser(t);console.log("[DB_STORE] other scans:",JSON.parse(JSON.stringify(r))),r.forEach(i=>{i.dosage>0&&n.push({date:i.date,dose:i.dosage})});const s=await this.fetchScansForPatient(t);if(console.log("[DB_STORE] personal scans:",JSON.parse(JSON.stringify(s))),s.forEach(i=>{i.patientDose>0&&n.push({date:i.scanDate,dose:i.patientDose})}),e==="doctor"){const i=await this.fetchDoctorCreatedScans();console.log("[DB_STORE] created scans (for occupational dose):",JSON.parse(JSON.stringify(i))),i.forEach(o=>{o.doctorDose>0&&n.push({date:o.scanDate,dose:o.doctorDose})})}return n}catch(n){return this.error=`Failed to fetch all doses: ${n.message}`,console.error(`[DB_STORE] Error: ${n.message}`),[]}finally{this.loading=!1}}}}),wt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},d2=["dir"],f2={key:0,class:"loading-state"},p2={class:"counter-label"},m2={class:"progress-details"},g2={class:"counter-bar-container"},y2={class:"counter-value"},_2={__name:"MsvCounter",props:{currentMsv:{type:Number,default:0},yearlyLimit:{type:Number,default:1},currentLanguage:String,isLoading:{type:Boolean,default:!0}},setup(t){const e=t,n=Pe(()=>e.currentMsv>=e.yearlyLimit?"status-danger":e.yearlyLimit>0?e.currentMsv/e.yearlyLimit*100<50?"status-safe":"status-warning":"status-safe");return(r,s)=>(B(),G("div",{class:Ts(["msv-counter",n.value]),dir:t.currentLanguage==="en"?"ltr":"rtl"},[t.isLoading?(B(),G("div",f2,I(t.currentLanguage==="en"?"Calculating...":"جاري الحساب..."),1)):(B(),G(et,{key:1},[p("span",p2,I(t.currentLanguage==="en"?"Annual Dose:":"الجرعة السنوية:"),1),p("div",m2,[p("div",g2,[p("div",{class:"counter-bar",style:Bl({width:t.yearlyLimit>0?Math.min(t.currentMsv/t.yearlyLimit*100,100)+"%":"100%"})},null,4)]),p("span",y2,I(t.currentMsv.toFixed(2))+" mSv ",1)])],64))],10,d2))}},v2=wt(_2,[["__scopeId","data-v-401d1770"]]),b2={class:"app-header"},w2={class:"app-header-center"},E2={class:"project-title"},T2={__name:"TheHeader",props:{currentLanguage:String,user:Object,msvData:Object},emits:["toggle-language","toggle-info-modal"],setup(t){return(e,n)=>(B(),G("header",b2,[p("button",{onClick:n[0]||(n[0]=r=>e.$emit("toggle-language")),class:"language-toggle-button"},I(t.currentLanguage==="en"?"العربية":"English"),1),p("div",w2,[p("h1",E2,I(t.currentLanguage==="en"?"mSv Exposure Calculator":"حاسبة التعرض للأشعة"),1),t.user?(B(),Bn(v2,{key:0,"current-msv":t.msvData.current,"yearly-limit":t.msvData.limit,"is-loading":t.msvData.isLoading,"current-language":t.currentLanguage},null,8,["current-msv","yearly-limit","is-loading","current-language"])):Ee("",!0)]),p("button",{onClick:n[1]||(n[1]=r=>e.$emit("toggle-info-modal")),class:"info-button-global"},I(t.currentLanguage==="en"?"Information":"معلومات"),1)]))}},I2=wt(T2,[["__scopeId","data-v-d06322cd"]]),S2={id:"app-container"},A2={class:"main-content"},P2={key:1,class:"loading-fullpage"},C2={__name:"App",setup(t){const e=sn(),n=Di(),r=Te(localStorage.getItem("language")||"en"),s=Te(0),i=Te(20),o=Te(!1),c=h=>{r.value=h,localStorage.setItem("language",h),document.documentElement.lang=h,document.documentElement.dir=h==="ar"?"rtl":"ltr"},a=()=>{c(r.value==="en"?"ar":"en")},u=async()=>{if(console.log("Calculating the msv..."),!e.user?.uid||!e.role){s.value=0;return}const h=await n.fetchAllDosesForUser(e.user.uid,e.role);if(console.log("All doses:",JSON.parse(JSON.stringify(h))),h){const m=new Date(new Date().getFullYear(),0,1),f=C=>C?C.toDate?C.toDate():new Date(C):null,_=h.filter(C=>{const E=f(C.date);return E&&E>=m}).reduce((C,E)=>C+(E.dose||0),0);s.value=parseFloat(_.toFixed(3))}console.log("Finished Calculation")};return Nr("currentLanguage",r),Nr("currentMsv",s),Nr("doseLimit",i),Nr("triggerMsvRecalculation",u),tt(()=>e.userProfile,h=>{e.user&&h?u():e.user||(s.value=0)},{deep:!0,immediate:!0}),c(r.value),(h,m)=>(B(),G("div",S2,[Se(I2,{"current-language":r.value,user:y(e).user,"msv-data":{current:s.value,limit:i.value,isLoading:y(n).loading},onToggleLanguage:a,onToggleInfoModal:m[0]||(m[0]=f=>o.value=!0)},null,8,["current-language","user","msv-data"]),p("main",A2,[y(e).isAuthReady?(B(),Bn(y(R_),{key:0})):(B(),G("div",P2,m[1]||(m[1]=[p("span",null,"Loading Application...",-1)])))])]))}},R2={class:"signup-page"},D2={class:"signup-main-content"},k2={class:"signup-card"},O2=["dir"],x2=["dir"],N2={class:"form-group"},V2=["dir"],M2=["placeholder","dir"],L2={class:"form-group"},$2=["dir"],F2=["placeholder","dir"],U2={class:"form-group"},B2=["dir"],j2=["placeholder","dir"],q2=["disabled"],H2={key:0},z2={key:1},W2=["dir"],G2=["dir"],K2=["disabled"],Y2=["dir"],Q2={__name:"SignupView",setup(t){const e=Ns(),n=sn(),r=$e("currentLanguage"),s=Te(""),i=Te(""),o=Te(""),c=async()=>{if(i.value!==o.value){n.error=r.value==="en"?"Passwords do not match.":"كلمتا المرور غير متطابقتين.";return}await n.signupWithEmail("",s.value,i.value)},a=async()=>{await n.signInWithGoogle()?console.log("Successfully signed in with Google! Redirecting..."):console.error("Google sign-in failed:",n.error)},u=()=>{e.push("/signin")};return(h,m)=>(B(),G("div",R2,[p("main",D2,[p("section",k2,[p("h2",{dir:y(r)==="ar"?"rtl":"ltr"},I(y(r)==="en"?"Welcome! Please Sign Up":"أهلاً بك! يرجى التسجيل"),9,O2),p("p",{dir:y(r)==="ar"?"rtl":"ltr"},I(y(r)==="en"?"Create your account to get started.":"أنشئ حسابك للبدء."),9,x2),p("form",{onSubmit:rt(c,["prevent"]),class:"signup-form"},[p("div",N2,[p("label",{for:"email",dir:y(r)==="ar"?"rtl":"ltr"},I(y(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,V2),le(p("input",{type:"email",id:"email","onUpdate:modelValue":m[0]||(m[0]=f=>s.value=f),placeholder:y(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:y(r)==="ar"?"rtl":"ltr",required:""},null,8,M2),[[_e,s.value]])]),p("div",L2,[p("label",{for:"password",dir:y(r)==="ar"?"rtl":"ltr"},I(y(r)==="en"?"Password":"كلمة المرور"),9,$2),le(p("input",{type:"password",id:"password","onUpdate:modelValue":m[1]||(m[1]=f=>i.value=f),placeholder:y(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:y(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,F2),[[_e,i.value]])]),p("div",U2,[p("label",{for:"confirmPassword",dir:y(r)==="ar"?"rtl":"ltr"},I(y(r)==="en"?"Confirm Password":"تأكيد كلمة المرور"),9,B2),le(p("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":m[2]||(m[2]=f=>o.value=f),placeholder:y(r)==="en"?"Confirm your password":"أكد كلمة المرور",dir:y(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,j2),[[_e,o.value]])]),p("button",{class:"action-button primary",type:"submit",disabled:y(n).loading},[y(n).loading?(B(),G("span",H2,I(y(r)==="en"?"Signing Up...":"جاري التسجيل..."),1)):(B(),G("span",z2,I(y(r)==="en"?"Create Account":"إنشاء حساب"),1))],8,q2)],32),y(n).error?(B(),G("div",{key:0,class:"message error-message",dir:y(r)==="ar"?"rtl":"ltr"},I(y(n).error),9,W2)):Ee("",!0),p("div",{class:"divider",dir:y(r)==="ar"?"rtl":"ltr"},[p("span",null,I(y(r)==="en"?"OR":"أو"),1)],8,G2),p("button",{onClick:a,class:"action-button google-button",disabled:y(n).loading},[m[3]||(m[3]=h_('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a6c83a63><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-a6c83a63></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-a6c83a63></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-a6c83a63></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-a6c83a63></path></svg>',1)),p("span",null,I(y(r)==="en"?"Sign Up with Google":"التسجيل باستخدام جوجل"),1)],8,K2),p("p",{class:"switch-link-container",dir:y(r)==="ar"?"rtl":"ltr"},[mt(I(y(r)==="en"?"Already have an account?":"هل لديك حساب بالفعل؟")+" ",1),p("a",{href:"#",onClick:rt(u,["prevent"])},I(y(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,Y2)])])]))}},X2=wt(Q2,[["__scopeId","data-v-a6c83a63"]]),J2={class:"login-page"},Z2={class:"login-main-content"},ek={class:"login-card"},tk=["dir"],nk=["dir"],rk={class:"form-group"},sk=["dir"],ik=["placeholder","dir"],ok={class:"form-group"},ak=["dir"],lk=["placeholder","dir"],ck=["dir"],uk=["disabled"],hk={key:0},dk={key:1},fk=["dir"],pk=["dir"],mk=["dir"],gk=["disabled"],yk=["dir"],_k={__name:"SigninView",setup(t){const e=Ns(),n=sn(),r=$e("currentLanguage"),s=Te(""),i=Te(""),o=async()=>{await n.signInWithEmail(s.value,i.value)},c=async()=>{await n.signInWithGoogle()},a=()=>{e.push("/")},u=()=>{e.push("/resetpassword")};return(h,m)=>(B(),G("div",J2,[p("main",Z2,[p("section",ek,[p("h2",{dir:y(r)==="ar"?"rtl":"ltr"},I(y(r)==="en"?"Welcome Back! Please Sign In":"أهلاً بعودتك! يرجى تسجيل الدخول"),9,tk),p("p",{dir:y(r)==="ar"?"rtl":"ltr"},I(y(r)==="en"?"Sign in to access your dashboard.":"سجّل الدخول للوصول إلى لوحة التحكم الخاصة بك."),9,nk),p("form",{onSubmit:rt(o,["prevent"]),class:"login-form"},[p("div",rk,[p("label",{for:"email",dir:y(r)==="ar"?"rtl":"ltr"},I(y(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,sk),le(p("input",{type:"email",id:"email","onUpdate:modelValue":m[0]||(m[0]=f=>s.value=f),placeholder:y(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:y(r)==="ar"?"rtl":"ltr",required:""},null,8,ik),[[_e,s.value]])]),p("div",ok,[p("label",{for:"password",dir:y(r)==="ar"?"rtl":"ltr"},I(y(r)==="en"?"Password":"كلمة المرور"),9,ak),le(p("input",{type:"password",id:"password","onUpdate:modelValue":m[1]||(m[1]=f=>i.value=f),placeholder:y(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:y(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,lk),[[_e,i.value]]),p("p",{class:"forgot-password-link",dir:y(r)==="ar"?"rtl":"ltr"},[p("a",{href:"#",onClick:rt(u,["prevent"])},I(y(r)==="en"?"Forgot your password?":"هل نسيت كلمة المرور؟"),1)],8,ck)]),p("button",{class:"action-button primary",type:"submit",disabled:y(n).loading},[y(n).loading?(B(),G("span",hk,I(y(r)==="en"?"Signing In...":"جاري تسجيل الدخول..."),1)):(B(),G("span",dk,I(y(r)==="en"?"Sign in":"تسجيل الدخول"),1))],8,uk)],32),y(n).error?(B(),G("div",{key:0,class:"message error-message",dir:y(r)==="ar"?"rtl":"ltr"},I(y(n).error),9,fk)):Ee("",!0),y(n).successMessage?(B(),G("div",{key:1,class:"message success-message",dir:y(r)==="ar"?"rtl":"ltr"},I(y(n).successMessage),9,pk)):Ee("",!0),p("div",{class:"divider",dir:y(r)==="ar"?"rtl":"ltr"},[p("span",null,I(y(r)==="en"?"OR":"أو"),1)],8,mk),p("button",{onClick:c,class:"action-button google-button",disabled:y(n).loading},[m[2]||(m[2]=h_('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3884b703><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-3884b703></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-3884b703></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-3884b703></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-3884b703></path></svg>',1)),p("span",null,I(y(r)==="en"?"Sign in with Google":"تسجيل الدخول باستخدام جوجل"),1)],8,gk),p("p",{class:"switch-link-container",dir:y(r)==="ar"?"rtl":"ltr"},[mt(I(y(r)==="en"?"Don't have an account?":"ليس لديك حساب؟")+" ",1),p("a",{href:"#",onClick:rt(a,["prevent"])},I(y(r)==="en"?"Sign Up":"التسجيل"),1)],8,yk)])])]))}},vk=wt(_k,[["__scopeId","data-v-3884b703"]]),bk=["dir"],wk={class:"recommend-main-content"},Ek={class:"recommend-card"},Tk={class:"mode-switcher"},Ik={key:0,class:"loading-overlay"},Sk={key:1,class:"patient-info-display"},Ak={class:"form-group"},Pk=["disabled"],Ck={class:"form-group"},Rk=["disabled"],Dk={class:"form-group"},kk=["disabled"],Ok={value:"male"},xk={value:"female"},Nk={key:0,class:"pregnancy-section"},Vk={class:"form-group checkbox-group"},Mk=["disabled"],Lk={key:0,class:"form-group"},$k=["disabled"],Fk={class:"form-group"},Uk=["disabled"],Bk={class:"form-group"},jk={key:1,class:"doctor-exposure-section"},qk={class:"section-title"},Hk={class:"form-group"},zk={class:"section-title"},Wk={class:"form-group"},Gk={disabled:"",value:""},Kk=["value"],Yk={key:2,class:"form-group"},Qk={class:"form-row"},Xk={class:"form-group"},Jk={value:"CT"},Zk={value:"X-ray"},eO={class:"form-group"},tO={disabled:"",value:""},nO=["value"],rO={key:3,class:"form-group"},sO=["placeholder"],iO=["disabled"],oO={key:2,class:"message error-message"},aO={key:3,class:"prediction-result-wrapper"},lO={key:0,class:"message warning-message"},cO={class:"prediction-result"},uO={class:"msv-details-container"},hO={key:0,class:"msv-details"},dO={key:1,class:"msv-details doctor-dose"},fO={class:"result-text"},pO={class:"save-recommendation-section"},mO=["disabled"],gO={class:"save-note"},yO={class:"switch-link-container"},_O={__name:"RecommendView",setup(t){const e=Ns(),n=WT(),r=sn(),s=Di(),i=$e("currentLanguage"),o=$e("currentMsv"),c=$e("doseLimit"),a=$e("triggerMsvRecalculation"),u={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},h=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],m=Te("personal"),f=Te({patientId:null,patientName:"",birthDate:"",gender:"male",weight:null,patientCumulativeDose:0,medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",scanType:"CT",scanPlace:"",otherScanPlaceDescription:"",subScanType:"",otherScanDescription:"",numberOfScans:1,doctorAdditionalContext:""}),_=Te(!1),C=Te(!1),E=Te(!1),T=Te(null),N=Te(""),x=Pe(()=>r.role),V=Pe(()=>x.value==="doctor"&&m.value==="personal"),$=Pe(()=>u[f.value.scanType]||[]),W=Pe(()=>f.value.subScanType==="Other"),J=Pe(()=>f.value.scanPlace==="other"),P=Pe(()=>m.value==="personal"?i.value==="en"?"Your Estimated Dose":"جرعتك المقدرة":i.value==="en"?"Patient Dose":"جرعة المريض"),b=Pe(()=>i.value==="en"?"Occupational Dose":"الجرعة المهنية"),w=Pe(()=>!T.value||T.value.doctorOccupationalMsv==null?!1:!(x.value==="doctor"&&m.value==="personal")),A=()=>{f.value={patientId:null,patientName:"",birthDate:"",gender:"male",weight:null,patientCumulativeDose:0,medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",scanType:"CT",scanPlace:"",otherScanPlaceDescription:"",subScanType:"",otherScanDescription:"",numberOfScans:1,doctorAdditionalContext:""}},O=ae=>ae?(typeof ae.toDate=="function"?ae.toDate():new Date(ae)).toISOString().split("T")[0]:"",D=async ae=>{if(ae){E.value=!0,A();try{let U=ae===r.user?.uid?r.userProfile:await s.fetchSinglePatient(ae);if(U){f.value.patientId=ae,f.value.patientName=U.displayName||U.name||"",f.value.birthDate=O(U.birthDate),f.value.weight=U.weight||null,f.value.gender=U.gender||"male",f.value.isPregnant=U.isPregnant||!1,f.value.estimatedDueDate=O(U.estimatedDueDate),f.value.medicalHistory=Array.isArray(U.medicalHistory)?U.medicalHistory.join(", "):"",f.value.allergies=Array.isArray(U.allergies)?U.allergies.join(", "):"";const Y=await s.fetchScansForPatient(ae);if(Y){const ke=new Date(new Date().getFullYear(),0,1),pt=Qe=>Qe?Qe.toDate?Qe.toDate():new Date(Qe):null,Et=Y.filter(Qe=>pt(Qe.scanDate)>=ke);f.value.patientCumulativeDose=parseFloat(Et.reduce((Qe,Ue)=>Qe+(Ue.patientDose||0),0).toFixed(3))}}}catch(U){console.error("Error fetching patient details:",U),N.value=i.value==="en"?"Failed to load patient data.":"فشل في تحميل بيانات المريض."}finally{E.value=!1}}};tt(m,ae=>{T.value=null,ae==="personal"&&r.user?D(r.user.uid):n.query.patientId||A()}),tt(()=>n.query.patientId,ae=>{ae?(m.value="general",D(ae)):r.user&&(m.value="personal",D(r.user.uid))},{immediate:!0}),tt(()=>f.value.isPregnant,ae=>{ae||(f.value.estimatedDueDate="")}),tt(()=>f.value.scanType,()=>{f.value.subScanType="",f.value.otherScanDescription="",f.value.numberOfScans=1});const S=async()=>{if(_.value=!0,N.value="",T.value=null,!f.value.birthDate||!f.value.scanPlace||J.value&&!f.value.otherScanPlaceDescription||!f.value.subScanType||W.value&&!f.value.otherScanDescription){N.value=i.value==="en"?"Please complete all required fields.":"يرجى إكمال جميع الحقول المطلوبة.",_.value=!1;return}if(f.value.isPregnant&&!f.value.estimatedDueDate){N.value=i.value==="en"?"Estimated Due Date is required for pregnant patients.":"تاريخ الولادة المتوقع مطلوب للحامل.",_.value=!1;return}const ae=new Date().getFullYear()-new Date(f.value.birthDate).getFullYear(),U=f.value.weight?`Weight: ${f.value.weight} kg.`:"Weight: Not provided.";let Y="Not pregnant.";f.value.isPregnant&&f.value.estimatedDueDate&&(Y=`Pregnant with an estimated due date of ${f.value.estimatedDueDate}. The AI must carefully weigh risks, especially during the first trimester.`);const ke=W.value?f.value.otherScanDescription:f.value.subScanType,pt=h.find(jt=>jt.value===f.value.scanPlace);let Et="";J.value?Et=f.value.otherScanPlaceDescription:pt&&(Et=i.value==="en"?pt.en:pt.ar);let Qe=`a ${f.value.scanType} of the ${Et} with protocol "${ke}"`;f.value.scanType==="X-ray"&&f.value.numberOfScans>1&&(Qe+=` (procedure involves ${f.value.numberOfScans} scans)`);let Ue="",We={};x.value==="doctor"?(V.value?Ue=`
As a medical radiation safety advisor, provide a recommendation for a doctor who is also the patient.
- Scenario Context: The doctor IS THE PATIENT.
- Doctor's State: My annual occupational dose is ${o.value.toFixed(2)} mSv. The annual limit is ${c.value} mSv.
- Patient Details (My Details): Age: ${ae}, Gender: ${f.value.gender}. ${U}. Pregnancy Status: ${Y}. My cumulative dose this year: ${f.value.patientCumulativeDose} mSv.
- Scan I am considering: ${Qe}
- My Exposure Context: ${f.value.doctorAdditionalContext||"No additional context provided."}
Tasks:
1. **Recommendation (recommendationText):** Justify if the scan is appropriate for me.
2. **Patient Dose (patientCalculatedMsv):** Estimate my effective dose in mSv from THIS SCAN.
3. **Occupational Dose (doctorOccupationalMsv):** This MUST be 0 because I am the patient.
4. **Warning (Warning):** Warn if my new total dose (occupational + patient) exceeds any limits.
Respond ONLY with valid JSON in ${i.value==="en"?"English":"Arabic"}.`:(Ue=`
As a medical radiation safety advisor, provide a recommendation for a patient scan, adhering strictly to the ALARA principle.
- Scenario Context: A doctor is the PRACTITIONER for another patient.
- Doctor's State: The doctor's annual occupational dose is ${o.value.toFixed(2)} mSv. The annual limit is ${c.value} mSv.
- Patient Details: Age: ${ae}, Gender: ${f.value.gender}. ${U}. Pregnancy Status: ${Y}. Patient's cumulative dose this year: ${f.value.patientCumulativeDose} mSv.
- Scan being considered for the patient: ${Qe}
- Doctor's Exposure Context: ${f.value.doctorAdditionalContext||"No additional context provided."}
Tasks:
1. **Recommendation (recommendationText):** Justify if the scan is appropriate for the patient.
2. **Patient Dose (patientCalculatedMsv):** Estimate the patient's effective dose in mSv from THIS SCAN.
3. **Occupational Dose (doctorOccupationalMsv):** Estimate the doctor's occupational dose in mSv from performing this procedure. `,f.value.scanType==="X-ray"&&f.value.numberOfScans>1&&(Ue+=`This must be the TOTAL dose for all ${f.value.numberOfScans} scans combined.`),Ue+=`
4. **Warning (Warning):** Warn if the patient's new total dose will exceed the public limit, OR if the doctor's new occupational dose exceeds their limit.
Respond ONLY with valid JSON in ${i.value==="en"?"English":"Arabic"}.`),We={type:"OBJECT",properties:{recommendationText:{type:"STRING"},patientCalculatedMsv:{type:"NUMBER"},doctorOccupationalMsv:{type:"NUMBER"},Warning:{type:"STRING"}},required:["recommendationText","patientCalculatedMsv","doctorOccupationalMsv","Warning"]}):(Ue=`
As a patient advocate, explain a medical scan.
- My estimated radiation dose this year: ${f.value.patientCumulativeDose} mSv.
- My Details: Born on ${f.value.birthDate}, Gender: ${f.value.gender}, ${U}, Pregnancy: ${Y}.
- Scan being considered: ${Qe}
Tasks:
1. **Information (recommendationText):** Explain the purpose of this scan in simple terms.
2. **Dose Estimation (patientCalculatedMsv):** Estimate my dose in mSv from THIS SCAN.
3. **Warning (Warning):** If my new total dose exceeds 1 mSv, provide a clear warning.
Respond ONLY with valid JSON in ${i.value==="en"?"English":"Arabic"}.`,We={type:"OBJECT",properties:{recommendationText:{type:"STRING"},patientCalculatedMsv:{type:"NUMBER"},Warning:{type:"STRING"}},required:["recommendationText","patientCalculatedMsv","Warning"]});try{const j=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:Ue}]}],generationConfig:{responseMimeType:"application/json",responseSchema:We}})});if(!j.ok)throw new Error(`API Error: ${j.statusText}`);const ce=await j.json();T.value=JSON.parse(ce.candidates[0].content.parts[0].text)}catch(jt){console.error("Error getting recommendation:",jt),N.value=i.value==="en"?`An error occurred: ${jt.message}`:`حدث خطأ: ${jt.message}`}finally{_.value=!1}},xe=async()=>{if(!T.value||!f.value.patientId){alert("No recommendation data to save or patient ID is missing.");return}C.value=!0;try{const ae=f.value.scanPlace==="other"?f.value.otherScanPlaceDescription:f.value.scanPlace,U=f.value.subScanType==="Other"?f.value.otherScanDescription:f.value.subScanType,Y={patientId:f.value.patientId,scanType:f.value.scanType,scanPlace:ae,scanDetail:U,numberOfScans:f.value.numberOfScans,scanDate:De.now(),patientDose:Number(T.value.patientCalculatedMsv)||0,doctorDose:Number(T.value.doctorOccupationalMsv)||0,reason:f.value.currentSymptoms||"As per AI recommendation",notes:T.value.recommendationText,isPersonalScan:m.value==="personal"};if(await s.createScan(Y))alert(i.value==="en"?"Scan record saved successfully!":"!تم حفظ سجل الفحص بنجاح"),a&&a(),T.value=null;else throw new Error(s.error)}catch(ae){console.error("Error saving scan from recommendation:",ae),alert(i.value==="en"?`Failed to save scan: ${ae.message}`:`فشل حفظ الفحص: ${ae.message}`)}finally{C.value=!1}};return(ae,U)=>(B(),G("div",{class:"recommend-page",dir:y(i)==="ar"?"rtl":"ltr"},[p("main",wk,[p("section",Ek,[p("h2",null,I(y(i)==="en"?"Medical Scan Recommendation":"توصية الفحص الطبي"),1),p("p",null,I(y(i)==="en"?"Get an AI-powered recommendation based on patient details and radiation safety principles.":"احصل على توصية مدعومة بالذكاء الاصطناعي بناءً على تفاصيل المريض ومبادئ السلامة من الإشعاع."),1),p("div",Tk,[p("button",{class:Ts({active:m.value==="personal"}),onClick:U[0]||(U[0]=Y=>m.value="personal")},I(y(i)==="en"?"For Myself":"لنفسي"),3),x.value==="doctor"?(B(),G("button",{key:0,class:Ts({active:m.value==="general"}),onClick:U[1]||(U[1]=Y=>m.value="general")},I(y(i)==="en"?"For Another Patient":"لمريض آخر"),3)):Ee("",!0)]),E.value?(B(),G("div",Ik,[p("span",null,I(y(i)==="en"?"Loading Patient Data...":"جاري تحميل بيانات المريض..."),1)])):Ee("",!0),f.value.patientId&&f.value.patientName?(B(),G("div",Sk,[mt(I(y(i)==="en"?"Getting recommendation for:":"الحصول على توصية لـ:")+" ",1),p("strong",null,I(f.value.patientName),1),mt(" ("+I(f.value.weight?`${f.value.weight} kg`:"Weight N/A")+") ",1)])):Ee("",!0),p("form",{onSubmit:rt(S,["prevent"]),class:"recommend-form"},[p("div",Ak,[p("label",null,I(y(i)==="en"?"Weight (kg)":"الوزن (كجم)"),1),le(p("input",{type:"number",step:"0.1","onUpdate:modelValue":U[2]||(U[2]=Y=>f.value.weight=Y),disabled:m.value==="personal",placeholder:"e.g. 70.5"},null,8,Pk),[[_e,f.value.weight]])]),p("div",Ck,[p("label",null,[mt(I(y(i)==="en"?"Date of Birth":"تاريخ الميلاد")+" ",1),U[16]||(U[16]=p("span",{class:"required-indicator"},"*",-1))]),le(p("input",{type:"date","onUpdate:modelValue":U[3]||(U[3]=Y=>f.value.birthDate=Y),disabled:m.value==="personal",required:""},null,8,Rk),[[_e,f.value.birthDate]])]),p("div",Dk,[p("label",null,[mt(I(y(i)==="en"?"Gender":"الجنس")+" ",1),U[17]||(U[17]=p("span",{class:"required-indicator"},"*",-1))]),le(p("select",{"onUpdate:modelValue":U[4]||(U[4]=Y=>f.value.gender=Y),disabled:m.value==="personal",required:""},[p("option",Ok,I(y(i)==="en"?"Male":"ذكر"),1),p("option",xk,I(y(i)==="en"?"Female":"أنثى"),1)],8,kk),[[vt,f.value.gender]])]),f.value.gender==="female"?(B(),G("div",Nk,[p("div",Vk,[p("label",null,[le(p("input",{type:"checkbox","onUpdate:modelValue":U[5]||(U[5]=Y=>f.value.isPregnant=Y),disabled:m.value==="personal"},null,8,Mk),[[Ql,f.value.isPregnant]]),p("span",null,I(y(i)==="en"?"Is Pregnant?":"هل هي حامل؟"),1)])]),f.value.isPregnant?(B(),G("div",Lk,[p("label",null,[mt(I(y(i)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع")+" ",1),U[18]||(U[18]=p("span",{class:"required-indicator"},"*",-1))]),le(p("input",{type:"date","onUpdate:modelValue":U[6]||(U[6]=Y=>f.value.estimatedDueDate=Y),disabled:m.value==="personal",required:""},null,8,$k),[[_e,f.value.estimatedDueDate]])])):Ee("",!0)])):Ee("",!0),p("div",Fk,[p("label",null,I(y(i)==="en"?"Relevant Medical History":"التاريخ الطبي ذو الصلة"),1),le(p("textarea",{"onUpdate:modelValue":U[7]||(U[7]=Y=>f.value.medicalHistory=Y),rows:"3",disabled:m.value==="personal"},null,8,Uk),[[_e,f.value.medicalHistory]])]),p("div",Bk,[p("label",null,I(y(i)==="en"?"Current Symptoms":"الأعراض الحالية"),1),le(p("textarea",{"onUpdate:modelValue":U[8]||(U[8]=Y=>f.value.currentSymptoms=Y),rows:"3"},null,512),[[_e,f.value.currentSymptoms]])]),x.value==="doctor"&&m.value==="general"?(B(),G("div",jk,[p("h3",qk,I(y(i)==="en"?"Occupational Exposure Context":"سياق التعرض المهني"),1),p("div",Hk,[p("label",null,I(y(i)==="en"?"Your positioning, shielding, etc. (Optional)":"موقعك، التدريع المستخدم، إلخ (اختياري)"),1),le(p("textarea",{"onUpdate:modelValue":U[9]||(U[9]=Y=>f.value.doctorAdditionalContext=Y),rows:"3"},null,512),[[_e,f.value.doctorAdditionalContext]])])])):Ee("",!0),p("h3",zk,I(y(i)==="en"?"Scan to Consider":"الفحص المقترح"),1),p("div",Wk,[p("label",null,[mt(I(y(i)==="en"?"Place of Scan":"مكان الفحص")+" ",1),U[19]||(U[19]=p("span",{class:"required-indicator"},"*",-1))]),le(p("select",{"onUpdate:modelValue":U[10]||(U[10]=Y=>f.value.scanPlace=Y),required:""},[p("option",Gk,I(y(i)==="en"?"Select...":"اختر..."),1),(B(),G(et,null,fn(h,Y=>p("option",{key:Y.value,value:Y.value},I(y(i)==="en"?Y.en:Y.ar),9,Kk)),64))],512),[[vt,f.value.scanPlace]])]),J.value?(B(),G("div",Yk,[p("label",null,[mt(I(y(i)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر")+" ",1),U[20]||(U[20]=p("span",{class:"required-indicator"},"*",-1))]),le(p("input",{type:"text","onUpdate:modelValue":U[11]||(U[11]=Y=>f.value.otherScanPlaceDescription=Y),required:""},null,512),[[_e,f.value.otherScanPlaceDescription]])])):Ee("",!0),p("div",Qk,[p("div",Xk,[p("label",null,[mt(I(y(i)==="en"?"Scan Category":"فئة الفحص")+" ",1),U[21]||(U[21]=p("span",{class:"required-indicator"},"*",-1))]),le(p("select",{"onUpdate:modelValue":U[12]||(U[12]=Y=>f.value.scanType=Y),required:""},[p("option",Jk,I(y(i)==="en"?"CT Scan":"الأشعة المقطعية"),1),p("option",Zk,I(y(i)==="en"?"X-ray":"الأشعة السينية"),1)],512),[[vt,f.value.scanType]])]),p("div",eO,[p("label",null,[mt(I(y(i)==="en"?"Scan Protocol":"بروتوكول الفحص")+" ",1),U[22]||(U[22]=p("span",{class:"required-indicator"},"*",-1))]),le(p("select",{"onUpdate:modelValue":U[13]||(U[13]=Y=>f.value.subScanType=Y),required:""},[p("option",tO,I(y(i)==="en"?"Select...":"اختر..."),1),(B(!0),G(et,null,fn($.value,Y=>(B(),G("option",{key:Y.value,value:Y.value},I(y(i)==="en"?Y.en:Y.ar),9,nO))),128))],512),[[vt,f.value.subScanType]])])]),W.value?(B(),G("div",rO,[p("label",null,[mt(I(y(i)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص")+" ",1),U[23]||(U[23]=p("span",{class:"required-indicator"},"*",-1))]),le(p("input",{type:"text","onUpdate:modelValue":U[14]||(U[14]=Y=>f.value.otherScanDescription=Y),placeholder:y(i)==="en"?"e.g., Chest X-ray":"مثال: أشعة سينية للصدر",required:""},null,8,sO),[[_e,f.value.otherScanDescription]])])):Ee("",!0),p("button",{type:"submit",disabled:_.value,class:"action-button"},I(_.value?y(i)==="en"?"Getting Recommendations...":"جاري الحصول على التوصيات...":y(i)==="en"?"Get Recommendation":"الحصول على توصية"),9,iO)],32),N.value?(B(),G("div",oO,I(N.value),1)):Ee("",!0),T.value?(B(),G("div",aO,[T.value.Warning?(B(),G("div",lO,[p("h4",null,I(y(i)==="en"?"Important Warning":"تحذير هام"),1),p("p",null,I(T.value.Warning),1)])):Ee("",!0),p("div",cO,[p("h3",null,I(y(i)==="en"?"AI Powered Recommendation":"التوصية المدعومة بالذكاء الاصطناعي"),1),p("div",uO,[T.value.patientCalculatedMsv!==null?(B(),G("div",hO,[p("h4",null,I(P.value),1),p("p",null,[p("strong",null,I(T.value.patientCalculatedMsv)+" mSv",1)])])):Ee("",!0),w.value?(B(),G("div",dO,[p("h4",null,I(b.value),1),p("p",null,[p("strong",null,I(T.value.doctorOccupationalMsv)+" mSv",1)])])):Ee("",!0)]),p("div",fO,[p("h4",null,I(y(i)==="en"?"Recommendation":"التوصية"),1),p("p",null,I(T.value.recommendationText),1)])]),p("div",pO,[p("button",{onClick:xe,disabled:C.value,class:"action-button save-button"},I(C.value?y(i)==="en"?"Saving...":"...جاري الحفظ":y(i)==="en"?"Save Recommendation as Scan":"حفظ التوصية كفحص"),9,mO),p("p",gO,I(y(i)==="en"?"This will create a new scan record with today's date using the estimated doses.":"سيؤدي هذا إلى إنشاء سجل فحص جديد بتاريخ اليوم باستخدام الجرعات المقدرة."),1)])])):Ee("",!0),p("p",yO,[p("a",{href:"#",onClick:U[15]||(U[15]=rt(Y=>y(e).push("/dashboard"),["prevent"]))},I(y(i)==="en"?"Back to Dashboard":"العودة إلى لوحة التحكم"),1)])])])],8,bk))}},vO=wt(_O,[["__scopeId","data-v-f020e0d9"]]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function bO(t,e,n){return(e=EO(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Cg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cg(Object(n),!0).forEach(function(r){bO(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function wO(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function EO(t){var e=wO(t,"string");return typeof e=="symbol"?e:e+""}const Rg=()=>{};let Hd={},cb={},ub=null,hb={mark:Rg,measure:Rg};try{typeof window<"u"&&(Hd=window),typeof document<"u"&&(cb=document),typeof MutationObserver<"u"&&(ub=MutationObserver),typeof performance<"u"&&(hb=performance)}catch{}const{userAgent:Dg=""}=Hd.navigator||{},Zr=Hd,nt=cb,kg=ub,Ua=hb;Zr.document;const mr=!!nt.documentElement&&!!nt.head&&typeof nt.addEventListener=="function"&&typeof nt.createElement=="function",db=~Dg.indexOf("MSIE")||~Dg.indexOf("Trident/");var TO=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,IO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,fb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},SO={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},pb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Bt="classic",Ec="duotone",AO="sharp",PO="sharp-duotone",mb=[Bt,Ec,AO,PO],CO={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},RO={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},DO=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),kO={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},OO=["fak","fa-kit","fakd","fa-kit-duotone"],Og={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},xO=["kit"],NO={kit:{"fa-kit":"fak"}},VO=["fak","fakd"],MO={kit:{fak:"fa-kit"}},xg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ba={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},LO=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],$O=["fak","fa-kit","fakd","fa-kit-duotone"],FO={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},UO={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},BO={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},uh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},jO=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],hh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...LO,...jO],qO=["solid","regular","light","thin","duotone","brands"],gb=[1,2,3,4,5,6,7,8,9,10],HO=gb.concat([11,12,13,14,15,16,17,18,19,20]),zO=[...Object.keys(BO),...qO,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ba.GROUP,Ba.SWAP_OPACITY,Ba.PRIMARY,Ba.SECONDARY].concat(gb.map(t=>"".concat(t,"x"))).concat(HO.map(t=>"w-".concat(t))),WO={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ur="___FONT_AWESOME___",dh=16,yb="fa",_b="svg-inline--fa",Ds="data-fa-i2svg",fh="data-fa-pseudo-element",GO="data-fa-pseudo-element-pending",zd="data-prefix",Wd="data-icon",Ng="fontawesome-i2svg",KO="async",YO=["HTML","HEAD","STYLE","SCRIPT"],vb=(()=>{try{return!0}catch{return!1}})();function ca(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Bt]}})}const bb=Z({},fb);bb[Bt]=Z(Z(Z(Z({},{"fa-duotone":"duotone"}),fb[Bt]),Og.kit),Og["kit-duotone"]);const QO=ca(bb),ph=Z({},kO);ph[Bt]=Z(Z(Z(Z({},{duotone:"fad"}),ph[Bt]),xg.kit),xg["kit-duotone"]);const Vg=ca(ph),mh=Z({},uh);mh[Bt]=Z(Z({},mh[Bt]),MO.kit);const Gd=ca(mh),gh=Z({},UO);gh[Bt]=Z(Z({},gh[Bt]),NO.kit);ca(gh);const XO=TO,wb="fa-layers-text",JO=IO,ZO=Z({},CO);ca(ZO);const ex=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mu=SO,tx=[...xO,...zO],wo=Zr.FontAwesomeConfig||{};function nx(t){var e=nt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function rx(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}nt&&typeof nt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=rx(nx(n));s!=null&&(wo[r]=s)});const Eb={styleDefault:"solid",familyDefault:Bt,cssPrefix:yb,replacementClass:_b,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wo.familyPrefix&&(wo.cssPrefix=wo.familyPrefix);const bi=Z(Z({},Eb),wo);bi.autoReplaceSvg||(bi.observeMutations=!1);const fe={};Object.keys(Eb).forEach(t=>{Object.defineProperty(fe,t,{enumerable:!0,set:function(e){bi[t]=e,Eo.forEach(n=>n(fe))},get:function(){return bi[t]}})});Object.defineProperty(fe,"familyPrefix",{enumerable:!0,set:function(t){bi.cssPrefix=t,Eo.forEach(e=>e(fe))},get:function(){return bi.cssPrefix}});Zr.FontAwesomeConfig=fe;const Eo=[];function sx(t){return Eo.push(t),()=>{Eo.splice(Eo.indexOf(t),1)}}const Ir=dh,Dn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ix(t){if(!t||!mr)return;const e=nt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=nt.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return nt.head.insertBefore(e,r),t}const ox="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function jo(){let t=12,e="";for(;t-- >0;)e+=ox[Math.random()*62|0];return e}function ki(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Kd(t){return t.classList?ki(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Tb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ax(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Tb(t[n]),'" '),"").trim()}function Tc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Yd(t){return t.size!==Dn.size||t.x!==Dn.x||t.y!==Dn.y||t.rotate!==Dn.rotate||t.flipX||t.flipY}function lx(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),a={transform:"".concat(i," ").concat(o," ").concat(c)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:a,path:u}}function cx(t){let{transform:e,width:n=dh,height:r=dh,startCentered:s=!1}=t,i="";return s&&db?i+="translate(".concat(e.x/Ir-n/2,"em, ").concat(e.y/Ir-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Ir,"em), calc(-50% + ").concat(e.y/Ir,"em)) "):i+="translate(".concat(e.x/Ir,"em, ").concat(e.y/Ir,"em) "),i+="scale(".concat(e.size/Ir*(e.flipX?-1:1),", ").concat(e.size/Ir*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var ux=`:root, :host {
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
}`;function Ib(){const t=yb,e=_b,n=fe.cssPrefix,r=fe.replacementClass;let s=ux;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(r))}return s}let Mg=!1;function gu(){fe.autoAddCss&&!Mg&&(ix(Ib()),Mg=!0)}var hx={mixout(){return{dom:{css:Ib,insertCss:gu}}},hooks(){return{beforeDOMElementCreation(){gu()},beforeI2svg(){gu()}}}};const hr=Zr||{};hr[ur]||(hr[ur]={});hr[ur].styles||(hr[ur].styles={});hr[ur].hooks||(hr[ur].hooks={});hr[ur].shims||(hr[ur].shims=[]);var kn=hr[ur];const Sb=[],Ab=function(){nt.removeEventListener("DOMContentLoaded",Ab),xl=1,Sb.map(t=>t())};let xl=!1;mr&&(xl=(nt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(nt.readyState),xl||nt.addEventListener("DOMContentLoaded",Ab));function dx(t){mr&&(xl?setTimeout(t,0):Sb.push(t))}function ua(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Tb(t):"<".concat(e," ").concat(ax(n),">").concat(r.map(ua).join(""),"</").concat(e,">")}function Lg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yu=function(e,n,r,s){var i=Object.keys(e),o=i.length,c=n,a,u,h;for(r===void 0?(a=1,h=e[i[0]]):(a=0,h=r);a<o;a++)u=i[a],h=c(h,e[u],u,e);return h};function fx(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function yh(t){const e=fx(t);return e.length===1?e[0].toString(16):null}function px(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function $g(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function _h(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=$g(e);typeof kn.hooks.addPack=="function"&&!r?kn.hooks.addPack(t,$g(e)):kn.styles[t]=Z(Z({},kn.styles[t]||{}),s),t==="fas"&&_h("fa",e)}const{styles:qo,shims:mx}=kn,Pb=Object.keys(Gd),gx=Pb.reduce((t,e)=>(t[e]=Object.keys(Gd[e]),t),{});let Qd=null,Cb={},Rb={},Db={},kb={},Ob={};function yx(t){return~tx.indexOf(t)}function _x(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!yx(s)?s:null}const xb=()=>{const t=r=>yu(qo,(s,i,o)=>(s[o]=yu(i,r,{}),s),{});Cb=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(c=>typeof c=="number").forEach(c=>{r[c.toString(16)]=i}),r)),Rb=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(c=>typeof c=="string").forEach(c=>{r[c]=i}),r)),Ob=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(c=>{r[c]=i}),r});const e="far"in qo||fe.autoFetchSvg,n=yu(mx,(r,s)=>{const i=s[0];let o=s[1];const c=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:c}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:c}),r},{names:{},unicodes:{}});Db=n.names,kb=n.unicodes,Qd=Ic(fe.styleDefault,{family:fe.familyDefault})};sx(t=>{Qd=Ic(t.styleDefault,{family:fe.familyDefault})});xb();function Xd(t,e){return(Cb[t]||{})[e]}function vx(t,e){return(Rb[t]||{})[e]}function vs(t,e){return(Ob[t]||{})[e]}function Nb(t){return Db[t]||{prefix:null,iconName:null}}function bx(t){const e=kb[t],n=Xd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function es(){return Qd}const Vb=()=>({prefix:null,iconName:null,rest:[]});function wx(t){let e=Bt;const n=Pb.reduce((r,s)=>(r[s]="".concat(fe.cssPrefix,"-").concat(s),r),{});return mb.forEach(r=>{(t.includes(n[r])||t.some(s=>gx[r].includes(s)))&&(e=r)}),e}function Ic(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Bt}=e,r=QO[n][t];if(n===Ec&&!t)return"fad";const s=Vg[n][t]||Vg[n][r],i=t in kn.styles?t:null;return s||i||null}function Ex(t){let e=[],n=null;return t.forEach(r=>{const s=_x(fe.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Fg(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Sc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=hh.concat($O),i=Fg(t.filter(m=>s.includes(m))),o=Fg(t.filter(m=>!hh.includes(m))),c=i.filter(m=>(r=m,!pb.includes(m))),[a=null]=c,u=wx(i),h=Z(Z({},Ex(o)),{},{prefix:Ic(a,{family:u})});return Z(Z(Z({},h),Ax({values:t,family:u,styles:qo,config:fe,canonical:h,givenPrefix:r})),Tx(n,r,h))}function Tx(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?Nb(s):{},o=vs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!qo.far&&qo.fas&&!fe.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const Ix=mb.filter(t=>t!==Bt||t!==Ec),Sx=Object.keys(uh).filter(t=>t!==Bt).map(t=>Object.keys(uh[t])).flat();function Ax(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,c=n===Ec,a=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(a||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Ix.includes(n)&&(Object.keys(i).find(f=>Sx.includes(f))||o.autoFetchSvg)){const f=DO.get(n).defaultShortPrefixId;r.prefix=f,r.iconName=vs(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=es()||"fas"),r}class Px{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=Z(Z({},this.definitions[i]||{}),s[i]),_h(i,s[i]);const o=Gd[Bt][i];o&&_h(o,s[i]),xb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:c}=r[s],a=c[2];e[i]||(e[i]={}),a.length>0&&a.forEach(u=>{typeof u=="string"&&(e[i][u]=c)}),e[i][o]=c}),e}}let Ug=[],Zs={};const li={},Cx=Object.keys(li);function Rx(t,e){let{mixoutsTo:n}=e;return Ug=t,Zs={},Object.keys(li).forEach(r=>{Cx.indexOf(r)===-1&&delete li[r]}),Ug.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Zs[o]||(Zs[o]=[]),Zs[o].push(i[o])})}r.provides&&r.provides(li)}),n}function vh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Zs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function ks(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Zs[t]||[]).forEach(i=>{i.apply(null,n)})}function ts(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return li[t]?li[t].apply(null,e):void 0}function bh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||es();if(e)return e=vs(n,e)||e,Lg(Mb.definitions,n,e)||Lg(kn.styles,n,e)}const Mb=new Px,Dx=()=>{fe.autoReplaceSvg=!1,fe.observeMutations=!1,ks("noAuto")},kx={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(ks("beforeI2svg",t),ts("pseudoElements2svg",t),ts("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;fe.autoReplaceSvg===!1&&(fe.autoReplaceSvg=!0),fe.observeMutations=!0,dx(()=>{xx({autoReplaceSvgRoot:e}),ks("watch",t)})}},Ox={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vs(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ic(t[0]);return{prefix:n,iconName:vs(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(fe.cssPrefix,"-"))>-1||t.match(XO))){const e=Sc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||es(),iconName:vs(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=es();return{prefix:e,iconName:vs(e,t)||t}}}},on={noAuto:Dx,config:fe,dom:kx,parse:Ox,library:Mb,findIconDefinition:bh,toHtml:ua},xx=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=nt}=t;(Object.keys(kn.styles).length>0||fe.autoFetchSvg)&&mr&&fe.autoReplaceSvg&&on.dom.i2svg({node:e})};function Ac(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ua(n))}}),Object.defineProperty(t,"node",{get:function(){if(!mr)return;const n=nt.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Nx(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Yd(o)&&n.found&&!r.found){const{width:c,height:a}=n,u={x:c/a/2,y:.5};s.style=Tc(Z(Z({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function Vx(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(fe.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Z(Z({},s),{},{id:o}),children:r}]}]}function Jd(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:c,maskId:a,titleId:u,extra:h,watchable:m=!1}=t,{width:f,height:_}=n.found?n:e,C=VO.includes(r),E=[fe.replacementClass,s?"".concat(fe.cssPrefix,"-").concat(s):""].filter(W=>h.classes.indexOf(W)===-1).filter(W=>W!==""||!!W).concat(h.classes).join(" ");let T={children:[],attributes:Z(Z({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:E,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(_)})};const N=C&&!~h.classes.indexOf("fa-fw")?{width:"".concat(f/_*16*.0625,"em")}:{};m&&(T.attributes[Ds]=""),c&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(u||jo())},children:[c]}),delete T.attributes.title);const x=Z(Z({},T),{},{prefix:r,iconName:s,main:e,mask:n,maskId:a,transform:i,symbol:o,styles:Z(Z({},N),h.styles)}),{children:V,attributes:$}=n.found&&e.found?ts("generateAbstractMask",x)||{children:[],attributes:{}}:ts("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=V,x.attributes=$,o?Vx(x):Nx(x)}function Bg(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:c=!1}=t,a=Z(Z(Z({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(a[Ds]="");const u=Z({},o.styles);Yd(s)&&(u.transform=cx({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Tc(u);h.length>0&&(a.style=h);const m=[];return m.push({tag:"span",attributes:a,children:[e]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function Mx(t){const{content:e,title:n,extra:r}=t,s=Z(Z(Z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Tc(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:_u}=kn;function wh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(fe.cssPrefix,"-").concat(mu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(fe.cssPrefix,"-").concat(mu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(fe.cssPrefix,"-").concat(mu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const Lx={found:!1,width:512,height:512};function $x(t,e){!vb&&!fe.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Eh(t,e){let n=e;return e==="fa"&&fe.styleDefault!==null&&(e=es()),new Promise((r,s)=>{if(n==="fa"){const i=Nb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&_u[e]&&_u[e][t]){const i=_u[e][t];return r(wh(i))}$x(t,e),r(Z(Z({},Lx),{},{icon:fe.showMissingIcons&&t?ts("missingIconAbstract")||{}:{}}))})}const jg=()=>{},Th=fe.measurePerformance&&Ua&&Ua.mark&&Ua.measure?Ua:{mark:jg,measure:jg},no='FA "6.7.2"',Fx=t=>(Th.mark("".concat(no," ").concat(t," begins")),()=>Lb(t)),Lb=t=>{Th.mark("".concat(no," ").concat(t," ends")),Th.measure("".concat(no," ").concat(t),"".concat(no," ").concat(t," begins"),"".concat(no," ").concat(t," ends"))};var Zd={begin:Fx,end:Lb};const nl=()=>{};function qg(t){return typeof(t.getAttribute?t.getAttribute(Ds):null)=="string"}function Ux(t){const e=t.getAttribute?t.getAttribute(zd):null,n=t.getAttribute?t.getAttribute(Wd):null;return e&&n}function Bx(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(fe.replacementClass)}function jx(){return fe.autoReplaceSvg===!0?rl.replace:rl[fe.autoReplaceSvg]||rl.replace}function qx(t){return nt.createElementNS("http://www.w3.org/2000/svg",t)}function Hx(t){return nt.createElement(t)}function $b(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?qx:Hx}=e;if(typeof t=="string")return nt.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild($b(i,{ceFn:n}))}),r}function zx(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const rl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore($b(n),e)}),e.getAttribute(Ds)===null&&fe.keepOriginalSource){let n=nt.createComment(zx(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Kd(e).indexOf(fe.replacementClass))return rl.replace(t);const r=new RegExp("".concat(fe.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,c)=>(c===fe.replacementClass||c.match(r)?o.toSvg.push(c):o.toNode.push(c),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>ua(i)).join(`
`);e.setAttribute(Ds,""),e.innerHTML=s}};function Hg(t){t()}function Fb(t,e){const n=typeof e=="function"?e:nl;if(t.length===0)n();else{let r=Hg;fe.mutateApproach===KO&&(r=Zr.requestAnimationFrame||Hg),r(()=>{const s=jx(),i=Zd.begin("mutate");t.map(s),i(),n()})}}let ef=!1;function Ub(){ef=!0}function Ih(){ef=!1}let Nl=null;function zg(t){if(!kg||!fe.observeMutations)return;const{treeCallback:e=nl,nodeCallback:n=nl,pseudoElementsCallback:r=nl,observeMutationsRoot:s=nt}=t;Nl=new kg(i=>{if(ef)return;const o=es();ki(i).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!qg(c.addedNodes[0])&&(fe.searchPseudoElements&&r(c.target),e(c.target)),c.type==="attributes"&&c.target.parentNode&&fe.searchPseudoElements&&r(c.target.parentNode),c.type==="attributes"&&qg(c.target)&&~ex.indexOf(c.attributeName))if(c.attributeName==="class"&&Ux(c.target)){const{prefix:a,iconName:u}=Sc(Kd(c.target));c.target.setAttribute(zd,a||o),u&&c.target.setAttribute(Wd,u)}else Bx(c.target)&&n(c.target)})}),mr&&Nl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Wx(){Nl&&Nl.disconnect()}function Gx(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],c=i.slice(1);return o&&c.length>0&&(r[o]=c.join(":").trim()),r},{})),n}function Kx(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Sc(Kd(t));return s.prefix||(s.prefix=es()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=vx(s.prefix,t.innerText)||Xd(s.prefix,yh(t.innerText))),!s.iconName&&fe.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function Yx(t){const e=ki(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return fe.autoA11y&&(n?e["aria-labelledby"]="".concat(fe.replacementClass,"-title-").concat(r||jo()):(e["aria-hidden"]="true",e.focusable="false")),e}function Qx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Dn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=Kx(t),i=Yx(t),o=vh("parseNodeAttributes",{},t);let c=e.styleParser?Gx(t):[];return Z({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Dn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:i}},o)}const{styles:Xx}=kn;function Bb(t){const e=fe.autoReplaceSvg==="nest"?Wg(t,{styleParser:!1}):Wg(t);return~e.extra.classes.indexOf(wb)?ts("generateLayersText",t,e):ts("generateSvgReplacementMutation",t,e)}function Jx(){return[...OO,...hh]}function Gg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();const n=nt.documentElement.classList,r=h=>n.add("".concat(Ng,"-").concat(h)),s=h=>n.remove("".concat(Ng,"-").concat(h)),i=fe.autoFetchSvg?Jx():pb.concat(Object.keys(Xx));i.includes("fa")||i.push("fa");const o=[".".concat(wb,":not([").concat(Ds,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Ds,"])"))).join(", ");if(o.length===0)return Promise.resolve();let c=[];try{c=ki(t.querySelectorAll(o))}catch{}if(c.length>0)r("pending"),s("complete");else return Promise.resolve();const a=Zd.begin("onTree"),u=c.reduce((h,m)=>{try{const f=Bb(m);f&&h.push(f)}catch(f){vb||f.name==="MissingIcon"&&console.error(f)}return h},[]);return new Promise((h,m)=>{Promise.all(u).then(f=>{Fb(f,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),a(),h()})}).catch(f=>{a(),m(f)})})}function Zx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bb(t).then(n=>{n&&Fb([n],e)})}function eN(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:bh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:bh(s||{})),t(r,Z(Z({},n),{},{mask:s}))}}const tN=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Dn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:c=null,classes:a=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:m,iconName:f,icon:_}=t;return Ac(Z({type:"icon"},t),()=>(ks("beforeDOMElementCreation",{iconDefinition:t,params:e}),fe.autoA11y&&(o?u["aria-labelledby"]="".concat(fe.replacementClass,"-title-").concat(c||jo()):(u["aria-hidden"]="true",u.focusable="false")),Jd({icons:{main:wh(_),mask:s?wh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:f,transform:Z(Z({},Dn),n),symbol:r,title:o,maskId:i,titleId:c,extra:{attributes:u,styles:h,classes:a}})))};var nN={mixout(){return{icon:eN(tN)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Gg,t.nodeCallback=Zx,t}}},provides(t){t.i2svg=function(e){const{node:n=nt,callback:r=()=>{}}=e;return Gg(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:c,symbol:a,mask:u,maskId:h,extra:m}=n;return new Promise((f,_)=>{Promise.all([Eh(r,o),u.iconName?Eh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(C=>{let[E,T]=C;f([e,Jd({icons:{main:E,mask:T},prefix:o,iconName:r,transform:c,symbol:a,maskId:h,title:s,titleId:i,extra:m,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const c=Tc(o);c.length>0&&(r.style=c);let a;return Yd(i)&&(a=ts("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(a||s.icon),{children:n,attributes:r}}}},rN={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ac({type:"layer"},()=>{ks("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(fe.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},sN={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Ac({type:"counter",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),Mx({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(fe.cssPrefix,"-layers-counter"),...r]}})))}}}},iN={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Dn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Ac({type:"text",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),Bg({content:t,transform:Z(Z({},Dn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(fe.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,c=null;if(db){const a=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/a,c=u.height/a}return fe.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Bg({content:e.innerHTML,width:o,height:c,transform:s,title:r,extra:i,watchable:!0})])}}};const oN=new RegExp('"',"ug"),Kg=[1105920,1112319],Yg=Z(Z(Z(Z({},{FontAwesome:{normal:"fas",400:"fas"}}),RO),WO),FO),Sh=Object.keys(Yg).reduce((t,e)=>(t[e.toLowerCase()]=Yg[e],t),{}),aN=Object.keys(Sh).reduce((t,e)=>{const n=Sh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function lN(t){const e=t.replace(oN,""),n=px(e,0),r=n>=Kg[0]&&n<=Kg[1],s=e.length===2?e[0]===e[1]:!1;return{value:yh(s?e[0]:e),isSecondary:r||s}}function cN(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Sh[n]||{})[s]||aN[n]}function Qg(t,e){const n="".concat(GO).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=ki(t.children).filter(f=>f.getAttribute(fh)===e)[0],c=Zr.getComputedStyle(t,e),a=c.getPropertyValue("font-family"),u=a.match(JO),h=c.getPropertyValue("font-weight"),m=c.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&m!=="none"&&m!==""){const f=c.getPropertyValue("content");let _=cN(a,h);const{value:C,isSecondary:E}=lN(f),T=u[0].startsWith("FontAwesome");let N=Xd(_,C),x=N;if(T){const V=bx(C);V.iconName&&V.prefix&&(N=V.iconName,_=V.prefix)}if(N&&!E&&(!o||o.getAttribute(zd)!==_||o.getAttribute(Wd)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);const V=Qx(),{extra:$}=V;$.attributes[fh]=e,Eh(N,_).then(W=>{const J=Jd(Z(Z({},V),{},{icons:{main:W,mask:Vb()},prefix:_,iconName:x,extra:$,watchable:!0})),P=nt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(P,t.firstChild):t.appendChild(P),P.outerHTML=J.map(b=>ua(b)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function uN(t){return Promise.all([Qg(t,"::before"),Qg(t,"::after")])}function hN(t){return t.parentNode!==document.head&&!~YO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Xg(t){if(mr)return new Promise((e,n)=>{const r=ki(t.querySelectorAll("*")).filter(hN).map(uN),s=Zd.begin("searchPseudoElements");Ub(),Promise.all(r).then(()=>{s(),Ih(),e()}).catch(()=>{s(),Ih(),n()})})}var dN={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Xg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=nt}=e;fe.searchPseudoElements&&Xg(n)}}};let Jg=!1;var fN={mixout(){return{dom:{unwatch(){Ub(),Jg=!0}}}},hooks(){return{bootstrap(){zg(vh("mutationObserverCallbacks",{}))},noAuto(){Wx()},watch(t){const{observeMutationsRoot:e}=t;Jg?Ih():zg(vh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Zg=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var pN={mixout(){return{parse:{transform:t=>Zg(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Zg(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),a="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(c," ").concat(a," ").concat(u)},m={transform:"translate(".concat(i/2*-1," -256)")},f={outer:o,inner:h,path:m};return{tag:"g",attributes:Z({},f.outer),children:[{tag:"g",attributes:Z({},f.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:Z(Z({},n.icon.attributes),f.path)}]}]}}}};const vu={x:0,y:0,width:"100%",height:"100%"};function ey(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function mN(t){return t.tag==="g"?t.children:[t]}var gN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Sc(n.split(" ").map(s=>s.trim())):Vb();return r.prefix||(r.prefix=es()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:c}=e;const{width:a,icon:u}=s,{width:h,icon:m}=i,f=lx({transform:c,containerWidth:h,iconWidth:a}),_={tag:"rect",attributes:Z(Z({},vu),{},{fill:"white"})},C=u.children?{children:u.children.map(ey)}:{},E={tag:"g",attributes:Z({},f.inner),children:[ey(Z({tag:u.tag,attributes:Z(Z({},u.attributes),f.path)},C))]},T={tag:"g",attributes:Z({},f.outer),children:[E]},N="mask-".concat(o||jo()),x="clip-".concat(o||jo()),V={tag:"mask",attributes:Z(Z({},vu),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,T]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:mN(m)},V]};return n.push($,{tag:"rect",attributes:Z({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(N,")")},vu)}),{children:n,attributes:r}}}},yN={provides(t){let e=!1;Zr.matchMedia&&(e=Zr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:Z(Z({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=Z(Z({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Z(Z({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:Z(Z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Z(Z({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:Z(Z({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:Z(Z({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:Z(Z({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Z(Z({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},_N={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},vN=[hx,nN,rN,sN,iN,dN,fN,pN,gN,yN,_N];Rx(vN,{mixoutsTo:on});on.noAuto;on.config;const bN=on.library;on.dom;const Ah=on.parse;on.findIconDefinition;on.toHtml;const wN=on.icon;on.layer;on.text;on.counter;function ty(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Jn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ty(Object(n),!0).forEach(function(r){Yt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ty(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function EN(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function TN(t){var e=EN(t,"string");return typeof e=="symbol"?e:e+""}function Vl(t){"@babel/helpers - typeof";return Vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vl(t)}function Yt(t,e,n){return e=TN(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function IN(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function SN(t,e){if(t==null)return{};var n=IN(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var AN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jb={exports:{}};(function(t){(function(e){var n=function(N,x,V){if(!u(x)||m(x)||f(x)||_(x)||a(x))return x;var $,W=0,J=0;if(h(x))for($=[],J=x.length;W<J;W++)$.push(n(N,x[W],V));else{$={};for(var P in x)Object.prototype.hasOwnProperty.call(x,P)&&($[N(P,V)]=n(N,x[P],V))}return $},r=function(N,x){x=x||{};var V=x.separator||"_",$=x.split||/(?=[A-Z])/;return N.split($).join(V)},s=function(N){return C(N)?N:(N=N.replace(/[\-_\s]+(.)?/g,function(x,V){return V?V.toUpperCase():""}),N.substr(0,1).toLowerCase()+N.substr(1))},i=function(N){var x=s(N);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(N,x){return r(N,x).toLowerCase()},c=Object.prototype.toString,a=function(N){return typeof N=="function"},u=function(N){return N===Object(N)},h=function(N){return c.call(N)=="[object Array]"},m=function(N){return c.call(N)=="[object Date]"},f=function(N){return c.call(N)=="[object RegExp]"},_=function(N){return c.call(N)=="[object Boolean]"},C=function(N){return N=N-0,N===N},E=function(N,x){var V=x&&"process"in x?x.process:x;return typeof V!="function"?N:function($,W){return V($,N,W)}},T={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(N,x){return n(E(s,x),N)},decamelizeKeys:function(N,x){return n(E(o,x),N,x)},pascalizeKeys:function(N,x){return n(E(i,x),N)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=T:e.humps=T})(AN)})(jb);var PN=jb.exports,CN=["class","style"];function RN(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=PN.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function DN(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function qb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(a){return qb(a)}),s=Object.keys(t.attributes||{}).reduce(function(a,u){var h=t.attributes[u];switch(u){case"class":a.class=DN(h);break;case"style":a.style=RN(h);break;default:a.attrs[u]=h}return a},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,c=SN(n,CN);return ci(t.tag,Jn(Jn(Jn({},e),{},{class:s.class,style:Jn(Jn({},s.style),o)},s.attrs),c),r)}var Hb=!1;try{Hb=!0}catch{}function kN(){if(!Hb&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function bu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Yt({},t,e):{}}function ON(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Yt(Yt(Yt(Yt(Yt(Yt(Yt(Yt(Yt(Yt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Yt(Yt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ny(t){if(t&&Vl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ah.icon)return Ah.icon(t);if(t===null)return null;if(Vl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var _t=jh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Pe(function(){return ny(e.icon)}),i=Pe(function(){return bu("classes",ON(e))}),o=Pe(function(){return bu("transform",typeof e.transform=="string"?Ah.transform(e.transform):e.transform)}),c=Pe(function(){return bu("mask",ny(e.mask))}),a=Pe(function(){return wN(s.value,Jn(Jn(Jn(Jn({},i.value),o.value),c.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});tt(a,function(h){if(!h)return kN("Could not find one or more icon(s)",s.value,c.value)},{immediate:!0});var u=Pe(function(){return a.value?qb(a.value.abstract[0],{},r):null});return function(){return u.value}}});const xN=["dir"],NN={class:"modal-title"},VN={class:"form-group"},MN={class:"form-group"},LN={class:"form-group"},$N={class:"form-group"},FN={value:"male"},UN={value:"female"},BN={key:0,class:"pregnancy-section"},jN={class:"form-group checkbox-group"},qN={key:0,class:"form-group"},HN={class:"form-group"},zN={class:"form-group"},WN={class:"modal-actions"},GN=["disabled"],KN={__name:"PatientFormModal",props:{show:Boolean,patient:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=$e("currentLanguage"),i=Un({id:null,name:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""});tt(()=>n.show,c=>{c&&(n.patient?(i.id=n.patient.id,i.name=n.patient.name,i.gender=n.patient.gender,i.weight=n.patient.weight||null,i.isPregnant=n.patient.isPregnant||!1,i.birthDate=n.patient.birthDate?.toDate?n.patient.birthDate.toDate().toISOString().split("T")[0]:"",i.estimatedDueDate=n.patient.estimatedDueDate?.toDate?n.patient.estimatedDueDate.toDate().toISOString().split("T")[0]:"",i.medicalHistory=Array.isArray(n.patient.medicalHistory)?n.patient.medicalHistory.join(", "):"",i.allergies=Array.isArray(n.patient.allergies)?n.patient.allergies.join(", "):""):Object.assign(i,{id:null,name:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""}))},{immediate:!0}),tt(()=>i.isPregnant,c=>{c||(i.estimatedDueDate="")});const o=()=>{if(!i.name||!i.birthDate){alert("Name and Date of Birth are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Please provide the estimated due date for the pregnancy.");return}(i.gender==="male"||!i.isPregnant)&&(i.isPregnant=!1,i.estimatedDueDate=null);const c={...i,weight:Number(i.weight)||null,birthDate:new Date(i.birthDate),estimatedDueDate:i.estimatedDueDate?new Date(i.estimatedDueDate):null,medicalHistory:i.medicalHistory.split(",").map(a=>a.trim()).filter(Boolean),allergies:i.allergies.split(",").map(a=>a.trim()).filter(Boolean)};r("save",c)};return(c,a)=>(B(),Bn(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),G("div",{key:0,class:"modal-overlay",onClick:a[10]||(a[10]=rt(u=>c.$emit("close"),["self"]))},[p("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[p("button",{onClick:a[0]||(a[0]=u=>c.$emit("close")),class:"close-button"},"×"),p("h3",NN,I(t.patient?"Edit Patient":"Add New Patient"),1),p("form",{onSubmit:rt(o,["prevent"]),class:"patient-form"},[p("div",VN,[p("label",null,I(y(s)==="en"?"Name":"الاسم"),1),le(p("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=u=>i.name=u),required:""},null,512),[[_e,i.name]])]),p("div",MN,[p("label",null,I(y(s)==="en"?"Weight (kg)":"الوزن (كجم)"),1),le(p("input",{type:"number",step:"0.1","onUpdate:modelValue":a[2]||(a[2]=u=>i.weight=u),placeholder:"e.g., 70.5"},null,512),[[_e,i.weight]])]),p("div",LN,[p("label",null,I(y(s)==="en"?"Date of Birth":"تاريخ الميلاد"),1),le(p("input",{type:"date","onUpdate:modelValue":a[3]||(a[3]=u=>i.birthDate=u),required:""},null,512),[[_e,i.birthDate]])]),p("div",$N,[p("label",null,I(y(s)==="en"?"Gender":"الجنس"),1),le(p("select",{"onUpdate:modelValue":a[4]||(a[4]=u=>i.gender=u)},[p("option",FN,I(y(s)==="en"?"Male":"ذكر"),1),p("option",UN,I(y(s)==="en"?"Female":"أنثى"),1)],512),[[vt,i.gender]])]),i.gender==="female"?(B(),G("div",BN,[p("div",jN,[p("label",null,[le(p("input",{type:"checkbox","onUpdate:modelValue":a[5]||(a[5]=u=>i.isPregnant=u)},null,512),[[Ql,i.isPregnant]]),p("span",null,I(y(s)==="en"?"Currently Pregnant?":"هل هي حامل حاليًا؟"),1)])]),i.isPregnant?(B(),G("div",qN,[p("label",null,I(y(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),le(p("input",{type:"date","onUpdate:modelValue":a[6]||(a[6]=u=>i.estimatedDueDate=u),required:""},null,512),[[_e,i.estimatedDueDate]])])):Ee("",!0)])):Ee("",!0),p("div",HN,[p("label",null,I(y(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي"),1),le(p("textarea",{"onUpdate:modelValue":a[7]||(a[7]=u=>i.medicalHistory=u),rows:"3"},null,512),[[_e,i.medicalHistory]])]),p("div",zN,[p("label",null,I(y(s)==="en"?"Allergies (comma-separated)":"الحساسية"),1),le(p("textarea",{"onUpdate:modelValue":a[8]||(a[8]=u=>i.allergies=u),rows:"3"},null,512),[[_e,i.allergies]])]),p("div",WN,[p("button",{type:"submit",class:"action-button",disabled:t.isSaving},I(t.isSaving?"Saving...":"Save"),9,GN),p("button",{type:"button",onClick:a[9]||(a[9]=u=>c.$emit("close")),class:"action-button secondary"}," Cancel ")])],32)],8,xN)])):Ee("",!0)]),_:1}))}},YN=wt(KN,[["__scopeId","data-v-8459b92e"]]),QN=["dir"],XN={key:0,class:"patient-context-display"},JN={key:0,class:"form-row pregnancy-section"},ZN={class:"form-group checkbox-group"},eV={key:0,class:"form-group"},tV={class:"form-group"},nV={disabled:"",value:""},rV=["value"],sV={key:1,class:"form-group"},iV={class:"form-row"},oV={class:"form-group"},aV={value:"X-ray"},lV={value:"CT"},cV={class:"form-group"},uV={disabled:"",value:""},hV=["value"],dV={key:2,class:"form-group"},fV=["placeholder"],pV={key:3,class:"form-group"},mV={class:"form-group"},gV={class:"form-row"},yV={class:"form-group"},_V=["placeholder"],vV={class:"form-group"},bV=["placeholder"],wV={class:"form-group"},EV={class:"form-group"},TV={class:"form-group"},IV={class:"modal-actions"},SV=["disabled"],AV={__name:"ScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean,patient:{type:Object,default:null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=$e("currentLanguage"),i={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},o=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],c=()=>new Date().toISOString().split("T")[0],a=Un({id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:c(),dose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""}),u=Pe(()=>i[a.scanType]||[]),h=Pe(()=>a.subScanType==="Other"),m=Pe(()=>a.scanPlace==="other");tt(()=>n.show,C=>{if(C&&(Object.assign(a,{id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:c(),dose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""}),n.scan)){a.id=n.scan.id,a.isPregnant=n.scan.isPregnant||!1,a.pregnancyMonth=n.scan.pregnancyMonth||null,a.scanType=n.scan.scanType;const E=n.scan.scanDate?.toDate?n.scan.scanDate.toDate():new Date(n.scan.scanDate);a.scanDate=isNaN(E)?c():E.toISOString().split("T")[0],a.dose=n.scan.patientDose,a.doctorDose=n.scan.doctorDose,a.reason=n.scan.reason,a.notes=n.scan.notes,a.doctorAdditionalContext=n.scan.doctorAdditionalContext,a.numberOfScans=n.scan.numberOfScans||1;const T=n.scan.scanDetail;(u.value||[]).some($=>$.value===T)?a.subScanType=T:T&&(a.subScanType="Other",a.otherScanDescription=T);const x=n.scan.scanPlace;o.some($=>$.value===x)?a.scanPlace=x:x&&(a.scanPlace="other",a.otherScanPlaceDescription=x)}}),tt(()=>a.scanType,()=>{a.subScanType="",a.otherScanDescription=""});const f=async C=>{if(!n.patient)return alert("Cannot estimate dose without a patient context."),!1;const E=n.patient.birthDate?new Date().getFullYear()-new Date(n.patient.birthDate.toDate()).getFullYear():"N/A",T=n.patient.weight||70,N=u.value.find(P=>P.value===a.subScanType);let x="";h.value?x=a.otherScanDescription:N&&(x=s.value==="en"?N.en:N.ar);const V=o.find(P=>P.value===a.scanPlace);let $="";m.value?$=a.otherScanPlaceDescription:V&&($=s.value==="en"?V.en:V.ar);let W="";C==="patient"?(W=`Estimate the typical effective dose (in mSv) for a patient undergoing a ${a.scanType} scan`,a.scanType==="X-ray"&&a.numberOfScans>1&&(W+=` (number of scans: ${a.numberOfScans})`),W+=` of the ${$} with the specific protocol: "${x}". Patient Age: ${E}. Patient Weight: ${T} kg. Reason for scan: "${a.reason||"Not provided"}". Respond ONLY with a single number.`):a.scanType==="X-ray"&&a.numberOfScans>1?W=`Estimate the TOTAL occupational dose (in mSv) for a doctor from a procedure involving ${a.numberOfScans} separate X-ray scans of the ${$} with protocol "${x}". Doctor's additional context: "${a.doctorAdditionalContext||"None"}". Respond ONLY with a single number.`:W=`Estimate the typical occupational dose (in mSv) for a doctor during a single patient's ${a.scanType} scan of the ${$} with protocol "${x}". Doctor's additional context: "${a.doctorAdditionalContext||"None"}". Respond ONLY with a single number.`;let J={};C==="patient"?J=a.scanType==="CT"?{min:.5,max:40}:{min:.001,max:10}:J={min:0,max:2};try{const A=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:W}]}],generationConfig:{responseMimeType:"text/plain"}})});if(!A.ok)throw new Error(`API Error: ${A.statusText}`);const D=(await A.json()).candidates?.[0]?.content?.parts?.[0]?.text||"",S=parseFloat(D.match(/[\d.]+/));if(isNaN(S)||S<J.min||S>J.max)throw new Error("AI returned an invalid or out-of-range value.");return C==="patient"?a.dose=S:a.doctorDose=S,!0}catch(P){return console.error(`Dose estimation failed for ${C}:`,P),alert(s.value==="en"?`AI estimation for the ${C} failed. Please enter it manually.`:`فشل تقدير الذكاء الاصطناعي لـ ${C==="patient"?"المريض":"الطبيب"}. يرجى إدخاله يدويًا.`),!1}},_=async()=>{if(!a.scanDate||!a.scanPlace||m.value&&!a.otherScanPlaceDescription||!a.subScanType||h.value&&!a.otherScanDescription){alert("Please fill all required scan details.");return}if(a.scanType==="X-ray"&&(a.numberOfScans===null||a.numberOfScans<1)){alert(s.value==="en"?"Number of scans must be at least 1 for X-ray.":"عدد الفحوصات لأشعة إكس يجب أن يكون 1 على الأقل.");return}if((a.dose===null||a.dose==="")&&!await f("patient")||(a.doctorDose===null||a.doctorDose==="")&&!await f("doctor"))return;if(!a.scanDate||!/^\d{4}-\d{2}-\d{2}$/.test(a.scanDate)){alert("Invalid date format. Please select a valid date.");return}const C=a.scanDate.split("-"),E=new Date(Date.UTC(C[0],parseInt(C[1],10)-1,parseInt(C[2],10),12,0,0)),T={id:a.id,isPregnant:a.isPregnant,pregnancyMonth:a.pregnancyMonth,scanType:a.scanType,scanDetail:a.subScanType==="Other"?a.otherScanDescription:a.subScanType,scanPlace:a.scanPlace==="other"?a.otherScanPlaceDescription:a.scanPlace,numberOfScans:a.scanType==="X-ray"?Number(a.numberOfScans):1,scanDate:De.fromDate(E),patientDose:a.dose,doctorDose:a.doctorDose,reason:a.reason,notes:a.notes,doctorAdditionalContext:a.doctorAdditionalContext};r("save",T)};return(C,E)=>(B(),Bn(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),G("div",{key:0,class:"modal-overlay",onClick:E[16]||(E[16]=rt(T=>C.$emit("close"),["self"]))},[p("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[p("button",{class:"close-modal-button",onClick:E[0]||(E[0]=T=>C.$emit("close"))},"×"),p("h3",null,I(t.scan?y(s)==="en"?"Edit Scan Record":"تعديل سجل الفحص":y(s)==="en"?"Add New Scan Record":"إضافة سجل فحص جديد"),1),t.patient?(B(),G("div",XN,[mt(I(y(s)==="en"?"For Patient":"للمريض")+": ",1),p("strong",null,I(t.patient.name)+" ("+I(t.patient.weight?`${t.patient.weight} kg`:"Weight N/A")+")",1)])):Ee("",!0),p("form",{onSubmit:rt(_,["prevent"]),class:"scan-form"},[t.patient?.gender==="female"?(B(),G("div",JN,[p("div",ZN,[p("label",null,[le(p("input",{type:"checkbox","onUpdate:modelValue":E[1]||(E[1]=T=>a.isPregnant=T)},null,512),[[Ql,a.isPregnant]]),p("span",null,I(y(s)==="en"?"Is Pregnant?":"هل المريضة حامل؟"),1)])]),a.isPregnant?(B(),G("div",eV,[p("label",null,I(y(s)==="en"?"Month of Pregnancy":"شهر الحمل"),1),le(p("input",{type:"number","onUpdate:modelValue":E[2]||(E[2]=T=>a.pregnancyMonth=T),min:"1",max:"9",placeholder:"1-9"},null,512),[[_e,a.pregnancyMonth,void 0,{number:!0}]])])):Ee("",!0)])):Ee("",!0),p("div",tV,[p("label",null,I(y(s)==="en"?"Place of Scan":"مكان الفحص"),1),le(p("select",{"onUpdate:modelValue":E[3]||(E[3]=T=>a.scanPlace=T),required:""},[p("option",nV,I(y(s)==="en"?"Select...":"اختر..."),1),(B(),G(et,null,fn(o,T=>p("option",{key:T.value,value:T.value},I(y(s)==="en"?T.en:T.ar),9,rV)),64))],512),[[vt,a.scanPlace]])]),m.value?(B(),G("div",sV,[p("label",null,I(y(s)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر"),1),le(p("input",{type:"text","onUpdate:modelValue":E[4]||(E[4]=T=>a.otherScanPlaceDescription=T),required:""},null,512),[[_e,a.otherScanPlaceDescription]])])):Ee("",!0),p("div",iV,[p("div",oV,[p("label",null,I(y(s)==="en"?"Scan Category":"فئة الفحص"),1),le(p("select",{"onUpdate:modelValue":E[5]||(E[5]=T=>a.scanType=T),required:""},[p("option",aV,I(y(s)==="en"?"X-ray":"أشعة سينية"),1),p("option",lV,I(y(s)==="en"?"CT":"أشعة مقطعية"),1)],512),[[vt,a.scanType]])]),p("div",cV,[p("label",null,I(y(s)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),le(p("select",{"onUpdate:modelValue":E[6]||(E[6]=T=>a.subScanType=T),required:""},[p("option",uV,I(y(s)==="en"?"Select...":"اختر..."),1),(B(!0),G(et,null,fn(u.value,T=>(B(),G("option",{key:T.value,value:T.value},I(y(s)==="en"?T.en:T.ar),9,hV))),128))],512),[[vt,a.subScanType]])])]),h.value?(B(),G("div",dV,[p("label",null,I(y(s)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص"),1),le(p("input",{type:"text","onUpdate:modelValue":E[7]||(E[7]=T=>a.otherScanDescription=T),placeholder:y(s)==="en"?"e.g., Chest X-ray":"مثال: أشعة سينية للصدر",required:""},null,8,fV),[[_e,a.otherScanDescription]])])):Ee("",!0),a.scanType==="X-ray"?(B(),G("div",pV,[p("label",null,I(y(s)==="en"?"Number of Scans":"عدد الفحوصات"),1),le(p("input",{type:"number","onUpdate:modelValue":E[8]||(E[8]=T=>a.numberOfScans=T),min:"1",required:""},null,512),[[_e,a.numberOfScans,void 0,{number:!0}]])])):Ee("",!0),p("div",mV,[p("label",null,I(y(s)==="en"?"Scan Date":"تاريخ الفحص"),1),le(p("input",{type:"date","onUpdate:modelValue":E[9]||(E[9]=T=>a.scanDate=T),required:""},null,512),[[_e,a.scanDate]])]),p("div",gV,[p("div",yV,[p("label",null,I(y(s)==="en"?"Patient's Dose (mSv)":"جرعة المريض (mSv)"),1),le(p("input",{type:"number",step:"0.01","onUpdate:modelValue":E[10]||(E[10]=T=>a.dose=T),placeholder:y(s)==="en"?"Leave blank for AI estimate":"اتركه فارغًا لتقدير الذكاء الاصطناعي"},null,8,_V),[[_e,a.dose,void 0,{number:!0}]])]),p("div",vV,[p("label",null,I(y(s)==="en"?"Doctor's Dose (mSv)":"جرعة الطبيب (mSv)"),1),le(p("input",{type:"number",step:"0.01","onUpdate:modelValue":E[11]||(E[11]=T=>a.doctorDose=T),placeholder:y(s)==="en"?"Leave blank for AI estimate":"اتركه فارغًا لتقدير الذكاء الاصطناعي"},null,8,bV),[[_e,a.doctorDose,void 0,{number:!0}]])])]),p("div",wV,[p("label",null,I(y(s)==="en"?"Reason for Scan":"أسباب الفحص"),1),le(p("textarea",{"onUpdate:modelValue":E[12]||(E[12]=T=>a.reason=T),rows:"2"},null,512),[[_e,a.reason]])]),p("div",EV,[p("label",null,I(y(s)==="en"?"Additional Notes":"ملاحظات إضافية"),1),le(p("textarea",{"onUpdate:modelValue":E[13]||(E[13]=T=>a.notes=T),rows:"3"},null,512),[[_e,a.notes]])]),p("div",TV,[p("label",null,I(y(s)==="en"?"Details affecting your exposure (optional)":"تفاصيل إضافية على تعرضك (اختياري)"),1),le(p("textarea",{"onUpdate:modelValue":E[14]||(E[14]=T=>a.doctorAdditionalContext=T),rows:"2"},null,512),[[_e,a.doctorAdditionalContext]])]),p("div",IV,[p("button",{type:"submit",class:"action-button",disabled:t.isSaving},I(t.isSaving?y(s)==="en"?"Saving...":"جار الحفظ...":y(s)==="en"?"Save":"حفظ"),9,SV),p("button",{type:"button",onClick:E[15]||(E[15]=T=>C.$emit("close")),class:"action-button secondary"},I(y(s)==="en"?"Cancel":"إلغاء"),1)])],32)],8,QN)])):Ee("",!0)]),_:1}))}},PV=wt(AV,[["__scopeId","data-v-2f1d2156"]]),CV={class:"modal-content delete-confirm-modal"},RV={class:"modal-title"},DV={class:"warning-text"},kV={class:"modal-actions"},OV={__name:"ConfirmDeleteModal",props:{show:Boolean,title:String,message:String},emits:["close","confirm"],setup(t){const e=$e("triggerMsvRecalculation"),n=$e("currentLanguage");return(r,s)=>(B(),Bn(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),G("div",{key:0,class:"modal-overlay",onClick:s[2]||(s[2]=rt(i=>r.$emit("close"),["self"]))},[p("div",CV,[p("h3",RV,I(t.title),1),p("p",null,I(t.message),1),p("p",DV,I(y(n)==="en"?"This action cannot be undone.":"لا يمكن التراجع عن هذا الإجراء."),1),p("div",kV,[p("button",{onClick:s[0]||(s[0]=i=>r.$emit("close")),class:"action-button secondary"},I(y(n)==="en"?"Cancel":"إلغاء"),1),p("button",{onClick:s[1]||(s[1]=i=>{r.$emit("confirm"),y(e)()}),class:"action-button delete-button-confirm"},I(y(n)==="en"?"Delete":"حذف"),1)])])])):Ee("",!0)]),_:1}))}},Ml=wt(OV,[["__scopeId","data-v-8046b31b"]]),xV=["dir"],NV={key:0},VV={class:"patient-details-grid"},MV={class:"detail-item"},LV={class:"detail-label"},$V={class:"detail-value"},FV={class:"detail-item"},UV={class:"detail-label"},BV={class:"detail-value"},jV={class:"scans-list-container"},qV={key:0,class:"loading-message"},HV={key:1,class:"no-scans-message"},zV={key:2,class:"scans-list"},WV={class:"scan-info"},GV={class:"scan-type-place"},KV={class:"scan-type"},YV={class:"scan-place"},QV={class:"scan-date"},XV={class:"scan-dose"},JV={class:"scan-actions"},ZV=["onClick"],e4=["onClick"],t4={__name:"PatientDetailsModal",props:{show:Boolean,patient:Object},emits:["close"],setup(t,{emit:e}){const n=t,r=Di(),s=$e("currentLanguage"),i=$e("triggerMsvRecalculation"),o=Te([]),c=Te(null),a=Te(null),u=Te(!1),h=Te(!1),m=Pe(()=>n.patient?.id),f=async()=>{if(!m.value){o.value=[];return}const V=await r.fetchScansForPatient(m.value);o.value=V||[]};tt(()=>n.show,V=>{V&&m.value&&f()});const _=async V=>{if(!n.patient?.id){alert("Error: No patient selected to save this scan for.");return}const $={...V,patientId:n.patient.id};await r.createScan($)?(u.value=!1,alert("Scan saved successfully!")):alert(`Error saving patient scan: ${r.error}`)},C=async()=>{if(!a.value?.id)return;await r.deleteScan(a.value.id)?(h.value=!1,await f(),i&&i()):alert(`Failed to delete scan: ${r.error}`)};function E(){c.value=null,u.value=!0}function T(V){c.value=V,u.value=!0}function N(V){a.value=V,h.value=!0}const x=V=>!V||!V.toDate?"N/A":V.toDate().toLocaleDateString();return(V,$)=>(B(),G(et,null,[Se(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),G("div",{key:0,class:"modal-overlay",onClick:$[1]||($[1]=rt(W=>V.$emit("close"),["self"]))},[p("div",{class:"modal-content-details",dir:y(s)==="ar"?"rtl":"ltr"},[p("button",{class:"close-modal-button",onClick:$[0]||($[0]=W=>V.$emit("close"))},"×"),t.patient?(B(),G("div",NV,[p("h3",null,[mt(I(y(s)==="en"?"Scan History for":"سجل الفحوصات لـ")+" ",1),p("strong",null,I(t.patient.name),1)]),p("p",null,I(y(s)==="en"?"Review past scans or add a new record.":"مراجعة الفحوصات السابقة أو إضافة سجل جديد."),1),p("div",VV,[p("div",MV,[p("span",LV,I(y(s)==="en"?"Gender":"الجنس"),1),p("span",$V,I(t.patient.gender||"N/A"),1)]),p("div",FV,[p("span",UV,I(y(s)==="en"?"Weight":"الوزن"),1),p("span",BV,I(t.patient.weight?`${t.patient.weight} kg`:"N/A"),1)])]),p("button",{onClick:E,class:"add-scan-button"},[Se(y(_t),{icon:"plus"}),mt(" "+I(y(s)==="en"?"Add New Scan":"إضافة فحص جديد"),1)]),p("div",jV,[y(r).loading?(B(),G("div",qV,[Se(y(_t),{icon:"spinner",spin:""}),mt(" "+I(y(s)==="en"?"Loading scans...":"جاري تحميل الفحوصات..."),1)])):o.value.length===0?(B(),G("div",HV,I(y(s)==="en"?"No scans recorded for this patient yet.":"لا توجد فحوصات مسجلة لهذا المريض بعد."),1)):(B(),G("ul",zV,[(B(!0),G(et,null,fn(o.value,W=>(B(),G("li",{key:W.id,class:"scan-item"},[p("div",WV,[p("span",GV,[p("span",KV,I(W.scanType),1),p("span",YV,"of the "+I(W.scanPlace||"N/A"),1)]),p("span",QV,I(x(W.scanDate)),1),p("span",XV,I(y(s)==="en"?"Dose:":"الجرعة:")+" "+I(W.patientDose)+" mSv",1)]),p("div",JV,[p("button",{onClick:J=>T(W),class:"action-button-icon edit-button"},[Se(y(_t),{icon:"edit"})],8,ZV),p("button",{onClick:J=>N(W),class:"action-button-icon delete-button"},[Se(y(_t),{icon:"trash-alt"})],8,e4)])]))),128))]))])])):Ee("",!0)],8,xV)])):Ee("",!0)]),_:1}),Se(PV,{show:u.value,patient:t.patient,scan:c.value,"is-saving":y(r).loading,onClose:$[2]||($[2]=W=>u.value=!1),onSave:_},null,8,["show","patient","scan","is-saving"]),Se(Ml,{show:h.value,title:y(s)==="en"?"Delete Scan":"حذف الفحص",message:`${y(s)==="en"?"Are you sure you want to delete this scan from":"هل أنت متأكد من حذف هذا الفحص بتاريخ"} ${x(a.value?.scanDate)}?`,onClose:$[3]||($[3]=W=>h.value=!1),onConfirm:C},null,8,["show","title","message"])],64))}},n4=wt(t4,[["__scopeId","data-v-48212b59"]]),r4={class:"patient-list-page"},s4={class:"patient-list-main-content"},i4={class:"patient-list-card"},o4=["dir"],a4={key:0,class:"loading-message"},l4={key:1,class:"no-patients-message"},c4={key:2,class:"patient-table-container"},u4={class:"patient-table"},h4={class:"details-column"},d4={class:"details-column"},f4={class:"details-column"},p4={class:"details-column"},m4={class:"action-buttons-wrapper"},g4=["onClick","title"],y4=["onClick","title"],_4=["onClick","title"],v4=["onClick","title"],b4={class:"switch-link-container"},w4={__name:"PatientsView",setup(t){const e=sn(),n=Di(),r=Ns(),s=$e("currentLanguage"),i=Te([]),o=Te(null),c=Te(null),a=Te(null),u=Te(!1),h=Te(!1),m=Te(!1),f=Pe(()=>e.user?.uid),_=async()=>{const J=await n.fetchPatientsForDoctor();J&&(i.value=J)},C=J=>{if(!J?.toDate)return"N/A";const P=J.toDate(),b=new Date;let w=b.getFullYear()-P.getFullYear(),A=b.getMonth()-P.getMonth();if(b.getDate()<P.getDate()&&A--,A<0&&(w--,A+=12),w>=2)return`${w} ${s.value==="ar"?"سنوات":"years"}`;{const O=s.value==="ar"?"سنة":"year",D=s.value==="ar"?"أشهر":"months",S=s.value==="ar"?"شهر":"month";return w>0?`${w} ${O}, ${A} ${A===1?S:D}`:A>0?`${A} ${A===1?S:D}`:s.value==="ar"?"أقل من شهر":"Less than a month"}},E=async J=>{const{id:P,...b}=J;let w=!1;P?w=await n.updatePatientProfile(P,b):w=!!await n.addNewPatient(b),w?(u.value=!1,await _()):alert(`Failed to save patient. Error: ${n.error}`)},T=async()=>{if(!o.value?.id)return;await n.deletePatientProfile(o.value.id)?(m.value=!1,await _()):alert(`Failed to delete patient. Error: ${n.error}`)};function N(){a.value=null,u.value=!0}function x(J){a.value=J,u.value=!0}function V(J){c.value=J,h.value=!0}function $(J){o.value=J,m.value=!0}function W(J){J&&r.push({name:"recommend",query:{patientId:J}})}return tt(f,J=>{J&&_()},{immediate:!0}),(J,P)=>(B(),G("div",r4,[p("div",s4,[p("div",i4,[p("h2",null,I(y(s)==="en"?"Manage Patients":"إدارة المرضى"),1),p("p",null,I(y(s)==="en"?"Add new patients or view existing records":"أضف مرضى جدد أو اطلع على السجلات الحالية."),1),p("button",{onClick:N,class:"add-new-patient-button"},I(y(s)==="en"?"Add New Patient":"إضافة مريض جديد"),1),p("div",{class:"patient-list-section",dir:y(s)==="ar"?"rtl":"ltr"},[p("h3",null,I(y(s)==="en"?"Existing Patients":"المرضى الحاليون"),1),y(n).loading?(B(),G("div",a4,[Se(y(_t),{icon:"spinner",spin:""}),mt(" "+I(y(s)==="en"?"Loading patients...":"جاري تحميل المرضى..."),1)])):!i.value||i.value.length===0?(B(),G("div",l4,I(y(s)==="en"?"No patients added yet.":"لم يتم إضافة أي مرضى بعد."),1)):(B(),G("div",c4,[p("table",u4,[p("thead",null,[p("tr",null,[p("th",null,I(y(s)==="en"?"Name":"الاسم"),1),p("th",null,I(y(s)==="en"?"Age":"العمر"),1),p("th",null,I(y(s)==="en"?"Weight":"الوزن"),1),p("th",null,I(y(s)==="en"?"Gender":"الجنس"),1),p("th",h4,I(y(s)==="en"?"Medical History":"التاريخ الطبي"),1),p("th",d4,I(y(s)==="en"?"Allergies":"الحساسية"),1),p("th",null,I(y(s)==="en"?"Actions":"الإجراءات"),1)])]),p("tbody",null,[(B(!0),G(et,null,fn(i.value,b=>(B(),G("tr",{key:b.id},[p("td",null,I(b.name??"N/A"),1),p("td",null,I(C(b.birthDate)),1),p("td",null,I(b.weight?`${b.weight} kg`:"N/A"),1),p("td",null,I(y(s)==="en"?(b.gender?.charAt(0).toUpperCase()??"")+(b.gender?.slice(1)??"N/A"):b.gender==="male"?"ذكر":"أنثى"),1),p("td",f4,I(b.medicalHistory?.join(", ")||(y(s)==="en"?"None":"لا يوجد")),1),p("td",p4,I(b.allergies?.join(", ")||(y(s)==="en"?"None":"لا يوجد")),1),p("td",null,[p("div",m4,[p("button",{onClick:w=>V(b),class:"action-button-sm view-button",title:y(s)==="en"?"View Scan History":"عرض سجل الفحوصات"},[Se(y(_t),{icon:"eye"})],8,g4),p("button",{onClick:w=>x(b),class:"action-button-sm edit-button",title:y(s)==="en"?"Edit Patient Details":"تعديل تفاصيل المريض"},[Se(y(_t),{icon:"edit"})],8,y4),p("button",{onClick:w=>$(b),class:"action-button-sm delete-button",title:y(s)==="en"?"Delete Patient":"حذف المريض"},[Se(y(_t),{icon:"trash-alt"})],8,_4),p("button",{onClick:w=>W(b.id),class:"action-button-sm recommend-button",title:y(s)==="en"?"Get Recommendation":"الحصول على توصية"},[Se(y(_t),{icon:"file-medical"})],8,v4)])])]))),128))])])]))],8,o4),p("div",b4,[p("a",{href:"#",onClick:P[0]||(P[0]=rt(b=>y(r).push("/dashboard"),["prevent"]))},I(y(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])])]),Se(YN,{show:u.value,patient:a.value,"is-saving":y(n).loading,onClose:P[1]||(P[1]=b=>u.value=!1),onSave:E},null,8,["show","patient","is-saving"]),Se(n4,{show:h.value,patient:c.value,onClose:P[2]||(P[2]=b=>h.value=!1),onScanSaved:_},null,8,["show","patient"]),Se(Ml,{show:m.value,title:y(s)==="en"?"Delete Patient":"حذف المريض",message:`${y(s)==="en"?"Are you sure you want to delete":"هل أنت متأكد من الحذف"} ${o.value?.name??"this patient"}?`,onClose:P[3]||(P[3]=b=>m.value=!1),onConfirm:T},null,8,["show","title","message"])]))}},E4=wt(w4,[["__scopeId","data-v-63db406d"]]),T4={key:0,class:"loading-container"},I4={key:0,class:"role-modal-backdrop"},S4={class:"role-modal"},A4={class:"form-group"},P4={value:"",disabled:""},C4={value:"doctor"},R4={value:"patient"},D4={class:"form-group"},k4={class:"form-group"},O4={value:"",disabled:""},x4={value:"male"},N4={value:"female"},V4={class:"form-group"},M4=["placeholder"],L4={class:"form-group"},$4=["placeholder"],F4=["disabled"],U4={key:1},B4={class:"dashboard-main-content"},j4={class:"dashboard-card"},q4=["dir"],H4=["dir"],z4={class:"dashboard-features"},W4=["dir"],G4=["dir"],K4=["dir"],Y4=["dir"],Q4=["dir"],X4=["dir"],J4={__name:"DashboardView",setup(t){const e=sn(),n=Di(),r=Ns(),s=Te({role:null,birthDate:"",gender:"",allergies:"",medicalHistory:""}),i=Pe(()=>!e.isAuthReady||e.isProfileLoading),o=Pe(()=>e.user?!e.isProfileComplete:!1),c=Pe(()=>e.role),a=$e("currentLanguage"),u=async()=>{const{uid:m,email:f,displayName:_}=e.user,{role:C,birthDate:E,gender:T,allergies:N,medicalHistory:x}=s.value;if(!C||!E||!T){alert("Please fill out all required fields: Role, Birth Date, and Gender.");return}const V={email:f,displayName:_,role:C,birthDate:De.fromDate(new Date(E)),gender:T,allergies:N.split(",").map(W=>W.trim()).filter(Boolean),medicalHistory:x.split(",").map(W=>W.trim()).filter(Boolean)};await n.setUserProfile(m,V)?e.setUserProfile(V):alert(`Failed to save profile. Error: ${n.error}`)},h=async()=>{await e.logout(),r.push("/signin")};return(m,f)=>(B(),G("div",null,[i.value?(B(),G("div",T4,[p("p",null,I(y(a)==="en"?"Verifying session...":"جار التحقق من الجلسة..."),1),Se(y(_t),{icon:"spinner",spin:"",size:"2x"})])):(B(),G(et,{key:1},[o.value?(B(),G("div",I4,[p("div",S4,[p("h2",null,I(y(a)==="en"?"Complete Your Profile":"أكمل ملفك الشخصي"),1),p("div",A4,[p("label",null,I(y(a)==="en"?"I am a:":"أنا:"),1),le(p("select",{"onUpdate:modelValue":f[0]||(f[0]=_=>s.value.role=_)},[p("option",P4,I(y(a)==="en"?"-- Select Role --":"-- اختر دورك --"),1),p("option",C4,I(y(a)==="en"?"Doctor":"طبيب"),1),p("option",R4,I(y(a)==="en"?"Patient":"مريض"),1)],512),[[vt,s.value.role]])]),p("div",D4,[p("label",null,I(y(a)==="en"?"Birth Date":"تاريخ الميلاد"),1),le(p("input",{type:"date","onUpdate:modelValue":f[1]||(f[1]=_=>s.value.birthDate=_)},null,512),[[_e,s.value.birthDate]])]),p("div",k4,[p("label",null,I(y(a)==="en"?"Gender":"الجنس"),1),le(p("select",{"onUpdate:modelValue":f[2]||(f[2]=_=>s.value.gender=_)},[p("option",O4,I(y(a)==="en"?"-- Select Gender --":"-- اختر الجنس --"),1),p("option",x4,I(y(a)==="en"?"Male":"ذكر"),1),p("option",N4,I(y(a)==="en"?"Female":"أنثى"),1)],512),[[vt,s.value.gender]])]),p("div",V4,[p("label",null,I(y(a)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),le(p("textarea",{"onUpdate:modelValue":f[3]||(f[3]=_=>s.value.allergies=_),rows:"2",placeholder:y(a)==="en"?"e.g., Iodine-Based Dyes":"مثال: صبغات اليود"},null,8,M4),[[_e,s.value.allergies]])]),p("div",L4,[p("label",null,I(y(a)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),le(p("textarea",{"onUpdate:modelValue":f[4]||(f[4]=_=>s.value.medicalHistory=_),rows:"2",placeholder:y(a)==="en"?"e.g., Diabetes, Asthma":"مثال: مرض السكري, الربو"},null,8,$4),[[_e,s.value.medicalHistory]])]),p("button",{class:"action-button",onClick:u,disabled:y(n).loading},[y(n).loading?(B(),Bn(y(_t),{key:0,icon:"spinner",spin:""})):(B(),G("span",U4,I(y(a)==="en"?"Save & Continue":"حفظ ومتابعة"),1))],8,F4)])])):Ee("",!0),p("div",{class:Ts(["dashboard-page dashboard-blur-area",{"is-blurred":o.value}])},[p("main",B4,[p("section",j4,[p("h2",{dir:y(a)==="ar"?"rtl":"ltr"},I(y(a)==="en"?"Welcome to mSv Dose Tracker":"مرحبًا بك في متتبع جرعات الأشعة السينية"),9,q4),p("p",{dir:y(a)==="ar"?"rtl":"ltr"},I(y(a)==="en"?"Your comprehensive tool for managing radiation exposure.":"أداتك الشاملة لإدارة التعرض للإشعاع."),9,H4),p("div",z4,[p("div",{class:"feature-item",onClick:f[5]||(f[5]=_=>y(r).push("/recommend"))},[f[8]||(f[8]=p("i",{class:"fas fa-file-medical"},null,-1)),p("h3",{dir:y(a)==="ar"?"rtl":"ltr"},I(y(a)==="en"?"Get Scan Recommendation":"الحصول على توصية"),9,W4),p("p",{dir:y(a)==="ar"?"rtl":"ltr"},I(y(a)==="en"?"Use AI to get recommendations on the necessity of radiological scans.":"استخدم الذكاء الاصطناعي للحصول على توصيات حول ضرورة الفحوصات الإشعاعية."),9,G4)]),c.value==="doctor"?(B(),G("div",{key:0,class:"feature-item",onClick:f[6]||(f[6]=_=>y(r).push("/patients"))},[f[9]||(f[9]=p("i",{class:"fas fa-users"},null,-1)),p("h3",{dir:y(a)==="ar"?"rtl":"ltr"},I(y(a)==="en"?"Manage Patients":"إدارة المرضى"),9,K4),p("p",{dir:y(a)==="ar"?"rtl":"ltr"},I(y(a)==="en"?"View, add, and manage your patient records and their scan histories.":"عرض وإضافة وإدارة سجلات مرضاك وتاريخ فحوصاتهم."),9,Y4)])):Ee("",!0),p("div",{class:"feature-item",onClick:f[7]||(f[7]=_=>y(r).push("/profile"))},[f[10]||(f[10]=p("i",{class:"fas fa-user"},null,-1)),p("h3",{dir:y(a)==="ar"?"rtl":"ltr"},I(y(a)==="en"?"View Profile":"عرض الملف الشخصي"),9,Q4),p("p",{dir:y(a)==="ar"?"rtl":"ltr"},I(y(a)==="en"?"Review your personal details and dose history.":"راجع معلوماتك الشخصية وسجل جرعاتك."),9,X4)])]),p("button",{onClick:h,class:"action-button secondary logout-button"},I(y(a)==="en"?"Logout":"تسجيل الخروج"),1)])])],2)],64))]))}},Z4=wt(J4,[["__scopeId","data-v-2c9adee3"]]),eM={class:"reset-password-page"},tM={class:"reset-password-main-content"},nM={class:"reset-password-card"},rM=["dir"],sM=["dir"],iM={class:"form-group"},oM=["dir"],aM=["placeholder","dir"],lM=["disabled"],cM={key:0},uM={key:1},hM=["dir"],dM=["dir"],fM=["dir"],pM={__name:"ResetPasswordView",setup(t){const e=Ns(),n=sn(),r=$e("currentLanguage"),s=Te(""),i=async()=>{await n.sendPasswordReset(s.value)},o=()=>{e.push("/signin")};return(c,a)=>(B(),G("div",eM,[p("main",tM,[p("section",nM,[p("h2",{dir:y(r)==="ar"?"rtl":"ltr"},I(y(r)==="en"?"Reset Your Password":"إعادة تعيين كلمة المرور"),9,rM),p("p",{dir:y(r)==="ar"?"rtl":"ltr"},I(y(r)==="en"?"Enter your email address to receive a password reset link.":"أدخل عنوان بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور."),9,sM),p("form",{onSubmit:rt(i,["prevent"]),class:"reset-password-form"},[p("div",iM,[p("label",{for:"email",dir:y(r)==="ar"?"rtl":"ltr"},I(y(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,oM),le(p("input",{type:"email",id:"email","onUpdate:modelValue":a[0]||(a[0]=u=>s.value=u),placeholder:y(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:y(r)==="ar"?"rtl":"ltr",required:""},null,8,aM),[[_e,s.value]])]),p("button",{class:"action-button primary",type:"submit",disabled:y(n).loading},[y(n).loading?(B(),G("span",cM,I(y(r)==="en"?"Sending Link...":"جاري إرسال الرابط..."),1)):(B(),G("span",uM,I(y(r)==="en"?"Send Reset Link":"إرسال رابط إعادة التعيين"),1))],8,lM)],32),y(n).error?(B(),G("div",{key:0,class:"message error-message",dir:y(r)==="ar"?"rtl":"ltr"},I(y(n).error),9,hM)):Ee("",!0),y(n).successMessage?(B(),G("div",{key:1,class:"message success-message",dir:y(r)==="ar"?"rtl":"ltr"},I(y(n).successMessage),9,dM)):Ee("",!0),p("p",{class:"switch-link-container",dir:y(r)==="ar"?"rtl":"ltr"},[mt(I(y(r)==="en"?"Remembered your password?":"هل تذكرت كلمة المرور؟")+" ",1),p("a",{href:"#",onClick:rt(o,["prevent"])},I(y(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,fM)])])]))}},mM=wt(pM,[["__scopeId","data-v-73a48bd7"]]),gM=["dir"],yM={class:"modal-title"},_M={class:"form-group"},vM={value:"doctor"},bM={value:"patient"},wM={class:"form-group"},EM={class:"form-group"},TM={class:"form-group"},IM={value:"male"},SM={value:"female"},AM={key:0,class:"pregnancy-section"},PM={class:"form-group checkbox-group"},CM={key:0,class:"form-group"},RM={class:"form-group"},DM={class:"form-group"},kM={class:"modal-actions"},OM={type:"submit",class:"action-button"},xM={__name:"ProfileFormModal",props:{show:Boolean,profileData:{type:Object,default:()=>null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=$e("currentLanguage"),i=Un({role:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",allergies:"",medicalHistory:""});tt(()=>n.show,c=>{c&&n.profileData&&(i.role=n.profileData.role||"patient",i.birthDate=n.profileData.birthDate||"",i.gender=n.profileData.gender||"male",i.weight=n.profileData.weight||null,i.isPregnant=n.profileData.isPregnant||!1,i.estimatedDueDate=n.profileData.estimatedDueDate||"",i.allergies=Array.isArray(n.profileData.allergies)?n.profileData.allergies.join(", "):"",i.medicalHistory=Array.isArray(n.profileData.medicalHistory)?n.profileData.medicalHistory.join(", "):"")},{immediate:!0}),tt(()=>i.gender,c=>{c==="male"&&(i.isPregnant=!1,i.estimatedDueDate="")}),tt(()=>i.isPregnant,c=>{c||(i.estimatedDueDate="")});const o=()=>{if(!i.role||!i.birthDate||!i.gender){alert("Role, Birth Date, and Gender are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Estimated due date is required for pregnant patients.");return}r("save",i)};return(c,a)=>(B(),Bn(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),G("div",{key:0,class:"modal-overlay",onClick:a[10]||(a[10]=rt(u=>r("close"),["self"]))},[p("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[p("button",{class:"close-button",onClick:a[0]||(a[0]=u=>r("close"))},"×"),p("h3",yM,I(y(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1),p("form",{onSubmit:rt(o,["prevent"]),class:"profile-form"},[p("div",_M,[p("label",null,I(y(s)==="en"?"Role":"الدور"),1),le(p("select",{"onUpdate:modelValue":a[1]||(a[1]=u=>i.role=u),required:""},[p("option",vM,I(y(s)==="en"?"Doctor":"طبيب"),1),p("option",bM,I(y(s)==="en"?"Patient":"مريض"),1)],512),[[vt,i.role]])]),p("div",wM,[p("label",null,I(y(s)==="en"?"Weight (kg)":"الوزن (كجم)"),1),le(p("input",{type:"number",step:"0.1","onUpdate:modelValue":a[2]||(a[2]=u=>i.weight=u),placeholder:"e.g., 70.5"},null,512),[[_e,i.weight]])]),p("div",EM,[p("label",null,I(y(s)==="en"?"Birth Date":"تاريخ الميلاد"),1),le(p("input",{type:"date","onUpdate:modelValue":a[3]||(a[3]=u=>i.birthDate=u),required:""},null,512),[[_e,i.birthDate]])]),p("div",TM,[p("label",null,I(y(s)==="en"?"Gender":"الجنس"),1),le(p("select",{"onUpdate:modelValue":a[4]||(a[4]=u=>i.gender=u),required:""},[p("option",IM,I(y(s)==="en"?"Male":"ذكر"),1),p("option",SM,I(y(s)==="en"?"Female":"أنثى"),1)],512),[[vt,i.gender]])]),i.gender==="female"?(B(),G("div",AM,[p("div",PM,[p("label",null,[le(p("input",{type:"checkbox","onUpdate:modelValue":a[5]||(a[5]=u=>i.isPregnant=u)},null,512),[[Ql,i.isPregnant]]),p("span",null,I(y(s)==="en"?"Currently Pregnant?":"هل أنت حامل حاليًا؟"),1)])]),i.isPregnant?(B(),G("div",CM,[p("label",null,I(y(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),le(p("input",{type:"date","onUpdate:modelValue":a[6]||(a[6]=u=>i.estimatedDueDate=u),required:""},null,512),[[_e,i.estimatedDueDate]])])):Ee("",!0)])):Ee("",!0),p("div",RM,[p("label",null,I(y(s)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),le(p("textarea",{"onUpdate:modelValue":a[7]||(a[7]=u=>i.allergies=u),rows:"2"},null,512),[[_e,i.allergies]])]),p("div",DM,[p("label",null,I(y(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),le(p("textarea",{"onUpdate:modelValue":a[8]||(a[8]=u=>i.medicalHistory=u),rows:"2"},null,512),[[_e,i.medicalHistory]])]),p("div",kM,[p("button",{type:"button",onClick:a[9]||(a[9]=u=>r("close")),class:"action-button secondary"},I(y(s)==="en"?"Cancel":"إلغاء"),1),p("button",OM,I(y(s)==="en"?"Save Changes":"حفظ التغييرات"),1)])],32)],8,gM)])):Ee("",!0)]),_:1}))}},NM=wt(xM,[["__scopeId","data-v-efada37a"]]),VM=["dir"],MM={class:"form-row"},LM={class:"form-group"},$M={disabled:"",value:""},FM=["value"],UM={key:0,class:"form-group"},BM={class:"form-row"},jM={class:"form-group"},qM={value:"X-ray"},HM={value:"CT"},zM={class:"form-group"},WM={disabled:"",value:""},GM=["value"],KM={key:0,class:"form-group"},YM=["placeholder"],QM={key:1,class:"form-group"},XM={class:"form-group"},JM={class:"form-group"},ZM=["placeholder"],eL={class:"form-group"},tL={class:"form-group"},nL={class:"modal-actions"},rL=["disabled"],sL={__name:"PersonalScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=sn(),i=$e("currentLanguage"),o={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},c=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],a=Un({id:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:new Date().toISOString().split("T")[0],patientDose:null,reason:"",notes:""}),u=Pe(()=>o[a.scanType]||[]),h=Pe(()=>a.subScanType==="Other"),m=Pe(()=>a.scanPlace==="other");tt(()=>n.show,C=>{if(C&&(Object.assign(a,{id:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:new Date().toISOString().split("T")[0],patientDose:null,reason:"",notes:""}),n.scan)){a.id=n.scan.id,a.scanType=n.scan.scanType,a.scanDate=n.scan.scanDate?.toDate()?.toISOString().split("T")[0]||"",a.patientDose=n.scan.patientDose,a.reason=n.scan.reason,a.notes=n.scan.notes,a.numberOfScans=n.scan.numberOfScans||1;const E=n.scan.scanDetail;u.value.some(V=>V.value===E)?a.subScanType=E:E&&(a.subScanType="Other",a.otherScanDescription=E);const N=n.scan.scanPlace;c.some(V=>V.value===N)?a.scanPlace=N:N&&(a.scanPlace="other",a.otherScanPlaceDescription=N)}}),tt(()=>a.scanType,()=>{a.subScanType="",a.otherScanDescription=""});const f=async()=>{const C=s.userProfile;if(!C)return alert("User profile not available. Cannot estimate dose."),!1;const E=C.birthDate?new Date().getFullYear()-C.birthDate.toDate().getFullYear():"N/A",T=C.weight||70,N=u.value.find(P=>P.value===a.subScanType);let x="";h.value?x=a.otherScanDescription:N&&(x=i.value==="en"?N.en:N.ar);const V=c.find(P=>P.value===a.scanPlace);let $="";m.value?$=a.otherScanPlaceDescription:V&&($=i.value==="en"?V.en:V.ar);let W="";a.scanType==="X-ray"&&a.numberOfScans>1?W=`Estimate the TOTAL effective dose (in mSv) for a patient from a procedure involving ${a.numberOfScans} separate X-ray scans of the ${$} with the specific protocol: "${x}".`:W=`Estimate the typical effective dose (in mSv) for a patient undergoing a single ${a.scanType} scan of the ${$} with the specific protocol: "${x}".`,W+=` Patient Age: ${E}. Patient Weight: ${T} kg. Reason for scan: "${a.reason||"Not provided"}". Respond ONLY with a single number. Do not add any other text or units.`;const J=a.scanType==="CT"?{min:.5,max:40}:{min:.001,max:10};try{const A=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:W}]}],generationConfig:{responseMimeType:"text/plain"}})});if(!A.ok)throw new Error(`API Error: ${A.statusText}`);const D=(await A.json()).candidates?.[0]?.content?.parts?.[0]?.text||"",S=parseFloat(D.match(/[\d.]+/));if(isNaN(S)||S<J.min||S>J.max)throw new Error("AI returned an invalid or out-of-range value.");return a.patientDose=S,!0}catch(P){return console.error("Dose estimation failed:",P),alert(i.value==="en"?"AI estimation failed. Please enter the dose manually.":"فشل تقدير الذكاء الاصطناعي. يرجى إدخال الجرعة يدويًا."),!1}},_=async()=>{if(!a.scanDate||!a.scanPlace||m.value&&!a.otherScanPlaceDescription||!a.subScanType||h.value&&!a.otherScanDescription){alert(i.value==="en"?"Please fill all required scan details.":"يرجى ملء جميع تفاصيل الفحص المطلوبة.");return}if(a.scanType==="X-ray"&&(a.numberOfScans===null||a.numberOfScans<1)){alert(i.value==="en"?"Number of scans must be at least 1 for X-ray.":"عدد الفحوصات لأشعة إكس يجب أن يكون 1 على الأقل.");return}if(!a.patientDose&&a.patientDose!==0&&!await f())return;const C=a.scanDate.split("-"),E=new Date(Date.UTC(C[0],parseInt(C[1],10)-1,C[2]));if(isNaN(E.getTime())){alert("Invalid date. Please select a valid date.");return}const T=h.value?a.otherScanDescription:a.subScanType,N=m.value?a.otherScanPlaceDescription:a.scanPlace,x={id:a.id,scanType:a.scanType,scanDetail:T,scanPlace:N,numberOfScans:a.scanType==="X-ray"?Number(a.numberOfScans):1,scanDate:De.fromDate(E),patientDose:a.patientDose,reason:a.reason,notes:a.notes,isPersonalScan:!0};r("save",x)};return(C,E)=>(B(),Bn(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),G("div",{key:0,class:"modal-overlay",onClick:E[12]||(E[12]=rt(T=>C.$emit("close"),["self"]))},[p("div",{class:"modal-content",dir:y(i)==="ar"?"rtl":"ltr"},[p("button",{class:"close-modal-button",onClick:E[0]||(E[0]=T=>C.$emit("close"))},"×"),p("h3",null,I(t.scan?y(i)==="en"?"Edit Personal Scan":"تعديل الفحص الشخصي":y(i)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1),p("form",{onSubmit:rt(_,["prevent"]),class:"scan-form"},[p("div",MM,[p("div",LM,[p("label",null,I(y(i)==="en"?"Place of Scan":"مكان الفحص"),1),le(p("select",{"onUpdate:modelValue":E[1]||(E[1]=T=>a.scanPlace=T),required:""},[p("option",$M,I(y(i)==="en"?"Select...":"اختر..."),1),(B(),G(et,null,fn(c,T=>p("option",{key:T.value,value:T.value},I(y(i)==="en"?T.en:T.ar),9,FM)),64))],512),[[vt,a.scanPlace]])]),m.value?(B(),G("div",UM,[p("label",null,I(y(i)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر"),1),le(p("input",{type:"text","onUpdate:modelValue":E[2]||(E[2]=T=>a.otherScanPlaceDescription=T),required:""},null,512),[[_e,a.otherScanPlaceDescription]])])):Ee("",!0)]),p("div",BM,[p("div",jM,[p("label",null,I(y(i)==="en"?"Scan Category":"فئة الفحص"),1),le(p("select",{"onUpdate:modelValue":E[3]||(E[3]=T=>a.scanType=T),required:""},[p("option",qM,I(y(i)==="en"?"X-ray":"أشعة سينية"),1),p("option",HM,I(y(i)==="en"?"CT":"أشعة مقطعية"),1)],512),[[vt,a.scanType]])]),p("div",zM,[p("label",null,I(y(i)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),le(p("select",{"onUpdate:modelValue":E[4]||(E[4]=T=>a.subScanType=T),required:""},[p("option",WM,I(y(i)==="en"?"Select...":"اختر..."),1),(B(!0),G(et,null,fn(u.value,T=>(B(),G("option",{key:T.value,value:T.value},I(y(i)==="en"?T.en:T.ar),9,GM))),128))],512),[[vt,a.subScanType]])])]),h.value?(B(),G("div",KM,[p("label",null,I(y(i)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص"),1),le(p("input",{type:"text","onUpdate:modelValue":E[5]||(E[5]=T=>a.otherScanDescription=T),placeholder:y(i)==="en"?"e.g., Left Hand X-ray":"مثال: أشعة سينية لليد اليسرى",required:""},null,8,YM),[[_e,a.otherScanDescription]])])):Ee("",!0),a.scanType==="X-ray"?(B(),G("div",QM,[p("label",null,I(y(i)==="en"?"Number of Scans":"عدد الفحوصات"),1),le(p("input",{type:"number","onUpdate:modelValue":E[6]||(E[6]=T=>a.numberOfScans=T),min:"1",required:""},null,512),[[_e,a.numberOfScans,void 0,{number:!0}]])])):Ee("",!0),p("div",XM,[p("label",null,I(y(i)==="en"?"Scan Date":"تاريخ الفحص"),1),le(p("input",{type:"date","onUpdate:modelValue":E[7]||(E[7]=T=>a.scanDate=T),required:""},null,512),[[_e,a.scanDate]])]),p("div",JM,[p("label",null,I(y(i)==="en"?"Your Dose (mSv)":"جرعتك (mSv)"),1),le(p("input",{type:"number",step:"0.01","onUpdate:modelValue":E[8]||(E[8]=T=>a.patientDose=T),placeholder:y(i)==="en"?"Leave blank for AI estimate":"اتركه فارغًا لتقدير الذكاء الاصطناعي"},null,8,ZM),[[_e,a.patientDose,void 0,{number:!0}]])]),p("div",eL,[p("label",null,I(y(i)==="en"?"Reason for Scan":"أسباب الفحص"),1),le(p("textarea",{"onUpdate:modelValue":E[9]||(E[9]=T=>a.reason=T),rows:"2"},null,512),[[_e,a.reason]])]),p("div",tL,[p("label",null,I(y(i)==="en"?"Additional Notes":"ملاحظات إضافية"),1),le(p("textarea",{"onUpdate:modelValue":E[10]||(E[10]=T=>a.notes=T),rows:"3"},null,512),[[_e,a.notes]])]),p("div",nL,[p("button",{type:"button",onClick:E[11]||(E[11]=T=>C.$emit("close")),class:"action-button secondary"},I(y(i)==="en"?"Cancel":"إلغاء"),1),p("button",{type:"submit",class:"action-button",disabled:t.isSaving},I(t.isSaving?y(i)==="en"?"Saving...":"جار الحفظ...":y(i)==="en"?"Save":"حفظ"),9,rL)])],32)],8,VM)])):Ee("",!0)]),_:1}))}},iL=wt(sL,[["__scopeId","data-v-63d56769"]]),oL=["dir"],aL={key:0,class:"loading-state"},lL={key:1,class:"empty-state"},cL={key:2,class:"table-container"},uL={class:"history-table"},hL={class:"details-column"},dL={class:"details-column"},fL={class:"details-column"},pL={class:"details-column"},mL={class:"details-column"},gL={class:"details-column"},yL={class:"details-column"},_L={class:"details-column"},vL={class:"action-buttons"},bL=["onClick","title"],wL=["onClick","title"],EL={__name:"HistoryTable",props:{scans:{type:Array,required:!0},isLoading:{type:Boolean,default:!1},isPersonalView:{type:Boolean,default:!1}},emits:["edit","delete"],setup(t,{emit:e}){const n=$e("currentLanguage"),r=s=>!s||!s.toDate?"N/A":s.toDate().toLocaleDateString();return(s,i)=>(B(),G("div",{class:"history-table-wrapper",dir:y(n)==="ar"?"rtl":"ltr"},[t.isLoading?(B(),G("div",aL,[Se(y(_t),{icon:"spinner",spin:""}),p("span",null,I(y(n)==="en"?"Loading history...":"جاري تحميل السجل..."),1)])):!t.scans||t.scans.length===0?(B(),G("div",lL,[p("p",null,I(y(n)==="en"?"No scan records found.":"لم يتم العثور على سجلات فحوصات."),1)])):(B(),G("div",cL,[p("table",uL,[p("thead",null,[p("tr",null,[p("th",null,I(y(n)==="en"?"Scan Type":"نوع الفحص"),1),p("th",hL,I(y(n)==="en"?"Place of Scan":"مكان الفحص"),1),p("th",dL,I(y(n)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),p("th",null,I(y(n)==="en"?"Date":"التاريخ"),1),p("th",null,I(y(n)==="en"?"Dose":"الجرعة")+" (mSv)",1),p("th",fL,I(y(n)==="en"?"Reason for Scan":"سبب الفحص"),1),p("th",pL,I(y(n)==="en"?"Additional Notes":"ملاحظات إضافية"),1),p("th",null,I(y(n)==="en"?"Actions":"الإجراءات"),1)])]),p("tbody",null,[(B(!0),G(et,null,fn(t.scans,o=>(B(),G("tr",{key:o.id},[p("td",null,I(o.scanType||"N/A"),1),p("td",mL,I(o.scanPlace||"N/A"),1),p("td",gL,I(o.scanDetail||"N/A"),1),p("td",null,I(r(o.scanDate)),1),p("td",null,I(o.patientDose??"N/A"),1),p("td",yL,I(o.reason||"N/A"),1),p("td",_L,I(o.notes||"N/A"),1),p("td",null,[p("div",vL,[p("button",{onClick:c=>s.$emit("edit",o),class:"action-button-icon edit-button",title:y(n)==="en"?"Edit":"تعديل"},[Se(y(_t),{icon:"edit"})],8,bL),p("button",{onClick:c=>s.$emit("delete",o),class:"action-button-icon delete-button",title:y(n)==="en"?"Delete":"حذف"},[Se(y(_t),{icon:"trash-alt"})],8,wL)])])]))),128))])])]))],8,oL))}},TL=wt(EL,[["__scopeId","data-v-757f7f6d"]]),IL=["dir"],SL={class:"form-group"},AL=["value"],PL={key:0,class:"form-group"},CL={class:"form-group"},RL={class:"form-group"},DL=["disabled"],kL=["value"],OL={key:1,class:"form-group"},xL={key:2,class:"form-group"},NL={class:"form-group"},VL={class:"form-group"},ML={class:"modal-actions"},LL=["disabled"],$L={__name:"OtherScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=sn(),i=$e("currentLanguage"),o=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],c={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"Other",en:"Other...",ar:"أخرى..."}],Background:[{value:"Annual Natural Background",en:"Annual Natural Background",ar:"الخلفية الطبيعية السنوية"}]},a=Un({id:null,scanPlace:"",otherScanPlaceDescription:"",scanType:"X-ray",scanDetail:"",otherScanDetailDescription:"",numberOfScans:1,date:new Date().toISOString().split("T")[0],dosage:null}),u=Pe(()=>c[a.scanType]||[]),h=Pe(()=>a.scanPlace==="other"),m=Pe(()=>a.scanDetail==="Other");tt(()=>n.show,C=>{C&&(Object.assign(a,{id:null,scanPlace:"",otherScanPlaceDescription:"",scanType:"X-ray",scanDetail:"",otherScanDetailDescription:"",numberOfScans:1,date:new Date().toISOString().split("T")[0],dosage:null}),n.scan&&(a.id=n.scan.id,a.scanPlace=n.scan.scanPlace||"",a.scanType=n.scan.scanType||"X-ray",a.scanDetail=n.scan.scanDetail||"",a.numberOfScans=n.scan.numberOfScans||1,a.dosage=n.scan.dosage,a.date=n.scan.date?.toDate?n.scan.date.toDate().toISOString().split("T")[0]:""))}),tt(()=>a.scanType,()=>{a.scanDetail="",a.otherScanDetailDescription=""});const f=async()=>{const C=s.userProfile;if(!C)return alert("User profile is not available. Cannot estimate dose."),!1;const E=C.birthDate?new Date().getFullYear()-C.birthDate.toDate().getFullYear():"N/A",T=C.weight||70,N=h.value?a.otherScanPlaceDescription:a.scanPlace,x=m.value?a.otherScanDetailDescription:a.scanDetail;let V="";a.scanType==="X-ray"&&a.numberOfScans>1?V=`Estimate the TOTAL effective dose (in mSv) for a person from a procedure involving ${a.numberOfScans} separate X-ray scans of the ${N} with the specific protocol: "${x}".`:V=`Estimate the typical effective dose (in mSv) for a person from a single ${a.scanType} source/scan of the ${N} with the specific protocol: "${x}".`,V+=` Patient Age: ${E}. Patient Weight: ${T} kg. Respond ONLY with a single number.`;const $=a.scanType==="CT"?{min:.5,max:40}:{min:.001,max:10};try{const b=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:V}]}],generationConfig:{responseMimeType:"text/plain"}})});if(!b.ok)throw new Error(`API Error: ${b.statusText}`);const A=(await b.json()).candidates?.[0]?.content?.parts?.[0]?.text||"",O=parseFloat(A.match(/[\d.]+/));if(isNaN(O)||O<$.min||O>$.max)throw new Error("AI returned an invalid or out-of-range value.");return a.dosage=O,!0}catch(W){return console.error("Dose estimation failed:",W),alert("AI estimation failed. Please enter the dose manually."),!1}},_=async()=>{if(!a.scanPlace||!a.scanType||!a.date){alert("Please fill all required fields.");return}if(a.dosage===null&&!await f())return;const C=a.date.split("-"),E=new Date(Date.UTC(C[0],parseInt(C[1],10)-1,C[2]));if(isNaN(E.getTime())){alert("Invalid date format. Please use YYYY-MM-DD.");return}const T={id:a.id,scanPlace:h.value?a.otherScanPlaceDescription:a.scanPlace,scanType:a.scanType,scanDetail:m.value?a.otherScanDetailDescription:a.scanDetail,numberOfScans:a.scanType==="X-ray"?Number(a.numberOfScans):1,date:De.fromDate(E),dosage:Number(a.dosage)};r("save",T)};return(C,E)=>(B(),Bn(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(B(),G("div",{key:0,class:"modal-overlay",onClick:E[10]||(E[10]=rt(T=>C.$emit("close"),["self"]))},[p("div",{class:"modal-content",dir:y(i)==="ar"?"rtl":"ltr"},[p("button",{class:"close-modal-button",onClick:E[0]||(E[0]=T=>C.$emit("close"))},"×"),p("h3",null,I(t.scan?"Edit Other Source":"Add Other Source"),1),E[22]||(E[22]=p("p",{class:"subtitle"},"For miscellaneous radiation sources like background radiation or occupational exposure.",-1)),p("form",{onSubmit:rt(_,["prevent"]),class:"scan-form"},[p("div",SL,[E[12]||(E[12]=p("label",null,"Place of Scan",-1)),le(p("select",{"onUpdate:modelValue":E[1]||(E[1]=T=>a.scanPlace=T),required:""},[E[11]||(E[11]=p("option",{disabled:"",value:""},"Select...",-1)),(B(),G(et,null,fn(o,T=>p("option",{key:T.value,value:T.value},I(y(i)==="en"?T.en:T.ar),9,AL)),64))],512),[[vt,a.scanPlace]])]),h.value?(B(),G("div",PL,[E[13]||(E[13]=p("label",null,"Please specify place",-1)),le(p("input",{type:"text","onUpdate:modelValue":E[2]||(E[2]=T=>a.otherScanPlaceDescription=T),required:""},null,512),[[_e,a.otherScanPlaceDescription]])])):Ee("",!0),p("div",CL,[E[15]||(E[15]=p("label",null,"Scan Type",-1)),le(p("select",{"onUpdate:modelValue":E[3]||(E[3]=T=>a.scanType=T),required:""},E[14]||(E[14]=[p("option",{value:"X-ray"},"X-ray",-1),p("option",{value:"CT"},"CT",-1)]),512),[[vt,a.scanType]])]),p("div",RL,[E[17]||(E[17]=p("label",null,"Scan Detail / Protocol",-1)),le(p("select",{"onUpdate:modelValue":E[4]||(E[4]=T=>a.scanDetail=T),disabled:!u.value.length},[E[16]||(E[16]=p("option",{disabled:"",value:""},"Select...",-1)),(B(!0),G(et,null,fn(u.value,T=>(B(),G("option",{key:T.value,value:T.value},I(y(i)==="en"?T.en:T.ar),9,kL))),128))],8,DL),[[vt,a.scanDetail]])]),m.value?(B(),G("div",OL,[E[18]||(E[18]=p("label",null,"Please specify detail",-1)),le(p("input",{type:"text","onUpdate:modelValue":E[5]||(E[5]=T=>a.otherScanDetailDescription=T),required:""},null,512),[[_e,a.otherScanDetailDescription]])])):Ee("",!0),a.scanType==="X-ray"?(B(),G("div",xL,[E[19]||(E[19]=p("label",null,"Number of Scans",-1)),le(p("input",{type:"number","onUpdate:modelValue":E[6]||(E[6]=T=>a.numberOfScans=T),min:"1",required:""},null,512),[[_e,a.numberOfScans,void 0,{number:!0}]])])):Ee("",!0),p("div",NL,[E[20]||(E[20]=p("label",null,"History (Date)",-1)),le(p("input",{type:"date","onUpdate:modelValue":E[7]||(E[7]=T=>a.date=T),required:""},null,512),[[_e,a.date]])]),p("div",VL,[E[21]||(E[21]=p("label",null,"Dosage (mSv)",-1)),le(p("input",{type:"number",step:"0.01","onUpdate:modelValue":E[8]||(E[8]=T=>a.dosage=T),placeholder:"Leave blank for AI estimate"},null,512),[[_e,a.dosage,void 0,{number:!0}]])]),p("div",ML,[p("button",{type:"submit",class:"action-button",disabled:t.isSaving},I(t.isSaving?y(i)==="en"?"Saving...":"جاري الحفظ...":y(i)==="en"?"Save":"حفظ"),9,LL),p("button",{type:"button",onClick:E[9]||(E[9]=T=>C.$emit("close")),class:"action-button secondary"},I(y(i)==="en"?"Cancel":"إلغاء"),1)])],32)],8,IL)])):Ee("",!0)]),_:1}))}},FL=wt($L,[["__scopeId","data-v-6b3836a3"]]),UL=["dir"],BL={key:0,class:"loading-state"},jL={key:1,class:"empty-state"},qL={key:2,class:"table-container"},HL={class:"history-table"},zL={class:"action-buttons"},WL=["onClick","title"],GL=["onClick","title"],KL={__name:"OtherScansTable",props:{scans:{type:Array,required:!0},isLoading:{type:Boolean,default:!1}},emits:["edit","delete"],setup(t,{emit:e}){const n=$e("currentLanguage"),r=s=>!s||!s.toDate?"N/A":s.toDate().toLocaleDateString(n.value==="ar"?"ar-EG":"en-US");return(s,i)=>(B(),G("div",{class:"history-table-wrapper",dir:y(n)==="ar"?"rtl":"ltr"},[t.isLoading?(B(),G("div",BL,[Se(y(_t),{icon:"spinner",spin:""}),p("span",null,I(y(n)==="en"?"Loading other sources...":"جاري تحميل المصادر الأخرى..."),1)])):!t.scans||t.scans.length===0?(B(),G("div",jL,[p("p",null,I(y(n)==="en"?"No other scan records found.":"لم يتم العثور على سجلات فحوصات أخرى."),1)])):(B(),G("div",qL,[p("table",HL,[p("thead",null,[p("tr",null,[p("th",null,I(y(n)==="en"?"Place":"المكان"),1),p("th",null,I(y(n)==="en"?"Type":"النوع"),1),p("th",null,I(y(n)==="en"?"Detail":"التفاصيل"),1),p("th",null,I(y(n)==="en"?"Date":"التاريخ"),1),p("th",null,I(y(n)==="en"?"Dosage":"الجرعة")+" (mSv)",1),p("th",null,I(y(n)==="en"?"Actions":"الإجراءات"),1)])]),p("tbody",null,[(B(!0),G(et,null,fn(t.scans,o=>(B(),G("tr",{key:o.id},[p("td",null,I(o.scanPlace||"N/A"),1),p("td",null,I(o.scanType||"N/A"),1),p("td",null,I(o.scanDetail||"N/A"),1),p("td",null,I(r(o.date)),1),p("td",null,I(o.dosage??"N/A"),1),p("td",null,[p("div",zL,[p("button",{onClick:c=>s.$emit("edit",o),class:"action-button-icon edit-button",title:y(n)==="en"?"Edit":"تعديل"},[Se(y(_t),{icon:"edit"})],8,WL),p("button",{onClick:c=>s.$emit("delete",o),class:"action-button-icon delete-button",title:y(n)==="en"?"Delete":"حذف"},[Se(y(_t),{icon:"trash-alt"})],8,GL)])])]))),128))])])]))],8,UL))}},YL=wt(KL,[["__scopeId","data-v-e616d3c1"]]),QL=["dir"],XL={class:"profile-section card"},JL={class:"card-header"},ZL={key:0,class:"loading-state"},e6={key:1,class:"profile-details"},t6={key:0,class:"role-tag"},n6={key:1,class:"role-tag"},r6={key:0},s6={key:1},i6={key:2},o6={key:0},a6={key:0},l6={key:1},c6={class:"history-section card"},u6={class:"card-header"},h6={class:"history-section card"},d6={class:"card-header"},f6={class:"switch-link-container"},p6={__name:"ProfileView",setup(t){const e=sn(),n=Di(),r=Ns(),s=$e("currentLanguage"),i=$e("triggerMsvRecalculation"),o=Te([]),c=Te([]),a=Te(!1),u=Te(!1),h=Te(!1),m=Te(null),f=Te(null),_=Te(!1),C=Te(null),E=Te(null),T=Te(!1),N=Pe(()=>e.user?.uid),x=Pe(()=>{if(!e.userProfile)return{displayName:e.user?.displayName||"",email:e.user?.email||""};const ae=U=>{if(!U)return"";const Y=U.toDate?U.toDate():new Date(U);return isNaN(Y)?"":Y.toISOString().split("T")[0]};return{...e.userProfile,displayName:e.user?.displayName,email:e.user?.email,birthDate:ae(e.userProfile.birthDate),estimatedDueDate:ae(e.userProfile.estimatedDueDate)}}),V=async()=>{N.value&&(o.value=await n.fetchScansForPatient(N.value),c.value=await n.fetchOtherScansForUser(N.value))},$=async ae=>{if(!N.value)return;const U={};await n.setUserProfile(N.value,U)?(e.setUserProfile(U),a.value=!1,i&&i()):alert(`Failed to save profile. Error: ${n.error}`)},W=async ae=>{if(!N.value)return;const U={...ae,patientId:N.value};(U.id?await n.updateScan(U.id,U):await n.createScan(U))?(u.value=!1,await V(),i&&i()):alert(`Failed to save scan: ${n.error}`)},J=async()=>{if(!f.value?.id)return;await n.deleteScan(f.value.id)?(h.value=!1,await V(),i&&i()):alert(`Failed to delete scan: ${n.error}`)},P=async ae=>{(ae.id?await n.updateOtherScan(ae.id,ae):await n.createOtherScan(ae))?(_.value=!1,console.log("[ProfileView] Save successful. Waiting 1 second before refetching data..."),setTimeout(async()=>{console.log("[ProfileView] Refetching data now..."),await V(),i&&i()},1e3)):alert(`Failed to save other scan: ${n.error}`)},b=async()=>{if(!E.value?.id)return;await n.deleteOtherScan(E.value.id)?(T.value=!1,await V(),i&&i()):alert(`Failed to delete other scan: ${n.error}`)},w=()=>{m.value=null,u.value=!0},A=ae=>{m.value=ae,u.value=!0},O=ae=>{f.value=ae,h.value=!0},D=()=>{C.value=null,_.value=!0},S=ae=>{C.value=ae,_.value=!0},xe=ae=>{E.value=ae,T.value=!0};return qh(()=>{tt(()=>e.isAuthReady,ae=>{ae&&N.value&&V()},{immediate:!0})}),(ae,U)=>(B(),G("div",{class:"profile-page",dir:y(s)==="ar"?"rtl":"ltr"},[p("div",XL,[p("div",JL,[p("h2",null,I(y(s)==="en"?"My Profile":"ملفي الشخصي"),1),p("button",{onClick:U[0]||(U[0]=Y=>a.value=!0),class:"action-button"},I(y(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1)]),y(e).isProfileLoading?(B(),G("div",ZL,"Loading profile...")):x.value?(B(),G("div",e6,[p("p",null,[p("strong",null,I(y(s)==="en"?"Name:":"اﻹسم:"),1),p("span",null,I(x.value.displayName),1)]),p("p",null,[p("strong",null,I(y(s)==="en"?"Email:":"البريد اﻹلكتروني:"),1),p("span",null,I(x.value.email),1)]),p("p",null,[p("strong",null,I(y(s)==="en"?"Role":"الدور")+":",1),x.value.role==="doctor"?(B(),G("span",t6,I(y(s)==="en"?"Doctor":"طبيب"),1)):(B(),G("span",n6,I(y(s)==="en"?"Patient":"مريض"),1))]),p("p",null,[p("strong",null,I(y(s)==="en"?"Birth Date:":"تاريخ الميلاد:"),1),p("span",null,I(x.value.birthDate||"Not set"),1)]),p("p",null,[p("strong",null,I(y(s)==="en"?"Weight:":"الوزن:"),1),p("span",null,I(x.value.weight?`${x.value.weight} kg`:"Not set"),1)]),p("p",null,[p("strong",null,I(y(s)==="en"?"Gender: ":"الجنس: "),1),x.value.gender==="male"?(B(),G("span",r6,I(y(s)==="en"?"Male":"ذكر"),1)):x.value.gender==="female"?(B(),G("span",s6,I(y(s)==="en"?"Female":"أنثى"),1)):(B(),G("span",i6,"Not set"))]),x.value.gender==="female"?(B(),G("p",o6,[p("strong",null,I(y(s)==="en"?"Pregnant: ":"حامل: "),1),x.value.isPregnant?(B(),G("span",a6,I(y(s)==="en"?"Yes":"نعم")+" ("+I(y(s)==="en"?"Due:":"المتوقع:")+" "+I(x.value.estimatedDueDate)+")",1)):(B(),G("span",l6,I(y(s)==="en"?"No":"لا"),1))])):Ee("",!0),p("p",null,[p("strong",null,I(y(s)==="en"?"Allergies:":"الحساسية:"),1),p("span",null,I(x.value.allergies?.join(", ")||"None"),1)]),p("p",null,[p("strong",null,I(y(s)==="en"?"Medical History:":"التاريخ الطبي:"),1),p("span",null,I(x.value.medicalHistory?.join(", ")||"None"),1)])])):Ee("",!0)]),p("div",c6,[p("div",u6,[p("h2",null,I(y(s)==="en"?"Personal Scan History":"تاريخ الفحوصات الشخصية"),1),p("button",{onClick:w,class:"action-button"},I(y(s)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1)]),Se(TL,{scans:o.value,"is-loading":y(n).loading,"is-personal-view":!0,onEdit:A,onDelete:O},null,8,["scans","is-loading"])]),p("div",h6,[p("div",d6,[p("h2",null,I(y(s)==="en"?"Other Scans / Sources":"الفحوصات / المصادر الأخرى"),1),p("button",{onClick:D,class:"action-button"},I(y(s)==="en"?"Add Other Source":"إضافة مصدر آخر"),1)]),Se(YL,{scans:c.value,"is-loading":y(n).loading,onEdit:S,onDelete:xe},null,8,["scans","is-loading"])]),Se(NM,{show:a.value,"profile-data":x.value,onClose:U[1]||(U[1]=Y=>a.value=!1),onSave:$},null,8,["show","profile-data"]),Se(iL,{show:u.value,scan:m.value,"is-saving":y(n).loading,onClose:U[2]||(U[2]=Y=>u.value=!1),onSave:W},null,8,["show","scan","is-saving"]),Se(Ml,{show:h.value,title:"Delete Scan",message:"Are you sure you want to delete this scan record?",onClose:U[3]||(U[3]=Y=>h.value=!1),onConfirm:J},null,8,["show"]),Se(FL,{show:_.value,scan:C.value,"is-saving":y(n).loading,onClose:U[4]||(U[4]=Y=>_.value=!1),onSave:P},null,8,["show","scan","is-saving"]),Se(Ml,{show:T.value,title:"Delete Other Scan",message:"Are you sure you want to delete this record?",onClose:U[5]||(U[5]=Y=>T.value=!1),onConfirm:b},null,8,["show"]),p("div",f6,[p("a",{href:"#",onClick:U[6]||(U[6]=rt(Y=>y(r).push("/dashboard"),["prevent"]))},I(y(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])],8,QL))}},m6=wt(p6,[["__scopeId","data-v-69e1071a"]]),Ll=HT({history:bT("/X-ray"),routes:[{path:"/",name:"signup",component:X2},{path:"/signin",name:"signin",component:vk},{path:"/dashboard",name:"dashboard",component:Z4,meta:{requiresAuth:!0}},{path:"/recommend/:patientId?",name:"recommend",component:vO,meta:{requiresAuth:!0}},{path:"/patients",name:"patients",component:E4,meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:m6,meta:{requiresAuth:!0}},{path:"/resetpassword",name:"resetpassword",component:mM},{path:"/__/auth/handler",name:"firebaseAuthHandler",component:{render(){return ci("div")}},beforeEnter:(t,e,n)=>{n()}},{path:"/:catchAll(.*)",redirect:"/dashboard"},{path:"/__/auth/iframe",name:"firebaseAuthIframeHandler",component:{render(){return ci("div")}},beforeEnter:(t,e,n)=>{n()}}]});Ll.beforeEach(async(t,e,n)=>{const r=sn();r.isAuthReady||await new Promise(c=>{const a=r.$subscribe((u,h)=>{h.isAuthReady&&(a(),c())})});const s=!!r.user;if(t.path.startsWith("/__/auth/handler")||t.path.startsWith("/__/auth/iframe")){n();return}console.log(`Navigating to: ${t.path} (name: ${t.name})`),console.log(`isAuthenticated: ${s}`);const o=["signup","signin","resetpassword","newpassword"].includes(t.name);s?o?(console.log(`Redirecting authenticated user from ${t.name} to /dashboard.`),n("/dashboard")):(console.log(`Allowing authenticated access to ${t.path}.`),n()):o?(console.log(`Allowing unauthenticated access to ${t.name}.`),n()):(console.log(`Redirecting unauthenticated user from ${t.path} (requires auth) to /signin.`),n("/signin"))});var g6="firebase",y6="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur(g6,y6,"app");/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const _6={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},v6=_6,b6={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},w6=b6,E6={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},T6=E6,I6={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},S6={prefix:"fas",iconName:"file-medical",icon:[384,512,[],"f477","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"]},A6={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},P6={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};bN.add(I6,w6,v6,S6,A6,P6,T6);const C6={apiKey:"AIzaSyBKiw2ibjMQB-i_sMorpK5nXyHb87_6uZA",authDomain:"x-ray-b0cb8.firebaseapp.com",projectId:"x-ray-b0cb8",storageBucket:"x-ray-b0cb8.firebasestorage.app",messagingSenderId:"382664693760",appId:"1:382664693760:web:7582abe58d70b3260f20e5",measurementId:"G-5MKNMY9VGY"},zb=z_(C6),tf=nC(zb),R6=Js(zb),gr=B0(C2),D6=GT();gr.use(D6);gr.use(Ll);gr.component("font-awesome-icon",_t);const Ph=Te(null),Wb=Te(!1),ro=sn();ro.initAuth(tf);gv(tf,t=>{if(Ph.value=t?t.uid:null,ro.user=t,ro.isAuthenticated=!!t,Wb.value=!0,t){const e=Ll.currentRoute.value.name;["signup","signin","resetpassword","newpassword"].includes(e)&&Ll.push("/dashboard")}else Ph.value=null,ro.user=null,ro.isAuthenticated=!1});gr.provide("db",R6);gr.provide("auth",tf);gr.provide("currentUserId",Ph);gr.provide("isAuthReady",Wb);gr.provide("appId",typeof __app_id<"u"?__app_id:"default-app-id");gr.mount("#app");
