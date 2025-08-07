(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ch(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ye={},ei=[],On=()=>{},gw=()=>!1,$l=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Rh=t=>t.startsWith("onUpdate:"),Et=Object.assign,Dh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yw=Object.prototype.hasOwnProperty,We=(t,e)=>yw.call(t,e),ge=Array.isArray,ti=t=>Ho(t)==="[object Map]",wi=t=>Ho(t)==="[object Set]",Kf=t=>Ho(t)==="[object Date]",De=t=>typeof t=="function",dt=t=>typeof t=="string",$n=t=>typeof t=="symbol",Xe=t=>t!==null&&typeof t=="object",ry=t=>(Xe(t)||De(t))&&De(t.then)&&De(t.catch),sy=Object.prototype.toString,Ho=t=>sy.call(t),_w=t=>Ho(t).slice(8,-1),iy=t=>Ho(t)==="[object Object]",kh=t=>dt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,so=Ch(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vw=/-(\w)/g,qr=Fl(t=>t.replace(vw,(e,n)=>n?n.toUpperCase():"")),bw=/\B([A-Z])/g,Os=Fl(t=>t.replace(bw,"-$1").toLowerCase()),oy=Fl(t=>t.charAt(0).toUpperCase()+t.slice(1)),jc=Fl(t=>t?`on${oy(t)}`:""),Mr=(t,e)=>!Object.is(t,e),ja=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wu=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},sl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ww=t=>{const e=dt(t)?Number(t):NaN;return isNaN(e)?t:e};let Yf;const Ul=()=>Yf||(Yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bl(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=dt(r)?Sw(r):Bl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(dt(t)||Xe(t))return t}const Ew=/;(?![^(]*\))/g,Tw=/:([^]+)/,Iw=/\/\*[^]*?\*\//g;function Sw(t){const e={};return t.replace(Iw,"").split(Ew).forEach(n=>{if(n){const r=n.split(Tw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ts(t){let e="";if(dt(t))e=t;else if(ge(t))for(let n=0;n<t.length;n++){const r=Ts(t[n]);r&&(e+=r+" ")}else if(Xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Aw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pw=Ch(Aw);function ay(t){return!!t||t===""}function Cw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=zo(t[r],e[r]);return n}function zo(t,e){if(t===e)return!0;let n=Kf(t),r=Kf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=$n(t),r=$n(e),n||r)return t===e;if(n=ge(t),r=ge(e),n||r)return n&&r?Cw(t,e):!1;if(n=Xe(t),r=Xe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),u=e.hasOwnProperty(o);if(l&&!u||!l&&u||!zo(t[o],e[o]))return!1}}return String(t)===String(e)}function Oh(t,e){return t.findIndex(n=>zo(n,e))}const ly=t=>!!(t&&t.__v_isRef===!0),I=t=>dt(t)?t:t==null?"":ge(t)||Xe(t)&&(t.toString===sy||!De(t.toString))?ly(t)?I(t.value):JSON.stringify(t,cy,2):String(t),cy=(t,e)=>ly(e)?cy(t,e.value):ti(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[qc(r,i)+" =>"]=s,n),{})}:wi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qc(n))}:$n(e)?qc(e):Xe(e)&&!ge(e)&&!iy(e)?String(e):e,qc=(t,e="")=>{var n;return $n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class uy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){++this._on===1&&(this.prevScope=Lt,Lt=this)}off(){this._on>0&&--this._on===0&&(Lt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hy(t){return new uy(t)}function dy(){return Lt}function Rw(t,e=!1){Lt&&Lt.cleanups.push(t)}let Qe;const Hc=new WeakSet;class fy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Lt&&Lt.active&&Lt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hc.has(this)&&(Hc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||my(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xf(this),gy(this);const e=Qe,n=vn;Qe=this,vn=!0;try{return this.fn()}finally{yy(this),Qe=e,vn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vh(e);this.deps=this.depsTail=void 0,Xf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Eu(this)&&this.run()}get dirty(){return Eu(this)}}let py=0,io,oo;function my(t,e=!1){if(t.flags|=8,e){t.next=oo,oo=t;return}t.next=io,io=t}function xh(){py++}function Nh(){if(--py>0)return;if(oo){let e=oo;for(oo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;io;){let e=io;for(io=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function gy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yy(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Vh(r),Dw(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Eu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_y(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _y(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===To)||(t.globalVersion=To,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Eu(t))))return;t.flags|=2;const e=t.dep,n=Qe,r=vn;Qe=t,vn=!0;try{gy(t);const s=t.fn(t._value);(e.version===0||Mr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Qe=n,vn=r,yy(t),t.flags&=-3}}function Vh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Dw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let vn=!0;const vy=[];function sr(){vy.push(vn),vn=!1}function ir(){const t=vy.pop();vn=t===void 0?!0:t}function Xf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Qe;Qe=void 0;try{e()}finally{Qe=n}}}let To=0;class kw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Qe||!vn||Qe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Qe)n=this.activeLink=new kw(Qe,this),Qe.deps?(n.prevDep=Qe.depsTail,Qe.depsTail.nextDep=n,Qe.depsTail=n):Qe.deps=Qe.depsTail=n,by(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Qe.depsTail,n.nextDep=void 0,Qe.depsTail.nextDep=n,Qe.depsTail=n,Qe.deps===n&&(Qe.deps=r)}return n}trigger(e){this.version++,To++,this.notify(e)}notify(e){xh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nh()}}}function by(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)by(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const il=new WeakMap,bs=Symbol(""),Tu=Symbol(""),Io=Symbol("");function Ft(t,e,n){if(vn&&Qe){let r=il.get(t);r||il.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Mh),s.map=r,s.key=n),s.track()}}function Yn(t,e,n,r,s,i){const o=il.get(t);if(!o){To++;return}const l=u=>{u&&u.trigger()};if(xh(),e==="clear")o.forEach(l);else{const u=ge(t),c=u&&kh(n);if(u&&n==="length"){const h=Number(r);o.forEach((p,m)=>{(m==="length"||m===Io||!$n(m)&&m>=h)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(Io)),e){case"add":u?c&&l(o.get("length")):(l(o.get(bs)),ti(t)&&l(o.get(Tu)));break;case"delete":u||(l(o.get(bs)),ti(t)&&l(o.get(Tu)));break;case"set":ti(t)&&l(o.get(bs));break}}Nh()}function Ow(t,e){const n=il.get(t);return n&&n.get(e)}function js(t){const e=Be(t);return e===t?e:(Ft(e,"iterate",Io),fn(t)?e:e.map(Rt))}function jl(t){return Ft(t=Be(t),"iterate",Io),t}const xw={__proto__:null,[Symbol.iterator](){return zc(this,Symbol.iterator,Rt)},concat(...t){return js(this).concat(...t.map(e=>ge(e)?js(e):e))},entries(){return zc(this,"entries",t=>(t[1]=Rt(t[1]),t))},every(t,e){return zn(this,"every",t,e,void 0,arguments)},filter(t,e){return zn(this,"filter",t,e,n=>n.map(Rt),arguments)},find(t,e){return zn(this,"find",t,e,Rt,arguments)},findIndex(t,e){return zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zn(this,"findLast",t,e,Rt,arguments)},findLastIndex(t,e){return zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wc(this,"includes",t)},indexOf(...t){return Wc(this,"indexOf",t)},join(t){return js(this).join(t)},lastIndexOf(...t){return Wc(this,"lastIndexOf",t)},map(t,e){return zn(this,"map",t,e,void 0,arguments)},pop(){return zi(this,"pop")},push(...t){return zi(this,"push",t)},reduce(t,...e){return Qf(this,"reduce",t,e)},reduceRight(t,...e){return Qf(this,"reduceRight",t,e)},shift(){return zi(this,"shift")},some(t,e){return zn(this,"some",t,e,void 0,arguments)},splice(...t){return zi(this,"splice",t)},toReversed(){return js(this).toReversed()},toSorted(t){return js(this).toSorted(t)},toSpliced(...t){return js(this).toSpliced(...t)},unshift(...t){return zi(this,"unshift",t)},values(){return zc(this,"values",Rt)}};function zc(t,e,n){const r=jl(t),s=r[e]();return r!==t&&!fn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Nw=Array.prototype;function zn(t,e,n,r,s,i){const o=jl(t),l=o!==t&&!fn(t),u=o[e];if(u!==Nw[e]){const p=u.apply(t,i);return l?Rt(p):p}let c=n;o!==t&&(l?c=function(p,m){return n.call(this,Rt(p),m,t)}:n.length>2&&(c=function(p,m){return n.call(this,p,m,t)}));const h=u.call(o,c,r);return l&&s?s(h):h}function Qf(t,e,n,r){const s=jl(t);let i=n;return s!==t&&(fn(t)?n.length>3&&(i=function(o,l,u){return n.call(this,o,l,u,t)}):i=function(o,l,u){return n.call(this,o,Rt(l),u,t)}),s[e](i,...r)}function Wc(t,e,n){const r=Be(t);Ft(r,"iterate",Io);const s=r[e](...n);return(s===-1||s===!1)&&Fh(n[0])?(n[0]=Be(n[0]),r[e](...n)):s}function zi(t,e,n=[]){sr(),xh();const r=Be(t)[e].apply(t,n);return Nh(),ir(),r}const Vw=Ch("__proto__,__v_isRef,__isVue"),wy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($n));function Mw(t){$n(t)||(t=String(t));const e=Be(this);return Ft(e,"has",t),e.hasOwnProperty(t)}class Ey{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ww:Ay:i?Sy:Iy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ge(e);if(!s){let u;if(o&&(u=xw[n]))return u;if(n==="hasOwnProperty")return Mw}const l=Reflect.get(e,n,ht(e)?e:r);return($n(n)?wy.has(n):Vw(n))||(s||Ft(e,"get",n),i)?l:ht(l)?o&&kh(n)?l:l.value:Xe(l)?s?Cy(l):Un(l):l}}class Ty extends Ey{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const u=Hr(i);if(!fn(r)&&!Hr(r)&&(i=Be(i),r=Be(r)),!ge(e)&&ht(i)&&!ht(r))return u?!1:(i.value=r,!0)}const o=ge(e)&&kh(n)?Number(n)<e.length:We(e,n),l=Reflect.set(e,n,r,ht(e)?e:s);return e===Be(s)&&(o?Mr(r,i)&&Yn(e,"set",n,r):Yn(e,"add",n,r)),l}deleteProperty(e,n){const r=We(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!$n(n)||!wy.has(n))&&Ft(e,"has",n),r}ownKeys(e){return Ft(e,"iterate",ge(e)?"length":bs),Reflect.ownKeys(e)}}class Lw extends Ey{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $w=new Ty,Fw=new Lw,Uw=new Ty(!0);const Iu=t=>t,Pa=t=>Reflect.getPrototypeOf(t);function Bw(t,e,n){return function(...r){const s=this.__v_raw,i=Be(s),o=ti(i),l=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,c=s[t](...r),h=n?Iu:e?ol:Rt;return!e&&Ft(i,"iterate",u?Tu:bs),{next(){const{value:p,done:m}=c.next();return m?{value:p,done:m}:{value:l?[h(p[0]),h(p[1])]:h(p),done:m}},[Symbol.iterator](){return this}}}}function Ca(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jw(t,e){const n={get(s){const i=this.__v_raw,o=Be(i),l=Be(s);t||(Mr(s,l)&&Ft(o,"get",s),Ft(o,"get",l));const{has:u}=Pa(o),c=e?Iu:t?ol:Rt;if(u.call(o,s))return c(i.get(s));if(u.call(o,l))return c(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ft(Be(s),"iterate",bs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Be(i),l=Be(s);return t||(Mr(s,l)&&Ft(o,"has",s),Ft(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,u=Be(l),c=e?Iu:t?ol:Rt;return!t&&Ft(u,"iterate",bs),l.forEach((h,p)=>s.call(i,c(h),c(p),o))}};return Et(n,t?{add:Ca("add"),set:Ca("set"),delete:Ca("delete"),clear:Ca("clear")}:{add(s){!e&&!fn(s)&&!Hr(s)&&(s=Be(s));const i=Be(this);return Pa(i).has.call(i,s)||(i.add(s),Yn(i,"add",s,s)),this},set(s,i){!e&&!fn(i)&&!Hr(i)&&(i=Be(i));const o=Be(this),{has:l,get:u}=Pa(o);let c=l.call(o,s);c||(s=Be(s),c=l.call(o,s));const h=u.call(o,s);return o.set(s,i),c?Mr(i,h)&&Yn(o,"set",s,i):Yn(o,"add",s,i),this},delete(s){const i=Be(this),{has:o,get:l}=Pa(i);let u=o.call(i,s);u||(s=Be(s),u=o.call(i,s)),l&&l.call(i,s);const c=i.delete(s);return u&&Yn(i,"delete",s,void 0),c},clear(){const s=Be(this),i=s.size!==0,o=s.clear();return i&&Yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Bw(s,t,e)}),n}function Lh(t,e){const n=jw(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(We(n,s)&&s in r?n:r,s,i)}const qw={get:Lh(!1,!1)},Hw={get:Lh(!1,!0)},zw={get:Lh(!0,!1)};const Iy=new WeakMap,Sy=new WeakMap,Ay=new WeakMap,Ww=new WeakMap;function Gw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kw(t){return t.__v_skip||!Object.isExtensible(t)?0:Gw(_w(t))}function Un(t){return Hr(t)?t:$h(t,!1,$w,qw,Iy)}function Py(t){return $h(t,!1,Uw,Hw,Sy)}function Cy(t){return $h(t,!0,Fw,zw,Ay)}function $h(t,e,n,r,s){if(!Xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Kw(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Lr(t){return Hr(t)?Lr(t.__v_raw):!!(t&&t.__v_isReactive)}function Hr(t){return!!(t&&t.__v_isReadonly)}function fn(t){return!!(t&&t.__v_isShallow)}function Fh(t){return t?!!t.__v_raw:!1}function Be(t){const e=t&&t.__v_raw;return e?Be(e):t}function Uh(t){return!We(t,"__v_skip")&&Object.isExtensible(t)&&wu(t,"__v_skip",!0),t}const Rt=t=>Xe(t)?Un(t):t,ol=t=>Xe(t)?Cy(t):t;function ht(t){return t?t.__v_isRef===!0:!1}function Se(t){return Ry(t,!1)}function Yw(t){return Ry(t,!0)}function Ry(t,e){return ht(t)?t:new Xw(t,e)}class Xw{constructor(e,n){this.dep=new Mh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Be(e),this._value=n?e:Rt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||fn(e)||Hr(e);e=r?e:Be(e),Mr(e,n)&&(this._rawValue=e,this._value=r?e:Rt(e),this.dep.trigger())}}function _(t){return ht(t)?t.value:t}const Qw={get:(t,e,n)=>e==="__v_raw"?t:_(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Dy(t){return Lr(t)?t:new Proxy(t,Qw)}function Jw(t){const e=ge(t)?new Array(t.length):{};for(const n in t)e[n]=e0(t,n);return e}class Zw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ow(Be(this._object),this._key)}}function e0(t,e,n){const r=t[e];return ht(r)?r:new Zw(t,e,n)}class t0{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Mh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=To-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Qe!==this)return my(this,!0),!0}get value(){const e=this.dep.track();return _y(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function n0(t,e,n=!1){let r,s;return De(t)?r=t:(r=t.get,s=t.set),new t0(r,s,n)}const Ra={},al=new WeakMap;let ps;function r0(t,e=!1,n=ps){if(n){let r=al.get(n);r||al.set(n,r=[]),r.push(t)}}function s0(t,e,n=Ye){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:u}=n,c=$=>s?$:fn($)||s===!1||s===0?Xn($,1):Xn($);let h,p,m,y,x=!1,N=!1;if(ht(t)?(p=()=>t.value,x=fn(t)):Lr(t)?(p=()=>c(t),x=!0):ge(t)?(N=!0,x=t.some($=>Lr($)||fn($)),p=()=>t.map($=>{if(ht($))return $.value;if(Lr($))return c($);if(De($))return u?u($,2):$()})):De(t)?e?p=u?()=>u(t,2):t:p=()=>{if(m){sr();try{m()}finally{ir()}}const $=ps;ps=h;try{return u?u(t,3,[y]):t(y)}finally{ps=$}}:p=On,e&&s){const $=p,z=s===!0?1/0:s;p=()=>Xn($(),z)}const k=dy(),v=()=>{h.stop(),k&&k.active&&Dh(k.effects,h)};if(i&&e){const $=e;e=(...z)=>{$(...z),v()}}let b=N?new Array(t.length).fill(Ra):Ra;const V=$=>{if(!(!(h.flags&1)||!h.dirty&&!$))if(e){const z=h.run();if(s||x||(N?z.some((Y,A)=>Mr(Y,b[A])):Mr(z,b))){m&&m();const Y=ps;ps=h;try{const A=[z,b===Ra?void 0:N&&b[0]===Ra?[]:b,y];b=z,u?u(e,3,A):e(...A)}finally{ps=Y}}}else h.run()};return l&&l(V),h=new fy(p),h.scheduler=o?()=>o(V,!1):V,y=$=>r0($,!1,h),m=h.onStop=()=>{const $=al.get(h);if($){if(u)u($,4);else for(const z of $)z();al.delete(h)}},e?r?V(!0):b=h.run():o?o(V.bind(null,!0),!0):h.run(),v.pause=h.pause.bind(h),v.resume=h.resume.bind(h),v.stop=v,v}function Xn(t,e=1/0,n){if(e<=0||!Xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ht(t))Xn(t.value,e,n);else if(ge(t))for(let r=0;r<t.length;r++)Xn(t[r],e,n);else if(wi(t)||ti(t))t.forEach(r=>{Xn(r,e,n)});else if(iy(t)){for(const r in t)Xn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Xn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wo(t,e,n,r){try{return r?t(...r):t()}catch(s){ql(s,e,n)}}function wn(t,e,n,r){if(De(t)){const s=Wo(t,e,n,r);return s&&ry(s)&&s.catch(i=>{ql(i,e,n)}),s}if(ge(t)){const s=[];for(let i=0;i<t.length;i++)s.push(wn(t[i],e,n,r));return s}}function ql(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ye;if(e){let l=e.parent;const u=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let p=0;p<h.length;p++)if(h[p](t,u,c)===!1)return}l=l.parent}if(i){sr(),Wo(i,null,10,[t,u,c]),ir();return}}i0(t,n,s,r,o)}function i0(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Wt=[];let Pn=-1;const ni=[];let Ar=null,Ws=0;const ky=Promise.resolve();let ll=null;function Hl(t){const e=ll||ky;return t?e.then(this?t.bind(this):t):e}function o0(t){let e=Pn+1,n=Wt.length;for(;e<n;){const r=e+n>>>1,s=Wt[r],i=So(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Bh(t){if(!(t.flags&1)){const e=So(t),n=Wt[Wt.length-1];!n||!(t.flags&2)&&e>=So(n)?Wt.push(t):Wt.splice(o0(e),0,t),t.flags|=1,Oy()}}function Oy(){ll||(ll=ky.then(Ny))}function a0(t){ge(t)?ni.push(...t):Ar&&t.id===-1?Ar.splice(Ws+1,0,t):t.flags&1||(ni.push(t),t.flags|=1),Oy()}function Jf(t,e,n=Pn+1){for(;n<Wt.length;n++){const r=Wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function xy(t){if(ni.length){const e=[...new Set(ni)].sort((n,r)=>So(n)-So(r));if(ni.length=0,Ar){Ar.push(...e);return}for(Ar=e,Ws=0;Ws<Ar.length;Ws++){const n=Ar[Ws];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Ws=0}}const So=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ny(t){try{for(Pn=0;Pn<Wt.length;Pn++){const e=Wt[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<Wt.length;Pn++){const e=Wt[Pn];e&&(e.flags&=-2)}Pn=-1,Wt.length=0,xy(),ll=null,(Wt.length||ni.length)&&Ny()}}let Zt=null,Vy=null;function cl(t){const e=Zt;return Zt=t,Vy=t&&t.type.__scopeId||null,e}function ns(t,e=Zt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&lp(-1);const i=cl(e);let o;try{o=t(...s)}finally{cl(i),r._d&&lp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function le(t,e){if(Zt===null)return t;const n=Yl(Zt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,u=Ye]=e[s];i&&(De(i)&&(i={mounted:i,updated:i}),i.deep&&Xn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:u}))}return t}function us(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let u=l.dir[r];u&&(sr(),wn(u,n,8,[t.el,l,t,e]),ir())}}const l0=Symbol("_vte"),My=t=>t.__isTeleport,Pr=Symbol("_leaveCb"),Da=Symbol("_enterCb");function c0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qh(()=>{t.isMounted=!0}),Hy(()=>{t.isUnmounting=!0}),t}const un=[Function,Array],Ly={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:un,onEnter:un,onAfterEnter:un,onEnterCancelled:un,onBeforeLeave:un,onLeave:un,onAfterLeave:un,onLeaveCancelled:un,onBeforeAppear:un,onAppear:un,onAfterAppear:un,onAppearCancelled:un},$y=t=>{const e=t.subTree;return e.component?$y(e.component):e},u0={name:"BaseTransition",props:Ly,setup(t,{slots:e}){const n=iE(),r=c0();return()=>{const s=e.default&&By(e.default(),!0);if(!s||!s.length)return;const i=Fy(s),o=Be(t),{mode:l}=o;if(r.isLeaving)return Gc(i);const u=Zf(i);if(!u)return Gc(i);let c=Su(u,o,r,n,p=>c=p);u.type!==Gt&&Ao(u,c);let h=n.subTree&&Zf(n.subTree);if(h&&h.type!==Gt&&!gs(u,h)&&$y(n).type!==Gt){let p=Su(h,o,r,n);if(Ao(h,p),l==="out-in"&&u.type!==Gt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,h=void 0},Gc(i);l==="in-out"&&u.type!==Gt?p.delayLeave=(m,y,x)=>{const N=Uy(r,h);N[String(h.key)]=h,m[Pr]=()=>{y(),m[Pr]=void 0,delete c.delayedLeave,h=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Fy(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Gt){e=n;break}}return e}const h0=u0;function Uy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Su(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:u,onEnter:c,onAfterEnter:h,onEnterCancelled:p,onBeforeLeave:m,onLeave:y,onAfterLeave:x,onLeaveCancelled:N,onBeforeAppear:k,onAppear:v,onAfterAppear:b,onAppearCancelled:V}=e,$=String(t.key),z=Uy(n,t),Y=(T,P)=>{T&&wn(T,r,9,P)},A=(T,P)=>{const O=P[1];Y(T,P),ge(T)?T.every(R=>R.length<=1)&&O():T.length<=1&&O()},E={mode:o,persisted:l,beforeEnter(T){let P=u;if(!n.isMounted)if(i)P=k||u;else return;T[Pr]&&T[Pr](!0);const O=z[$];O&&gs(t,O)&&O.el[Pr]&&O.el[Pr](),Y(P,[T])},enter(T){let P=c,O=h,R=p;if(!n.isMounted)if(i)P=v||c,O=b||h,R=V||p;else return;let S=!1;const Ve=T[Da]=Te=>{S||(S=!0,Te?Y(R,[T]):Y(O,[T]),E.delayedLeave&&E.delayedLeave(),T[Da]=void 0)};P?A(P,[T,Ve]):Ve()},leave(T,P){const O=String(t.key);if(T[Da]&&T[Da](!0),n.isUnmounting)return P();Y(m,[T]);let R=!1;const S=T[Pr]=Ve=>{R||(R=!0,P(),Ve?Y(N,[T]):Y(x,[T]),T[Pr]=void 0,z[O]===t&&delete z[O])};z[O]=t,y?A(y,[T,S]):S()},clone(T){const P=Su(T,e,n,r,s);return s&&s(P),P}};return E}function Gc(t){if(zl(t))return t=zr(t),t.children=null,t}function Zf(t){if(!zl(t))return My(t.type)&&t.children?Fy(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&De(n.default))return n.default()}}function Ao(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ao(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function By(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===et?(o.patchFlag&128&&s++,r=r.concat(By(o.children,e,l))):(e||o.type!==Gt)&&r.push(l!=null?zr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function jh(t,e){return De(t)?Et({name:t.name},e,{setup:t}):t}function jy(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ao(t,e,n,r,s=!1){if(ge(t)){t.forEach((x,N)=>ao(x,e&&(ge(e)?e[N]:e),n,r,s));return}if(lo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ao(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Yl(r.component):r.el,o=s?null:i,{i:l,r:u}=t,c=e&&e.r,h=l.refs===Ye?l.refs={}:l.refs,p=l.setupState,m=Be(p),y=p===Ye?()=>!1:x=>We(m,x);if(c!=null&&c!==u&&(dt(c)?(h[c]=null,y(c)&&(p[c]=null)):ht(c)&&(c.value=null)),De(u))Wo(u,l,12,[o,h]);else{const x=dt(u),N=ht(u);if(x||N){const k=()=>{if(t.f){const v=x?y(u)?p[u]:h[u]:u.value;s?ge(v)&&Dh(v,i):ge(v)?v.includes(i)||v.push(i):x?(h[u]=[i],y(u)&&(p[u]=h[u])):(u.value=[i],t.k&&(h[t.k]=u.value))}else x?(h[u]=o,y(u)&&(p[u]=o)):N&&(u.value=o,t.k&&(h[t.k]=o))};o?(k.id=-1,tn(k,n)):k()}}}Ul().requestIdleCallback;Ul().cancelIdleCallback;const lo=t=>!!t.type.__asyncLoader,zl=t=>t.type.__isKeepAlive;function d0(t,e){qy(t,"a",e)}function f0(t,e){qy(t,"da",e)}function qy(t,e,n=Dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Wl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zl(s.parent.vnode)&&p0(r,e,n,s),s=s.parent}}function p0(t,e,n,r){const s=Wl(e,t,r,!0);zy(()=>{Dh(r[e],s)},n)}function Wl(t,e,n=Dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{sr();const l=Go(n),u=wn(e,n,t,o);return l(),ir(),u});return r?s.unshift(i):s.push(i),i}}const dr=t=>(e,n=Dt)=>{(!Co||t==="sp")&&Wl(t,(...r)=>e(...r),n)},m0=dr("bm"),qh=dr("m"),g0=dr("bu"),y0=dr("u"),Hy=dr("bum"),zy=dr("um"),_0=dr("sp"),v0=dr("rtg"),b0=dr("rtc");function w0(t,e=Dt){Wl("ec",t,e)}const E0=Symbol.for("v-ndc");function pn(t,e,n,r){let s;const i=n,o=ge(t);if(o||dt(t)){const l=o&&Lr(t);let u=!1,c=!1;l&&(u=!fn(t),c=Hr(t),t=jl(t)),s=new Array(t.length);for(let h=0,p=t.length;h<p;h++)s[h]=e(u?c?ol(Rt(t[h])):Rt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Xe(t))if(t[Symbol.iterator])s=Array.from(t,(l,u)=>e(l,u,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let u=0,c=l.length;u<c;u++){const h=l[u];s[u]=e(t[h],h,u,i)}}else s=[];return s}const Au=t=>t?d_(t)?Yl(t):Au(t.parent):null,co=Et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Au(t.parent),$root:t=>Au(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Gy(t),$forceUpdate:t=>t.f||(t.f=()=>{Bh(t.update)}),$nextTick:t=>t.n||(t.n=Hl.bind(t.proxy)),$watch:t=>H0.bind(t)}),Kc=(t,e)=>t!==Ye&&!t.__isScriptSetup&&We(t,e),T0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:u}=t;let c;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Kc(r,e))return o[e]=1,r[e];if(s!==Ye&&We(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&We(c,e))return o[e]=3,i[e];if(n!==Ye&&We(n,e))return o[e]=4,n[e];Pu&&(o[e]=0)}}const h=co[e];let p,m;if(h)return e==="$attrs"&&Ft(t.attrs,"get",""),h(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ye&&We(n,e))return o[e]=4,n[e];if(m=u.config.globalProperties,We(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Kc(s,e)?(s[e]=n,!0):r!==Ye&&We(r,e)?(r[e]=n,!0):We(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ye&&We(t,o)||Kc(e,o)||(l=i[0])&&We(l,o)||We(r,o)||We(co,o)||We(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:We(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ep(t){return ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pu=!0;function I0(t){const e=Gy(t),n=t.proxy,r=t.ctx;Pu=!1,e.beforeCreate&&tp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:u,inject:c,created:h,beforeMount:p,mounted:m,beforeUpdate:y,updated:x,activated:N,deactivated:k,beforeDestroy:v,beforeUnmount:b,destroyed:V,unmounted:$,render:z,renderTracked:Y,renderTriggered:A,errorCaptured:E,serverPrefetch:T,expose:P,inheritAttrs:O,components:R,directives:S,filters:Ve}=e;if(c&&S0(c,r,null),o)for(const Z in o){const W=o[Z];De(W)&&(r[Z]=W.bind(n))}if(s){const Z=s.call(n,n);Xe(Z)&&(t.data=Un(Z))}if(Pu=!0,i)for(const Z in i){const W=i[Z],he=De(W)?W.bind(n,n):De(W.get)?W.get.bind(n,n):On,lt=!De(W)&&De(W.set)?W.set.bind(n):On,it=Re({get:he,set:lt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>it.value,set:He=>it.value=He})}if(l)for(const Z in l)Wy(l[Z],r,n,Z);if(u){const Z=De(u)?u.call(n):u;Reflect.ownKeys(Z).forEach(W=>{Nr(W,Z[W])})}h&&tp(h,t,"c");function de(Z,W){ge(W)?W.forEach(he=>Z(he.bind(n))):W&&Z(W.bind(n))}if(de(m0,p),de(qh,m),de(g0,y),de(y0,x),de(d0,N),de(f0,k),de(w0,E),de(b0,Y),de(v0,A),de(Hy,b),de(zy,$),de(_0,T),ge(P))if(P.length){const Z=t.exposed||(t.exposed={});P.forEach(W=>{Object.defineProperty(Z,W,{get:()=>n[W],set:he=>n[W]=he})})}else t.exposed||(t.exposed={});z&&t.render===On&&(t.render=z),O!=null&&(t.inheritAttrs=O),R&&(t.components=R),S&&(t.directives=S),T&&jy(t)}function S0(t,e,n=On){ge(t)&&(t=Cu(t));for(const r in t){const s=t[r];let i;Xe(s)?"default"in s?i=Ue(s.from||r,s.default,!0):i=Ue(s.from||r):i=Ue(s),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function tp(t,e,n){wn(ge(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wy(t,e,n,r){let s=r.includes(".")?o_(n,r):()=>n[r];if(dt(t)){const i=e[t];De(i)&&tt(s,i)}else if(De(t))tt(s,t.bind(n));else if(Xe(t))if(ge(t))t.forEach(i=>Wy(i,e,n,r));else{const i=De(t.handler)?t.handler.bind(n):e[t.handler];De(i)&&tt(s,i,t)}}function Gy(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let u;return l?u=l:!s.length&&!n&&!r?u=e:(u={},s.length&&s.forEach(c=>ul(u,c,o,!0)),ul(u,e,o)),Xe(e)&&i.set(e,u),u}function ul(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ul(t,i,n,!0),s&&s.forEach(o=>ul(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=A0[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const A0={data:np,props:rp,emits:rp,methods:Yi,computed:Yi,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:Yi,directives:Yi,watch:C0,provide:np,inject:P0};function np(t,e){return e?t?function(){return Et(De(t)?t.call(this,this):t,De(e)?e.call(this,this):e)}:e:t}function P0(t,e){return Yi(Cu(t),Cu(e))}function Cu(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function zt(t,e){return t?[...new Set([].concat(t,e))]:e}function Yi(t,e){return t?Et(Object.create(null),t,e):e}function rp(t,e){return t?ge(t)&&ge(e)?[...new Set([...t,...e])]:Et(Object.create(null),ep(t),ep(e??{})):e}function C0(t,e){if(!t)return e;if(!e)return t;const n=Et(Object.create(null),t);for(const r in e)n[r]=zt(t[r],e[r]);return n}function Ky(){return{app:null,config:{isNativeTag:gw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let R0=0;function D0(t,e){return function(r,s=null){De(r)||(r=Et({},r)),s!=null&&!Xe(s)&&(s=null);const i=Ky(),o=new WeakSet,l=[];let u=!1;const c=i.app={_uid:R0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hE,get config(){return i.config},set config(h){},use(h,...p){return o.has(h)||(h&&De(h.install)?(o.add(h),h.install(c,...p)):De(h)&&(o.add(h),h(c,...p))),c},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),c},component(h,p){return p?(i.components[h]=p,c):i.components[h]},directive(h,p){return p?(i.directives[h]=p,c):i.directives[h]},mount(h,p,m){if(!u){const y=c._ceVNode||Pe(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,h,m),u=!0,c._container=h,h.__vue_app__=c,Yl(y.component)}},onUnmount(h){l.push(h)},unmount(){u&&(wn(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(h,p){return i.provides[h]=p,c},runWithContext(h){const p=ws;ws=c;try{return h()}finally{ws=p}}};return c}}let ws=null;function Nr(t,e){if(Dt){let n=Dt.provides;const r=Dt.parent&&Dt.parent.provides;r===n&&(n=Dt.provides=Object.create(r)),n[t]=e}}function Ue(t,e,n=!1){const r=Dt||Zt;if(r||ws){let s=ws?ws._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&De(e)?e.call(r&&r.proxy):e}}function k0(){return!!(Dt||Zt||ws)}const Yy={},Xy=()=>Object.create(Yy),Qy=t=>Object.getPrototypeOf(t)===Yy;function O0(t,e,n,r=!1){const s={},i=Xy();t.propsDefaults=Object.create(null),Jy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Py(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function x0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Be(s),[u]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let p=0;p<h.length;p++){let m=h[p];if(Gl(t.emitsOptions,m))continue;const y=e[m];if(u)if(We(i,m))y!==i[m]&&(i[m]=y,c=!0);else{const x=qr(m);s[x]=Ru(u,l,x,y,t,!1)}else y!==i[m]&&(i[m]=y,c=!0)}}}else{Jy(t,e,s,i)&&(c=!0);let h;for(const p in l)(!e||!We(e,p)&&((h=Os(p))===p||!We(e,h)))&&(u?n&&(n[p]!==void 0||n[h]!==void 0)&&(s[p]=Ru(u,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!We(e,p))&&(delete i[p],c=!0)}c&&Yn(t.attrs,"set","")}function Jy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let u in e){if(so(u))continue;const c=e[u];let h;s&&We(s,h=qr(u))?!i||!i.includes(h)?n[h]=c:(l||(l={}))[h]=c:Gl(t.emitsOptions,u)||(!(u in r)||c!==r[u])&&(r[u]=c,o=!0)}if(i){const u=Be(n),c=l||Ye;for(let h=0;h<i.length;h++){const p=i[h];n[p]=Ru(s,u,p,c[p],t,!We(c,p))}}return o}function Ru(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=We(o,"default");if(l&&r===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&De(u)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const h=Go(s);r=c[n]=u.call(null,e),h()}}else r=u;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Os(n))&&(r=!0))}return r}const N0=new WeakMap;function Zy(t,e,n=!1){const r=n?N0:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let u=!1;if(!De(t)){const h=p=>{u=!0;const[m,y]=Zy(p,e,!0);Et(o,m),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!u)return Xe(t)&&r.set(t,ei),ei;if(ge(i))for(let h=0;h<i.length;h++){const p=qr(i[h]);sp(p)&&(o[p]=Ye)}else if(i)for(const h in i){const p=qr(h);if(sp(p)){const m=i[h],y=o[p]=ge(m)||De(m)?{type:m}:Et({},m),x=y.type;let N=!1,k=!0;if(ge(x))for(let v=0;v<x.length;++v){const b=x[v],V=De(b)&&b.name;if(V==="Boolean"){N=!0;break}else V==="String"&&(k=!1)}else N=De(x)&&x.name==="Boolean";y[0]=N,y[1]=k,(N||We(y,"default"))&&l.push(p)}}const c=[o,l];return Xe(t)&&r.set(t,c),c}function sp(t){return t[0]!=="$"&&!so(t)}const Hh=t=>t[0]==="_"||t==="$stable",zh=t=>ge(t)?t.map(Rn):[Rn(t)],V0=(t,e,n)=>{if(e._n)return e;const r=ns((...s)=>zh(e(...s)),n);return r._c=!1,r},e_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Hh(s))continue;const i=t[s];if(De(i))e[s]=V0(s,i,r);else if(i!=null){const o=zh(i);e[s]=()=>o}}},t_=(t,e)=>{const n=zh(e);t.slots.default=()=>n},n_=(t,e,n)=>{for(const r in e)(n||!Hh(r))&&(t[r]=e[r])},M0=(t,e,n)=>{const r=t.slots=Xy();if(t.vnode.shapeFlag&32){const s=e.__;s&&wu(r,"__",s,!0);const i=e._;i?(n_(r,e,n),n&&wu(r,"_",i,!0)):e_(e,r)}else e&&t_(t,e)},L0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ye;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:n_(s,e,n):(i=!e.$stable,e_(e,s)),o=e}else e&&(t_(t,e),o={default:1});if(i)for(const l in s)!Hh(l)&&o[l]==null&&delete s[l]},tn=Q0;function $0(t){return F0(t)}function F0(t,e){const n=Ul();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:u,setText:c,setElementText:h,parentNode:p,nextSibling:m,setScopeId:y=On,insertStaticContent:x}=t,N=(C,D,M,q=null,X=null,H=null,ie=void 0,te=null,ee=!!D.dynamicChildren)=>{if(C===D)return;C&&!gs(C,D)&&(q=B(C),He(C,X,H,!0),C=null),D.patchFlag===-2&&(ee=!1,D.dynamicChildren=null);const{type:Q,ref:me,shapeFlag:se}=D;switch(Q){case Kl:k(C,D,M,q);break;case Gt:v(C,D,M,q);break;case qa:C==null&&b(D,M,q,ie);break;case et:R(C,D,M,q,X,H,ie,te,ee);break;default:se&1?z(C,D,M,q,X,H,ie,te,ee):se&6?S(C,D,M,q,X,H,ie,te,ee):(se&64||se&128)&&Q.process(C,D,M,q,X,H,ie,te,ee,ue)}me!=null&&X?ao(me,C&&C.ref,H,D||C,!D):me==null&&C&&C.ref!=null&&ao(C.ref,null,H,C,!0)},k=(C,D,M,q)=>{if(C==null)r(D.el=l(D.children),M,q);else{const X=D.el=C.el;D.children!==C.children&&c(X,D.children)}},v=(C,D,M,q)=>{C==null?r(D.el=u(D.children||""),M,q):D.el=C.el},b=(C,D,M,q)=>{[C.el,C.anchor]=x(C.children,D,M,q,C.el,C.anchor)},V=({el:C,anchor:D},M,q)=>{let X;for(;C&&C!==D;)X=m(C),r(C,M,q),C=X;r(D,M,q)},$=({el:C,anchor:D})=>{let M;for(;C&&C!==D;)M=m(C),s(C),C=M;s(D)},z=(C,D,M,q,X,H,ie,te,ee)=>{D.type==="svg"?ie="svg":D.type==="math"&&(ie="mathml"),C==null?Y(D,M,q,X,H,ie,te,ee):T(C,D,X,H,ie,te,ee)},Y=(C,D,M,q,X,H,ie,te)=>{let ee,Q;const{props:me,shapeFlag:se,transition:fe,dirs:Ee}=C;if(ee=C.el=o(C.type,H,me&&me.is,me),se&8?h(ee,C.children):se&16&&E(C.children,ee,null,q,X,Yc(C,H),ie,te),Ee&&us(C,null,q,"created"),A(ee,C,C.scopeId,ie,q),me){for(const ke in me)ke!=="value"&&!so(ke)&&i(ee,ke,null,me[ke],H,q);"value"in me&&i(ee,"value",null,me.value,H),(Q=me.onVnodeBeforeMount)&&Sn(Q,q,C)}Ee&&us(C,null,q,"beforeMount");const _e=U0(X,fe);_e&&fe.beforeEnter(ee),r(ee,D,M),((Q=me&&me.onVnodeMounted)||_e||Ee)&&tn(()=>{Q&&Sn(Q,q,C),_e&&fe.enter(ee),Ee&&us(C,null,q,"mounted")},X)},A=(C,D,M,q,X)=>{if(M&&y(C,M),q)for(let H=0;H<q.length;H++)y(C,q[H]);if(X){let H=X.subTree;if(D===H||l_(H.type)&&(H.ssContent===D||H.ssFallback===D)){const ie=X.vnode;A(C,ie,ie.scopeId,ie.slotScopeIds,X.parent)}}},E=(C,D,M,q,X,H,ie,te,ee=0)=>{for(let Q=ee;Q<C.length;Q++){const me=C[Q]=te?Cr(C[Q]):Rn(C[Q]);N(null,me,D,M,q,X,H,ie,te)}},T=(C,D,M,q,X,H,ie)=>{const te=D.el=C.el;let{patchFlag:ee,dynamicChildren:Q,dirs:me}=D;ee|=C.patchFlag&16;const se=C.props||Ye,fe=D.props||Ye;let Ee;if(M&&hs(M,!1),(Ee=fe.onVnodeBeforeUpdate)&&Sn(Ee,M,D,C),me&&us(D,C,M,"beforeUpdate"),M&&hs(M,!0),(se.innerHTML&&fe.innerHTML==null||se.textContent&&fe.textContent==null)&&h(te,""),Q?P(C.dynamicChildren,Q,te,M,q,Yc(D,X),H):ie||W(C,D,te,null,M,q,Yc(D,X),H,!1),ee>0){if(ee&16)O(te,se,fe,M,X);else if(ee&2&&se.class!==fe.class&&i(te,"class",null,fe.class,X),ee&4&&i(te,"style",se.style,fe.style,X),ee&8){const _e=D.dynamicProps;for(let ke=0;ke<_e.length;ke++){const $e=_e[ke],It=se[$e],St=fe[$e];(St!==It||$e==="value")&&i(te,$e,It,St,X,M)}}ee&1&&C.children!==D.children&&h(te,D.children)}else!ie&&Q==null&&O(te,se,fe,M,X);((Ee=fe.onVnodeUpdated)||me)&&tn(()=>{Ee&&Sn(Ee,M,D,C),me&&us(D,C,M,"updated")},q)},P=(C,D,M,q,X,H,ie)=>{for(let te=0;te<D.length;te++){const ee=C[te],Q=D[te],me=ee.el&&(ee.type===et||!gs(ee,Q)||ee.shapeFlag&198)?p(ee.el):M;N(ee,Q,me,null,q,X,H,ie,!0)}},O=(C,D,M,q,X)=>{if(D!==M){if(D!==Ye)for(const H in D)!so(H)&&!(H in M)&&i(C,H,D[H],null,X,q);for(const H in M){if(so(H))continue;const ie=M[H],te=D[H];ie!==te&&H!=="value"&&i(C,H,te,ie,X,q)}"value"in M&&i(C,"value",D.value,M.value,X)}},R=(C,D,M,q,X,H,ie,te,ee)=>{const Q=D.el=C?C.el:l(""),me=D.anchor=C?C.anchor:l("");let{patchFlag:se,dynamicChildren:fe,slotScopeIds:Ee}=D;Ee&&(te=te?te.concat(Ee):Ee),C==null?(r(Q,M,q),r(me,M,q),E(D.children||[],M,me,X,H,ie,te,ee)):se>0&&se&64&&fe&&C.dynamicChildren?(P(C.dynamicChildren,fe,M,X,H,ie,te),(D.key!=null||X&&D===X.subTree)&&r_(C,D,!0)):W(C,D,M,me,X,H,ie,te,ee)},S=(C,D,M,q,X,H,ie,te,ee)=>{D.slotScopeIds=te,C==null?D.shapeFlag&512?X.ctx.activate(D,M,q,ie,ee):Ve(D,M,q,X,H,ie,ee):Te(C,D,ee)},Ve=(C,D,M,q,X,H,ie)=>{const te=C.component=sE(C,q,X);if(zl(C)&&(te.ctx.renderer=ue),oE(te,!1,ie),te.asyncDep){if(X&&X.registerDep(te,de,ie),!C.el){const ee=te.subTree=Pe(Gt);v(null,ee,D,M)}}else de(te,C,D,M,X,H,ie)},Te=(C,D,M)=>{const q=D.component=C.component;if(Y0(C,D,M))if(q.asyncDep&&!q.asyncResolved){Z(q,D,M);return}else q.next=D,q.update();else D.el=C.el,q.vnode=D},de=(C,D,M,q,X,H,ie)=>{const te=()=>{if(C.isMounted){let{next:se,bu:fe,u:Ee,parent:_e,vnode:ke}=C;{const xt=s_(C);if(xt){se&&(se.el=ke.el,Z(C,se,ie)),xt.asyncDep.then(()=>{C.isUnmounted||te()});return}}let $e=se,It;hs(C,!1),se?(se.el=ke.el,Z(C,se,ie)):se=ke,fe&&ja(fe),(It=se.props&&se.props.onVnodeBeforeUpdate)&&Sn(It,_e,se,ke),hs(C,!0);const St=op(C),ln=C.subTree;C.subTree=St,N(ln,St,p(ln.el),B(ln),C,X,H),se.el=St.el,$e===null&&X0(C,St.el),Ee&&tn(Ee,X),(It=se.props&&se.props.onVnodeUpdated)&&tn(()=>Sn(It,_e,se,ke),X)}else{let se;const{el:fe,props:Ee}=D,{bm:_e,m:ke,parent:$e,root:It,type:St}=C,ln=lo(D);hs(C,!1),_e&&ja(_e),!ln&&(se=Ee&&Ee.onVnodeBeforeMount)&&Sn(se,$e,D),hs(C,!0);{It.ce&&It.ce._def.shadowRoot!==!1&&It.ce._injectChildStyle(St);const xt=C.subTree=op(C);N(null,xt,M,q,C,X,H),D.el=xt.el}if(ke&&tn(ke,X),!ln&&(se=Ee&&Ee.onVnodeMounted)){const xt=D;tn(()=>Sn(se,$e,xt),X)}(D.shapeFlag&256||$e&&lo($e.vnode)&&$e.vnode.shapeFlag&256)&&C.a&&tn(C.a,X),C.isMounted=!0,D=M=q=null}};C.scope.on();const ee=C.effect=new fy(te);C.scope.off();const Q=C.update=ee.run.bind(ee),me=C.job=ee.runIfDirty.bind(ee);me.i=C,me.id=C.uid,ee.scheduler=()=>Bh(me),hs(C,!0),Q()},Z=(C,D,M)=>{D.component=C;const q=C.vnode.props;C.vnode=D,C.next=null,x0(C,D.props,q,M),L0(C,D.children,M),sr(),Jf(C),ir()},W=(C,D,M,q,X,H,ie,te,ee=!1)=>{const Q=C&&C.children,me=C?C.shapeFlag:0,se=D.children,{patchFlag:fe,shapeFlag:Ee}=D;if(fe>0){if(fe&128){lt(Q,se,M,q,X,H,ie,te,ee);return}else if(fe&256){he(Q,se,M,q,X,H,ie,te,ee);return}}Ee&8?(me&16&&gt(Q,X,H),se!==Q&&h(M,se)):me&16?Ee&16?lt(Q,se,M,q,X,H,ie,te,ee):gt(Q,X,H,!0):(me&8&&h(M,""),Ee&16&&E(se,M,q,X,H,ie,te,ee))},he=(C,D,M,q,X,H,ie,te,ee)=>{C=C||ei,D=D||ei;const Q=C.length,me=D.length,se=Math.min(Q,me);let fe;for(fe=0;fe<se;fe++){const Ee=D[fe]=ee?Cr(D[fe]):Rn(D[fe]);N(C[fe],Ee,M,null,X,H,ie,te,ee)}Q>me?gt(C,X,H,!0,!1,se):E(D,M,q,X,H,ie,te,ee,se)},lt=(C,D,M,q,X,H,ie,te,ee)=>{let Q=0;const me=D.length;let se=C.length-1,fe=me-1;for(;Q<=se&&Q<=fe;){const Ee=C[Q],_e=D[Q]=ee?Cr(D[Q]):Rn(D[Q]);if(gs(Ee,_e))N(Ee,_e,M,null,X,H,ie,te,ee);else break;Q++}for(;Q<=se&&Q<=fe;){const Ee=C[se],_e=D[fe]=ee?Cr(D[fe]):Rn(D[fe]);if(gs(Ee,_e))N(Ee,_e,M,null,X,H,ie,te,ee);else break;se--,fe--}if(Q>se){if(Q<=fe){const Ee=fe+1,_e=Ee<me?D[Ee].el:q;for(;Q<=fe;)N(null,D[Q]=ee?Cr(D[Q]):Rn(D[Q]),M,_e,X,H,ie,te,ee),Q++}}else if(Q>fe)for(;Q<=se;)He(C[Q],X,H,!0),Q++;else{const Ee=Q,_e=Q,ke=new Map;for(Q=_e;Q<=fe;Q++){const At=D[Q]=ee?Cr(D[Q]):Rn(D[Q]);At.key!=null&&ke.set(At.key,Q)}let $e,It=0;const St=fe-_e+1;let ln=!1,xt=0;const yr=new Array(St);for(Q=0;Q<St;Q++)yr[Q]=0;for(Q=Ee;Q<=se;Q++){const At=C[Q];if(It>=St){He(At,X,H,!0);continue}let cn;if(At.key!=null)cn=ke.get(At.key);else for($e=_e;$e<=fe;$e++)if(yr[$e-_e]===0&&gs(At,D[$e])){cn=$e;break}cn===void 0?He(At,X,H,!0):(yr[cn-_e]=Q+1,cn>=xt?xt=cn:ln=!0,N(At,D[cn],M,null,X,H,ie,te,ee),It++)}const Oi=ln?B0(yr):ei;for($e=Oi.length-1,Q=St-1;Q>=0;Q--){const At=_e+Q,cn=D[At],ha=At+1<me?D[At+1].el:q;yr[Q]===0?N(null,cn,M,ha,X,H,ie,te,ee):ln&&($e<0||Q!==Oi[$e]?it(cn,M,ha,2):$e--)}}},it=(C,D,M,q,X=null)=>{const{el:H,type:ie,transition:te,children:ee,shapeFlag:Q}=C;if(Q&6){it(C.component.subTree,D,M,q);return}if(Q&128){C.suspense.move(D,M,q);return}if(Q&64){ie.move(C,D,M,ue);return}if(ie===et){r(H,D,M);for(let se=0;se<ee.length;se++)it(ee[se],D,M,q);r(C.anchor,D,M);return}if(ie===qa){V(C,D,M);return}if(q!==2&&Q&1&&te)if(q===0)te.beforeEnter(H),r(H,D,M),tn(()=>te.enter(H),X);else{const{leave:se,delayLeave:fe,afterLeave:Ee}=te,_e=()=>{C.ctx.isUnmounted?s(H):r(H,D,M)},ke=()=>{se(H,()=>{_e(),Ee&&Ee()})};fe?fe(H,_e,ke):ke()}else r(H,D,M)},He=(C,D,M,q=!1,X=!1)=>{const{type:H,props:ie,ref:te,children:ee,dynamicChildren:Q,shapeFlag:me,patchFlag:se,dirs:fe,cacheIndex:Ee}=C;if(se===-2&&(X=!1),te!=null&&(sr(),ao(te,null,M,C,!0),ir()),Ee!=null&&(D.renderCache[Ee]=void 0),me&256){D.ctx.deactivate(C);return}const _e=me&1&&fe,ke=!lo(C);let $e;if(ke&&($e=ie&&ie.onVnodeBeforeUnmount)&&Sn($e,D,C),me&6)Yt(C.component,M,q);else{if(me&128){C.suspense.unmount(M,q);return}_e&&us(C,null,D,"beforeUnmount"),me&64?C.type.remove(C,D,M,ue,q):Q&&!Q.hasOnce&&(H!==et||se>0&&se&64)?gt(Q,D,M,!1,!0):(H===et&&se&384||!X&&me&16)&&gt(ee,D,M),q&&Ne(C)}(ke&&($e=ie&&ie.onVnodeUnmounted)||_e)&&tn(()=>{$e&&Sn($e,D,C),_e&&us(C,null,D,"unmounted")},M)},Ne=C=>{const{type:D,el:M,anchor:q,transition:X}=C;if(D===et){qt(M,q);return}if(D===qa){$(C);return}const H=()=>{s(M),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(C.shapeFlag&1&&X&&!X.persisted){const{leave:ie,delayLeave:te}=X,ee=()=>ie(M,H);te?te(C.el,H,ee):ee()}else H()},qt=(C,D)=>{let M;for(;C!==D;)M=m(C),s(C),C=M;s(D)},Yt=(C,D,M)=>{const{bum:q,scope:X,job:H,subTree:ie,um:te,m:ee,a:Q,parent:me,slots:{__:se}}=C;ip(ee),ip(Q),q&&ja(q),me&&ge(se)&&se.forEach(fe=>{me.renderCache[fe]=void 0}),X.stop(),H&&(H.flags|=8,He(ie,C,D,M)),te&&tn(te,D),tn(()=>{C.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},gt=(C,D,M,q=!1,X=!1,H=0)=>{for(let ie=H;ie<C.length;ie++)He(C[ie],D,M,q,X)},B=C=>{if(C.shapeFlag&6)return B(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const D=m(C.anchor||C.el),M=D&&D[l0];return M?m(M):D};let ae=!1;const re=(C,D,M)=>{C==null?D._vnode&&He(D._vnode,null,null,!0):N(D._vnode||null,C,D,null,null,null,M),D._vnode=C,ae||(ae=!0,Jf(),xy(),ae=!1)},ue={p:N,um:He,m:it,r:Ne,mt:Ve,mc:E,pc:W,pbc:P,n:B,o:t};return{render:re,hydrate:void 0,createApp:D0(re)}}function Yc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function U0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function r_(t,e,n=!1){const r=t.children,s=e.children;if(ge(r)&&ge(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Cr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&r_(o,l)),l.type===Kl&&(l.el=o.el),l.type===Gt&&!l.el&&(l.el=o.el)}}function B0(t){const e=t.slice(),n=[0];let r,s,i,o,l;const u=t.length;for(r=0;r<u;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<c?i=l+1:o=l;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function s_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:s_(e)}function ip(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const j0=Symbol.for("v-scx"),q0=()=>Ue(j0);function tt(t,e,n){return i_(t,e,n)}function i_(t,e,n=Ye){const{immediate:r,deep:s,flush:i,once:o}=n,l=Et({},n),u=e&&r||!e&&i!=="post";let c;if(Co){if(i==="sync"){const y=q0();c=y.__watcherHandles||(y.__watcherHandles=[])}else if(!u){const y=()=>{};return y.stop=On,y.resume=On,y.pause=On,y}}const h=Dt;l.call=(y,x,N)=>wn(y,h,x,N);let p=!1;i==="post"?l.scheduler=y=>{tn(y,h&&h.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,x)=>{x?y():Bh(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,h&&(y.id=h.uid,y.i=h))};const m=s0(t,e,l);return Co&&(c?c.push(m):u&&m()),m}function H0(t,e,n){const r=this.proxy,s=dt(t)?t.includes(".")?o_(r,t):()=>r[t]:t.bind(r,r);let i;De(e)?i=e:(i=e.handler,n=e);const o=Go(this),l=i_(s,i.bind(r),n);return o(),l}function o_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const z0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qr(e)}Modifiers`]||t[`${Os(e)}Modifiers`];function W0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ye;let s=n;const i=e.startsWith("update:"),o=i&&z0(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>dt(h)?h.trim():h)),o.number&&(s=n.map(sl)));let l,u=r[l=jc(e)]||r[l=jc(qr(e))];!u&&i&&(u=r[l=jc(Os(e))]),u&&wn(u,t,6,s);const c=r[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,wn(c,t,6,s)}}function a_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!De(t)){const u=c=>{const h=a_(c,e,!0);h&&(l=!0,Et(o,h))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!i&&!l?(Xe(t)&&r.set(t,null),null):(ge(i)?i.forEach(u=>o[u]=null):Et(o,i),Xe(t)&&r.set(t,o),o)}function Gl(t,e){return!t||!$l(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(t,e[0].toLowerCase()+e.slice(1))||We(t,Os(e))||We(t,e))}function op(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:u,render:c,renderCache:h,props:p,data:m,setupState:y,ctx:x,inheritAttrs:N}=t,k=cl(t);let v,b;try{if(n.shapeFlag&4){const $=s||r,z=$;v=Rn(c.call(z,$,h,p,y,m,x)),b=l}else{const $=e;v=Rn($.length>1?$(p,{attrs:l,slots:o,emit:u}):$(p,null)),b=e.props?l:G0(l)}}catch($){uo.length=0,ql($,t,1),v=Pe(Gt)}let V=v;if(b&&N!==!1){const $=Object.keys(b),{shapeFlag:z}=V;$.length&&z&7&&(i&&$.some(Rh)&&(b=K0(b,i)),V=zr(V,b,!1,!0))}return n.dirs&&(V=zr(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&Ao(V,n.transition),v=V,cl(k),v}const G0=t=>{let e;for(const n in t)(n==="class"||n==="style"||$l(n))&&((e||(e={}))[n]=t[n]);return e},K0=(t,e)=>{const n={};for(const r in t)(!Rh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Y0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:u}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?ap(r,o,c):!!o;if(u&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const m=h[p];if(o[m]!==r[m]&&!Gl(c,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?ap(r,o,c):!0:!!o;return!1}function ap(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Gl(n,i))return!0}return!1}function X0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const l_=t=>t.__isSuspense;function Q0(t,e){e&&e.pendingBranch?ge(t)?e.effects.push(...t):e.effects.push(t):a0(t)}const et=Symbol.for("v-fgt"),Kl=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),qa=Symbol.for("v-stc"),uo=[];let rn=null;function U(t=!1){uo.push(rn=t?null:[])}function J0(){uo.pop(),rn=uo[uo.length-1]||null}let Po=1;function lp(t,e=!1){Po+=t,t<0&&rn&&e&&(rn.hasOnce=!0)}function c_(t){return t.dynamicChildren=Po>0?rn||ei:null,J0(),Po>0&&rn&&rn.push(t),t}function G(t,e,n,r,s,i){return c_(f(t,e,n,r,s,i,!0))}function Bn(t,e,n,r,s){return c_(Pe(t,e,n,r,s,!0))}function hl(t){return t?t.__v_isVNode===!0:!1}function gs(t,e){return t.type===e.type&&t.key===e.key}const u_=({key:t})=>t??null,Ha=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?dt(t)||ht(t)||De(t)?{i:Zt,r:t,k:e,f:!!n}:t:null);function f(t,e=null,n=null,r=0,s=null,i=t===et?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&u_(e),ref:e&&Ha(e),scopeId:Vy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Zt};return l?(Wh(u,n),i&128&&t.normalize(u)):n&&(u.shapeFlag|=dt(n)?8:16),Po>0&&!o&&rn&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&rn.push(u),u}const Pe=Z0;function Z0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===E0)&&(t=Gt),hl(t)){const l=zr(t,e,!0);return n&&Wh(l,n),Po>0&&!i&&rn&&(l.shapeFlag&6?rn[rn.indexOf(t)]=l:rn.push(l)),l.patchFlag=-2,l}if(uE(t)&&(t=t.__vccOpts),e){e=eE(e);let{class:l,style:u}=e;l&&!dt(l)&&(e.class=Ts(l)),Xe(u)&&(Fh(u)&&!ge(u)&&(u=Et({},u)),e.style=Bl(u))}const o=dt(t)?1:l_(t)?128:My(t)?64:Xe(t)?4:De(t)?2:0;return f(t,e,n,r,s,o,i,!0)}function eE(t){return t?Fh(t)||Qy(t)?Et({},t):t:null}function zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:u}=t,c=e?tE(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&u_(c),ref:e&&e.ref?n&&i?ge(i)?i.concat(Ha(e)):[i,Ha(e)]:Ha(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&Ao(h,u.clone(h)),h}function yt(t=" ",e=0){return Pe(Kl,null,t,e)}function h_(t,e){const n=Pe(qa,null,t);return n.staticCount=e,n}function Ie(t="",e=!1){return e?(U(),Bn(Gt,null,t)):Pe(Gt,null,t)}function Rn(t){return t==null||typeof t=="boolean"?Pe(Gt):ge(t)?Pe(et,null,t.slice()):hl(t)?Cr(t):Pe(Kl,null,String(t))}function Cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function Wh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ge(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Wh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Qy(e)?e._ctx=Zt:s===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else De(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),r&64?(n=16,e=[yt(e)]):n=8);t.children=e,t.shapeFlag|=n}function tE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ts([e.class,r.class]));else if(s==="style")e.style=Bl([e.style,r.style]);else if($l(s)){const i=e[s],o=r[s];o&&i!==o&&!(ge(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Sn(t,e,n,r=null){wn(t,e,7,[n,r])}const nE=Ky();let rE=0;function sE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nE,i={uid:rE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new uy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zy(r,s),emitsOptions:a_(r,s),emit:null,emitted:null,propsDefaults:Ye,inheritAttrs:r.inheritAttrs,ctx:Ye,data:Ye,props:Ye,attrs:Ye,slots:Ye,refs:Ye,setupState:Ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=W0.bind(null,i),t.ce&&t.ce(i),i}let Dt=null;const iE=()=>Dt||Zt;let dl,Du;{const t=Ul(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};dl=e("__VUE_INSTANCE_SETTERS__",n=>Dt=n),Du=e("__VUE_SSR_SETTERS__",n=>Co=n)}const Go=t=>{const e=Dt;return dl(t),t.scope.on(),()=>{t.scope.off(),dl(e)}},cp=()=>{Dt&&Dt.scope.off(),dl(null)};function d_(t){return t.vnode.shapeFlag&4}let Co=!1;function oE(t,e=!1,n=!1){e&&Du(e);const{props:r,children:s}=t.vnode,i=d_(t);O0(t,r,i,e),M0(t,s,n||e);const o=i?aE(t,e):void 0;return e&&Du(!1),o}function aE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,T0);const{setup:r}=n;if(r){sr();const s=t.setupContext=r.length>1?cE(t):null,i=Go(t),o=Wo(r,t,0,[t.props,s]),l=ry(o);if(ir(),i(),(l||t.sp)&&!lo(t)&&jy(t),l){if(o.then(cp,cp),e)return o.then(u=>{up(t,u)}).catch(u=>{ql(u,t,0)});t.asyncDep=o}else up(t,o)}else f_(t)}function up(t,e,n){De(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Xe(e)&&(t.setupState=Dy(e)),f_(t)}function f_(t,e,n){const r=t.type;t.render||(t.render=r.render||On);{const s=Go(t);sr();try{I0(t)}finally{ir(),s()}}}const lE={get(t,e){return Ft(t,"get",""),t[e]}};function cE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,lE),slots:t.slots,emit:t.emit,expose:e}}function Yl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Dy(Uh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in co)return co[n](t)},has(e,n){return n in e||n in co}})):t.proxy}function uE(t){return De(t)&&"__vccOpts"in t}const Re=(t,e)=>n0(t,e,Co);function ci(t,e,n){const r=arguments.length;return r===2?Xe(e)&&!ge(e)?hl(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hl(n)&&(n=[n]),Pe(t,e,n))}const hE="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ku;const hp=typeof window<"u"&&window.trustedTypes;if(hp)try{ku=hp.createPolicy("vue",{createHTML:t=>t})}catch{}const p_=ku?t=>ku.createHTML(t):t=>t,dE="http://www.w3.org/2000/svg",fE="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,dp=Kn&&Kn.createElement("template"),pE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Kn.createElementNS(dE,t):e==="mathml"?Kn.createElementNS(fE,t):n?Kn.createElement(t,{is:n}):Kn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Kn.createTextNode(t),createComment:t=>Kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{dp.innerHTML=p_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=dp.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wr="transition",Wi="animation",Ro=Symbol("_vtc"),m_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mE=Et({},Ly,m_),gE=t=>(t.displayName="Transition",t.props=mE,t),xs=gE((t,{slots:e})=>ci(h0,yE(t),e)),ds=(t,e=[])=>{ge(t)?t.forEach(n=>n(...e)):t&&t(...e)},fp=t=>t?ge(t)?t.some(e=>e.length>1):t.length>1:!1;function yE(t){const e={};for(const R in t)R in m_||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=i,appearActiveClass:c=o,appearToClass:h=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,x=_E(s),N=x&&x[0],k=x&&x[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:V,onLeave:$,onLeaveCancelled:z,onBeforeAppear:Y=v,onAppear:A=b,onAppearCancelled:E=V}=e,T=(R,S,Ve,Te)=>{R._enterCancelled=Te,fs(R,S?h:l),fs(R,S?c:o),Ve&&Ve()},P=(R,S)=>{R._isLeaving=!1,fs(R,p),fs(R,y),fs(R,m),S&&S()},O=R=>(S,Ve)=>{const Te=R?A:b,de=()=>T(S,R,Ve);ds(Te,[S,de]),pp(()=>{fs(S,R?u:i),Wn(S,R?h:l),fp(Te)||mp(S,r,N,de)})};return Et(e,{onBeforeEnter(R){ds(v,[R]),Wn(R,i),Wn(R,o)},onBeforeAppear(R){ds(Y,[R]),Wn(R,u),Wn(R,c)},onEnter:O(!1),onAppear:O(!0),onLeave(R,S){R._isLeaving=!0;const Ve=()=>P(R,S);Wn(R,p),R._enterCancelled?(Wn(R,m),_p()):(_p(),Wn(R,m)),pp(()=>{R._isLeaving&&(fs(R,p),Wn(R,y),fp($)||mp(R,r,k,Ve))}),ds($,[R,Ve])},onEnterCancelled(R){T(R,!1,void 0,!0),ds(V,[R])},onAppearCancelled(R){T(R,!0,void 0,!0),ds(E,[R])},onLeaveCancelled(R){P(R),ds(z,[R])}})}function _E(t){if(t==null)return null;if(Xe(t))return[Xc(t.enter),Xc(t.leave)];{const e=Xc(t);return[e,e]}}function Xc(t){return ww(t)}function Wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ro]||(t[Ro]=new Set)).add(e)}function fs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ro];n&&(n.delete(e),n.size||(t[Ro]=void 0))}function pp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let vE=0;function mp(t,e,n,r){const s=t._endId=++vE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:u}=bE(t,e);if(!o)return r();const c=o+"end";let h=0;const p=()=>{t.removeEventListener(c,m),i()},m=y=>{y.target===t&&++h>=u&&p()};setTimeout(()=>{h<u&&p()},l+1),t.addEventListener(c,m)}function bE(t,e){const n=window.getComputedStyle(t),r=x=>(n[x]||"").split(", "),s=r(`${wr}Delay`),i=r(`${wr}Duration`),o=gp(s,i),l=r(`${Wi}Delay`),u=r(`${Wi}Duration`),c=gp(l,u);let h=null,p=0,m=0;e===wr?o>0&&(h=wr,p=o,m=i.length):e===Wi?c>0&&(h=Wi,p=c,m=u.length):(p=Math.max(o,c),h=p>0?o>c?wr:Wi:null,m=h?h===wr?i.length:u.length:0);const y=h===wr&&/\b(transform|all)(,|$)/.test(r(`${wr}Property`).toString());return{type:h,timeout:p,propCount:m,hasTransform:y}}function gp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>yp(n)+yp(t[r])))}function yp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function _p(){return document.body.offsetHeight}function wE(t,e,n){const r=t[Ro];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vp=Symbol("_vod"),EE=Symbol("_vsh"),TE=Symbol(""),IE=/(^|;)\s*display\s*:/;function SE(t,e,n){const r=t.style,s=dt(n);let i=!1;if(n&&!s){if(e)if(dt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&za(r,l,"")}else for(const o in e)n[o]==null&&za(r,o,"");for(const o in n)o==="display"&&(i=!0),za(r,o,n[o])}else if(s){if(e!==n){const o=r[TE];o&&(n+=";"+o),r.cssText=n,i=IE.test(n)}}else e&&t.removeAttribute("style");vp in t&&(t[vp]=i?r.display:"",t[EE]&&(r.display="none"))}const bp=/\s*!important$/;function za(t,e,n){if(ge(n))n.forEach(r=>za(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=AE(t,e);bp.test(n)?t.setProperty(Os(r),n.replace(bp,""),"important"):t[r]=n}}const wp=["Webkit","Moz","ms"],Qc={};function AE(t,e){const n=Qc[e];if(n)return n;let r=qr(e);if(r!=="filter"&&r in t)return Qc[e]=r;r=oy(r);for(let s=0;s<wp.length;s++){const i=wp[s]+r;if(i in t)return Qc[e]=i}return e}const Ep="http://www.w3.org/1999/xlink";function Tp(t,e,n,r,s,i=Pw(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ep,e.slice(6,e.length)):t.setAttributeNS(Ep,e,n):n==null||i&&!ay(n)?t.removeAttribute(e):t.setAttribute(e,i?"":$n(n)?String(n):n)}function Ip(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?p_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ay(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Dr(t,e,n,r){t.addEventListener(e,n,r)}function PE(t,e,n,r){t.removeEventListener(e,n,r)}const Sp=Symbol("_vei");function CE(t,e,n,r,s=null){const i=t[Sp]||(t[Sp]={}),o=i[e];if(r&&o)o.value=r;else{const[l,u]=RE(e);if(r){const c=i[e]=OE(r,s);Dr(t,l,c,u)}else o&&(PE(t,l,o,u),i[e]=void 0)}}const Ap=/(?:Once|Passive|Capture)$/;function RE(t){let e;if(Ap.test(t)){e={};let r;for(;r=t.match(Ap);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Os(t.slice(2)),e]}let Jc=0;const DE=Promise.resolve(),kE=()=>Jc||(DE.then(()=>Jc=0),Jc=Date.now());function OE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;wn(xE(r,n.value),e,5,[r])};return n.value=t,n.attached=kE(),n}function xE(t,e){if(ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Pp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,NE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?wE(t,r,o):e==="style"?SE(t,n,r):$l(e)?Rh(e)||CE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):VE(t,e,r,o))?(Ip(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Tp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!dt(r))?Ip(t,qr(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Tp(t,e,r,o))};function VE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pp(e)&&De(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pp(e)&&dt(n)?!1:e in t}const ui=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ge(e)?n=>ja(e,n):e};function ME(t){t.target.composing=!0}function Cp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tr=Symbol("_assign"),ve={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[tr]=ui(s);const i=r||s.props&&s.props.type==="number";Dr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=sl(l)),t[tr](l)}),n&&Dr(t,"change",()=>{t.value=t.value.trim()}),e||(Dr(t,"compositionstart",ME),Dr(t,"compositionend",Cp),Dr(t,"change",Cp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[tr]=ui(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?sl(t.value):t.value,u=e??"";l!==u&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===u)||(t.value=u))}},Xl={deep:!0,created(t,e,n){t[tr]=ui(n),Dr(t,"change",()=>{const r=t._modelValue,s=Do(t),i=t.checked,o=t[tr];if(ge(r)){const l=Oh(r,s),u=l!==-1;if(i&&!u)o(r.concat(s));else if(!i&&u){const c=[...r];c.splice(l,1),o(c)}}else if(wi(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(g_(t,i))})},mounted:Rp,beforeUpdate(t,e,n){t[tr]=ui(n),Rp(t,e,n)}};function Rp(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ge(e))s=Oh(e,r.props.value)>-1;else if(wi(e))s=e.has(r.props.value);else{if(e===n)return;s=zo(e,g_(t,!0))}t.checked!==s&&(t.checked=s)}const wt={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=wi(e);Dr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?sl(Do(o)):Do(o));t[tr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Hl(()=>{t._assigning=!1})}),t[tr]=ui(r)},mounted(t,{value:e}){Dp(t,e)},beforeUpdate(t,e,n){t[tr]=ui(n)},updated(t,{value:e}){t._assigning||Dp(t,e)}};function Dp(t,e){const n=t.multiple,r=ge(e);if(!(n&&!r&&!wi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Do(o);if(n)if(r){const u=typeof l;u==="string"||u==="number"?o.selected=e.some(c=>String(c)===String(l)):o.selected=Oh(e,l)>-1}else o.selected=e.has(l);else if(zo(Do(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Do(t){return"_value"in t?t._value:t.value}function g_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const LE=["ctrl","shift","alt","meta"],$E={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>LE.some(n=>t[`${n}Key`]&&!e.includes(n))},rt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=$E[e[o]];if(l&&l(s,e))return}return t(s,...i)})},FE=Et({patchProp:NE},pE);let kp;function UE(){return kp||(kp=$0(FE))}const BE=(...t)=>{const e=UE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qE(r);if(!s)return;const i=e._component;!De(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,jE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function jE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qE(t){return dt(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Gs=typeof document<"u";function y_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function HE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&y_(t.default)}const ze=Object.assign;function Zc(t,e){const n={};for(const r in e){const s=e[r];n[r]=En(s)?s.map(t):t(s)}return n}const ho=()=>{},En=Array.isArray,__=/#/g,zE=/&/g,WE=/\//g,GE=/=/g,KE=/\?/g,v_=/\+/g,YE=/%5B/g,XE=/%5D/g,b_=/%5E/g,QE=/%60/g,w_=/%7B/g,JE=/%7C/g,E_=/%7D/g,ZE=/%20/g;function Gh(t){return encodeURI(""+t).replace(JE,"|").replace(YE,"[").replace(XE,"]")}function eT(t){return Gh(t).replace(w_,"{").replace(E_,"}").replace(b_,"^")}function Ou(t){return Gh(t).replace(v_,"%2B").replace(ZE,"+").replace(__,"%23").replace(zE,"%26").replace(QE,"`").replace(w_,"{").replace(E_,"}").replace(b_,"^")}function tT(t){return Ou(t).replace(GE,"%3D")}function nT(t){return Gh(t).replace(__,"%23").replace(KE,"%3F")}function rT(t){return t==null?"":nT(t).replace(WE,"%2F")}function ko(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const sT=/\/$/,iT=t=>t.replace(sT,"");function eu(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let u=e.indexOf("?");return l<u&&l>=0&&(u=-1),u>-1&&(r=e.slice(0,u),i=e.slice(u+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=cT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ko(o)}}function oT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Op(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function aT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hi(e.matched[r],n.matched[s])&&T_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function T_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lT(t[n],e[n]))return!1;return!0}function lT(t,e){return En(t)?xp(t,e):En(e)?xp(e,t):t===e}function xp(t,e){return En(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function cT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Er={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Oo;(function(t){t.pop="pop",t.push="push"})(Oo||(Oo={}));var fo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fo||(fo={}));function uT(t){if(!t)if(Gs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iT(t)}const hT=/^[^#]+#/;function dT(t,e){return t.replace(hT,"#")+e}function fT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ql=()=>({left:window.scrollX,top:window.scrollY});function pT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=fT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Np(t,e){return(history.state?history.state.position-e:-1)+t}const xu=new Map;function mT(t,e){xu.set(t,e)}function gT(t){const e=xu.get(t);return xu.delete(t),e}let yT=()=>location.protocol+"//"+location.host;function I_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,u=s.slice(l);return u[0]!=="/"&&(u="/"+u),Op(u,"")}return Op(n,t)+r+s}function _T(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const y=I_(t,location),x=n.value,N=e.value;let k=0;if(m){if(n.value=y,e.value=m,o&&o===x){o=null;return}k=N?m.position-N.position:0}else r(y);s.forEach(v=>{v(n.value,x,{delta:k,type:Oo.pop,direction:k?k>0?fo.forward:fo.back:fo.unknown})})};function u(){o=n.value}function c(m){s.push(m);const y=()=>{const x=s.indexOf(m);x>-1&&s.splice(x,1)};return i.push(y),y}function h(){const{history:m}=window;m.state&&m.replaceState(ze({},m.state,{scroll:Ql()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:c,destroy:p}}function Vp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ql():null}}function vT(t){const{history:e,location:n}=window,r={value:I_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(u,c,h){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+u:yT()+t+u;try{e[h?"replaceState":"pushState"](c,"",m),s.value=c}catch(y){console.error(y),n[h?"replace":"assign"](m)}}function o(u,c){const h=ze({},e.state,Vp(s.value.back,u,s.value.forward,!0),c,{position:s.value.position});i(u,h,!0),r.value=u}function l(u,c){const h=ze({},s.value,e.state,{forward:u,scroll:Ql()});i(h.current,h,!0);const p=ze({},Vp(r.value,u,null),{position:h.position+1},c);i(u,p,!1),r.value=u}return{location:r,state:s,push:l,replace:o}}function bT(t){t=uT(t);const e=vT(t),n=_T(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ze({location:"",base:t,go:r,createHref:dT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function wT(t){return typeof t=="string"||t&&typeof t=="object"}function S_(t){return typeof t=="string"||typeof t=="symbol"}const A_=Symbol("");var Mp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mp||(Mp={}));function di(t,e){return ze(new Error,{type:t,[A_]:!0},e)}function Gn(t,e){return t instanceof Error&&A_ in t&&(e==null||!!(t.type&e))}const Lp="[^/]+?",ET={sensitive:!1,strict:!1,start:!0,end:!0},TT=/[.+*?^${}()[\]/\\]/g;function IT(t,e){const n=ze({},ET,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const h=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let p=0;p<c.length;p++){const m=c[p];let y=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(TT,"\\$&"),y+=40;else if(m.type===1){const{value:x,repeatable:N,optional:k,regexp:v}=m;i.push({name:x,repeatable:N,optional:k});const b=v||Lp;if(b!==Lp){y+=10;try{new RegExp(`(${b})`)}catch($){throw new Error(`Invalid custom RegExp for param "${x}" (${b}): `+$.message)}}let V=N?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;p||(V=k&&c.length<2?`(?:/${V})`:"/"+V),k&&(V+="?"),s+=V,y+=20,k&&(y+=-8),N&&(y+=-20),b===".*"&&(y+=-50)}h.push(y)}r.push(h)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(c){const h=c.match(o),p={};if(!h)return null;for(let m=1;m<h.length;m++){const y=h[m]||"",x=i[m-1];p[x.name]=y&&x.repeatable?y.split("/"):y}return p}function u(c){let h="",p=!1;for(const m of t){(!p||!h.endsWith("/"))&&(h+="/"),p=!1;for(const y of m)if(y.type===0)h+=y.value;else if(y.type===1){const{value:x,repeatable:N,optional:k}=y,v=x in c?c[x]:"";if(En(v)&&!N)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const b=En(v)?v.join("/"):v;if(!b)if(k)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):p=!0);else throw new Error(`Missing required param "${x}"`);h+=b}}return h||"/"}return{re:o,score:r,keys:i,parse:l,stringify:u}}function ST(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function P_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ST(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if($p(r))return 1;if($p(s))return-1}return s.length-r.length}function $p(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const AT={type:0,value:""},PT=/[a-zA-Z0-9_]/;function CT(t){if(!t)return[[]];if(t==="/")return[[AT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${c}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,u,c="",h="";function p(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:h,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),c="")}function m(){c+=u}for(;l<t.length;){if(u=t[l++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(c&&p(),o()):u===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:u==="("?n=2:PT.test(u)?m():(p(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case 2:u===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+u:n=3:h+=u;break;case 3:p(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),p(),o(),s}function RT(t,e,n){const r=IT(CT(t.path),n),s=ze(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function DT(t,e){const n=[],r=new Map;e=jp({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,y){const x=!y,N=Up(p);N.aliasOf=y&&y.record;const k=jp(e,p),v=[N];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const z of $)v.push(Up(ze({},N,{components:y?y.record.components:N.components,path:z,aliasOf:y?y.record:N})))}let b,V;for(const $ of v){const{path:z}=$;if(m&&z[0]!=="/"){const Y=m.record.path,A=Y[Y.length-1]==="/"?"":"/";$.path=m.record.path+(z&&A+z)}if(b=RT($,m,k),y?y.alias.push(b):(V=V||b,V!==b&&V.alias.push(b),x&&p.name&&!Bp(b)&&o(p.name)),C_(b)&&u(b),N.children){const Y=N.children;for(let A=0;A<Y.length;A++)i(Y[A],b,y&&y.children[A])}y=y||b}return V?()=>{o(V)}:ho}function o(p){if(S_(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function u(p){const m=xT(p,n);n.splice(m,0,p),p.record.name&&!Bp(p)&&r.set(p.record.name,p)}function c(p,m){let y,x={},N,k;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw di(1,{location:p});k=y.record.name,x=ze(Fp(m.params,y.keys.filter(V=>!V.optional).concat(y.parent?y.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),p.params&&Fp(p.params,y.keys.map(V=>V.name))),N=y.stringify(x)}else if(p.path!=null)N=p.path,y=n.find(V=>V.re.test(N)),y&&(x=y.parse(N),k=y.record.name);else{if(y=m.name?r.get(m.name):n.find(V=>V.re.test(m.path)),!y)throw di(1,{location:p,currentLocation:m});k=y.record.name,x=ze({},m.params,p.params),N=y.stringify(x)}const v=[];let b=y;for(;b;)v.unshift(b.record),b=b.parent;return{name:k,path:N,params:x,matched:v,meta:OT(v)}}t.forEach(p=>i(p));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:s}}function Fp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Up(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:kT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function kT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Bp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OT(t){return t.reduce((e,n)=>ze(e,n.meta),{})}function jp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function xT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;P_(t,e[i])<0?r=i:n=i+1}const s=NT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function NT(t){let e=t;for(;e=e.parent;)if(C_(e)&&P_(t,e)===0)return e}function C_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function VT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(v_," "),o=i.indexOf("="),l=ko(o<0?i:i.slice(0,o)),u=o<0?null:ko(i.slice(o+1));if(l in e){let c=e[l];En(c)||(c=e[l]=[c]),c.push(u)}else e[l]=u}return e}function qp(t){let e="";for(let n in t){const r=t[n];if(n=tT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(En(r)?r.map(i=>i&&Ou(i)):[r&&Ou(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function MT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=En(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const LT=Symbol(""),Hp=Symbol(""),Jl=Symbol(""),Kh=Symbol(""),Nu=Symbol("");function Gi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,u)=>{const c=m=>{m===!1?u(di(4,{from:n,to:e})):m instanceof Error?u(m):wT(m)?u(di(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},h=i(()=>t.call(r&&r.instances[s],e,n,c));let p=Promise.resolve(h);t.length<3&&(p=p.then(c)),p.catch(m=>u(m))})}function tu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let u=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(y_(u)){const h=(u.__vccOpts||u)[e];h&&i.push(Rr(h,n,r,o,l,s))}else{let c=u();i.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=HE(h)?h.default:h;o.mods[l]=h,o.components[l]=p;const y=(p.__vccOpts||p)[e];return y&&Rr(y,n,r,o,l,s)()}))}}return i}function zp(t){const e=Ue(Jl),n=Ue(Kh),r=Re(()=>{const u=_(t.to);return e.resolve(u)}),s=Re(()=>{const{matched:u}=r.value,{length:c}=u,h=u[c-1],p=n.matched;if(!h||!p.length)return-1;const m=p.findIndex(hi.bind(null,h));if(m>-1)return m;const y=Wp(u[c-2]);return c>1&&Wp(h)===y&&p[p.length-1].path!==y?p.findIndex(hi.bind(null,u[c-2])):m}),i=Re(()=>s.value>-1&&jT(n.params,r.value.params)),o=Re(()=>s.value>-1&&s.value===n.matched.length-1&&T_(n.params,r.value.params));function l(u={}){if(BT(u)){const c=e[_(t.replace)?"replace":"push"](_(t.to)).catch(ho);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:Re(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function $T(t){return t.length===1?t[0]:t}const FT=jh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zp,setup(t,{slots:e}){const n=Un(zp(t)),{options:r}=Ue(Jl),s=Re(()=>({[Gp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&$T(e.default(n));return t.custom?i:ci("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),UT=FT;function BT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!En(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Wp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gp=(t,e,n)=>t??e??n,qT=jh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ue(Nu),s=Re(()=>t.route||r.value),i=Ue(Hp,0),o=Re(()=>{let c=_(i);const{matched:h}=s.value;let p;for(;(p=h[c])&&!p.components;)c++;return c}),l=Re(()=>s.value.matched[o.value]);Nr(Hp,Re(()=>o.value+1)),Nr(LT,l),Nr(Nu,s);const u=Se();return tt(()=>[u.value,l.value,t.name],([c,h,p],[m,y,x])=>{h&&(h.instances[p]=c,y&&y!==h&&c&&c===m&&(h.leaveGuards.size||(h.leaveGuards=y.leaveGuards),h.updateGuards.size||(h.updateGuards=y.updateGuards))),c&&h&&(!y||!hi(h,y)||!m)&&(h.enterCallbacks[p]||[]).forEach(N=>N(c))},{flush:"post"}),()=>{const c=s.value,h=t.name,p=l.value,m=p&&p.components[h];if(!m)return Kp(n.default,{Component:m,route:c});const y=p.props[h],x=y?y===!0?c.params:typeof y=="function"?y(c):y:null,k=ci(m,ze({},x,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(p.instances[h]=null)},ref:u}));return Kp(n.default,{Component:k,route:c})||k}}});function Kp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const R_=qT;function HT(t){const e=DT(t.routes,t),n=t.parseQuery||VT,r=t.stringifyQuery||qp,s=t.history,i=Gi(),o=Gi(),l=Gi(),u=Yw(Er);let c=Er;Gs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Zc.bind(null,B=>""+B),p=Zc.bind(null,rT),m=Zc.bind(null,ko);function y(B,ae){let re,ue;return S_(B)?(re=e.getRecordMatcher(B),ue=ae):ue=B,e.addRoute(ue,re)}function x(B){const ae=e.getRecordMatcher(B);ae&&e.removeRoute(ae)}function N(){return e.getRoutes().map(B=>B.record)}function k(B){return!!e.getRecordMatcher(B)}function v(B,ae){if(ae=ze({},ae||u.value),typeof B=="string"){const M=eu(n,B,ae.path),q=e.resolve({path:M.path},ae),X=s.createHref(M.fullPath);return ze(M,q,{params:m(q.params),hash:ko(M.hash),redirectedFrom:void 0,href:X})}let re;if(B.path!=null)re=ze({},B,{path:eu(n,B.path,ae.path).path});else{const M=ze({},B.params);for(const q in M)M[q]==null&&delete M[q];re=ze({},B,{params:p(M)}),ae.params=p(ae.params)}const ue=e.resolve(re,ae),je=B.hash||"";ue.params=h(m(ue.params));const C=oT(r,ze({},B,{hash:eT(je),path:ue.path})),D=s.createHref(C);return ze({fullPath:C,hash:je,query:r===qp?MT(B.query):B.query||{}},ue,{redirectedFrom:void 0,href:D})}function b(B){return typeof B=="string"?eu(n,B,u.value.path):ze({},B)}function V(B,ae){if(c!==B)return di(8,{from:ae,to:B})}function $(B){return A(B)}function z(B){return $(ze(b(B),{replace:!0}))}function Y(B){const ae=B.matched[B.matched.length-1];if(ae&&ae.redirect){const{redirect:re}=ae;let ue=typeof re=="function"?re(B):re;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=b(ue):{path:ue},ue.params={}),ze({query:B.query,hash:B.hash,params:ue.path!=null?{}:B.params},ue)}}function A(B,ae){const re=c=v(B),ue=u.value,je=B.state,C=B.force,D=B.replace===!0,M=Y(re);if(M)return A(ze(b(M),{state:typeof M=="object"?ze({},je,M.state):je,force:C,replace:D}),ae||re);const q=re;q.redirectedFrom=ae;let X;return!C&&aT(r,ue,re)&&(X=di(16,{to:q,from:ue}),it(ue,ue,!0,!1)),(X?Promise.resolve(X):P(q,ue)).catch(H=>Gn(H)?Gn(H,2)?H:lt(H):W(H,q,ue)).then(H=>{if(H){if(Gn(H,2))return A(ze({replace:D},b(H.to),{state:typeof H.to=="object"?ze({},je,H.to.state):je,force:C}),ae||q)}else H=R(q,ue,!0,D,je);return O(q,ue,H),H})}function E(B,ae){const re=V(B,ae);return re?Promise.reject(re):Promise.resolve()}function T(B){const ae=qt.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(B):B()}function P(B,ae){let re;const[ue,je,C]=zT(B,ae);re=tu(ue.reverse(),"beforeRouteLeave",B,ae);for(const M of ue)M.leaveGuards.forEach(q=>{re.push(Rr(q,B,ae))});const D=E.bind(null,B,ae);return re.push(D),gt(re).then(()=>{re=[];for(const M of i.list())re.push(Rr(M,B,ae));return re.push(D),gt(re)}).then(()=>{re=tu(je,"beforeRouteUpdate",B,ae);for(const M of je)M.updateGuards.forEach(q=>{re.push(Rr(q,B,ae))});return re.push(D),gt(re)}).then(()=>{re=[];for(const M of C)if(M.beforeEnter)if(En(M.beforeEnter))for(const q of M.beforeEnter)re.push(Rr(q,B,ae));else re.push(Rr(M.beforeEnter,B,ae));return re.push(D),gt(re)}).then(()=>(B.matched.forEach(M=>M.enterCallbacks={}),re=tu(C,"beforeRouteEnter",B,ae,T),re.push(D),gt(re))).then(()=>{re=[];for(const M of o.list())re.push(Rr(M,B,ae));return re.push(D),gt(re)}).catch(M=>Gn(M,8)?M:Promise.reject(M))}function O(B,ae,re){l.list().forEach(ue=>T(()=>ue(B,ae,re)))}function R(B,ae,re,ue,je){const C=V(B,ae);if(C)return C;const D=ae===Er,M=Gs?history.state:{};re&&(ue||D?s.replace(B.fullPath,ze({scroll:D&&M&&M.scroll},je)):s.push(B.fullPath,je)),u.value=B,it(B,ae,re,D),lt()}let S;function Ve(){S||(S=s.listen((B,ae,re)=>{if(!Yt.listening)return;const ue=v(B),je=Y(ue);if(je){A(ze(je,{replace:!0,force:!0}),ue).catch(ho);return}c=ue;const C=u.value;Gs&&mT(Np(C.fullPath,re.delta),Ql()),P(ue,C).catch(D=>Gn(D,12)?D:Gn(D,2)?(A(ze(b(D.to),{force:!0}),ue).then(M=>{Gn(M,20)&&!re.delta&&re.type===Oo.pop&&s.go(-1,!1)}).catch(ho),Promise.reject()):(re.delta&&s.go(-re.delta,!1),W(D,ue,C))).then(D=>{D=D||R(ue,C,!1),D&&(re.delta&&!Gn(D,8)?s.go(-re.delta,!1):re.type===Oo.pop&&Gn(D,20)&&s.go(-1,!1)),O(ue,C,D)}).catch(ho)}))}let Te=Gi(),de=Gi(),Z;function W(B,ae,re){lt(B);const ue=de.list();return ue.length?ue.forEach(je=>je(B,ae,re)):console.error(B),Promise.reject(B)}function he(){return Z&&u.value!==Er?Promise.resolve():new Promise((B,ae)=>{Te.add([B,ae])})}function lt(B){return Z||(Z=!B,Ve(),Te.list().forEach(([ae,re])=>B?re(B):ae()),Te.reset()),B}function it(B,ae,re,ue){const{scrollBehavior:je}=t;if(!Gs||!je)return Promise.resolve();const C=!re&&gT(Np(B.fullPath,0))||(ue||!re)&&history.state&&history.state.scroll||null;return Hl().then(()=>je(B,ae,C)).then(D=>D&&pT(D)).catch(D=>W(D,B,ae))}const He=B=>s.go(B);let Ne;const qt=new Set,Yt={currentRoute:u,listening:!0,addRoute:y,removeRoute:x,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:N,resolve:v,options:t,push:$,replace:z,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:de.add,isReady:he,install(B){const ae=this;B.component("RouterLink",UT),B.component("RouterView",R_),B.config.globalProperties.$router=ae,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>_(u)}),Gs&&!Ne&&u.value===Er&&(Ne=!0,$(s.location).catch(je=>{}));const re={};for(const je in Er)Object.defineProperty(re,je,{get:()=>u.value[je],enumerable:!0});B.provide(Jl,ae),B.provide(Kh,Py(re)),B.provide(Nu,u);const ue=B.unmount;qt.add(B),B.unmount=function(){qt.delete(B),qt.size<1&&(c=Er,S&&S(),S=null,u.value=Er,Ne=!1,Z=!1),ue()}}};function gt(B){return B.reduce((ae,re)=>ae.then(()=>T(re)),Promise.resolve())}return Yt}function zT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(c=>hi(c,l))?r.push(l):n.push(l));const u=t.matched[o];u&&(e.matched.find(c=>hi(c,u))||s.push(u))}return[n,r,s]}function Ns(){return Ue(Jl)}function WT(t){return Ue(Kh)}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let D_;const Zl=t=>D_=t,k_=Symbol();function Vu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var po;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(po||(po={}));function GT(){const t=hy(!0),e=t.run(()=>Se({}));let n=[],r=[];const s=Uh({install(i){Zl(s),s._a=i,i.provide(k_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const O_=()=>{};function Yp(t,e,n,r=O_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&dy()&&Rw(s),s}function qs(t,...e){t.slice().forEach(n=>{n(...e)})}const KT=t=>t(),Xp=Symbol(),nu=Symbol();function Mu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Vu(s)&&Vu(r)&&t.hasOwnProperty(n)&&!ht(r)&&!Lr(r)?t[n]=Mu(s,r):t[n]=r}return t}const YT=Symbol();function XT(t){return!Vu(t)||!Object.prototype.hasOwnProperty.call(t,YT)}const{assign:Sr}=Object;function QT(t){return!!(ht(t)&&t.effect)}function JT(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let u;function c(){l||(n.state.value[t]=s?s():{});const h=Jw(n.state.value[t]);return Sr(h,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Uh(Re(()=>{Zl(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return u=x_(t,c,e,n,r,!0),u}function x_(t,e,n={},r,s,i){let o;const l=Sr({actions:{}},n),u={deep:!0};let c,h,p=[],m=[],y;const x=r.state.value[t];!i&&!x&&(r.state.value[t]={}),Se({});let N;function k(E){let T;c=h=!1,typeof E=="function"?(E(r.state.value[t]),T={type:po.patchFunction,storeId:t,events:y}):(Mu(r.state.value[t],E),T={type:po.patchObject,payload:E,storeId:t,events:y});const P=N=Symbol();Hl().then(()=>{N===P&&(c=!0)}),h=!0,qs(p,T,r.state.value[t])}const v=i?function(){const{state:T}=n,P=T?T():{};this.$patch(O=>{Sr(O,P)})}:O_;function b(){o.stop(),p=[],m=[],r._s.delete(t)}const V=(E,T="")=>{if(Xp in E)return E[nu]=T,E;const P=function(){Zl(r);const O=Array.from(arguments),R=[],S=[];function Ve(Z){R.push(Z)}function Te(Z){S.push(Z)}qs(m,{args:O,name:P[nu],store:z,after:Ve,onError:Te});let de;try{de=E.apply(this&&this.$id===t?this:z,O)}catch(Z){throw qs(S,Z),Z}return de instanceof Promise?de.then(Z=>(qs(R,Z),Z)).catch(Z=>(qs(S,Z),Promise.reject(Z))):(qs(R,de),de)};return P[Xp]=!0,P[nu]=T,P},$={_p:r,$id:t,$onAction:Yp.bind(null,m),$patch:k,$reset:v,$subscribe(E,T={}){const P=Yp(p,E,T.detached,()=>O()),O=o.run(()=>tt(()=>r.state.value[t],R=>{(T.flush==="sync"?h:c)&&E({storeId:t,type:po.direct,events:y},R)},Sr({},u,T)));return P},$dispose:b},z=Un($);r._s.set(t,z);const A=(r._a&&r._a.runWithContext||KT)(()=>r._e.run(()=>(o=hy()).run(()=>e({action:V}))));for(const E in A){const T=A[E];if(ht(T)&&!QT(T)||Lr(T))i||(x&&XT(T)&&(ht(T)?T.value=x[E]:Mu(T,x[E])),r.state.value[t][E]=T);else if(typeof T=="function"){const P=V(T,E);A[E]=P,l.actions[E]=T}}return Sr(z,A),Sr(Be(z),A),Object.defineProperty(z,"$state",{get:()=>r.state.value[t],set:E=>{k(T=>{Sr(T,E)})}}),r._p.forEach(E=>{Sr(z,o.run(()=>E({store:z,app:r._a,pinia:r,options:l})))}),x&&i&&n.hydrate&&n.hydrate(z.$state,x),c=!0,h=!0,z}/*! #__NO_SIDE_EFFECTS__ */function N_(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const u=k0();return o=o||(u?Ue(k_,null):null),o&&Zl(o),o=D_,o._s.has(t)||(s?x_(t,e,r,o):JT(t,r,o)),o._s.get(t)}return i.$id=t,i}const ZT=()=>{};var Qp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},M_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,h=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|c>>6,y=c&63;u||(y=64,o||(m=64)),r.push(n[h],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(V_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||p==null)throw new tI;const m=i<<2|l>>4;if(r.push(m),c!==64){const y=l<<4&240|c>>2;if(r.push(y),p!==64){const x=c<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nI=function(t){const e=V_(t);return M_.encodeByteArray(e,!0)},fl=function(t){return nI(t).replace(/\./g,"")},L_=function(t){try{return M_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const sI=()=>rI().__FIREBASE_DEFAULTS__,iI=()=>{if(typeof process>"u"||typeof Qp>"u")return;const t=Qp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&L_(t[1]);return e&&JSON.parse(e)},ec=()=>{try{return ZT()||sI()||iI()||oI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$_=t=>{var e,n;return(n=(e=ec())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aI=t=>{const e=$_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},F_=()=>{var t;return(t=ec())===null||t===void 0?void 0:t.config},U_=t=>{var e;return(e=ec())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function cI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fl(JSON.stringify(n)),fl(JSON.stringify(o)),""].join(".")}const mo={};function uI(){const t={prod:[],emulator:[]};for(const e of Object.keys(mo))mo[e]?t.emulator.push(e):t.prod.push(e);return t}function hI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Jp=!1;function j_(t,e){if(typeof window>"u"||typeof document>"u"||!Ei(window.location.host)||mo[t]===e||mo[t]||Jp)return;mo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=uI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Jp=!0,o()},m}function h(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=hI(r),y=n("text"),x=document.getElementById(y)||document.createElement("span"),N=n("learnmore"),k=document.getElementById(N)||document.createElement("a"),v=n("preprendIcon"),b=document.getElementById(v)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const V=m.element;l(V),h(k,N);const $=c();u(b,v),V.append(b,x,k,$),document.body.appendChild(V)}i?(x.innerText="Preview backend disconnected.",b.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(b.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function fI(){var t;const e=(t=ec())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yI(){const t=Bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _I(){return!fI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vI(){try{return typeof indexedDB=="object"}catch{return!1}}function bI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="FirebaseError";class fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wI,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ko.prototype.create)}}class Ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?EI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new fr(s,l,r)}}function EI(t,e){return t.replace(TI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TI=/\{\$([^}]+)}/g;function II(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Zp(i)&&Zp(o)){if(!Is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function SI(t,e){const n=new AI(t,e);return n.subscribe.bind(n)}class AI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ru),s.error===void 0&&(s.error=ru),s.complete===void 0&&(s.complete=ru);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ru(){}/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class Ss{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class CI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DI(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RI(t){return t===ms?void 0:t}function DI(t){return t.instantiationMode==="EAGER"}/**
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
 */var Me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Me||(Me={}));const OI={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},xI=Me.INFO,NI={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},VI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=NI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yh{constructor(e){this.name=e,this._logLevel=xI,this._logHandler=VI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const MI=(t,e)=>e.some(n=>t instanceof n);let em,tm;function LI(){return em||(em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $I(){return tm||(tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q_=new WeakMap,Lu=new WeakMap,H_=new WeakMap,su=new WeakMap,Xh=new WeakMap;function FI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&q_.set(n,t)}).catch(()=>{}),Xh.set(e,t),e}function UI(t){if(Lu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lu.set(t,e)}let $u={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||H_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BI(t){$u=t($u)}function jI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(iu(this),e,...n);return H_.set(r,e.sort?e.sort():[e]),$r(r)}:$I().includes(t)?function(...e){return t.apply(iu(this),e),$r(q_.get(this))}:function(...e){return $r(t.apply(iu(this),e))}}function qI(t){return typeof t=="function"?jI(t):(t instanceof IDBTransaction&&UI(t),MI(t,LI())?new Proxy(t,$u):t)}function $r(t){if(t instanceof IDBRequest)return FI(t);if(su.has(t))return su.get(t);const e=qI(t);return e!==t&&(su.set(t,e),Xh.set(e,t)),e}const iu=t=>Xh.get(t);function HI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=$r(o);return r&&o.addEventListener("upgradeneeded",u=>{r($r(o.result),u.oldVersion,u.newVersion,$r(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const zI=["get","getKey","getAll","getAllKeys","count"],WI=["put","add","delete","clear"],ou=new Map;function nm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ou.get(e))return ou.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=WI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zI.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return ou.set(e,i),i}BI(t=>({...t,get:(e,n,r)=>nm(e,n)||t.get(e,n,r),has:(e,n)=>!!nm(e,n)||t.has(e,n)}));/**
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
 */const or=new Yh("@firebase/app"),YI="@firebase/app-compat",XI="@firebase/analytics-compat",QI="@firebase/analytics",JI="@firebase/app-check-compat",ZI="@firebase/app-check",eS="@firebase/auth",tS="@firebase/auth-compat",nS="@firebase/database",rS="@firebase/data-connect",sS="@firebase/database-compat",iS="@firebase/functions",oS="@firebase/functions-compat",aS="@firebase/installations",lS="@firebase/installations-compat",cS="@firebase/messaging",uS="@firebase/messaging-compat",hS="@firebase/performance",dS="@firebase/performance-compat",fS="@firebase/remote-config",pS="@firebase/remote-config-compat",mS="@firebase/storage",gS="@firebase/storage-compat",yS="@firebase/firestore",_S="@firebase/ai",vS="@firebase/firestore-compat",bS="firebase",wS="11.10.0";/**
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
 */const Uu="[DEFAULT]",ES={[Fu]:"fire-core",[YI]:"fire-core-compat",[QI]:"fire-analytics",[XI]:"fire-analytics-compat",[ZI]:"fire-app-check",[JI]:"fire-app-check-compat",[eS]:"fire-auth",[tS]:"fire-auth-compat",[nS]:"fire-rtdb",[rS]:"fire-data-connect",[sS]:"fire-rtdb-compat",[iS]:"fire-fn",[oS]:"fire-fn-compat",[aS]:"fire-iid",[lS]:"fire-iid-compat",[cS]:"fire-fcm",[uS]:"fire-fcm-compat",[hS]:"fire-perf",[dS]:"fire-perf-compat",[fS]:"fire-rc",[pS]:"fire-rc-compat",[mS]:"fire-gcs",[gS]:"fire-gcs-compat",[yS]:"fire-fst",[vS]:"fire-fst-compat",[_S]:"fire-vertex","fire-js":"fire-js",[bS]:"fire-js-all"};/**
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
 */const pl=new Map,TS=new Map,Bu=new Map;function sm(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(Bu.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Bu.set(e,t);for(const n of pl.values())sm(n,t);for(const n of TS.values())sm(n,t);return!0}function Qh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Ti=wS;function z_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Fr.create("bad-app-name",{appName:String(s)});if(n||(n=F_()),!n)throw Fr.create("no-options");const i=pl.get(s);if(i){if(Is(n,i.options)&&Is(r,i.config))return i;throw Fr.create("duplicate-app",{appName:s})}const o=new kI(s);for(const u of Bu.values())o.addComponent(u);const l=new SS(n,r,o);return pl.set(s,l),l}function W_(t=Uu){const e=pl.get(t);if(!e&&t===Uu&&F_())return z_();if(!e)throw Fr.create("no-app",{appName:t});return e}function Ur(t,e,n){var r;let s=(r=ES[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(l.join(" "));return}fi(new Ss(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function VS(t){fi(new Ss("platform-logger",e=>new GI(e),"PRIVATE")),fi(new Ss("heartbeat",e=>new kS(e),"PRIVATE")),Ur(Fu,rm,t),Ur(Fu,rm,"esm2017"),Ur("fire-js","")}VS("");function Jh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MS=Y_,X_=new Ko("auth","Firebase",Y_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Yh("@firebase/auth");function LS(t,...e){ml.logLevel<=Me.WARN&&ml.warn(`Auth (${Ti}): ${t}`,...e)}function Wa(t,...e){ml.logLevel<=Me.ERROR&&ml.error(`Auth (${Ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,...e){throw ed(t,...e)}function bn(t,...e){return ed(t,...e)}function Zh(t,e,n){const r=Object.assign(Object.assign({},MS()),{[e]:n});return new Ko("auth","Firebase",r).create(e,{appName:t.name})}function nr(t){return Zh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $S(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&mn(t,"argument-error"),Zh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ed(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return X_.create(t,...e)}function be(t,e,...n){if(!t)throw ed(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wa(e),new Error(e)}function ar(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=dI()||gI()}get(){return US()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Q_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HS=new Xo(3e4,6e4);function jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function In(t,e,n,r,s={}){return J_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Yo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return pI()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(c.credentials="include"),Q_.fetch()(await Z_(t,t.config.apiHost,n,l),c)})}async function J_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jS),e);try{const s=new WS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ka(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ka(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ka(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ka(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zh(t,h,c);mn(t,h)}}catch(s){if(s instanceof fr)throw s;mn(t,"network-request-failed",{message:String(s)})}}async function Qo(t,e,n,r,s={}){const i=await In(t,e,n,r,s);return"mfaPendingCredential"in i&&mn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Z_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?td(t.config,s):`${t.config.apiScheme}://${s}`;return qS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function zS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),HS.get())})}}function ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bn(t,e,r);return s.customData._tokenResponse=n,s}function cm(t){return t!==void 0&&t.enterprise!==void 0}class GS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function KS(t,e){return In(t,"GET","/v2/recaptchaConfig",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XS(t,e=!1){const n=at(t),r=await n.getIdToken(e),s=nd(r);be(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:go(lu(s.auth_time)),issuedAtTime:go(lu(s.iat)),expirationTime:go(lu(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function lu(t){return Number(t)*1e3}function nd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wa("JWT malformed, contained fewer than 3 sections"),null;try{const s=L_(n);return s?JSON.parse(s):(Wa("Failed to decode base64 JWT payload"),null)}catch(s){return Wa("Caught error parsing JWT payload as JSON",s?.toString()),null}}function um(t){const e=nd(t);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fr&&QS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function yl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await pi(t,gl(n,{idToken:r}));be(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ev(i.providerUserInfo):[],l=eA(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!l?.length,h=u?c:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new qu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function ZS(t){const e=at(t);await yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ev(t){return t.map(e=>{var{providerId:n}=e,r=Jh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e){const n=await J_(t,{},async()=>{const r=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Z_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(u.credentials="include"),Q_.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nA(t,e){return In(t,"POST","/v2/accounts:revokeToken",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):um(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){be(e.length!==0,"internal-error");const n=um(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ri;return r&&(be(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(be(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(be(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){be(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Jh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await pi(this,this.stsTokenManager.getToken(this.auth,e));return be(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XS(this,e)}reload(){return ZS(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await pi(this,YS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:V,emailVerified:$,isAnonymous:z,providerData:Y,stsTokenManager:A}=n;be(V&&A,e,"internal-error");const E=ri.fromJSON(this.name,A);be(typeof V=="string",e,"internal-error"),Tr(p,e.name),Tr(m,e.name),be(typeof $=="boolean",e,"internal-error"),be(typeof z=="boolean",e,"internal-error"),Tr(y,e.name),Tr(x,e.name),Tr(N,e.name),Tr(k,e.name),Tr(v,e.name),Tr(b,e.name);const T=new _n({uid:V,auth:e,email:m,emailVerified:$,displayName:p,isAnonymous:z,photoURL:x,phoneNumber:y,tenantId:N,stsTokenManager:E,createdAt:v,lastLoginAt:b});return Y&&Array.isArray(Y)&&(T.providerData=Y.map(P=>Object.assign({},P))),k&&(T._redirectEventId=k),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new ri;s.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];be(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ev(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new ri;l.updateFromIdToken(r);const u=new _n({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ga(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ga(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ga("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await gl(this.auth,{idToken:e}).catch(()=>{});return n?_n._fromGetAccountInfoResponse(this.auth,n,e):null}return _n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new si(er(dm),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||er(dm);const o=Ga(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){let p;if(typeof h=="string"){const m=await gl(e,{idToken:h}).catch(()=>{});if(!m)break;p=await _n._fromGetAccountInfoResponse(e,m,h)}else p=_n._fromJSON(e,h);c!==i&&(l=p),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new si(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new si(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(av(e))return"Blackberry";if(lv(e))return"Webos";if(rv(e))return"Safari";if((e.includes("chrome/")||sv(e))&&!e.includes("edge/"))return"Chrome";if(ov(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function nv(t=Bt()){return/firefox\//i.test(t)}function rv(t=Bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sv(t=Bt()){return/crios\//i.test(t)}function iv(t=Bt()){return/iemobile/i.test(t)}function ov(t=Bt()){return/android/i.test(t)}function av(t=Bt()){return/blackberry/i.test(t)}function lv(t=Bt()){return/webos/i.test(t)}function rd(t=Bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rA(t=Bt()){var e;return rd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sA(){return yI()&&document.documentMode===10}function cv(t=Bt()){return rd(t)||ov(t)||lv(t)||av(t)||/windows phone/i.test(t)||iv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(t,e=[]){let n;switch(t){case"Browser":n=fm(Bt());break;case"Worker":n=`${fm(Bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${r}`}/**
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
 */class iA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */const aA=6;class lA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pm(this),this.idTokenSubscription=new pm(this),this.beforeStateQueue=new iA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=X_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gl(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s?._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&u?.user&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yl(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(nr(this));const n=e?at(e):null;return n&&be(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oA(this),n=new lA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ko("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;be(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&LS(`Error while retrieving App Check token: ${n.error}`),n?.token}}function pr(t){return at(t)}class pm{constructor(e){this.auth=e,this.observer=null,this.addObserver=SI(n=>this.observer=n)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uA(t){tc=t}function hv(t){return tc.loadJS(t)}function hA(){return tc.recaptchaEnterpriseScript}function dA(){return tc.gapiScript}function fA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class pA{constructor(){this.enterprise=new mA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class mA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const gA="recaptcha-enterprise",dv="NO_RECAPTCHA";class yA{constructor(e){this.type=gA,this.auth=pr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{KS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new GS(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;cm(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(dv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&cm(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=hA();u.length!==0&&(u+=l),hv(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function mm(t,e,n,r=!1,s=!1){const i=new yA(t);let o;if(s)o=dv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function _l(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await mm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await mm(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t,e){const n=Qh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Is(i,e??{}))return s;mn(s,"already-initialized")}return n.initialize({options:e})}function vA(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(er);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function bA(t,e,n){const r=pr(t);be(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=fv(e),{host:o,port:l}=wA(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){be(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),be(Is(c,r.config.emulator)&&Is(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Ei(o)?(B_(`${i}//${o}${u}`),j_("Auth",!0)):EA()}function fv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wA(t){const e=fv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gm(o)}}}function gm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function SA(t,e){return Qo(t,"POST","/v1/accounts:signInWithPassword",jn(t,e))}async function AA(t,e){return In(t,"POST","/v1/accounts:sendOobCode",jn(t,e))}async function PA(t,e){return AA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}async function RA(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends sd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new No(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new No(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,n,"signInWithPassword",SA);case"emailLink":return CA(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,r,"signUpPassword",IA);case"emailLink":return RA(e,{idToken:n,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e){return Qo(t,"POST","/v1/accounts:signInWithIdp",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="http://localhost";class As extends sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Jh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new As(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OA(t){const e=Xi(Qi(t)).link,n=e?Xi(Qi(e)).deep_link_id:null,r=Xi(Qi(t)).deep_link_id;return(r?Xi(Qi(r)).link:null)||r||n||e||t}class id{constructor(e){var n,r,s,i,o,l;const u=Xi(Qi(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=kA((s=u.mode)!==null&&s!==void 0?s:null);be(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=OA(e);try{return new id(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.providerId=Ii.PROVIDER_ID}static credential(e,n){return No._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=id.parseLink(n);return be(r,"argument-error"),No._fromEmailAndCode(e,r.code,r.tenantId)}}Ii.PROVIDER_ID="password";Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qn extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return As._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function xA(t,e){return Qo(t,"POST","/v1/accounts:signUp",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function VA(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(nr(r));const s="reauthenticate";try{const i=await pi(t,pv(r,s,e,t),n);be(i.idToken,r,"internal-error");const o=nd(i.idToken);be(o,r,"internal-error");const{sub:l}=o;return be(t.uid===l,r,"user-mismatch"),Ps._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&mn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(t,e,n=!1){if(nn(t.app))return Promise.reject(nr(t));const r="signIn",s=await pv(t,r,e),i=await Ps._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function MA(t,e){return mv(pr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(t){const e=pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LA(t,e,n){const r=pr(t);await _l(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",PA)}async function $A(t,e,n){await TA(at(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ad(t),r})}async function FA(t,e,n){if(nn(t.app))return Promise.reject(nr(t));const r=pr(t),o=await _l(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ad(t),u}),l=await Ps._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function UA(t,e,n){return nn(t.app)?Promise.reject(nr(t)):MA(at(t),Ii.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ad(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function jA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=at(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pi(r,BA(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function qA(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function HA(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function gv(t,e,n,r){return at(t).onAuthStateChanged(e,n,r)}function zA(t){return at(t).signOut()}const bl="__sak";/**
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
 */const WA=1e3,GA=10;class _v extends yv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_v.type="LOCAL";const KA=_v;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await YA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class XA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=ld("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function QA(t){xn().location.href=t}/**
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
 */const Ev="firebaseLocalStorageDb",tP=1,wl="firebaseLocalStorage",Tv="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rc(t,e){return t.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function nP(){const t=indexedDB.deleteDatabase(Ev);return new Zo(t).toPromise()}function Hu(){const t=indexedDB.open(Ev,tP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wl,{keyPath:Tv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wl)?e(r):(r.close(),await nP(),e(await Hu()))})})}async function _m(t,e,n){const r=rc(t,!0).put({[Tv]:e,value:n});return new Zo(r).toPromise()}async function rP(t,e){const n=rc(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function vm(t,e){const n=rc(t,!0).delete(e);return new Zo(n).toPromise()}const sP=800,iP=3;class Iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(eP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JA(),!this.activeServiceWorker)return;this.sender=new XA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hu();return await _m(e,bl,"1"),await vm(e,bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_m(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rc(s,!1).getAll();return new Zo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iv.type="LOCAL";const oP=Iv;new Xo(3e4,6e4);/**
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
 */function Sv(t,e){return e?er(e):(be(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class cd extends sd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aP(t){return mv(t.auth,new cd(t),t.bypassAuthState)}function lP(t){const{auth:e,user:n}=t;return be(n,e,"internal-error"),VA(n,new cd(t),t.bypassAuthState)}async function cP(t){const{auth:e,user:n}=t;return be(n,e,"internal-error"),NA(n,new cd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aP;case"linkViaPopup":case"linkViaRedirect":return cP;case"reauthViaPopup":case"reauthViaRedirect":return lP;default:mn(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=new Xo(2e3,1e4);async function hP(t,e,n){if(nn(t.app))return Promise.reject(bn(t,"operation-not-supported-in-this-environment"));const r=pr(t);$S(t,e,od);const s=Sv(r,n);return new ys(r,"signInViaPopup",e,s).executeNotNull()}class ys extends Av{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uP.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP="pendingRedirect",Ka=new Map;class fP extends Av{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ka.get(this.auth._key());if(!e){try{const r=await pP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ka.set(this.auth._key(),e)}return this.bypassAuthState||Ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pP(t,e){const n=yP(e),r=gP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function mP(t,e){Ka.set(t._key(),e)}function gP(t){return er(t._redirectPersistence)}function yP(t){return Ga(dP,t.config.apiKey,t.name)}async function _P(t,e,n=!1){if(nn(t.app))return Promise.reject(nr(t));const r=pr(t),s=Sv(r,e),o=await new fP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const TP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IP=/^https?/;async function SP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EP(t);for(const n of e)try{if(AP(n))return}catch{}mn(t,"unauthorized-domain")}function AP(t){const e=ju(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IP.test(n))return!1;if(TP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const PP=new Xo(3e4,6e4);function wm(){const t=xn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CP(t){return new Promise((e,n)=>{var r,s,i;function o(){wm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wm(),n(bn(t,"network-request-failed"))},timeout:PP.get()})}if(!((s=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=xn().gapi)===null||i===void 0)&&i.load)o();else{const l=fA("iframefcb");return xn()[l]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},hv(`${dA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ya=null,e})}let Ya=null;function RP(t){return Ya=Ya||CP(t),Ya}/**
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
 */const DP=new Xo(5e3,15e3),kP="__/auth/iframe",OP="emulator/auth/iframe",xP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VP(t){const e=t.config;be(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?td(e,OP):`https://${t.config.authDomain}/${kP}`,r={apiKey:e.apiKey,appName:t.name,v:Ti},s=NP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Yo(r).slice(1)}`}async function MP(t){const e=await RP(t),n=xn().gapi;return be(n,t,"internal-error"),e.open({where:document.body,url:VP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),l=xn().setTimeout(()=>{i(o)},DP.get());function u(){xn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const LP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$P=500,FP=600,UP="_blank",BP="http://localhost";class Em{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jP(t,e,n,r=$P,s=FP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},LP),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Bt().toLowerCase();n&&(l=sv(c)?UP:n),nv(c)&&(e=e||BP,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[y,x])=>`${m}${y}=${x},`,"");if(rA(c)&&l!=="_self")return qP(e||"",l),new Em(null);const p=window.open(e||"",l,h);be(p,t,"popup-blocked");try{p.focus()}catch{}return new Em(p)}function qP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HP="__/auth/handler",zP="emulator/auth/handler",WP=encodeURIComponent("fac");async function Tm(t,e,n,r,s,i){be(t.config.authDomain,t,"auth-domain-config-required"),be(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ti,eventId:s};if(e instanceof od){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",II(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof Jo){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${WP}=${encodeURIComponent(u)}`:"";return`${GP(t)}?${Yo(l).slice(1)}${c}`}function GP({config:t}){return t.emulator?td(t,zP):`https://${t.authDomain}/${HP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="webStorageSupport";class KP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bv,this._completeRedirectFn=_P,this._overrideRedirectResult=mP}async _openPopup(e,n,r,s){var i;ar((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Tm(e,n,r,ju(),s);return jP(e,o,ld())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Tm(e,n,r,ju(),s);return QA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MP(e),r=new bP(e);return n.register("authEvent",s=>(be(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cu,{type:cu},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[cu];o!==void 0&&n(!!o),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cv()||rv()||rd()}}const YP=KP;var Im="@firebase/auth",Sm="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JP(t){fi(new Ss("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;be(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uv(t)},c=new cA(r,s,i,u);return vA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new Ss("auth-internal",e=>{const n=pr(e.getProvider("auth").getImmediate());return(r=>new XP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ur(Im,Sm,QP(t)),Ur(Im,Sm,"esm2017")}/**
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
 */const ZP=5*60,eC=U_("authIdTokenMaxAge")||ZP;let Am=null;const tC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eC)return;const s=n?.token;Am!==s&&(Am=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nC(t=W_()){const e=Qh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_A(t,{popupRedirectResolver:YP,persistence:[oP,KA,bv]}),r=U_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=tC(i.toString());HA(n,o,()=>o(n.currentUser)),qA(n,l=>o(l))}}const s=$_("auth");return s&&bA(n,`http://${s}`),n}function rC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=bn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JP("Browser");var Pm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,Cv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function T(){}T.prototype=E.prototype,A.D=E.prototype,A.prototype=new T,A.prototype.constructor=A,A.C=function(P,O,R){for(var S=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)S[Ve-2]=arguments[Ve];return E.prototype[O].apply(P,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,E,T){T||(T=0);var P=Array(16);if(typeof E=="string")for(var O=0;16>O;++O)P[O]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(O=0;16>O;++O)P[O]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=A.g[0],T=A.g[1],O=A.g[2];var R=A.g[3],S=E+(R^T&(O^R))+P[0]+3614090360&4294967295;E=T+(S<<7&4294967295|S>>>25),S=R+(O^E&(T^O))+P[1]+3905402710&4294967295,R=E+(S<<12&4294967295|S>>>20),S=O+(T^R&(E^T))+P[2]+606105819&4294967295,O=R+(S<<17&4294967295|S>>>15),S=T+(E^O&(R^E))+P[3]+3250441966&4294967295,T=O+(S<<22&4294967295|S>>>10),S=E+(R^T&(O^R))+P[4]+4118548399&4294967295,E=T+(S<<7&4294967295|S>>>25),S=R+(O^E&(T^O))+P[5]+1200080426&4294967295,R=E+(S<<12&4294967295|S>>>20),S=O+(T^R&(E^T))+P[6]+2821735955&4294967295,O=R+(S<<17&4294967295|S>>>15),S=T+(E^O&(R^E))+P[7]+4249261313&4294967295,T=O+(S<<22&4294967295|S>>>10),S=E+(R^T&(O^R))+P[8]+1770035416&4294967295,E=T+(S<<7&4294967295|S>>>25),S=R+(O^E&(T^O))+P[9]+2336552879&4294967295,R=E+(S<<12&4294967295|S>>>20),S=O+(T^R&(E^T))+P[10]+4294925233&4294967295,O=R+(S<<17&4294967295|S>>>15),S=T+(E^O&(R^E))+P[11]+2304563134&4294967295,T=O+(S<<22&4294967295|S>>>10),S=E+(R^T&(O^R))+P[12]+1804603682&4294967295,E=T+(S<<7&4294967295|S>>>25),S=R+(O^E&(T^O))+P[13]+4254626195&4294967295,R=E+(S<<12&4294967295|S>>>20),S=O+(T^R&(E^T))+P[14]+2792965006&4294967295,O=R+(S<<17&4294967295|S>>>15),S=T+(E^O&(R^E))+P[15]+1236535329&4294967295,T=O+(S<<22&4294967295|S>>>10),S=E+(O^R&(T^O))+P[1]+4129170786&4294967295,E=T+(S<<5&4294967295|S>>>27),S=R+(T^O&(E^T))+P[6]+3225465664&4294967295,R=E+(S<<9&4294967295|S>>>23),S=O+(E^T&(R^E))+P[11]+643717713&4294967295,O=R+(S<<14&4294967295|S>>>18),S=T+(R^E&(O^R))+P[0]+3921069994&4294967295,T=O+(S<<20&4294967295|S>>>12),S=E+(O^R&(T^O))+P[5]+3593408605&4294967295,E=T+(S<<5&4294967295|S>>>27),S=R+(T^O&(E^T))+P[10]+38016083&4294967295,R=E+(S<<9&4294967295|S>>>23),S=O+(E^T&(R^E))+P[15]+3634488961&4294967295,O=R+(S<<14&4294967295|S>>>18),S=T+(R^E&(O^R))+P[4]+3889429448&4294967295,T=O+(S<<20&4294967295|S>>>12),S=E+(O^R&(T^O))+P[9]+568446438&4294967295,E=T+(S<<5&4294967295|S>>>27),S=R+(T^O&(E^T))+P[14]+3275163606&4294967295,R=E+(S<<9&4294967295|S>>>23),S=O+(E^T&(R^E))+P[3]+4107603335&4294967295,O=R+(S<<14&4294967295|S>>>18),S=T+(R^E&(O^R))+P[8]+1163531501&4294967295,T=O+(S<<20&4294967295|S>>>12),S=E+(O^R&(T^O))+P[13]+2850285829&4294967295,E=T+(S<<5&4294967295|S>>>27),S=R+(T^O&(E^T))+P[2]+4243563512&4294967295,R=E+(S<<9&4294967295|S>>>23),S=O+(E^T&(R^E))+P[7]+1735328473&4294967295,O=R+(S<<14&4294967295|S>>>18),S=T+(R^E&(O^R))+P[12]+2368359562&4294967295,T=O+(S<<20&4294967295|S>>>12),S=E+(T^O^R)+P[5]+4294588738&4294967295,E=T+(S<<4&4294967295|S>>>28),S=R+(E^T^O)+P[8]+2272392833&4294967295,R=E+(S<<11&4294967295|S>>>21),S=O+(R^E^T)+P[11]+1839030562&4294967295,O=R+(S<<16&4294967295|S>>>16),S=T+(O^R^E)+P[14]+4259657740&4294967295,T=O+(S<<23&4294967295|S>>>9),S=E+(T^O^R)+P[1]+2763975236&4294967295,E=T+(S<<4&4294967295|S>>>28),S=R+(E^T^O)+P[4]+1272893353&4294967295,R=E+(S<<11&4294967295|S>>>21),S=O+(R^E^T)+P[7]+4139469664&4294967295,O=R+(S<<16&4294967295|S>>>16),S=T+(O^R^E)+P[10]+3200236656&4294967295,T=O+(S<<23&4294967295|S>>>9),S=E+(T^O^R)+P[13]+681279174&4294967295,E=T+(S<<4&4294967295|S>>>28),S=R+(E^T^O)+P[0]+3936430074&4294967295,R=E+(S<<11&4294967295|S>>>21),S=O+(R^E^T)+P[3]+3572445317&4294967295,O=R+(S<<16&4294967295|S>>>16),S=T+(O^R^E)+P[6]+76029189&4294967295,T=O+(S<<23&4294967295|S>>>9),S=E+(T^O^R)+P[9]+3654602809&4294967295,E=T+(S<<4&4294967295|S>>>28),S=R+(E^T^O)+P[12]+3873151461&4294967295,R=E+(S<<11&4294967295|S>>>21),S=O+(R^E^T)+P[15]+530742520&4294967295,O=R+(S<<16&4294967295|S>>>16),S=T+(O^R^E)+P[2]+3299628645&4294967295,T=O+(S<<23&4294967295|S>>>9),S=E+(O^(T|~R))+P[0]+4096336452&4294967295,E=T+(S<<6&4294967295|S>>>26),S=R+(T^(E|~O))+P[7]+1126891415&4294967295,R=E+(S<<10&4294967295|S>>>22),S=O+(E^(R|~T))+P[14]+2878612391&4294967295,O=R+(S<<15&4294967295|S>>>17),S=T+(R^(O|~E))+P[5]+4237533241&4294967295,T=O+(S<<21&4294967295|S>>>11),S=E+(O^(T|~R))+P[12]+1700485571&4294967295,E=T+(S<<6&4294967295|S>>>26),S=R+(T^(E|~O))+P[3]+2399980690&4294967295,R=E+(S<<10&4294967295|S>>>22),S=O+(E^(R|~T))+P[10]+4293915773&4294967295,O=R+(S<<15&4294967295|S>>>17),S=T+(R^(O|~E))+P[1]+2240044497&4294967295,T=O+(S<<21&4294967295|S>>>11),S=E+(O^(T|~R))+P[8]+1873313359&4294967295,E=T+(S<<6&4294967295|S>>>26),S=R+(T^(E|~O))+P[15]+4264355552&4294967295,R=E+(S<<10&4294967295|S>>>22),S=O+(E^(R|~T))+P[6]+2734768916&4294967295,O=R+(S<<15&4294967295|S>>>17),S=T+(R^(O|~E))+P[13]+1309151649&4294967295,T=O+(S<<21&4294967295|S>>>11),S=E+(O^(T|~R))+P[4]+4149444226&4294967295,E=T+(S<<6&4294967295|S>>>26),S=R+(T^(E|~O))+P[11]+3174756917&4294967295,R=E+(S<<10&4294967295|S>>>22),S=O+(E^(R|~T))+P[2]+718787259&4294967295,O=R+(S<<15&4294967295|S>>>17),S=T+(R^(O|~E))+P[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(O+(S<<21&4294967295|S>>>11))&4294967295,A.g[2]=A.g[2]+O&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,E){E===void 0&&(E=A.length);for(var T=E-this.blockSize,P=this.B,O=this.h,R=0;R<E;){if(O==0)for(;R<=T;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<E;)if(P[O++]=A.charCodeAt(R++),O==this.blockSize){s(this,P),O=0;break}}else for(;R<E;)if(P[O++]=A[R++],O==this.blockSize){s(this,P),O=0;break}}this.h=O,this.o+=E},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;var T=8*this.o;for(E=A.length-8;E<A.length;++E)A[E]=T&255,T/=256;for(this.u(A),A=Array(16),E=T=0;4>E;++E)for(var P=0;32>P;P+=8)A[T++]=this.g[E]>>>P&255;return A};function i(A,E){var T=l;return Object.prototype.hasOwnProperty.call(T,A)?T[A]:T[A]=E(A)}function o(A,E){this.h=E;for(var T=[],P=!0,O=A.length-1;0<=O;O--){var R=A[O]|0;P&&R==E||(T[O]=R,P=!1)}this.g=T}var l={};function u(A){return-128<=A&&128>A?i(A,function(E){return new o([E|0],0>E?-1:0)}):new o([A|0],0>A?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return k(c(-A));for(var E=[],T=1,P=0;A>=T;P++)E[P]=A/T|0,T*=4294967296;return new o(E,0)}function h(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return k(h(A.substring(1),E));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(E,8)),P=p,O=0;O<A.length;O+=8){var R=Math.min(8,A.length-O),S=parseInt(A.substring(O,O+R),E);8>R?(R=c(Math.pow(E,R)),P=P.j(R).add(c(S))):(P=P.j(T),P=P.add(c(S)))}return P}var p=u(0),m=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-k(this).m();for(var A=0,E=1,T=0;T<this.g.length;T++){var P=this.i(T);A+=(0<=P?P:4294967296+P)*E,E*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(x(this))return"0";if(N(this))return"-"+k(this).toString(A);for(var E=c(Math.pow(A,6)),T=this,P="";;){var O=$(T,E).g;T=v(T,O.j(E));var R=((0<T.g.length?T.g[0]:T.h)>>>0).toString(A);if(T=O,x(T))return R+P;for(;6>R.length;)R="0"+R;P=R+P}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function x(A){if(A.h!=0)return!1;for(var E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function N(A){return A.h==-1}t.l=function(A){return A=v(this,A),N(A)?-1:x(A)?0:1};function k(A){for(var E=A.g.length,T=[],P=0;P<E;P++)T[P]=~A.g[P];return new o(T,~A.h).add(m)}t.abs=function(){return N(this)?k(this):this},t.add=function(A){for(var E=Math.max(this.g.length,A.g.length),T=[],P=0,O=0;O<=E;O++){var R=P+(this.i(O)&65535)+(A.i(O)&65535),S=(R>>>16)+(this.i(O)>>>16)+(A.i(O)>>>16);P=S>>>16,R&=65535,S&=65535,T[O]=S<<16|R}return new o(T,T[T.length-1]&-2147483648?-1:0)};function v(A,E){return A.add(k(E))}t.j=function(A){if(x(this)||x(A))return p;if(N(this))return N(A)?k(this).j(k(A)):k(k(this).j(A));if(N(A))return k(this.j(k(A)));if(0>this.l(y)&&0>A.l(y))return c(this.m()*A.m());for(var E=this.g.length+A.g.length,T=[],P=0;P<2*E;P++)T[P]=0;for(P=0;P<this.g.length;P++)for(var O=0;O<A.g.length;O++){var R=this.i(P)>>>16,S=this.i(P)&65535,Ve=A.i(O)>>>16,Te=A.i(O)&65535;T[2*P+2*O]+=S*Te,b(T,2*P+2*O),T[2*P+2*O+1]+=R*Te,b(T,2*P+2*O+1),T[2*P+2*O+1]+=S*Ve,b(T,2*P+2*O+1),T[2*P+2*O+2]+=R*Ve,b(T,2*P+2*O+2)}for(P=0;P<E;P++)T[P]=T[2*P+1]<<16|T[2*P];for(P=E;P<2*E;P++)T[P]=0;return new o(T,0)};function b(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function V(A,E){this.g=A,this.h=E}function $(A,E){if(x(E))throw Error("division by zero");if(x(A))return new V(p,p);if(N(A))return E=$(k(A),E),new V(k(E.g),k(E.h));if(N(E))return E=$(A,k(E)),new V(k(E.g),E.h);if(30<A.g.length){if(N(A)||N(E))throw Error("slowDivide_ only works with positive integers.");for(var T=m,P=E;0>=P.l(A);)T=z(T),P=z(P);var O=Y(T,1),R=Y(P,1);for(P=Y(P,2),T=Y(T,2);!x(P);){var S=R.add(P);0>=S.l(A)&&(O=O.add(T),R=S),P=Y(P,1),T=Y(T,1)}return E=v(A,O.j(E)),new V(O,E)}for(O=p;0<=A.l(E);){for(T=Math.max(1,Math.floor(A.m()/E.m())),P=Math.ceil(Math.log(T)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),R=c(T),S=R.j(E);N(S)||0<S.l(A);)T-=P,R=c(T),S=R.j(E);x(R)&&(R=m),O=O.add(R),A=v(A,S)}return new V(O,A)}t.A=function(A){return $(this,A).h},t.and=function(A){for(var E=Math.max(this.g.length,A.g.length),T=[],P=0;P<E;P++)T[P]=this.i(P)&A.i(P);return new o(T,this.h&A.h)},t.or=function(A){for(var E=Math.max(this.g.length,A.g.length),T=[],P=0;P<E;P++)T[P]=this.i(P)|A.i(P);return new o(T,this.h|A.h)},t.xor=function(A){for(var E=Math.max(this.g.length,A.g.length),T=[],P=0;P<E;P++)T[P]=this.i(P)^A.i(P);return new o(T,this.h^A.h)};function z(A){for(var E=A.g.length+1,T=[],P=0;P<E;P++)T[P]=A.i(P)<<1|A.i(P-1)>>>31;return new o(T,A.h)}function Y(A,E){var T=E>>5;E%=32;for(var P=A.g.length-T,O=[],R=0;R<P;R++)O[R]=0<E?A.i(R+T)>>>E|A.i(R+T+1)<<32-E:A.i(R+T);return new o(O,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Cv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Br=o}).apply(typeof Pm<"u"?Pm:typeof self<"u"?self:typeof window<"u"?window:{});var Oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rv,Ji,Dv,Xa,zu,kv,Ov,xv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,g){return a==Array.prototype||a==Object.prototype||(a[d]=g.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oa=="object"&&Oa];for(var d=0;d<a.length;++d){var g=a[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var g=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var L=a[w];if(!(L in g))break e;g=g[L]}a=a[a.length-1],w=g[a],d=d(w),d!=w&&d!=null&&e(g,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var g=0,w=!1,L={next:function(){if(!w&&g<a.length){var F=g++;return{value:d(F,a[F]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,g){return a.call.apply(a.bind,arguments)}function p(a,d,g){if(!a)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),a.apply(d,L)}}return function(){return a.apply(d,arguments)}}function m(a,d,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function y(a,d){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function x(a,d){function g(){}g.prototype=d.prototype,a.aa=d.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(w,L,F){for(var ne=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)ne[Ke-2]=arguments[Ke];return d.prototype[L].apply(w,ne)}}function N(a){const d=a.length;if(0<d){const g=Array(d);for(let w=0;w<d;w++)g[w]=a[w];return g}return[]}function k(a,d){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(u(w)){const L=a.length||0,F=w.length||0;a.length=L+F;for(let ne=0;ne<F;ne++)a[L+ne]=w[ne]}else a.push(w)}}class v{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function b(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var z=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function Y(a,d,g){for(const w in a)d.call(g,a[w],w,a)}function A(a,d){for(const g in a)d.call(void 0,a[g],g,a)}function E(a){const d={};for(const g in a)d[g]=a[g];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(a,d){let g,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(g in w)a[g]=w[g];for(let F=0;F<T.length;F++)g=T[F],Object.prototype.hasOwnProperty.call(w,g)&&(a[g]=w[g])}}function O(a){var d=1;a=a.split(":");const g=[];for(;0<d&&a.length;)g.push(a.shift()),d--;return a.length&&g.push(a.join(":")),g}function R(a){l.setTimeout(()=>{throw a},0)}function S(){var a=he;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ve{constructor(){this.h=this.g=null}add(d,g){const w=Te.get();w.set(d,g),this.h?this.h.next=w:this.g=w,this.h=w}}var Te=new v(()=>new de,a=>a.reset());class de{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,W=!1,he=new Ve,lt=()=>{const a=l.Promise.resolve(void 0);Z=()=>{a.then(it)}};var it=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(g){R(g)}var d=Te;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}W=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var qt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};l.addEventListener("test",g,d),l.removeEventListener("test",g,d)}catch{}return a}();function Yt(a,d){if(Ne.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(z){e:{try{$(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else g=="mouseover"?d=a.fromElement:g=="mouseout"&&(d=a.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:gt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Yt.aa.h.call(this)}}x(Yt,Ne);var gt={2:"touch",3:"pen",4:"mouse"};Yt.prototype.h=function(){Yt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),ae=0;function re(a,d,g,w,L){this.listener=a,this.proxy=null,this.src=d,this.type=g,this.capture=!!w,this.ha=L,this.key=++ae,this.da=this.fa=!1}function ue(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function je(a){this.src=a,this.g={},this.h=0}je.prototype.add=function(a,d,g,w,L){var F=a.toString();a=this.g[F],a||(a=this.g[F]=[],this.h++);var ne=D(a,d,w,L);return-1<ne?(d=a[ne],g||(d.fa=!1)):(d=new re(d,this.src,F,!!w,L),d.fa=g,a.push(d)),d};function C(a,d){var g=d.type;if(g in a.g){var w=a.g[g],L=Array.prototype.indexOf.call(w,d,void 0),F;(F=0<=L)&&Array.prototype.splice.call(w,L,1),F&&(ue(d),a.g[g].length==0&&(delete a.g[g],a.h--))}}function D(a,d,g,w){for(var L=0;L<a.length;++L){var F=a[L];if(!F.da&&F.listener==d&&F.capture==!!g&&F.ha==w)return L}return-1}var M="closure_lm_"+(1e6*Math.random()|0),q={};function X(a,d,g,w,L){if(Array.isArray(d)){for(var F=0;F<d.length;F++)X(a,d[F],g,w,L);return null}return g=Ee(g),a&&a[B]?a.K(d,g,c(w)?!!w.capture:!1,L):H(a,d,g,!1,w,L)}function H(a,d,g,w,L,F){if(!d)throw Error("Invalid event type");var ne=c(L)?!!L.capture:!!L,Ke=se(a);if(Ke||(a[M]=Ke=new je(a)),g=Ke.add(d,g,w,ne,F),g.proxy)return g;if(w=ie(),g.proxy=w,w.src=a,w.listener=g,a.addEventListener)qt||(L=ne),L===void 0&&(L=!1),a.addEventListener(d.toString(),w,L);else if(a.attachEvent)a.attachEvent(Q(d.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ie(){function a(g){return d.call(a.src,a.listener,g)}const d=me;return a}function te(a,d,g,w,L){if(Array.isArray(d))for(var F=0;F<d.length;F++)te(a,d[F],g,w,L);else w=c(w)?!!w.capture:!!w,g=Ee(g),a&&a[B]?(a=a.i,d=String(d).toString(),d in a.g&&(F=a.g[d],g=D(F,g,w,L),-1<g&&(ue(F[g]),Array.prototype.splice.call(F,g,1),F.length==0&&(delete a.g[d],a.h--)))):a&&(a=se(a))&&(d=a.g[d.toString()],a=-1,d&&(a=D(d,g,w,L)),(g=-1<a?d[a]:null)&&ee(g))}function ee(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[B])C(d.i,a);else{var g=a.type,w=a.proxy;d.removeEventListener?d.removeEventListener(g,w,a.capture):d.detachEvent?d.detachEvent(Q(g),w):d.addListener&&d.removeListener&&d.removeListener(w),(g=se(d))?(C(g,a),g.h==0&&(g.src=null,d[M]=null)):ue(a)}}}function Q(a){return a in q?q[a]:q[a]="on"+a}function me(a,d){if(a.da)a=!0;else{d=new Yt(d,this);var g=a.listener,w=a.ha||a.src;a.fa&&ee(a),a=g.call(w,d)}return a}function se(a){return a=a[M],a instanceof je?a:null}var fe="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ee(a){return typeof a=="function"?a:(a[fe]||(a[fe]=function(d){return a.handleEvent(d)}),a[fe])}function _e(){He.call(this),this.i=new je(this),this.M=this,this.F=null}x(_e,He),_e.prototype[B]=!0,_e.prototype.removeEventListener=function(a,d,g,w){te(this,a,d,g,w)};function ke(a,d){var g,w=a.F;if(w)for(g=[];w;w=w.F)g.push(w);if(a=a.M,w=d.type||d,typeof d=="string")d=new Ne(d,a);else if(d instanceof Ne)d.target=d.target||a;else{var L=d;d=new Ne(w,a),P(d,L)}if(L=!0,g)for(var F=g.length-1;0<=F;F--){var ne=d.g=g[F];L=$e(ne,w,!0,d)&&L}if(ne=d.g=a,L=$e(ne,w,!0,d)&&L,L=$e(ne,w,!1,d)&&L,g)for(F=0;F<g.length;F++)ne=d.g=g[F],L=$e(ne,w,!1,d)&&L}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var g=a.g[d],w=0;w<g.length;w++)ue(g[w]);delete a.g[d],a.h--}}this.F=null},_e.prototype.K=function(a,d,g,w){return this.i.add(String(a),d,!1,g,w)},_e.prototype.L=function(a,d,g,w){return this.i.add(String(a),d,!0,g,w)};function $e(a,d,g,w){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,F=0;F<d.length;++F){var ne=d[F];if(ne&&!ne.da&&ne.capture==g){var Ke=ne.listener,Pt=ne.ha||ne.src;ne.fa&&C(a.i,ne),L=Ke.call(Pt,w)!==!1&&L}}return L&&!w.defaultPrevented}function It(a,d,g){if(typeof a=="function")g&&(a=m(a,g));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function St(a){a.g=It(()=>{a.g=null,a.i&&(a.i=!1,St(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class ln extends He{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:St(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xt(a){He.call(this),this.h=a,this.g={}}x(xt,He);var yr=[];function Oi(a){Y(a.g,function(d,g){this.g.hasOwnProperty(g)&&ee(d)},a),a.g={}}xt.prototype.N=function(){xt.aa.N.call(this),Oi(this)},xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var At=l.JSON.stringify,cn=l.JSON.parse,ha=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Pc(){}Pc.prototype.h=null;function nf(a){return a.h||(a.h=a.i())}function rf(){}var xi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cc(){Ne.call(this,"d")}x(Cc,Ne);function Rc(){Ne.call(this,"c")}x(Rc,Ne);var os={},sf=null;function da(){return sf=sf||new _e}os.La="serverreachability";function of(a){Ne.call(this,os.La,a)}x(of,Ne);function Ni(a){const d=da();ke(d,new of(d))}os.STAT_EVENT="statevent";function af(a,d){Ne.call(this,os.STAT_EVENT,a),this.stat=d}x(af,Ne);function Ht(a){const d=da();ke(d,new af(d,a))}os.Ma="timingevent";function lf(a,d){Ne.call(this,os.Ma,a),this.size=d}x(lf,Ne);function Vi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function Mi(){this.g=!0}Mi.prototype.xa=function(){this.g=!1};function Gb(a,d,g,w,L,F){a.info(function(){if(a.g)if(F)for(var ne="",Ke=F.split("&"),Pt=0;Pt<Ke.length;Pt++){var qe=Ke[Pt].split("=");if(1<qe.length){var Nt=qe[0];qe=qe[1];var Vt=Nt.split("_");ne=2<=Vt.length&&Vt[1]=="type"?ne+(Nt+"="+qe+"&"):ne+(Nt+"=redacted&")}}else ne=null;else ne=F;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+d+`
`+g+`
`+ne})}function Kb(a,d,g,w,L,F,ne){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+d+`
`+g+`
`+F+" "+ne})}function $s(a,d,g,w){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Xb(a,g)+(w?" "+w:"")})}function Yb(a,d){a.info(function(){return"TIMEOUT: "+d})}Mi.prototype.info=function(){};function Xb(a,d){if(!a.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var w=g[a];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var ne=1;ne<L.length;ne++)L[ne]=""}}}}return At(g)}catch{return d}}var fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dc;function pa(){}x(pa,Pc),pa.prototype.g=function(){return new XMLHttpRequest},pa.prototype.i=function(){return{}},Dc=new pa;function _r(a,d,g,w){this.j=a,this.i=d,this.l=g,this.R=w||1,this.U=new xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uf}function uf(){this.i=null,this.g="",this.h=!1}var hf={},kc={};function Oc(a,d,g){a.L=1,a.v=_a(qn(d)),a.m=g,a.P=!0,df(a,null)}function df(a,d){a.F=Date.now(),ma(a),a.A=qn(a.v);var g=a.A,w=a.R;Array.isArray(w)||(w=[String(w)]),Af(g.i,"t",w),a.C=0,g=a.j.J,a.h=new uf,a.g=Hf(a.j,g?d:null,!a.m),0<a.O&&(a.M=new ln(m(a.Y,a,a.g),a.O)),d=a.U,g=a.g,w=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(yr[0]=L.toString()),L=yr);for(var F=0;F<L.length;F++){var ne=X(g,L[F],w||d.handleEvent,!1,d.h||d);if(!ne)break;d.g[ne.key]=ne}d=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Ni(),Gb(a.i,a.u,a.A,a.l,a.R,a.m)}_r.prototype.ca=function(a){a=a.target;const d=this.M;d&&Hn(a)==3?d.j():this.Y(a)},_r.prototype.Y=function(a){try{if(a==this.g)e:{const Vt=Hn(this.g);var d=this.g.Ba();const Bs=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||xf(this.g)))){this.J||Vt!=4||d==7||(d==8||0>=Bs?Ni(3):Ni(2)),xc(this);var g=this.g.Z();this.X=g;t:if(ff(this)){var w=xf(this.g);a="";var L=w.length,F=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){as(this),Li(this);var ne="";break t}this.h.i=new l.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,a+=this.h.i.decode(w[d],{stream:!(F&&d==L-1)});w.length=0,this.h.g+=a,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=g==200,Kb(this.i,this.u,this.A,this.l,this.R,Vt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,Pt=this.g;if((Ke=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(Ke)){var qe=Ke;break t}}qe=null}if(g=qe)$s(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nc(this,g);else{this.o=!1,this.s=3,Ht(12),as(this),Li(this);break e}}if(this.P){g=!0;let yn;for(;!this.J&&this.C<ne.length;)if(yn=Qb(this,ne),yn==kc){Vt==4&&(this.s=4,Ht(14),g=!1),$s(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==hf){this.s=4,Ht(15),$s(this.i,this.l,ne,"[Invalid Chunk]"),g=!1;break}else $s(this.i,this.l,yn,null),Nc(this,yn);if(ff(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||ne.length!=0||this.h.h||(this.s=1,Ht(16),g=!1),this.o=this.o&&g,!g)$s(this.i,this.l,ne,"[Invalid Chunked Response]"),as(this),Li(this);else if(0<ne.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Uc(Nt),Nt.M=!0,Ht(11))}}else $s(this.i,this.l,ne,null),Nc(this,ne);Vt==4&&as(this),this.o&&!this.J&&(Vt==4?Uf(this.j,this):(this.o=!1,ma(this)))}else pw(this.g),g==400&&0<ne.indexOf("Unknown SID")?(this.s=3,Ht(12)):(this.s=0,Ht(13)),as(this),Li(this)}}}catch{}finally{}};function ff(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Qb(a,d){var g=a.C,w=d.indexOf(`
`,g);return w==-1?kc:(g=Number(d.substring(g,w)),isNaN(g)?hf:(w+=1,w+g>d.length?kc:(d=d.slice(w,w+g),a.C=w+g,d)))}_r.prototype.cancel=function(){this.J=!0,as(this)};function ma(a){a.S=Date.now()+a.I,pf(a,a.I)}function pf(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Vi(m(a.ba,a),d)}function xc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}_r.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Yb(this.i,this.A),this.L!=2&&(Ni(),Ht(17)),as(this),this.s=2,Li(this)):pf(this,this.S-a)};function Li(a){a.j.G==0||a.J||Uf(a.j,a)}function as(a){xc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Oi(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Nc(a,d){try{var g=a.j;if(g.G!=0&&(g.g==a||Vc(g.h,a))){if(!a.K&&Vc(g.h,a)&&g.G==3){try{var w=g.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)Ia(g),Ea(g);else break e;Fc(g),Ht(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=Vi(m(g.Za,g),6e3));if(1>=yf(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else cs(g,11)}else if((a.K||g.g==a)&&Ia(g),!b(d))for(L=g.Da.g.parse(d),d=0;d<L.length;d++){let qe=L[d];if(g.T=qe[0],qe=qe[1],g.G==2)if(qe[0]=="c"){g.K=qe[1],g.ia=qe[2];const Nt=qe[3];Nt!=null&&(g.la=Nt,g.j.info("VER="+g.la));const Vt=qe[4];Vt!=null&&(g.Aa=Vt,g.j.info("SVER="+g.Aa));const Bs=qe[5];Bs!=null&&typeof Bs=="number"&&0<Bs&&(w=1.5*Bs,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const yn=a.g;if(yn){const Aa=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Aa){var F=w.h;F.g||Aa.indexOf("spdy")==-1&&Aa.indexOf("quic")==-1&&Aa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Mc(F,F.h),F.h=null))}if(w.D){const Bc=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bc&&(w.ya=Bc,Ze(w.I,w.D,Bc))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var ne=a;if(w.qa=qf(w,w.J?w.ia:null,w.W),ne.K){_f(w.h,ne);var Ke=ne,Pt=w.L;Pt&&(Ke.I=Pt),Ke.B&&(xc(Ke),ma(Ke)),w.g=ne}else $f(w);0<g.i.length&&Ta(g)}else qe[0]!="stop"&&qe[0]!="close"||cs(g,7);else g.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?cs(g,7):$c(g):qe[0]!="noop"&&g.l&&g.l.ta(qe),g.v=0)}}Ni(4)}catch{}}var Jb=class{constructor(a,d){this.g=a,this.map=d}};function mf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function yf(a){return a.h?1:a.g?a.g.size:0}function Vc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Mc(a,d){a.g?a.g.add(d):a.h=d}function _f(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}mf.prototype.cancel=function(){if(this.i=vf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const g of a.g.values())d=d.concat(g.D);return d}return N(a.i)}function Zb(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],g=a.length,w=0;w<g;w++)d.push(a[w]);return d}d=[],g=0;for(w in a)d[g++]=a[w];return d}function ew(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var g=0;g<a;g++)d.push(g);return d}d=[],g=0;for(const w in a)d[g++]=w;return d}}}function bf(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var g=ew(a),w=Zb(a),L=w.length,F=0;F<L;F++)d.call(void 0,w[F],g&&g[F],a)}var wf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tw(a,d){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var w=a[g].indexOf("="),L=null;if(0<=w){var F=a[g].substring(0,w);L=a[g].substring(w+1)}else F=a[g];d(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ls(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ls){this.h=a.h,ga(this,a.j),this.o=a.o,this.g=a.g,ya(this,a.s),this.l=a.l;var d=a.i,g=new Ui;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),Ef(this,g),this.m=a.m}else a&&(d=String(a).match(wf))?(this.h=!1,ga(this,d[1]||"",!0),this.o=$i(d[2]||""),this.g=$i(d[3]||"",!0),ya(this,d[4]),this.l=$i(d[5]||"",!0),Ef(this,d[6]||"",!0),this.m=$i(d[7]||"")):(this.h=!1,this.i=new Ui(null,this.h))}ls.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Fi(d,Tf,!0),":");var g=this.g;return(g||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Fi(d,Tf,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(Fi(g,g.charAt(0)=="/"?sw:rw,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",Fi(g,ow)),a.join("")};function qn(a){return new ls(a)}function ga(a,d,g){a.j=g?$i(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ya(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Ef(a,d,g){d instanceof Ui?(a.i=d,aw(a.i,a.h)):(g||(d=Fi(d,iw)),a.i=new Ui(d,a.h))}function Ze(a,d,g){a.i.set(d,g)}function _a(a){return Ze(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function $i(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Fi(a,d,g){return typeof a=="string"?(a=encodeURI(a).replace(d,nw),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function nw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tf=/[#\/\?@]/g,rw=/[#\?:]/g,sw=/[#\?]/g,iw=/[#\?@]/g,ow=/#/g;function Ui(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function vr(a){a.g||(a.g=new Map,a.h=0,a.i&&tw(a.i,function(d,g){a.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=Ui.prototype,t.add=function(a,d){vr(this),this.i=null,a=Fs(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(d),this.h+=1,this};function If(a,d){vr(a),d=Fs(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Sf(a,d){return vr(a),d=Fs(a,d),a.g.has(d)}t.forEach=function(a,d){vr(this),this.g.forEach(function(g,w){g.forEach(function(L){a.call(d,L,w,this)},this)},this)},t.na=function(){vr(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let w=0;w<d.length;w++){const L=a[w];for(let F=0;F<L.length;F++)g.push(d[w])}return g},t.V=function(a){vr(this);let d=[];if(typeof a=="string")Sf(this,a)&&(d=d.concat(this.g.get(Fs(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)d=d.concat(a[g])}return d},t.set=function(a,d){return vr(this),this.i=null,a=Fs(this,a),Sf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Af(a,d,g){If(a,d),0<g.length&&(a.i=null,a.g.set(Fs(a,d),N(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var w=d[g];const F=encodeURIComponent(String(w)),ne=this.V(w);for(w=0;w<ne.length;w++){var L=F;ne[w]!==""&&(L+="="+encodeURIComponent(String(ne[w]))),a.push(L)}}return this.i=a.join("&")};function Fs(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function aw(a,d){d&&!a.j&&(vr(a),a.i=null,a.g.forEach(function(g,w){var L=w.toLowerCase();w!=L&&(If(this,w),Af(this,L,g))},a)),a.j=d}function lw(a,d){const g=new Mi;if(l.Image){const w=new Image;w.onload=y(br,g,"TestLoadImage: loaded",!0,d,w),w.onerror=y(br,g,"TestLoadImage: error",!1,d,w),w.onabort=y(br,g,"TestLoadImage: abort",!1,d,w),w.ontimeout=y(br,g,"TestLoadImage: timeout",!1,d,w),l.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else d(!1)}function cw(a,d){const g=new Mi,w=new AbortController,L=setTimeout(()=>{w.abort(),br(g,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:w.signal}).then(F=>{clearTimeout(L),F.ok?br(g,"TestPingServer: ok",!0,d):br(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),br(g,"TestPingServer: error",!1,d)})}function br(a,d,g,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(g)}catch{}}function uw(){this.g=new ha}function hw(a,d,g){const w=g||"";try{bf(a,function(L,F){let ne=L;c(L)&&(ne=At(L)),d.push(w+F+"="+encodeURIComponent(ne))})}catch(L){throw d.push(w+"type="+encodeURIComponent("_badmap")),L}}function va(a){this.l=a.Ub||null,this.j=a.eb||!1}x(va,Pc),va.prototype.g=function(){return new ba(this.l,this.j)},va.prototype.i=function(a){return function(){return a}}({});function ba(a,d){_e.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(ba,_e),t=ba.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,ji(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Bi(this):ji(this),this.readyState==3&&Pf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Bi(this))},t.Qa=function(a){this.g&&(this.response=a,Bi(this))},t.ga=function(){this.g&&Bi(this)};function Bi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ji(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=d.next();return a.join(`\r
`)};function ji(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cf(a){let d="";return Y(a,function(g,w){d+=w,d+=":",d+=g,d+=`\r
`}),d}function Lc(a,d,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=Cf(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):Ze(a,d,g))}function ot(a){_e.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(ot,_e);var dw=/^https?$/i,fw=["POST","PUT"];t=ot.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dc.g(),this.v=this.o?nf(this.o):nf(Dc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(F){Rf(this,F);return}if(a=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)g.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const F of w.keys())g.set(F,w.get(F));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(F=>F.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fw,d,void 0))||w||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,ne]of g)this.g.setRequestHeader(F,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Of(this),this.u=!0,this.g.send(a),this.u=!1}catch(F){Rf(this,F)}};function Rf(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Df(a),wa(a)}function Df(a){a.A||(a.A=!0,ke(a,"complete"),ke(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ke(this,"complete"),ke(this,"abort"),wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wa(this,!0)),ot.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?kf(this):this.bb())},t.bb=function(){kf(this)};function kf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Hn(a)!=4||a.Z()!=2)){if(a.u&&Hn(a)==4)It(a.Ea,0,a);else if(ke(a,"readystatechange"),Hn(a)==4){a.h=!1;try{const ne=a.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var w;if(w=ne===0){var L=String(a.D).match(wf)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),w=!dw.test(L?L.toLowerCase():"")}g=w}if(g)ke(a,"complete"),ke(a,"success");else{a.m=6;try{var F=2<Hn(a)?a.g.statusText:""}catch{F=""}a.l=F+" ["+a.Z()+"]",Df(a)}}finally{wa(a)}}}}function wa(a,d){if(a.g){Of(a);const g=a.g,w=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||ke(a,"ready");try{g.onreadystatechange=w}catch{}}}function Of(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Hn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),cn(d)}};function xf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function pw(a){const d={};a=(a.g&&2<=Hn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(b(a[w]))continue;var g=O(a[w]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const F=d[L]||[];d[L]=F,F.push(g)}A(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qi(a,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||d}function Nf(a){this.Aa=0,this.i=[],this.j=new Mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qi("baseRetryDelayMs",5e3,a),this.cb=qi("retryDelaySeedMs",1e4,a),this.Wa=qi("forwardChannelMaxRetries",2,a),this.wa=qi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new mf(a&&a.concurrentRequestLimit),this.Da=new uw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nf.prototype,t.la=8,t.G=1,t.connect=function(a,d,g,w){Ht(0),this.W=a,this.H=d||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=qf(this,null,this.W),Ta(this)};function $c(a){if(Vf(a),a.G==3){var d=a.U++,g=qn(a.I);if(Ze(g,"SID",a.K),Ze(g,"RID",d),Ze(g,"TYPE","terminate"),Hi(a,g),d=new _r(a,a.j,d),d.L=2,d.v=_a(qn(g)),g=!1,l.navigator&&l.navigator.sendBeacon)try{g=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&l.Image&&(new Image().src=d.v,g=!0),g||(d.g=Hf(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ma(d)}jf(a)}function Ea(a){a.g&&(Uc(a),a.g.cancel(),a.g=null)}function Vf(a){Ea(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ia(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ta(a){if(!gf(a.h)&&!a.s){a.s=!0;var d=a.Ga;Z||lt(),W||(Z(),W=!0),he.add(d,a),a.B=0}}function mw(a,d){return yf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Vi(m(a.Ga,a,d),Bf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new _r(this,this.j,a);let F=this.o;if(this.S&&(F?(F=E(F),P(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=Lf(this,L,d),g=qn(this.I),Ze(g,"RID",a),Ze(g,"CVER",22),this.D&&Ze(g,"X-HTTP-Session-Id",this.D),Hi(this,g),F&&(this.O?d="headers="+encodeURIComponent(String(Cf(F)))+"&"+d:this.m&&Lc(g,this.m,F)),Mc(this.h,L),this.Ua&&Ze(g,"TYPE","init"),this.P?(Ze(g,"$req",d),Ze(g,"SID","null"),L.T=!0,Oc(L,g,null)):Oc(L,g,d),this.G=2}}else this.G==3&&(a?Mf(this,a):this.i.length==0||gf(this.h)||Mf(this))};function Mf(a,d){var g;d?g=d.l:g=a.U++;const w=qn(a.I);Ze(w,"SID",a.K),Ze(w,"RID",g),Ze(w,"AID",a.T),Hi(a,w),a.m&&a.o&&Lc(w,a.m,a.o),g=new _r(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Lf(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Mc(a.h,g),Oc(g,w,d)}function Hi(a,d){a.H&&Y(a.H,function(g,w){Ze(d,w,g)}),a.l&&bf({},function(g,w){Ze(d,w,g)})}function Lf(a,d,g){g=Math.min(a.i.length,g);var w=a.l?m(a.l.Na,a.l,a):null;e:{var L=a.i;let F=-1;for(;;){const ne=["count="+g];F==-1?0<g?(F=L[0].g,ne.push("ofs="+F)):F=0:ne.push("ofs="+F);let Ke=!0;for(let Pt=0;Pt<g;Pt++){let qe=L[Pt].g;const Nt=L[Pt].map;if(qe-=F,0>qe)F=Math.max(0,L[Pt].g-100),Ke=!1;else try{hw(Nt,ne,"req"+qe+"_")}catch{w&&w(Nt)}}if(Ke){w=ne.join("&");break e}}}return a=a.i.splice(0,g),d.D=a,w}function $f(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Z||lt(),W||(Z(),W=!0),he.add(d,a),a.v=0}}function Fc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Vi(m(a.Fa,a),Bf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ff(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Vi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ht(10),Ea(this),Ff(this))};function Uc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ff(a){a.g=new _r(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=qn(a.qa);Ze(d,"RID","rpc"),Ze(d,"SID",a.K),Ze(d,"AID",a.T),Ze(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ze(d,"TO",a.ja),Ze(d,"TYPE","xmlhttp"),Hi(a,d),a.m&&a.o&&Lc(d,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=_a(qn(d)),g.m=null,g.P=!0,df(g,a)}t.Za=function(){this.C!=null&&(this.C=null,Ea(this),Fc(this),Ht(19))};function Ia(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Uf(a,d){var g=null;if(a.g==d){Ia(a),Uc(a),a.g=null;var w=2}else if(Vc(a.h,d))g=d.D,_f(a.h,d),w=1;else return;if(a.G!=0){if(d.o)if(w==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var L=a.B;w=da(),ke(w,new lf(w,g)),Ta(a)}else $f(a);else if(L=d.s,L==3||L==0&&0<d.X||!(w==1&&mw(a,d)||w==2&&Fc(a)))switch(g&&0<g.length&&(d=a.h,d.i=d.i.concat(g)),L){case 1:cs(a,5);break;case 4:cs(a,10);break;case 3:cs(a,6);break;default:cs(a,2)}}}function Bf(a,d){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*d}function cs(a,d){if(a.j.info("Error code "+d),d==2){var g=m(a.fb,a),w=a.Xa;const L=!w;w=new ls(w||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ga(w,"https"),_a(w),L?lw(w.toString(),g):cw(w.toString(),g)}else Ht(2);a.G=0,a.l&&a.l.sa(d),jf(a),Vf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))};function jf(a){if(a.G=0,a.ka=[],a.l){const d=vf(a.h);(d.length!=0||a.i.length!=0)&&(k(a.ka,d),k(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function qf(a,d,g){var w=g instanceof ls?qn(g):new ls(g);if(w.g!="")d&&(w.g=d+"."+w.g),ya(w,w.s);else{var L=l.location;w=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var F=new ls(null);w&&ga(F,w),d&&(F.g=d),L&&ya(F,L),g&&(F.l=g),w=F}return g=a.D,d=a.ya,g&&d&&Ze(w,g,d),Ze(w,"VER",a.la),Hi(a,w),w}function Hf(a,d,g){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new ot(new va({eb:g})):new ot(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zf(){}t=zf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sa(){}Sa.prototype.g=function(a,d){return new en(a,d)};function en(a,d){_e.call(this),this.g=new Nf(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!b(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!b(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Us(this)}x(en,_e),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){$c(this.g)},en.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=At(a),a=g);d.i.push(new Jb(d.Ya++,a)),d.G==3&&Ta(d)},en.prototype.N=function(){this.g.l=null,delete this.j,$c(this.g),delete this.g,en.aa.N.call(this)};function Wf(a){Cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const g in d){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}x(Wf,Cc);function Gf(){Rc.call(this),this.status=1}x(Gf,Rc);function Us(a){this.g=a}x(Us,zf),Us.prototype.ua=function(){ke(this.g,"a")},Us.prototype.ta=function(a){ke(this.g,new Wf(a))},Us.prototype.sa=function(a){ke(this.g,new Gf)},Us.prototype.ra=function(){ke(this.g,"b")},Sa.prototype.createWebChannel=Sa.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,xv=function(){return new Sa},Ov=function(){return da()},kv=os,zu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fa.NO_ERROR=0,fa.TIMEOUT=8,fa.HTTP_ERROR=6,Xa=fa,cf.COMPLETE="complete",Dv=cf,rf.EventType=xi,xi.OPEN="a",xi.CLOSE="b",xi.ERROR="c",xi.MESSAGE="d",_e.prototype.listen=_e.prototype.K,Ji=rf,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,Rv=ot}).apply(typeof Oa<"u"?Oa:typeof self<"u"?self:typeof window<"u"?window:{});const Cm="@firebase/firestore",Rm="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Cs=new Yh("@firebase/firestore");function Ks(){return Cs.logLevel}function ce(t,...e){if(Cs.logLevel<=Me.DEBUG){const n=e.map(ud);Cs.debug(`Firestore (${Si}): ${t}`,...n)}}function lr(t,...e){if(Cs.logLevel<=Me.ERROR){const n=e.map(ud);Cs.error(`Firestore (${Si}): ${t}`,...n)}}function Wr(t,...e){if(Cs.logLevel<=Me.WARN){const n=e.map(ud);Cs.warn(`Firestore (${Si}): ${t}`,...n)}}function ud(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function we(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Nv(t,r,n)}function Nv(t,e,n){let r=`FIRESTORE (${Si}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw lr(r),new Error(r)}function Ge(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Nv(e,s,r)}function Ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends fr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class iC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oC{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ge(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ge(typeof r.accessToken=="string",31837,{l:r}),new Vv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string",2055,{h:e}),new $t(e)}}class aC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new aC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ge(this.o===void 0,3512);const r=i=>{i.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ge(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=uC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function Wu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return xe(r,s);{const i=Mv(),o=hC(i.encode(km(t,n)),i.encode(km(e,n)));return o!==0?o:xe(r,s)}}n+=r>65535?2:1}return xe(t.length,e.length)}function km(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function hC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return xe(t[n],e[n]);return xe(t.length,e.length)}function mi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="__name__";class Cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&we(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&we(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Cn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return xe(e.length,n.length)}static compareSegments(e,n){const r=Cn.isNumericId(e),s=Cn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Cn.extractNumericId(e).compare(Cn.extractNumericId(n)):Wu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Br.fromString(e.substring(4,e.length-2))}}class Je extends Cn{construct(e,n,r){return new Je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Je(n)}static emptyPath(){return new Je([])}}const dC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Cn{construct(e,n,r){return new kt(e,n,r)}static isValidIdentifier(e){return dC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Om}static keyField(){return new kt([Om])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new oe(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new oe(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new oe(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Je.fromString(e))}static fromName(e){return new ye(Je.fromString(e).popFirst(5))}static empty(){return new ye(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Je(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e,n){if(!n)throw new oe(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fC(t,e,n,r){if(e===!0&&r===!0)throw new oe(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xm(t){if(!ye.isDocumentKey(t))throw new oe(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nm(t){if(ye.isDocumentKey(t))throw new oe(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $v(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function sc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":we(12329,{type:typeof t})}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sc(t);throw new oe(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function mt(t,e){const n={typeString:t};return e&&(n.value=e),n}function ea(t,e){if(!$v(t))throw new oe(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new oe(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=-62135596800,Mm=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Mm);return new Oe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Vm)throw new oe(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mm}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ea(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:mt("string",Oe._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new Oe(0,0))}static max(){return new Ae(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Vo=-1;function pC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ae.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new Gr(s,ye.empty(),e)}function mC(t){return new Gr(t.readTime,t.key,Vo)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(Ae.min(),ye.empty(),Vo)}static max(){return new Gr(Ae.max(),ye.empty(),Vo)}}function gC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ye.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Ai(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==yC)throw t;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(s=>s?K.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new K((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++l,l===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new K((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function vC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Pi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class st{constructor(e,n){this.comparator=e,this.root=n||Ct.EMPTY}insert(e,n){return new st(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xa(this.root,e,this.comparator,!0)}}class xa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ct.RED,this.left=s??Ct.EMPTY,this.right=i??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ct(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new sn([])}unionWith(e){let n=new _t(kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bv("Invalid base64 string: "+i):i}}(e);return new Ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const TC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(Ge(!!t,39018),typeof t=="string"){let e=0;const n=TC.exec(t);if(Ge(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?Ot.fromBase64String(t):Ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="server_timestamp",qv="__type__",Hv="__previous_value__",zv="__local_write_time__";function fd(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[qv])===null||n===void 0?void 0:n.stringValue)===jv}function ac(t){const e=t.mapValue.fields[Hv];return fd(e)?ac(e):e}function Mo(t){const e=Kr(t.mapValue.fields[zv].timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,s,i,o,l,u,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=h}}const Tl="(default)";class Lo{constructor(e,n){this.projectId=e,this.database=n||Tl}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database===Tl}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="__type__",SC="__max__",Na={mapValue:{}},Gv="__vector__",Il="value";function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fd(t)?4:PC(t)?9007199254740991:AC(t)?10:11:we(28295,{value:t})}function Fn(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mo(t).isEqual(Mo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Kr(s.timestampValue),l=Kr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Yr(s.bytesValue).isEqual(Yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ct(s.geoPointValue.latitude)===ct(i.geoPointValue.latitude)&&ct(s.geoPointValue.longitude)===ct(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ct(s.integerValue)===ct(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ct(s.doubleValue),l=ct(i.doubleValue);return o===l?El(o)===El(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if($m(o)!==$m(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Fn(o[u],l[u])))return!1;return!0}(t,e);default:return we(52216,{left:t})}}function $o(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function gi(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ct(i.integerValue||i.doubleValue),u=ct(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Um(t.timestampValue,e.timestampValue);case 4:return Um(Mo(t),Mo(e));case 5:return Wu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Yr(i),u=Yr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=xe(l[c],u[c]);if(h!==0)return h}return xe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=xe(ct(i.latitude),ct(o.latitude));return l!==0?l:xe(ct(i.longitude),ct(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Bm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,c,h;const p=i.fields||{},m=o.fields||{},y=(l=p[Il])===null||l===void 0?void 0:l.arrayValue,x=(u=m[Il])===null||u===void 0?void 0:u.arrayValue,N=xe(((c=y?.values)===null||c===void 0?void 0:c.length)||0,((h=x?.values)===null||h===void 0?void 0:h.length)||0);return N!==0?N:Bm(y,x)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Na.mapValue&&o===Na.mapValue)return 0;if(i===Na.mapValue)return 1;if(o===Na.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const m=Wu(u[p],h[p]);if(m!==0)return m;const y=gi(l[u[p]],c[h[p]]);if(y!==0)return y}return xe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw we(23264,{le:n})}}function Um(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=Kr(t),r=Kr(e),s=xe(n.seconds,r.seconds);return s!==0?s:xe(n.nanos,r.nanos)}function Bm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=gi(n[s],r[s]);if(i)return i}return xe(n.length,r.length)}function yi(t){return Gu(t)}function Gu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ye.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gu(n.fields[o])}`;return s+"}"}(t.mapValue):we(61005,{value:t})}function Qa(t){switch(Xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(t);return e?16+Qa(e):16;case 5:return 2*t.stringValue.length;case 6:return Yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Qa(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return rs(r.fields,(i,o)=>{s+=i.length+Qa(o)}),s}(t.mapValue);default:throw we(13486,{value:t})}}function jm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ku(t){return!!t&&"integerValue"in t}function pd(t){return!!t&&"arrayValue"in t}function qm(t){return!!t&&"nullValue"in t}function Hm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ja(t){return!!t&&"mapValue"in t}function AC(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Wv])===null||n===void 0?void 0:n.stringValue)===Gv}function yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===SC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(n)}setAll(e){let n=kt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=yo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ja(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){rs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Jt(yo(this.value))}}function Kv(t){const e=[];return rs(t.fields,(n,r)=>{const s=new kt([n]);if(Ja(r)){const i=Kv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ut(e,0,Ae.min(),Ae.min(),Ae.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ut(e,1,n,Ae.min(),r,s,0)}static newNoDocument(e,n){return new Ut(e,2,n,Ae.min(),Ae.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new Ut(e,3,n,Ae.min(),Ae.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sl{constructor(e,n){this.position=e,this.inclusive=n}}function zm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ye.comparator(ye.fromName(o.referenceValue),n.key):r=gi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yv{}class pt extends Yv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DC(e,n,r):n==="array-contains"?new xC(e,r):n==="in"?new NC(e,r):n==="not-in"?new VC(e,r):n==="array-contains-any"?new MC(e,r):new pt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kC(e,r):new OC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gi(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends Yv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Tn(e,n)}matches(e){return Xv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Xv(t){return t.op==="and"}function Qv(t){return RC(t)&&Xv(t)}function RC(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function Yu(t){if(t instanceof pt)return t.field.canonicalString()+t.op.toString()+yi(t.value);if(Qv(t))return t.filters.map(e=>Yu(e)).join(",");{const e=t.filters.map(n=>Yu(n)).join(",");return`${t.op}(${e})`}}function Jv(t,e){return t instanceof pt?function(r,s){return s instanceof pt&&r.op===s.op&&r.field.isEqual(s.field)&&Fn(r.value,s.value)}(t,e):t instanceof Tn?function(r,s){return s instanceof Tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Jv(o,s.filters[l]),!0):!1}(t,e):void we(19439)}function Zv(t){return t instanceof pt?function(n){return`${n.field.canonicalString()} ${n.op} ${yi(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(Zv).join(" ,")+"}"}(t):"Filter"}class DC extends pt{constructor(e,n,r){super(e,n,r),this.key=ye.fromName(r.referenceValue)}matches(e){const n=ye.comparator(e.key,this.key);return this.matchesComparison(n)}}class kC extends pt{constructor(e,n){super(e,"in",n),this.keys=e1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OC extends pt{constructor(e,n){super(e,"not-in",n),this.keys=e1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function e1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ye.fromName(r.referenceValue))}class xC extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pd(n)&&$o(n.arrayValue,this.value)}}class NC extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$o(this.value.arrayValue,n)}}class VC extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$o(this.value.arrayValue,n)}}class MC extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$o(this.value.arrayValue,r))}}/**
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
 */class LC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Gm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new LC(t,e,n,r,s,i,o)}function md(t){const e=Ce(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yi(r)).join(",")),e.Pe=n}return e.Pe}function gd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wm(t.startAt,e.startAt)&&Wm(t.endAt,e.endAt)}function Xu(t){return ye.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function $C(t,e,n,r,s,i,o,l){return new Ci(t,e,n,r,s,i,o,l)}function yd(t){return new Ci(t)}function Km(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function t1(t){return t.collectionGroup!==null}function _o(t){const e=Ce(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new _t(kt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Fo(i,r))}),n.has(kt.keyField().canonicalString())||e.Te.push(new Fo(kt.keyField(),r))}return e.Te}function Nn(t){const e=Ce(t);return e.Ie||(e.Ie=FC(e,_o(t))),e.Ie}function FC(t,e){if(t.limitType==="F")return Gm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fo(s.field,i)});const n=t.endAt?new Sl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sl(t.startAt.position,t.startAt.inclusive):null;return Gm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qu(t,e){const n=t.filters.concat([e]);return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ju(t,e,n){return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return gd(Nn(t),Nn(e))&&t.limitType===e.limitType}function n1(t){return`${md(Nn(t))}|lt:${t.limitType}`}function Ys(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Zv(s)).join(", ")}]`),oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>yi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>yi(s)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function cc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ye.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of _o(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=zm(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,_o(r),s)||r.endAt&&!function(o,l,u){const c=zm(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,_o(r),s))}(t,e)}function UC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function r1(t){return(e,n)=>{let r=!1;for(const s of _o(t)){const i=BC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function BC(t,e,n){const r=t.field.isKeyField()?ye.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?gi(u,c):we(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return we(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const jC=new st(ye.comparator);function cr(){return jC}const s1=new st(ye.comparator);function Zi(...t){let e=s1;for(const n of t)e=e.insert(n.key,n);return e}function i1(t){let e=s1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _s(){return vo()}function o1(){return vo()}function vo(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const qC=new st(ye.comparator),HC=new _t(ye.comparator);function Le(...t){let e=HC;for(const n of t)e=e.add(n);return e}const zC=new _t(xe);function WC(){return zC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uc{constructor(){this._=void 0}}function KC(t,e,n){return t instanceof Al?function(s,i){const o={fields:{[qv]:{stringValue:jv},[zv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&fd(i)&&(i=ac(i)),i&&(o.fields[Hv]=i),{mapValue:o}}(n,e):t instanceof Uo?c1(t,e):t instanceof Bo?u1(t,e):function(s,i){const o=l1(s,i),l=Ym(o)+Ym(s.Ee);return Ku(o)&&Ku(s.Ee)?a1(l):_d(s.serializer,l)}(t,e)}function YC(t,e,n){return t instanceof Uo?c1(t,e):t instanceof Bo?u1(t,e):n}function l1(t,e){return t instanceof Pl?function(r){return Ku(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Al extends uc{}class Uo extends uc{constructor(e){super(),this.elements=e}}function c1(t,e){const n=h1(e);for(const r of t.elements)n.some(s=>Fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Bo extends uc{constructor(e){super(),this.elements=e}}function u1(t,e){let n=h1(e);for(const r of t.elements)n=n.filter(s=>!Fn(s,r));return{arrayValue:{values:n}}}class Pl extends uc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Ym(t){return ct(t.integerValue||t.doubleValue)}function h1(t){return pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function XC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Uo&&s instanceof Uo||r instanceof Bo&&s instanceof Bo?mi(r.elements,s.elements,Fn):r instanceof Pl&&s instanceof Pl?Fn(r.Ee,s.Ee):r instanceof Al&&s instanceof Al}(t.transform,e.transform)}class QC{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hc{}function d1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dc(t.key,Kt.none()):new ta(t.key,t.data,Kt.none());{const n=t.data,r=Jt.empty();let s=new _t(kt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ss(t.key,r,new sn(s.toArray()),Kt.none())}}function JC(t,e,n){t instanceof ta?function(s,i,o){const l=s.value.clone(),u=Qm(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ss?function(s,i,o){if(!Za(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Qm(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(f1(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,r){return t instanceof ta?function(i,o,l,u){if(!Za(i.precondition,o))return l;const c=i.value.clone(),h=Jm(i.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ss?function(i,o,l,u){if(!Za(i.precondition,o))return l;const c=Jm(i.fieldTransforms,u,o),h=o.data;return h.setAll(f1(i)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Za(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ZC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=l1(r.transform,s||null);i!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,i))}return n||null}function Xm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&mi(r,s,(i,o)=>XC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends hc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ss extends hc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function f1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Qm(t,e,n){const r=new Map;Ge(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,YC(o,l,n[s]))}return r}function Jm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,KC(i,o,e))}return r}class dc extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eR extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&JC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=o1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=d1(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Le())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,r)=>Xm(n,r))&&mi(this.baseMutations,e.baseMutations,(n,r)=>Xm(n,r))}}class vd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ge(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return qC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vd(e,n,r,s)}}/**
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
 */var ft,Fe;function sR(t){switch(t){case j.OK:return we(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return we(15467,{code:t})}}function p1(t){if(t===void 0)return lr("GRPC error has no .code"),j.UNKNOWN;switch(t){case ft.OK:return j.OK;case ft.CANCELLED:return j.CANCELLED;case ft.UNKNOWN:return j.UNKNOWN;case ft.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case ft.INTERNAL:return j.INTERNAL;case ft.UNAVAILABLE:return j.UNAVAILABLE;case ft.UNAUTHENTICATED:return j.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case ft.NOT_FOUND:return j.NOT_FOUND;case ft.ALREADY_EXISTS:return j.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return j.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case ft.ABORTED:return j.ABORTED;case ft.OUT_OF_RANGE:return j.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return j.UNIMPLEMENTED;case ft.DATA_LOSS:return j.DATA_LOSS;default:return we(39323,{code:t})}}(Fe=ft||(ft={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const iR=new Br([4294967295,4294967295],0);function Zm(t){const e=Mv().encode(t),n=new Cv;return n.update(e),new Uint8Array(n.digest())}function eg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Br([n,r],0),new Br([s,i],0)]}class bd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new eo(`Invalid padding: ${n}`);if(r<0)throw new eo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new eo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new eo(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Br.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Br.fromNumber(r)));return s.compare(iR)===1&&(s=new Br([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Zm(e),[r,s]=eg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new bd(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=Zm(e),[r,s]=eg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fc(Ae.min(),s,new st(xe),cr(),Le())}}class na{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new na(r,n,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class m1{constructor(e,n){this.targetId=e,this.De=n}}class g1{constructor(e,n,r=Ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class tg{constructor(){this.ve=0,this.Ce=ng(),this.Fe=Ot.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Le(),n=Le(),r=Le();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:we(38017,{changeType:i})}}),new na(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=ng()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ge(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class oR{constructor(e){this.We=e,this.Ge=new Map,this.ze=cr(),this.je=Va(),this.Je=Va(),this.He=new st(xe)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:we(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Xu(i))if(r===0){const o=new ye(i.path);this.Xe(n,o,Ut.newNoDocument(o,Ae.min()))}else Ge(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,c)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Yr(r).toUint8Array()}catch(u){if(u instanceof Bv)return Wr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new bd(o,s,i)}catch(u){return Wr(u instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,o)=>{const l=this.st(o);if(l){if(i.current&&Xu(l.target)){const u=new ye(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,Ut.newNoDocument(u,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}});let r=Le();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new fc(e,n,this.He,this.ze,r);return this.ze=cr(),this.je=Va(),this.Je=Va(),this.He=new st(xe),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new tg,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new _t(xe),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new _t(xe),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new tg),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Va(){return new st(ye.comparator)}function ng(){return new st(ye.comparator)}const aR={asc:"ASCENDING",desc:"DESCENDING"},lR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cR={and:"AND",or:"OR"};class uR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zu(t,e){return t.useProto3Json||oc(e)?e:{value:e}}function Cl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hR(t,e){return Cl(t,e.toTimestamp())}function Vn(t){return Ge(!!t,49232),Ae.fromTimestamp(function(n){const r=Kr(n);return new Oe(r.seconds,r.nanos)}(t))}function wd(t,e){return eh(t,e).canonicalString()}function eh(t,e){const n=function(s){return new Je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function _1(t){const e=Je.fromString(t);return Ge(T1(e),10190,{key:e.toString()}),e}function th(t,e){return wd(t.databaseId,e.path)}function uu(t,e){const n=_1(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ye(b1(n))}function v1(t,e){return wd(t.databaseId,e)}function dR(t){const e=_1(t);return e.length===4?Je.emptyPath():b1(e)}function nh(t){return new Je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b1(t){return Ge(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function rg(t,e,n){return{name:th(t,e),fields:n.value.mapValue.fields}}function fR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:we(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,h){return c.useProto3Json?(Ge(h===void 0||typeof h=="string",58123),Ot.fromBase64String(h||"")):(Ge(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ot.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const h=c.code===void 0?j.UNKNOWN:p1(c.code);return new oe(h,c.message||"")}(o);n=new g1(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=uu(t,r.document.name),i=Vn(r.document.updateTime),o=r.document.createTime?Vn(r.document.createTime):Ae.min(),l=new Jt({mapValue:{fields:r.document.fields}}),u=Ut.newFoundDocument(s,i,o,l),c=r.targetIds||[],h=r.removedTargetIds||[];n=new el(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=uu(t,r.document),i=r.readTime?Vn(r.readTime):Ae.min(),o=Ut.newNoDocument(s,i),l=r.removedTargetIds||[];n=new el([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=uu(t,r.document),i=r.removedTargetIds||[];n=new el([],i,s,null)}else{if(!("filter"in e))return we(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new rR(s,i),l=r.targetId;n=new m1(l,o)}}return n}function pR(t,e){let n;if(e instanceof ta)n={update:rg(t,e.key,e.value)};else if(e instanceof dc)n={delete:th(t,e.key)};else if(e instanceof ss)n={update:rg(t,e.key,e.data),updateMask:TR(e.fieldMask)};else{if(!(e instanceof eR))return we(16599,{Rt:e.type});n={verify:th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Al)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw we(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:we(27497)}(t,e.precondition)),n}function mR(t,e){return t&&t.length>0?(Ge(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Vn(s.updateTime):Vn(i);return o.isEqual(Ae.min())&&(o=Vn(i)),new QC(o,s.transformResults||[])}(n,e))):[]}function gR(t,e){return{documents:[v1(t,e.path)]}}function yR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=v1(t,s);const i=function(c){if(c.length!==0)return E1(Tn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Xs(m.field),direction:bR(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Zu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{Vt:n,parent:s}}function _R(t){let e=dR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ge(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(p){const m=w1(p);return m instanceof Tn&&Qv(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(x){return new Fo(Qs(x.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,oc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,y=p.values||[];return new Sl(y,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,y=p.values||[];return new Sl(y,m)}(n.endAt)),$C(e,s,o,i,l,"F",u,c)}function vR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function w1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qs(n.unaryFilter.field);return pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qs(n.unaryFilter.field);return pt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qs(n.unaryFilter.field);return pt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(n.unaryFilter.field);return pt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}}(t):t.fieldFilter!==void 0?function(n){return pt.create(Qs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>w1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return we(1026)}}(n.compositeFilter.op))}(t):we(30097,{filter:t})}function bR(t){return aR[t]}function wR(t){return lR[t]}function ER(t){return cR[t]}function Xs(t){return{fieldPath:t.canonicalString()}}function Qs(t){return kt.fromServerFormat(t.fieldPath)}function E1(t){return t instanceof pt?function(n){if(n.op==="=="){if(Hm(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NAN"}};if(qm(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hm(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NOT_NAN"}};if(qm(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xs(n.field),op:wR(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(s=>E1(s));return r.length===1?r[0]:{compositeFilter:{op:ER(n.op),filters:r}}}(t):we(54877,{filter:t})}function TR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function T1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r,s,i=Ae.min(),o=Ae.min(),l=Ot.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class AR{constructor(){this.Dn=new PR}addToCollectionParentIndex(e,n){return this.Dn.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(Gr.min())}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class PR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new _t(Je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _t(Je.comparator)).toArray()}}/**
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
 */const ig="LruGarbageCollector",CR=1048576;function og([t,e],[n,r]){const s=xe(t,n);return s===0?xe(e,r):s}class RR{constructor(e){this.Tr=e,this.buffer=new _t(og),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();og(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ce(ig,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Pi(n)?ce(ig,"Ignoring IndexedDB error during garbage collection: ",n):await Ai(n)}await this.Rr(3e5)})}}class kR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return K.resolve(ic.ue);const r=new RR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(sg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sg):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ks()<=Me.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function OR(t,e){return new kR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class VR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&bo(r.mutation,s,sn.empty(),Oe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Le()){const s=_s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Zi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_s();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=cr();const o=vo(),l=function(){return vo()}();return n.forEach((u,c)=>{const h=r.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof ss)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),bo(h.mutation,c,h.mutation.getFieldMask(),Oe.now())):o.set(c.key,sn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return l.set(c,new NR(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=vo();let s=new st((o,l)=>o-l),i=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||sn.empty();h=l.applyToLocalView(c,h),r.set(u,h);const p=(s.get(l.batchId)||Le()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,p=o1();h.forEach(m=>{if(!i.has(m)){const y=d1(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return K.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ye.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):t1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):K.resolve(_s());let l=Vo,u=i;return o.next(c=>K.forEach(c,(h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(h)?K.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,Le())).next(h=>({batchId:l,changes:i1(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ye(n)).next(r=>{let s=Zi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Zi();return this.indexManager.getCollectionParents(e,i).next(l=>K.forEach(l,u=>{const c=function(p,m){return new Ci(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Ut.newInvalidDocument(h)))});let l=Zi();return o.forEach((u,c)=>{const h=i.get(u);h!==void 0&&bo(h.mutation,c,sn.empty(),Oe.now()),cc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class LR{constructor(){this.overlays=new st(ye.comparator),this.kr=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_s();return K.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const s=_s(),i=n.length+1,o=new ye(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return K.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new st((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=i.get(c.largestBatchId);h===null&&(h=_s(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=_s(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=s)););return K.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nR(n,r));let i=this.kr.get(n);i===void 0&&(i=Le(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class $R{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.qr=new _t(vt.Qr),this.$r=new _t(vt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new vt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new vt(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new ye(new Je([])),r=new vt(n,e),s=new vt(n,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new ye(new Je([])),r=new vt(n,e),s=new vt(n,e+1);let i=Le();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new vt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class vt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return ye.comparator(e.key,n.key)||xe(e.Hr,n.Hr)}static Ur(e,n){return xe(e.Hr,n.Hr)||ye.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new _t(vt.Qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new vt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,n){return K.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return K.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?dd:this.er-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new vt(n,0),s=new vt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(xe);return n.forEach(s=>{const i=new vt(s,0),o=new vt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),K.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ye.isDocumentKey(i)||(i=i.child(""));const o=new vt(new ye(i),0);let l=new _t(xe);return this.Yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Hr)),!0)},o),K.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ge(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return K.forEach(n.mutations,s=>{const i=new vt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new vt(n,0),s=this.Yr.firstAfterOrEqual(r);return K.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.ni=e,this.docs=function(){return new st(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():Ut.newInvalidDocument(n))}getEntries(e,n){let r=cr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ut.newInvalidDocument(s))}),K.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=cr();const o=n.path,l=new ye(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gC(mC(h),r)<=0||(s.has(h.key)||cc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,n,r,s){we(9500)}ri(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BR(this)}getSize(e){return K.resolve(this.size)}}class BR extends xR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.persistence=e,this.ii=new Vs(n=>md(n),gd),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.si=0,this.oi=new Ed,this.targetCount=0,this._i=_i.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),K.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new _i(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.hr(n),K.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),K.waitFor(i).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n){this.ai={},this.overlays={},this.ui=new ic(0),this.ci=!1,this.ci=!0,this.li=new $R,this.referenceDelegate=e(this),this.hi=new jR(this),this.indexManager=new AR,this.remoteDocumentCache=function(s){return new UR(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new IR(n),this.Ti=new MR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new FR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ce("MemoryPersistence","Starting transaction:",e);const s=new qR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return K.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class qR extends _C{constructor(e){super(),this.currentSequenceNumber=e}}class Td{constructor(e){this.persistence=e,this.Ai=new Ed,this.Ri=null}static Vi(e){return new Td(e)}get mi(){if(this.Ri)return this.Ri;throw we(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),K.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.mi,r=>{const s=ye.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,Ae.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return K.or([()=>K.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Rl{constructor(e,n){this.persistence=e,this.gi=new Vs(r=>wC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=OR(this,n)}static Vi(e,n){return new Rl(e,n)}Ii(){}di(e){return K.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return K.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?K.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Ae.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),K.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),K.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qa(e.data.value)),n}Sr(e,n,r){return K.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return K.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Le(),s=Le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Id(e,n.fromCache,r,s)}}/**
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
 */class zR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return _I()?8:vC(Bt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new HR;return this.ws(e,n,o).next(l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ks()<=Me.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(Ks()<=Me.DEBUG&&ce("QueryEngine","Query:",Ys(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ks()<=Me.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):K.resolve())}ps(e,n){if(Km(n))return K.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ju(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Le(...i);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ds(n,c,o,u.readTime)?this.ps(e,Ju(n,null,"F")):this.vs(e,c,n,u)}))})))}ys(e,n,r,s){return Km(n)||s.isEqual(Ae.min())?K.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?K.resolve(null):(Ks()<=Me.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ys(n)),this.vs(e,o,n,pC(s,Vo)).next(l=>l))})}bs(e,n){let r=new _t(r1(e));return n.forEach((s,i)=>{cc(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ks()<=Me.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Ys(n)),this.gs.getDocumentsMatchingQuery(e,n,Gr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="LocalStore",WR=3e8;class GR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new st(xe),this.Ms=new Vs(i=>md(i),gd),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function KR(t,e,n,r){return new GR(t,e,n,r)}async function A1(t,e){const n=Ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=Le();for(const c of s){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Bs:c,removedBatchIds:o,addedBatchIds:l}))})})}function YR(t,e){const n=Ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const p=c.batch,m=p.keys();let y=K.resolve();return m.forEach(x=>{y=y.next(()=>h.getEntry(u,x)).next(N=>{const k=c.docVersions.get(x);Ge(k!==null,48541),N.version.compareTo(k)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),h.addEntry(N)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Le();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function P1(t){const e=Ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function XR(t,e){const n=Ce(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach((h,p)=>{const m=s.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(i,h.removedDocuments,p).next(()=>n.hi.addMatchingKeys(i,h.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(Ot.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),s=s.insert(p,y),function(N,k,v){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=WR?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,y,h)&&l.push(n.hi.updateTargetData(i,y))});let u=cr(),c=Le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(QR(i,o,e.documentUpdates).next(h=>{u=h.Ls,c=h.ks})),!r.isEqual(Ae.min())){const h=n.hi.getLastRemoteSnapshotVersion(i).next(p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(h)}return K.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Fs=s,i))}function QR(t,e,n){let r=Le(),s=Le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=cr();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Ae.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ce(Sd,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ls:o,ks:s}})}function JR(t,e){const n=Ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=dd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZR(t,e){const n=Ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,K.resolve(s)):n.hi.allocateTargetId(r).next(o=>(s=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function rh(t,e,n){const r=Ce(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Pi(o))throw o;ce(Sd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function ag(t,e,n){const r=Ce(t);let s=Ae.min(),i=Le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const p=Ce(u),m=p.Ms.get(h);return m!==void 0?K.resolve(p.Fs.get(m)):p.hi.getTargetData(c,h)}(r,o,Nn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Ae.min(),n?i:Le())).next(l=>(eD(r,UC(e),l),{documents:l,qs:i})))}function eD(t,e,n){let r=t.xs.get(e)||Ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class lg{constructor(){this.activeTargetIds=WC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tD{constructor(){this.Fo=new lg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new lg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const cg="ConnectivityMonitor";class ug{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ce(cg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ce(cg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const hu="RestConnection",rD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sD{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Tl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=sh(),l=this.Go(e,n.toUriEncodedString());ce(hu,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:c}=new URL(l),h=Ei(c);return this.jo(e,l,u,r,h).then(p=>(ce(hu,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Wr(hu,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Si}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=rD[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Mt="WebChannelConnection";class oD extends sD{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=sh();return new Promise((l,u)=>{const c=new Rv;c.setWithCredentials(!0),c.listenOnce(Dv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Xa.NO_ERROR:const p=c.getResponseJson();ce(Mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Xa.TIMEOUT:ce(Mt,`RPC '${e}' ${o} timed out`),u(new oe(j.DEADLINE_EXCEEDED,"Request time out"));break;case Xa.HTTP_ERROR:const m=c.getStatus();if(ce(Mt,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const x=y?.error;if(x&&x.status&&x.message){const N=function(v){const b=v.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(b)>=0?b:j.UNKNOWN}(x.status);u(new oe(N,x.message))}else u(new oe(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new oe(j.UNAVAILABLE,"Connection failed."));break;default:we(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{ce(Mt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);ce(Mt,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",h,r,15)})}P_(e,n,r){const s=sh(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xv(),l=Ov(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=i.join("");ce(Mt,`Creating RPC '${e}' stream ${s}: ${h}`,u);const p=o.createWebChannel(h,u);this.T_(p);let m=!1,y=!1;const x=new iD({Ho:k=>{y?ce(Mt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(ce(Mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ce(Mt,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Yo:()=>p.close()}),N=(k,v,b)=>{k.listen(v,V=>{try{b(V)}catch($){setTimeout(()=>{throw $},0)}})};return N(p,Ji.EventType.OPEN,()=>{y||(ce(Mt,`RPC '${e}' stream ${s} transport opened.`),x.s_())}),N(p,Ji.EventType.CLOSE,()=>{y||(y=!0,ce(Mt,`RPC '${e}' stream ${s} transport closed`),x.__(),this.I_(p))}),N(p,Ji.EventType.ERROR,k=>{y||(y=!0,Wr(Mt,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),x.__(new oe(j.UNAVAILABLE,"The operation could not be completed")))}),N(p,Ji.EventType.MESSAGE,k=>{var v;if(!y){const b=k.data[0];Ge(!!b,16349);const V=b,$=V?.error||((v=V[0])===null||v===void 0?void 0:v.error);if($){ce(Mt,`RPC '${e}' stream ${s} received error:`,$);const z=$.status;let Y=function(T){const P=ft[T];if(P!==void 0)return p1(P)}(z),A=$.message;Y===void 0&&(Y=j.INTERNAL,A="Unknown error status: "+z+" with message "+$.message),y=!0,x.__(new oe(Y,A)),p.close()}else ce(Mt,`RPC '${e}' stream ${s} received:`,b),x.a_(b)}}),N(l,kv.STAT_EVENT,k=>{k.stat===zu.PROXY?ce(Mt,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===zu.NOPROXY&&ce(Mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.o_()},0),x}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function du(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class C1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&ce("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="PersistentStream";class R1{constructor(e,n,r,s,i,o,l,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new C1(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(lr(n.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new oe(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ce(hg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(ce(hg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aD extends R1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=fR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Ae.min():o.readTime?Vn(o.readTime):Ae.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=nh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Xu(u)?{documents:gR(i,u)}:{query:yR(i,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=y1(i,o.resumeToken);const c=Zu(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Ae.min())>0){l.readTime=Cl(i,o.snapshotVersion.toTimestamp());const c=Zu(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=vR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=nh(this.serializer),n.removeTarget=e,this.k_(n)}}class lD extends R1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Ge(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ge(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=mR(e.writeResults,e.commitTime),r=Vn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=nh(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pR(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{}class uD extends cD{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new oe(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,eh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(j.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,eh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(j.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class hD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(lr(n),this._a=!1):ce("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="RemoteStore";class dD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Ms(this)&&(ce(Rs,"Restarting streams for network reachability change."),await async function(u){const c=Ce(u);c.Ia.add(4),await ra(c),c.Aa.set("Unknown"),c.Ia.delete(4),await mc(c)}(this))})}),this.Aa=new hD(r,s)}}async function mc(t){if(Ms(t))for(const e of t.da)await e(!0)}async function ra(t){for(const e of t.da)await e(!1)}function D1(t,e){const n=Ce(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Rd(n)?Cd(n):Ri(n).x_()&&Pd(n,e))}function Ad(t,e){const n=Ce(t),r=Ri(n);n.Ta.delete(e),r.x_()&&k1(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ms(n)&&n.Aa.set("Unknown"))}function Pd(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ri(t).H_(e)}function k1(t,e){t.Ra.$e(e),Ri(t).Y_(e)}function Cd(t){t.Ra=new oR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ri(t).start(),t.Aa.aa()}function Rd(t){return Ms(t)&&!Ri(t).M_()&&t.Ta.size>0}function Ms(t){return Ce(t).Ia.size===0}function O1(t){t.Ra=void 0}async function fD(t){t.Aa.set("Online")}async function pD(t){t.Ta.forEach((e,n)=>{Pd(t,e)})}async function mD(t,e){O1(t),Rd(t)?(t.Aa.la(e),Cd(t)):t.Aa.set("Unknown")}async function gD(t,e,n){if(t.Aa.set("Online"),e instanceof g1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))}(t,e)}catch(r){ce(Rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Dl(t,r)}else if(e instanceof el?t.Ra.Ye(e):e instanceof m1?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Ae.min()))try{const r=await P1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=i.Ta.get(c);h&&i.Ta.set(c,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const h=i.Ta.get(u);if(!h)return;i.Ta.set(u,h.withResumeToken(Ot.EMPTY_BYTE_STRING,h.snapshotVersion)),k1(i,u);const p=new Vr(h.target,u,c,h.sequenceNumber);Pd(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ce(Rs,"Failed to raise snapshot:",r),await Dl(t,r)}}async function Dl(t,e,n){if(!Pi(e))throw e;t.Ia.add(1),await ra(t),t.Aa.set("Offline"),n||(n=()=>P1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ce(Rs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await mc(t)})}function x1(t,e){return e().catch(n=>Dl(t,n,e))}async function gc(t){const e=Ce(t),n=Qr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:dd;for(;yD(e);)try{const s=await JR(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,_D(e,s)}catch(s){await Dl(e,s)}N1(e)&&V1(e)}function yD(t){return Ms(t)&&t.Pa.length<10}function _D(t,e){t.Pa.push(e);const n=Qr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function N1(t){return Ms(t)&&!Qr(t).M_()&&t.Pa.length>0}function V1(t){Qr(t).start()}async function vD(t){Qr(t).na()}async function bD(t){const e=Qr(t);for(const n of t.Pa)e.X_(n.mutations)}async function wD(t,e,n){const r=t.Pa.shift(),s=vd.from(r,e,n);await x1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gc(t)}async function ED(t,e){e&&Qr(t).Z_&&await async function(r,s){if(function(o){return sR(o)&&o!==j.ABORTED}(s.code)){const i=r.Pa.shift();Qr(r).N_(),await x1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gc(r)}}(t,e),N1(t)&&V1(t)}async function dg(t,e){const n=Ce(t);n.asyncQueue.verifyOperationInProgress(),ce(Rs,"RemoteStore received new credentials");const r=Ms(n);n.Ia.add(3),await ra(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await mc(n)}async function TD(t,e){const n=Ce(t);e?(n.Ia.delete(2),await mc(n)):e||(n.Ia.add(2),await ra(n),n.Aa.set("Unknown"))}function Ri(t){return t.Va||(t.Va=function(n,r,s){const i=Ce(n);return i.ia(),new aD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:fD.bind(null,t),e_:pD.bind(null,t),n_:mD.bind(null,t),J_:gD.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Rd(t)?Cd(t):t.Aa.set("Unknown")):(await t.Va.stop(),O1(t))})),t.Va}function Qr(t){return t.ma||(t.ma=function(n,r,s){const i=Ce(n);return i.ia(),new lD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:vD.bind(null,t),n_:ED.bind(null,t),ea:bD.bind(null,t),ta:wD.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await gc(t)):(await t.ma.stop(),t.Pa.length>0&&(ce(Rs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Dd(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kd(t,e){if(lr("AsyncQueue",`${e}: ${t}`),Pi(t))return new oe(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{static emptySet(e){return new oi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ye.comparator(n.key,r.key):(n,r)=>ye.comparator(n.key,r.key),this.keyedMap=Zi(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class fg{constructor(){this.fa=new st(ye.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):we(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class vi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new vi(e,n,oi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class SD{constructor(){this.queries=pg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=Ce(n),i=s.queries;s.queries=pg(),i.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new oe(j.ABORTED,"Firestore shutting down"))}}function pg(){return new Vs(t=>n1(t),lc)}async function M1(t,e){const n=Ce(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new ID,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=kd(o,`Initialization of query '${Ys(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Od(n)}async function L1(t,e){const n=Ce(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AD(t,e){const n=Ce(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&Od(n)}function PD(t,e,n){const r=Ce(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Od(t){t.Da.forEach(e=>{e.next()})}var ih,mg;(mg=ih||(ih={})).Fa="default",mg.Cache="cache";class $1{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ih.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.key=e}}class U1{constructor(e){this.key=e}}class CD{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Le(),this.mutatedKeys=Le(),this.Xa=r1(e),this.eu=new oi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new fg,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const m=s.get(h),y=cc(this.query,p)?p:null,x=!!m&&this.mutatedKeys.has(m.key),N=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let k=!1;m&&y?m.data.isEqual(y.data)?x!==N&&(r.track({type:3,doc:y}),k=!0):this.iu(m,y)||(r.track({type:2,doc:y}),k=!0,(u&&this.Xa(y,u)>0||c&&this.Xa(y,c)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),k=!0):m&&!y&&(r.track({type:1,doc:m}),k=!0,(u||c)&&(l=!0)),k&&(y?(o=o.add(y),i=N?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((h,p)=>function(y,x){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{At:k})}};return N(y)-N(x)}(h.type,p.type)||this.Xa(h.doc,p.doc)),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,c=u!==this.Ya;return this.Ya=u,o.length!==0||c?{snapshot:new vi(this.query,e.eu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new fg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Le(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new U1(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new F1(r))}),n}uu(e){this.Ha=e.qs,this.Za=Le();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return vi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const xd="SyncEngine";class RD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DD{constructor(e){this.key=e,this.lu=!1}}class kD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Vs(l=>n1(l),lc),this.Tu=new Map,this.Iu=new Set,this.du=new st(ye.comparator),this.Eu=new Map,this.Au=new Ed,this.Ru={},this.Vu=new Map,this.mu=_i.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function OD(t,e,n=!0){const r=W1(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await B1(r,e,n,!0),s}async function xD(t,e){const n=W1(t);await B1(n,e,!0,!1)}async function B1(t,e,n,r){const s=await ZR(t.localStore,Nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await ND(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&D1(t.remoteStore,s),l}async function ND(t,e,n,r,s){t.gu=(p,m,y)=>async function(N,k,v,b){let V=k.view.nu(v);V.Ds&&(V=await ag(N.localStore,k.query,!1).then(({documents:A})=>k.view.nu(A,V)));const $=b&&b.targetChanges.get(k.targetId),z=b&&b.targetMismatches.get(k.targetId)!=null,Y=k.view.applyChanges(V,N.isPrimaryClient,$,z);return yg(N,k.targetId,Y._u),Y.snapshot}(t,p,m,y);const i=await ag(t.localStore,e,!0),o=new CD(e,i.qs),l=o.nu(i.documents),u=na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);yg(t,n,c._u);const h=new RD(e,n,o);return t.Pu.set(e,h),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),c.snapshot}async function VD(t,e,n){const r=Ce(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!lc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ad(r.remoteStore,s.targetId),oh(r,s.targetId)}).catch(Ai)):(oh(r,s.targetId),await rh(r.localStore,s.targetId,!0))}async function MD(t,e){const n=Ce(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ad(n.remoteStore,r.targetId))}async function LD(t,e,n){const r=HD(t);try{const s=await function(o,l){const u=Ce(o),c=Oe.now(),h=l.reduce((y,x)=>y.add(x.key),Le());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let x=cr(),N=Le();return u.Os.getEntries(y,h).next(k=>{x=k,x.forEach((v,b)=>{b.isValidDocument()||(N=N.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,x)).next(k=>{p=k;const v=[];for(const b of l){const V=ZC(b,p.get(b.key).overlayedDocument);V!=null&&v.push(new ss(b.key,V,Kv(V.value.mapValue),Kt.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,v,l)}).next(k=>{m=k;const v=k.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(y,k.batchId,v)})}).then(()=>({batchId:m.batchId,changes:i1(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Ru[o.currentUser.toKey()];c||(c=new st(xe)),c=c.insert(l,u),o.Ru[o.currentUser.toKey()]=c}(r,s.batchId,n),await sa(r,s.changes),await gc(r.remoteStore)}catch(s){const i=kd(s,"Failed to persist write");n.reject(i)}}async function j1(t,e){const n=Ce(t);try{const r=await XR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(Ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Ge(o.lu,14607):s.removedDocuments.size>0&&(Ge(o.lu,42227),o.lu=!1))}),await sa(n,r,e)}catch(r){await Ai(r)}}function gg(t,e,n){const r=Ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Ce(o);u.onlineState=l;let c=!1;u.queries.forEach((h,p)=>{for(const m of p.wa)m.va(l)&&(c=!0)}),c&&Od(u)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $D(t,e,n){const r=Ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new st(ye.comparator);o=o.insert(i,Ut.newNoDocument(i,Ae.min()));const l=Le().add(i),u=new fc(Ae.min(),new Map,new st(xe),o,l);await j1(r,u),r.du=r.du.remove(i),r.Eu.delete(e),Nd(r)}else await rh(r.localStore,e,!1).then(()=>oh(r,e,n)).catch(Ai)}async function FD(t,e){const n=Ce(t),r=e.batch.batchId;try{const s=await YR(n.localStore,e);H1(n,r,null),q1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sa(n,s)}catch(s){await Ai(s)}}async function UD(t,e,n){const r=Ce(t);try{const s=await function(o,l){const u=Ce(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(Ge(p!==null,37113),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);H1(r,e,n),q1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sa(r,s)}catch(s){await Ai(s)}}function q1(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function H1(t,e,n){const r=Ce(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function oh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||z1(t,r)})}function z1(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ad(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Nd(t))}function yg(t,e,n){for(const r of n)r instanceof F1?(t.Au.addReference(r.key,e),BD(t,r)):r instanceof U1?(ce(xd,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||z1(t,r.key)):we(19791,{yu:r})}function BD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ce(xd,"New document in limbo: "+n),t.Iu.add(r),Nd(t))}function Nd(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new ye(Je.fromString(e)),r=t.mu.next();t.Eu.set(r,new DD(n)),t.du=t.du.insert(n,r),D1(t.remoteStore,new Vr(Nn(yd(n.path)),r,"TargetPurposeLimboResolution",ic.ue))}}async function sa(t,e,n){const r=Ce(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(h=n?.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){s.push(c);const p=Id.Es(u.targetId,c);i.push(p)}}))}),await Promise.all(o),r.hu.J_(s),await async function(u,c){const h=Ce(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>K.forEach(c,m=>K.forEach(m.Is,y=>h.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>K.forEach(m.ds,y=>h.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!Pi(p))throw p;ce(Sd,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const y=h.Fs.get(m),x=y.snapshotVersion,N=y.withLastLimboFreeSnapshotVersion(x);h.Fs=h.Fs.insert(m,N)}}}(r.localStore,i))}async function jD(t,e){const n=Ce(t);if(!n.currentUser.isEqual(e)){ce(xd,"User change. New user:",e.toKey());const r=await A1(n.localStore,e);n.currentUser=e,function(i,o){i.Vu.forEach(l=>{l.forEach(u=>{u.reject(new oe(j.CANCELLED,o))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sa(n,r.Bs)}}function qD(t,e){const n=Ce(t),r=n.Eu.get(e);if(r&&r.lu)return Le().add(r.key);{let s=Le();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function W1(t){const e=Ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=j1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$D.bind(null,e),e.hu.J_=AD.bind(null,e.eventManager),e.hu.pu=PD.bind(null,e.eventManager),e}function HD(t){const e=Ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UD.bind(null,e),e}class kl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return KR(this.persistence,new zR,e.initialUser,this.serializer)}Du(e){return new S1(Td.Vi,this.serializer)}bu(e){return new tD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kl.provider={build:()=>new kl};class zD extends kl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Ge(this.persistence.referenceDelegate instanceof Rl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new S1(r=>Rl.Vi(r,n),this.serializer)}}class ah{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jD.bind(null,this.syncEngine),await TD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SD}()}createDatastore(e){const n=pc(e.databaseInfo.databaseId),r=function(i){return new oD(i)}(e.databaseInfo);return function(i,o,l,u){return new uD(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new dD(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>gg(this.syncEngine,n,0),function(){return ug.C()?new ug:new nD}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,h){const p=new kD(s,i,o,l,u,c);return h&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Ce(s);ce(Rs,"RemoteStore shutting down."),i.Ia.add(5),await ra(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ah.provider={build:()=>new ah};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Jr="FirestoreClient";class WD{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=$t.UNAUTHENTICATED,this.clientId=hd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ce(Jr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ce(Jr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fu(t,e){t.asyncQueue.verifyOperationInProgress(),ce(Jr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await A1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Wr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{ce("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Wr("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function _g(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GD(t);ce(Jr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>dg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>dg(e.remoteStore,s)),t._onlineComponents=e}async function GD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ce(Jr,"Using user provided OfflineComponentProvider");try{await fu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Wr("Error using user provided cache. Falling back to memory cache: "+n),await fu(t,new kl)}}else ce(Jr,"Using default OfflineComponentProvider"),await fu(t,new zD(void 0));return t._offlineComponents}async function K1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ce(Jr,"Using user provided OnlineComponentProvider"),await _g(t,t._uninitializedComponentsProvider._online)):(ce(Jr,"Using default OnlineComponentProvider"),await _g(t,new ah))),t._onlineComponents}function KD(t){return K1(t).then(e=>e.syncEngine)}async function Y1(t){const e=await K1(t),n=e.eventManager;return n.onListen=OD.bind(null,e.syncEngine),n.onUnlisten=VD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=MD.bind(null,e.syncEngine),n}function YD(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const h=new G1({next:m=>{h.Ou(),o.enqueueAndForget(()=>L1(i,p));const y=m.docs.has(l);!y&&m.fromCache?c.reject(new oe(j.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?c.reject(new oe(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new $1(yd(l.path),h,{includeMetadataChanges:!0,ka:!0});return M1(i,p)}(await Y1(t),t.asyncQueue,e,n,r)),r.promise}function XD(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const h=new G1({next:m=>{h.Ou(),o.enqueueAndForget(()=>L1(i,p)),m.fromCache&&u.source==="server"?c.reject(new oe(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new $1(l,h,{includeMetadataChanges:!0,ka:!0});return M1(i,p)}(await Y1(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function X1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Q1="firestore.googleapis.com",bg=!0;class wg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Q1,this.ssl=bg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:bg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=I1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CR)throw new oe(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sC;switch(r.type){case"firstParty":return new lC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vg.get(n);r&&(ce("ComponentProvider","Removing Datastore"),vg.delete(n),r.terminate())}(this),Promise.resolve()}}function QD(t,e,n,r={}){var s;t=gn(t,yc);const i=Ei(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;i&&(B_(`https://${u}`),j_("Firestore",!0)),o.host!==Q1&&o.host!==u&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:i,emulatorOptions:r});if(!Is(c,l)&&(t._setSettings(c),r.mockUserToken)){let h,p;if(typeof r.mockUserToken=="string")h=r.mockUserToken,p=$t.MOCK_USER;else{h=cI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new oe(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new $t(m)}t._authCredentials=new iC(new Vv(h,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ls(this.firestore,e,this._query)}}class ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ea(n,ut._jsonSchema))return new ut(e,r||null,new ye(Je.fromString(n.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:mt("string",ut._jsonSchemaVersion),referencePath:mt("string")};class jr extends Ls{constructor(e,n,r){super(e,n,yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new ye(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function An(t,e,...n){if(t=at(t),Lv("collection","path",e),t instanceof yc){const r=Je.fromString(e,...n);return Nm(r),new jr(t,null,r)}{if(!(t instanceof ut||t instanceof jr))throw new oe(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return Nm(r),new jr(t.firestore,null,r)}}function hn(t,e,...n){if(t=at(t),arguments.length===1&&(e=hd.newId()),Lv("doc","path",e),t instanceof yc){const r=Je.fromString(e,...n);return xm(r),new ut(t,null,new ye(r))}{if(!(t instanceof ut||t instanceof jr))throw new oe(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return xm(r),new ut(t.firestore,t instanceof jr?t.converter:null,new ye(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="AsyncQueue";class Tg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new C1(this,"async_queue_retry"),this.oc=()=>{const r=du();r&&ce(Eg,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=du();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=du();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new rr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Pi(e))throw e;ce(Eg,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,lr("INTERNAL UNHANDLED ERROR: ",Ig(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Dd.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&we(47125,{hc:Ig(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Ig(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class is extends yc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Tg,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tg(e),this._firestoreClient=void 0,await e}}}function Js(t,e){const n=typeof t=="object"?t:W_(),r=typeof t=="string"?t:Tl,s=Qh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=aI("firestore");i&&QD(s,...i)}return s}function _c(t){if(t._terminated)throw new oe(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||JD(t),t._firestoreClient}function JD(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,c,h){return new IC(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,X1(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new WD(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l?._online.build();return{_offline:l?._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dn(Ot.fromBase64String(e))}catch(n){throw new oe(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new dn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:dn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ea(e,dn._jsonSchema))return dn.fromBase64String(e.bytes)}}dn._jsonSchemaVersion="firestore/bytes/1.0",dn._jsonSchema={type:mt("string",dn._jsonSchemaVersion),bytes:mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mn._jsonSchemaVersion}}static fromJSON(e){if(ea(e,Mn._jsonSchema))return new Mn(e.latitude,e.longitude)}}Mn._jsonSchemaVersion="firestore/geoPoint/1.0",Mn._jsonSchema={type:mt("string",Mn._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
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
 */class Ln{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ln._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ea(e,Ln._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ln(e.vectorValues);throw new oe(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ln._jsonSchemaVersion="firestore/vectorValue/1.0",Ln._jsonSchema={type:mt("string",Ln._jsonSchemaVersion),vectorValues:mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=/^__.*__$/;class e2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new ta(e,this.data,n,this.fieldTransforms)}}class J1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Z1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ec:t})}}class Md{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Md(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ol(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Z1(this.Ec)&&ZD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class t2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pc(e)}Dc(e,n,r,s=!1){return new Md({Ec:e,methodName:n,bc:r,path:kt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oa(t){const e=t._freezeSettings(),n=pc(t._databaseId);return new t2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ld(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);$d("Data must be an object, but it was:",o,r);const l=nb(r,o);let u,c;if(i.merge)u=new sn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const m=lh(e,p,n);if(!o.contains(m))throw new oe(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);sb(h,m)||h.push(m)}u=new sn(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new e2(new Jt(l),u,c)}class vc extends Vd{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vc}}function eb(t,e,n,r){const s=t.Dc(1,e,n);$d("Data must be an object, but it was:",s,r);const i=[],o=Jt.empty();rs(r,(u,c)=>{const h=Fd(e,u,n);c=at(c);const p=s.gc(h);if(c instanceof vc)i.push(h);else{const m=aa(c,p);m!=null&&(i.push(h),o.set(h,m))}});const l=new sn(i);return new J1(o,l,s.fieldTransforms)}function tb(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[lh(e,r,n)],u=[s];if(i.length%2!=0)throw new oe(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(lh(e,i[m])),u.push(i[m+1]);const c=[],h=Jt.empty();for(let m=l.length-1;m>=0;--m)if(!sb(c,l[m])){const y=l[m];let x=u[m];x=at(x);const N=o.gc(y);if(x instanceof vc)c.push(y);else{const k=aa(x,N);k!=null&&(c.push(y),h.set(y,k))}}const p=new sn(c);return new J1(h,p,o.fieldTransforms)}function n2(t,e,n,r=!1){return aa(n,t.Dc(r?4:3,e))}function aa(t,e){if(rb(t=at(t)))return $d("Unsupported field value:",e,t),nb(t,e);if(t instanceof Vd)return function(r,s){if(!Z1(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=aa(l,s.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:Cl(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cl(s.serializer,i)}}if(r instanceof Mn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof dn)return{bytesValue:y1(s.serializer,r._byteString)};if(r instanceof ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ln)return function(o,l){return{mapValue:{fields:{[Wv]:{stringValue:Gv},[Il]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.wc("VectorValues must only contain numeric values.");return _d(l.serializer,c)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${sc(r)}`)}(t,e)}function nb(t,e){const n={};return Uv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(t,(r,s)=>{const i=aa(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function rb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Mn||t instanceof dn||t instanceof ut||t instanceof Vd||t instanceof Ln)}function $d(t,e,n){if(!rb(n)||!$v(n)){const r=sc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function lh(t,e,n){if((e=at(e))instanceof ia)return e._internalPath;if(typeof e=="string")return Fd(t,e);throw Ol("Field path arguments must be of type string or ",t,!1,void 0,n)}const r2=new RegExp("[~\\*/\\[\\]]");function Fd(t,e,n){if(e.search(r2)>=0)throw Ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ia(...e.split("."))._internalPath}catch{throw Ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ol(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new oe(j.INVALID_ARGUMENT,l+t+u)}function sb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class s2 extends ib{data(){return super.data()}}function bc(t,e){return typeof e=="string"?Fd(t,e):e instanceof ia?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ud{}class ob extends Ud{}function Hs(t,e,...n){let r=[];e instanceof Ud&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Bd).length,l=i.filter(u=>u instanceof wc).length;if(o>1||o>0&&l>0)throw new oe(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class wc extends ob{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new wc(e,n,r)}_apply(e){const n=this._parse(e);return ab(e._query,n),new Ls(e.firestore,e.converter,Qu(e._query,n))}_parse(e){const n=oa(e.firestore);return function(i,o,l,u,c,h,p){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new oe(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Ag(p,h);const x=[];for(const N of p)x.push(Sg(u,i,N));m={arrayValue:{values:x}}}else m=Sg(u,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Ag(p,h),m=n2(l,o,p,h==="in"||h==="not-in");return pt.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ki(t,e,n){const r=e,s=bc("where",t);return wc._create(s,r,n)}class Bd extends Ud{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)ab(o,u),o=Qu(o,u)}(e._query,n),new Ls(e.firestore,e.converter,Qu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jd extends ob{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new oe(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new oe(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fo(i,o)}(e._query,this._field,this._direction);return new Ls(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ci(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function La(t,e="asc"){const n=e,r=bc("orderBy",t);return jd._create(r,n)}function Sg(t,e,n){if(typeof(n=at(n))=="string"){if(n==="")throw new oe(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!t1(e)&&n.indexOf("/")!==-1)throw new oe(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Je.fromString(n));if(!ye.isDocumentKey(r))throw new oe(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jm(t,new ye(r))}if(n instanceof ut)return jm(t,n._key);throw new oe(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sc(n)}.`)}function Ag(t,e){if(!Array.isArray(t)||t.length===0)throw new oe(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ab(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new oe(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class o2{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return rs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Il].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ct(o.doubleValue));return new Ln(i)}convertGeoPoint(e){return new Mn(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ac(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Mo(e));default:return null}}convertTimestamp(e){const n=Kr(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Je.fromString(e);Ge(T1(r),9688,{name:e});const s=new Lo(r.get(1),r.get(3)),i=new ye(r.popFirst(5));return s.isEqual(n)||lr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Es extends ib{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Es._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Es._jsonSchemaVersion="firestore/documentSnapshot/1.0",Es._jsonSchema={type:mt("string",Es._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class tl extends Es{data(e={}){return super.data(e)}}class ai{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new to(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new tl(this._firestore,this._userDataWriter,r.key,r,new to(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new tl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new to(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new tl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new to(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:a2(l.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ai._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=hd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function a2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){t=gn(t,ut);const e=gn(t.firestore,is);return YD(_c(e),t._key).then(n=>c2(e,t,n))}ai._jsonSchemaVersion="firestore/querySnapshot/1.0",ai._jsonSchema={type:mt("string",ai._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class lb extends o2{constructor(e){super(),this.firestore=e}convertBytes(e){return new dn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function zs(t){t=gn(t,Ls);const e=gn(t.firestore,is),n=_c(e),r=new lb(e);return i2(t._query),XD(n,t._query).then(s=>new ai(e,r,t,s))}function l2(t,e,n){t=gn(t,ut);const r=gn(t.firestore,is),s=qd(t.converter,e,n);return la(r,[Ld(oa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Kt.none())])}function $a(t,e,n,...r){t=gn(t,ut);const s=gn(t.firestore,is),i=oa(s);let o;return o=typeof(e=at(e))=="string"||e instanceof ia?tb(i,"updateDoc",t._key,e,n,r):eb(i,"updateDoc",t._key,e),la(s,[o.toMutation(t._key,Kt.exists(!0))])}function Pg(t){return la(gn(t.firestore,is),[new dc(t._key,Kt.none())])}function Fa(t,e){const n=gn(t.firestore,is),r=hn(t),s=qd(t.converter,e);return la(n,[Ld(oa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function la(t,e){return function(r,s){const i=new rr;return r.asyncQueue.enqueueAndForget(async()=>LD(await KD(r),s,i)),i.promise}(_c(t),e)}function c2(t,e,n){const r=n.docs.get(e._key),s=new lb(t);return new Es(t,s,e._key,r,new to(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=oa(e)}set(e,n,r){this._verifyNotCommitted();const s=pu(e,this._firestore),i=qd(s.converter,n,r),o=Ld(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Kt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=pu(e,this._firestore);let o;return o=typeof(n=at(n))=="string"||n instanceof ia?tb(this._dataReader,"WriteBatch.update",i._key,n,r,s):eb(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Kt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=pu(e,this._firestore);return this._mutations=this._mutations.concat(new dc(n._key,Kt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new oe(j.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function pu(t,e){if((t=at(t)).firestore!==e)throw new oe(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(t){return _c(t=gn(t,is)),new u2(t,e=>la(t,e))}(function(e,n=!0){(function(s){Si=s})(Ti),fi(new Ss("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new is(new oC(r.getProvider("auth-internal")),new cC(o,r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new oe(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(c.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ur(Cm,Rm,e),Ur(Cm,Rm,"esm2017")})();const on=N_("auth",{state:()=>({user:null,userProfile:null,isAuthReady:!1,authInstance:null,loading:!1,error:null,successMessage:null,isProfileLoading:!1}),getters:{isProfileComplete:t=>!!t.userProfile?.role&&!!t.userProfile?.birthDate,role:t=>t.userProfile?.role},actions:{initAuth(t){t&&(this.authInstance=t,gv(this.authInstance,async e=>{if(e){this.user=e,this.isProfileLoading=!0;try{const n=Js(),s=hn(n,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","users",e.uid),i=await ch(s);i.exists()?this.userProfile=i.data():this.userProfile=null}catch(n){console.error("Failed to fetch user profile:",n),this.userProfile=null}finally{this.isProfileLoading=!1}}else this.user=null,this.userProfile=null;this.isAuthReady=!0}))},setUserProfile(t){this.userProfile=t},async logout(){await zA(this.authInstance)},async signupWithEmail(t,e,n){this.loading=!0,this.error=null,this.successMessage=null;try{const r=await FA(this.authInstance,e,n);return await jA(r.user,{displayName:t}),this.user=r.user,this.successMessage="Account created successfully!",!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async signInWithEmail(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{const n=await UA(this.authInstance,t,e);return this.user=n.user,!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async signInWithGoogle(){this.loading=!0,this.error=null,this.successMessage=null;try{const t=new Qn,e=await hP(this.authInstance,t);return this.user=e.user,!0}catch(t){return this.error=t.message,!1}finally{this.loading=!1}},async sendPasswordReset(t){this.loading=!0,this.error=null,this.successMessage=null;try{return await LA(this.authInstance,t),this.successMessage="Password reset link sent to your email!",!0}catch(e){return this.error=e.message,!1}finally{this.loading=!1}},async confirmPasswordReset(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{return await $A(this.authInstance,t,e),this.successMessage="Your password has been reset successfully! You can now sign in with your new password.",!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}}}}),Di=N_("database",{state:()=>({loading:!1,error:null}),actions:{_getDBEssentials(){const t=on();if(!t.user?.uid)return this.error="User not authenticated. Operation cancelled.",null;const e=Js(),n="1:382664693760:web:7582abe58d70b3260f20e5",r=t.user.uid;return{db:e,appId:n,userId:r}},async setUserProfile(t,e){console.log(`[DB_STORE] setUserProfile: Updating profile for user ID: ${t}`),this.loading=!0,this.error=null;try{const n=Js(),s=hn(n,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","users",t);return await l2(s,e,{merge:!0}),console.log(`[DB_STORE] setUserProfile: Successfully updated profile for ${t}.`),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchUserProfile(t){this.loading=!0,this.error=null;try{const e=this._getDBEssentials();if(!e)return null;const{db:n,appId:r}=e,s=hn(n,"artifacts",r,"users",t),i=await ch(s);return i.exists()?{id:i.id,...i.data()}:null}catch(e){return this.error=e.message,null}finally{this.loading=!1}},async addNewPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=An(n,"artifacts",r,"patients"),o={...t,creatorId:s,createdAt:Oe.now(),updatedAt:Oe.now()};return(await Fa(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async updatePatientProfile(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=hn(r,"artifacts",s,"patients",t);return await $a(i,{...e,updatedAt:Oe.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchPatientsForDoctor(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=An(e,"artifacts",n,"patients"),i=Hs(s,Ki("creatorId","==",r),La("createdAt","desc"));return(await zs(i)).docs.map(l=>({id:l.id,...l.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async deletePatientProfile(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=h2(n),i=hn(n,"artifacts",r,"patients",t);s.delete(i);const o=An(n,"artifacts",r,"scans"),l=Hs(o,Ki("patientId","==",t));return(await zs(l)).forEach(c=>s.delete(c.ref)),await s.commit(),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async createScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=An(n,"artifacts",r,"scans"),o={...t};delete o.id;let l;const u=o.scanDate;if(u instanceof Oe)l=u;else if(u instanceof Date&&!isNaN(u.getTime()))l=Oe.fromDate(u);else if(typeof u=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(u)){const p=u.split("-"),m=new Date(Date.UTC(p[0],parseInt(p[1],10)-1,p[2],12,0,0));if(isNaN(m.getTime()))throw new RangeError("Provided scanDate string resulted in an invalid Date.");l=Oe.fromDate(m)}else throw console.error("Invalid scanDate received by createScan:",u),new RangeError('Invalid or unsupported type for scanDate. Must be a Timestamp, Date, or "YYYY-MM-DD" string.');const c={...o,scanDate:l,creatorId:s,isPersonalScan:o.patientId===s,createdAt:Oe.now()};if(!c.patientId)throw new Error("Cannot create a scan without a patientId.");return(await Fa(i,c)).id}catch(n){return console.error("[DB_STORE] Error details during scan creation:",n),this.error=n.message,null}finally{this.loading=!1}},async updateScan(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=hn(r,"artifacts",s,"scans",t),o={...e,updatedAt:Oe.now()};return await $a(i,o),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async deleteScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=hn(n,"artifacts",r,"scans",t);return await Pg(s),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchScansForPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return[];try{const{db:n,appId:r}=e,s=An(n,"artifacts",r,"scans"),i=Hs(s,Ki("patientId","==",t),La("scanDate","desc"));return(await zs(i)).docs.map(l=>({id:l.id,...l.data()}))}catch(n){return console.error("Error in fetchScansForPatient. Is the Firestore index for 'scans' (patientId asc, scanDate desc) created?",n),this.error=n.message,[]}finally{this.loading=!1}},async fetchDoctorCreatedScans(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=An(e,"artifacts",n,"scans"),i=Hs(s,Ki("creatorId","==",r),La("scanDate","desc"));return(await zs(i)).docs.map(l=>({id:l.id,...l.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async addPregnancyDeclaration(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=An(n,"artifacts",r,"users",s,"pregnancies"),o={...t,status:"active",endDate:null,createdAt:Oe.now()};return(await Fa(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async fetchPregnancyHistory(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=An(e,"artifacts",n,"users",r,"pregnancies"),i=Hs(s,La("declarationDate","desc"));return(await zs(i)).docs.map(l=>({id:l.id,...l.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async updatePregnancyRecord(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s,userId:i}=n,o=hn(r,"artifacts",s,"users",i,"pregnancies",t);return await $a(o,{...e,updatedAt:Oe.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchSinglePatient(t){this.loading=!0,this.error=null;try{const e=Js(),r=hn(e,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","patients",t),s=await ch(r);return s.exists()?{id:s.id,...s.data()}:(this.error=`No patient found with ID: ${t}`,console.warn(`[DB_STORE] No patient found with ID: ${t}`),null)}catch(e){return this.error=e.message,null}finally{this.loading=!1}},async createOtherScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=An(n,"artifacts",r,"other_scans"),{id:o,...l}=t,u={...l,userId:s,createdAt:Oe.now()};return console.log("[DB_STORE] Attempting to createOtherScan with cleaned payload:",u),(await Fa(i,u)).id}catch(n){return this.error=n.message,console.error("[DB_STORE] Error creating other scan:",n),null}finally{this.loading=!1}},async updateOtherScan(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=hn(r,"artifacts",s,"other_scans",t);return await $a(i,{...e,updatedAt:Oe.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async deleteOtherScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=hn(n,"artifacts",r,"other_scans",t);return await Pg(s),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchOtherScansForUser(t){this.loading=!0,this.error=null;try{const e=Js(),r=Hs(An(e,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","other_scans"),Ki("userId","==",t)),i=(await zs(r)).docs.map(o=>({id:o.id,...o.data()}));return i.sort((o,l)=>l.date.toDate()-o.date.toDate()),i}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async fetchAllDosesForUser(t,e){this.loading=!0,this.error=null,console.log(`[DB_STORE] Starting fetchAllDosesForUser for userId: ${t}, role: ${e}`);try{const n=[],r=await this.fetchOtherScansForUser(t);console.log("[DB_STORE] other scans:",JSON.parse(JSON.stringify(r))),r.forEach(i=>{i.dosage>0&&n.push({date:i.date,dose:i.dosage})});const s=await this.fetchScansForPatient(t);if(console.log("[DB_STORE] personal scans:",JSON.parse(JSON.stringify(s))),s.forEach(i=>{i.patientDose>0&&n.push({date:i.scanDate,dose:i.patientDose})}),e==="doctor"){const i=await this.fetchDoctorCreatedScans();console.log("[DB_STORE] created scans (for occupational dose):",JSON.parse(JSON.stringify(i))),i.forEach(o=>{o.doctorDose>0&&n.push({date:o.scanDate,dose:o.doctorDose})})}return n}catch(n){return this.error=`Failed to fetch all doses: ${n.message}`,console.error(`[DB_STORE] Error: ${n.message}`),[]}finally{this.loading=!1}}}}),Tt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},d2=["dir"],f2={key:0,class:"loading-state"},p2={class:"counter-label"},m2={class:"progress-details"},g2={class:"counter-bar-container"},y2={class:"counter-value"},_2={__name:"MsvCounter",props:{currentMsv:{type:Number,default:0},yearlyLimit:{type:Number,default:1},currentLanguage:String,isLoading:{type:Boolean,default:!0}},setup(t){const e=t,n=Re(()=>e.currentMsv>=e.yearlyLimit?"status-danger":e.yearlyLimit>0?e.currentMsv/e.yearlyLimit*100<50?"status-safe":"status-warning":"status-safe");return(r,s)=>(U(),G("div",{class:Ts(["msv-counter",n.value]),dir:t.currentLanguage==="en"?"ltr":"rtl"},[t.isLoading?(U(),G("div",f2,I(t.currentLanguage==="en"?"Calculating...":"جاري الحساب..."),1)):(U(),G(et,{key:1},[f("span",p2,I(t.currentLanguage==="en"?"Annual Dose:":"الجرعة السنوية:"),1),f("div",m2,[f("div",g2,[f("div",{class:"counter-bar",style:Bl({width:t.yearlyLimit>0?Math.min(t.currentMsv/t.yearlyLimit*100,100)+"%":"100%"})},null,4)]),f("span",y2,I(t.currentMsv.toFixed(2))+" mSv ",1)])],64))],10,d2))}},v2=Tt(_2,[["__scopeId","data-v-401d1770"]]),b2={class:"app-header"},w2={class:"app-header-center"},E2={class:"project-title"},T2={__name:"TheHeader",props:{currentLanguage:String,user:Object,msvData:Object},emits:["toggle-language","toggle-info-modal"],setup(t){return(e,n)=>(U(),G("header",b2,[f("button",{onClick:n[0]||(n[0]=r=>e.$emit("toggle-language")),class:"language-toggle-button"},I(t.currentLanguage==="en"?"العربية":"English"),1),f("div",w2,[f("h1",E2,I(t.currentLanguage==="en"?"mSv Exposure Calculator":"حاسبة التعرض للأشعة"),1),t.user?(U(),Bn(v2,{key:0,"current-msv":t.msvData.current,"yearly-limit":t.msvData.limit,"is-loading":t.msvData.isLoading,"current-language":t.currentLanguage},null,8,["current-msv","yearly-limit","is-loading","current-language"])):Ie("",!0)]),f("button",{onClick:n[1]||(n[1]=r=>e.$emit("toggle-info-modal")),class:"info-button-global"},I(t.currentLanguage==="en"?"Information":"معلومات"),1)]))}},I2=Tt(T2,[["__scopeId","data-v-d06322cd"]]),S2={id:"app-container"},A2={class:"main-content"},P2={key:1,class:"loading-fullpage"},C2={__name:"App",setup(t){const e=on(),n=Di(),r=Se(localStorage.getItem("language")||"en"),s=Se(0),i=Se(20),o=Se(!1),l=h=>{r.value=h,localStorage.setItem("language",h),document.documentElement.lang=h,document.documentElement.dir=h==="ar"?"rtl":"ltr"},u=()=>{l(r.value==="en"?"ar":"en")},c=async()=>{if(console.log("Calculating the msv..."),!e.user?.uid||!e.role){s.value=0;return}const h=await n.fetchAllDosesForUser(e.user.uid,e.role);if(console.log("All doses:",JSON.parse(JSON.stringify(h))),h){const p=new Date(new Date().getFullYear(),0,1),m=x=>x?x.toDate?x.toDate():new Date(x):null,y=h.filter(x=>{const N=m(x.date);return N&&N>=p}).reduce((x,N)=>x+(N.dose||0),0);s.value=parseFloat(y.toFixed(3))}console.log("Finished Calculation")};return Nr("currentLanguage",r),Nr("currentMsv",s),Nr("doseLimit",i),Nr("triggerMsvRecalculation",c),tt(()=>e.userProfile,h=>{e.user&&h?c():e.user||(s.value=0)},{deep:!0,immediate:!0}),l(r.value),(h,p)=>(U(),G("div",S2,[Pe(I2,{"current-language":r.value,user:_(e).user,"msv-data":{current:s.value,limit:i.value,isLoading:_(n).loading},onToggleLanguage:u,onToggleInfoModal:p[0]||(p[0]=m=>o.value=!0)},null,8,["current-language","user","msv-data"]),f("main",A2,[_(e).isAuthReady?(U(),Bn(_(R_),{key:0})):(U(),G("div",P2,p[1]||(p[1]=[f("span",null,"Loading Application...",-1)])))])]))}},R2={class:"signup-page"},D2={class:"signup-main-content"},k2={class:"signup-card"},O2=["dir"],x2=["dir"],N2={class:"form-group"},V2=["dir"],M2=["placeholder","dir"],L2={class:"form-group"},$2=["dir"],F2=["placeholder","dir"],U2={class:"form-group"},B2=["dir"],j2=["placeholder","dir"],q2=["disabled"],H2={key:0},z2={key:1},W2=["dir"],G2=["dir"],K2=["disabled"],Y2=["dir"],X2={__name:"SignupView",setup(t){const e=Ns(),n=on(),r=Ue("currentLanguage"),s=Se(""),i=Se(""),o=Se(""),l=async()=>{if(i.value!==o.value){n.error=r.value==="en"?"Passwords do not match.":"كلمتا المرور غير متطابقتين.";return}await n.signupWithEmail("",s.value,i.value)},u=async()=>{await n.signInWithGoogle()?console.log("Successfully signed in with Google! Redirecting..."):console.error("Google sign-in failed:",n.error)},c=()=>{e.push("/signin")};return(h,p)=>(U(),G("div",R2,[f("main",D2,[f("section",k2,[f("h2",{dir:_(r)==="ar"?"rtl":"ltr"},I(_(r)==="en"?"Welcome! Please Sign Up":"أهلاً بك! يرجى التسجيل"),9,O2),f("p",{dir:_(r)==="ar"?"rtl":"ltr"},I(_(r)==="en"?"Create your account to get started.":"أنشئ حسابك للبدء."),9,x2),f("form",{onSubmit:rt(l,["prevent"]),class:"signup-form"},[f("div",N2,[f("label",{for:"email",dir:_(r)==="ar"?"rtl":"ltr"},I(_(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,V2),le(f("input",{type:"email",id:"email","onUpdate:modelValue":p[0]||(p[0]=m=>s.value=m),placeholder:_(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:_(r)==="ar"?"rtl":"ltr",required:""},null,8,M2),[[ve,s.value]])]),f("div",L2,[f("label",{for:"password",dir:_(r)==="ar"?"rtl":"ltr"},I(_(r)==="en"?"Password":"كلمة المرور"),9,$2),le(f("input",{type:"password",id:"password","onUpdate:modelValue":p[1]||(p[1]=m=>i.value=m),placeholder:_(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:_(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,F2),[[ve,i.value]])]),f("div",U2,[f("label",{for:"confirmPassword",dir:_(r)==="ar"?"rtl":"ltr"},I(_(r)==="en"?"Confirm Password":"تأكيد كلمة المرور"),9,B2),le(f("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":p[2]||(p[2]=m=>o.value=m),placeholder:_(r)==="en"?"Confirm your password":"أكد كلمة المرور",dir:_(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,j2),[[ve,o.value]])]),f("button",{class:"action-button primary",type:"submit",disabled:_(n).loading},[_(n).loading?(U(),G("span",H2,I(_(r)==="en"?"Signing Up...":"جاري التسجيل..."),1)):(U(),G("span",z2,I(_(r)==="en"?"Create Account":"إنشاء حساب"),1))],8,q2)],32),_(n).error?(U(),G("div",{key:0,class:"message error-message",dir:_(r)==="ar"?"rtl":"ltr"},I(_(n).error),9,W2)):Ie("",!0),f("div",{class:"divider",dir:_(r)==="ar"?"rtl":"ltr"},[f("span",null,I(_(r)==="en"?"OR":"أو"),1)],8,G2),f("button",{onClick:u,class:"action-button google-button",disabled:_(n).loading},[p[3]||(p[3]=h_('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a6c83a63><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-a6c83a63></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-a6c83a63></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-a6c83a63></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-a6c83a63></path></svg>',1)),f("span",null,I(_(r)==="en"?"Sign Up with Google":"التسجيل باستخدام جوجل"),1)],8,K2),f("p",{class:"switch-link-container",dir:_(r)==="ar"?"rtl":"ltr"},[yt(I(_(r)==="en"?"Already have an account?":"هل لديك حساب بالفعل؟")+" ",1),f("a",{href:"#",onClick:rt(c,["prevent"])},I(_(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,Y2)])])]))}},Q2=Tt(X2,[["__scopeId","data-v-a6c83a63"]]),J2={class:"login-page"},Z2={class:"login-main-content"},ek={class:"login-card"},tk=["dir"],nk=["dir"],rk={class:"form-group"},sk=["dir"],ik=["placeholder","dir"],ok={class:"form-group"},ak=["dir"],lk=["placeholder","dir"],ck=["dir"],uk=["disabled"],hk={key:0},dk={key:1},fk=["dir"],pk=["dir"],mk=["dir"],gk=["disabled"],yk=["dir"],_k={__name:"SigninView",setup(t){const e=Ns(),n=on(),r=Ue("currentLanguage"),s=Se(""),i=Se(""),o=async()=>{await n.signInWithEmail(s.value,i.value)},l=async()=>{await n.signInWithGoogle()},u=()=>{e.push("/")},c=()=>{e.push("/resetpassword")};return(h,p)=>(U(),G("div",J2,[f("main",Z2,[f("section",ek,[f("h2",{dir:_(r)==="ar"?"rtl":"ltr"},I(_(r)==="en"?"Welcome Back! Please Sign In":"أهلاً بعودتك! يرجى تسجيل الدخول"),9,tk),f("p",{dir:_(r)==="ar"?"rtl":"ltr"},I(_(r)==="en"?"Sign in to access your dashboard.":"سجّل الدخول للوصول إلى لوحة التحكم الخاصة بك."),9,nk),f("form",{onSubmit:rt(o,["prevent"]),class:"login-form"},[f("div",rk,[f("label",{for:"email",dir:_(r)==="ar"?"rtl":"ltr"},I(_(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,sk),le(f("input",{type:"email",id:"email","onUpdate:modelValue":p[0]||(p[0]=m=>s.value=m),placeholder:_(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:_(r)==="ar"?"rtl":"ltr",required:""},null,8,ik),[[ve,s.value]])]),f("div",ok,[f("label",{for:"password",dir:_(r)==="ar"?"rtl":"ltr"},I(_(r)==="en"?"Password":"كلمة المرور"),9,ak),le(f("input",{type:"password",id:"password","onUpdate:modelValue":p[1]||(p[1]=m=>i.value=m),placeholder:_(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:_(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,lk),[[ve,i.value]]),f("p",{class:"forgot-password-link",dir:_(r)==="ar"?"rtl":"ltr"},[f("a",{href:"#",onClick:rt(c,["prevent"])},I(_(r)==="en"?"Forgot your password?":"هل نسيت كلمة المرور؟"),1)],8,ck)]),f("button",{class:"action-button primary",type:"submit",disabled:_(n).loading},[_(n).loading?(U(),G("span",hk,I(_(r)==="en"?"Signing In...":"جاري تسجيل الدخول..."),1)):(U(),G("span",dk,I(_(r)==="en"?"Sign in":"تسجيل الدخول"),1))],8,uk)],32),_(n).error?(U(),G("div",{key:0,class:"message error-message",dir:_(r)==="ar"?"rtl":"ltr"},I(_(n).error),9,fk)):Ie("",!0),_(n).successMessage?(U(),G("div",{key:1,class:"message success-message",dir:_(r)==="ar"?"rtl":"ltr"},I(_(n).successMessage),9,pk)):Ie("",!0),f("div",{class:"divider",dir:_(r)==="ar"?"rtl":"ltr"},[f("span",null,I(_(r)==="en"?"OR":"أو"),1)],8,mk),f("button",{onClick:l,class:"action-button google-button",disabled:_(n).loading},[p[2]||(p[2]=h_('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3884b703><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-3884b703></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-3884b703></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-3884b703></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-3884b703></path></svg>',1)),f("span",null,I(_(r)==="en"?"Sign in with Google":"تسجيل الدخول باستخدام جوجل"),1)],8,gk),f("p",{class:"switch-link-container",dir:_(r)==="ar"?"rtl":"ltr"},[yt(I(_(r)==="en"?"Don't have an account?":"ليس لديك حساب؟")+" ",1),f("a",{href:"#",onClick:rt(u,["prevent"])},I(_(r)==="en"?"Sign Up":"التسجيل"),1)],8,yk)])])]))}},vk=Tt(_k,[["__scopeId","data-v-3884b703"]]),bk=["dir"],wk={class:"recommend-main-content"},Ek={class:"recommend-card"},Tk={class:"mode-switcher"},Ik={key:0,class:"loading-overlay"},Sk={key:1,class:"patient-info-display"},Ak={class:"form-group"},Pk=["disabled"],Ck={class:"form-group"},Rk=["disabled"],Dk={class:"form-group"},kk=["disabled"],Ok={value:"male"},xk={value:"female"},Nk={key:0,class:"pregnancy-section"},Vk={class:"form-group checkbox-group"},Mk=["disabled"],Lk={key:0,class:"form-group"},$k=["disabled"],Fk={class:"form-group"},Uk=["disabled"],Bk={class:"form-group"},jk={key:1,class:"doctor-exposure-section"},qk={class:"section-title"},Hk={class:"form-group"},zk={class:"section-title"},Wk={class:"form-group"},Gk={disabled:"",value:""},Kk=["value"],Yk={key:2,class:"form-group"},Xk={class:"form-row"},Qk={class:"form-group"},Jk={value:"CT"},Zk={value:"X-ray"},eO={class:"form-group"},tO={disabled:"",value:""},nO=["value"],rO={key:3,class:"form-group"},sO=["placeholder"],iO=["disabled"],oO={key:2,class:"message error-message"},aO={key:3,class:"prediction-result-wrapper"},lO={key:0,class:"message warning-message"},cO={class:"prediction-result"},uO={class:"msv-details-container"},hO={key:0,class:"msv-details"},dO={key:1,class:"msv-details doctor-dose"},fO={class:"result-text"},pO={class:"save-recommendation-section"},mO=["disabled"],gO={class:"save-note"},yO={class:"switch-link-container"},_O={__name:"RecommendView",setup(t){Recom;const e=Ns(),n=WT(),r=on(),s=Di(),i=Ue("currentLanguage"),o=Ue("currentMsv"),l=Ue("doseLimit"),u=Ue("triggerMsvRecalculation"),c={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},h=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],p={patient:{CT:{"Abdomen & Pelvis":14,"Brain with contrast":2,"Angiography CTA":12,Urography:8,Enterography:8,default:6},"X-ray":{"Barium Enema":7,"IV Urogram (IVP)":2.5,HSG:1.5,VCUG:1,default:.5}},doctor:{CT:{default:.113},"X-ray":{"Barium Enema":.1,"IV Urogram (IVP)":.05,HSG:.2,VCUG:.15,default:5e-5}}},m=Se("personal"),y=Se({patientId:null,patientName:"",birthDate:"",gender:"male",weight:null,patientCumulativeDose:0,medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",scanType:"CT",scanPlace:"",otherScanPlaceDescription:"",subScanType:"",otherScanDescription:"",numberOfScans:1,doctorAdditionalContext:""}),x=Se(!1),N=Se(!1),k=Se(!1),v=Se(null),b=Se(""),V=Re(()=>r.role),$=Re(()=>V.value==="doctor"&&m.value==="personal"),z=Re(()=>c[y.value.scanType]||[]),Y=Re(()=>y.value.subScanType==="Other"),A=Re(()=>y.value.scanPlace==="other"),E=Re(()=>m.value==="personal"?i.value==="en"?"Your Estimated Dose":"جرعتك المقدرة":i.value==="en"?"Patient Dose":"جرعة المريض"),T=Re(()=>i.value==="en"?"Occupational Dose":"الجرعة المهنية"),P=Re(()=>!v.value||v.value.doctorOccupationalMsv==null?!1:!(V.value==="doctor"&&m.value==="personal")),O=()=>{y.value={patientId:null,patientName:"",birthDate:"",gender:"male",weight:null,patientCumulativeDose:0,medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",scanType:"CT",scanPlace:"",otherScanPlaceDescription:"",subScanType:"",otherScanDescription:"",numberOfScans:1,doctorAdditionalContext:""}},R=Z=>Z?(typeof Z.toDate=="function"?Z.toDate():new Date(Z)).toISOString().split("T")[0]:"",S=async Z=>{if(Z){k.value=!0,O();try{let W=Z===r.user?.uid?r.userProfile:await s.fetchSinglePatient(Z);if(W){y.value.patientId=Z,y.value.patientName=W.displayName||W.name||"",y.value.birthDate=R(W.birthDate),y.value.weight=W.weight||null,y.value.gender=W.gender||"male",y.value.isPregnant=W.isPregnant||!1,y.value.estimatedDueDate=R(W.estimatedDueDate),y.value.medicalHistory=Array.isArray(W.medicalHistory)?W.medicalHistory.join(", "):"",y.value.allergies=Array.isArray(W.allergies)?W.allergies.join(", "):"";const he=await s.fetchScansForPatient(Z);if(he){const lt=new Date(new Date().getFullYear(),0,1),it=Ne=>Ne?Ne.toDate?Ne.toDate():new Date(Ne):null,He=he.filter(Ne=>it(Ne.scanDate)>=lt);y.value.patientCumulativeDose=parseFloat(He.reduce((Ne,qt)=>Ne+(qt.patientDose||0),0).toFixed(3))}}}catch(W){console.error("Error fetching patient details:",W),b.value=i.value==="en"?"Failed to load patient data.":"فشل في تحميل بيانات المريض."}finally{k.value=!1}}};tt(m,Z=>{v.value=null,Z==="personal"&&r.user?S(r.user.uid):n.query.patientId||O()}),tt(()=>n.query.patientId,Z=>{Z?(m.value="general",S(Z)):r.user&&(m.value="personal",S(r.user.uid))},{immediate:!0}),tt(()=>y.value.isPregnant,Z=>{Z||(y.value.estimatedDueDate="")}),tt(()=>y.value.scanType,()=>{y.value.subScanType="",y.value.otherScanDescription="",y.value.numberOfScans=1});const Ve=Z=>{try{const W=y.value.subScanType==="Other"?"default":y.value.subScanType,lt=p[Z][y.value.scanType];if(!lt)return null;let it=lt[W]??lt.default;return it===void 0?null:y.value.scanType==="X-ray"?it*y.value.numberOfScans:it}catch(W){return console.error("Error retrieving fallback dose:",W),null}},Te=async()=>{if(x.value=!0,b.value="",v.value=null,!y.value.birthDate||!y.value.scanPlace||A.value&&!y.value.otherScanPlaceDescription||!y.value.subScanType||Y.value&&!y.value.otherScanDescription){b.value=i.value==="en"?"Please complete all required fields.":"يرجى إكمال جميع الحقول المطلوبة.",x.value=!1;return}if(y.value.isPregnant&&!y.value.estimatedDueDate){b.value=i.value==="en"?"Estimated Due Date is required for pregnant patients.":"تاريخ الولادة المتوقع مطلوب للحامل.",x.value=!1;return}const Z=new Date().getFullYear()-new Date(y.value.birthDate).getFullYear(),W=y.value.weight?`Weight: ${y.value.weight} kg.`:"Weight: Not provided.";let he="Not pregnant.";y.value.isPregnant&&y.value.estimatedDueDate&&(he=`Pregnant with an estimated due date of ${y.value.estimatedDueDate}. The AI must carefully weigh risks, especially during the first trimester.`);const lt=Y.value?y.value.otherScanDescription:y.value.subScanType,it=h.find(gt=>gt.value===y.value.scanPlace);let He="";A.value?He=y.value.otherScanPlaceDescription:it&&(He=i.value==="en"?it.en:it.ar);let Ne="";y.value.scanType==="X-ray"&&y.value.numberOfScans>1?Ne=`
        The scan being considered is a procedure involving ${y.value.numberOfScans} separate X-ray scans of the ${He} with protocol "${lt}".
        To calculate the dose:
        1. First, determine the typical effective dose for a SINGLE one of these X-rays.
        2. Then, multiply that single-scan dose by the number of scans (${y.value.numberOfScans}) to get the TOTAL dose.
        The final 'patientCalculatedMsv' must be the result of this multiplication.
      `:Ne=`The scan being considered is a single ${y.value.scanType} of the ${He} with protocol "${lt}".`;let qt="",Yt={};V.value==="doctor"?($.value?qt=`
As a medical radiation safety advisor, provide a recommendation for a doctor who is also the patient.
- Scenario Context: The doctor IS THE PATIENT.
- Doctor's State: My annual occupational dose is ${o.value.toFixed(2)} mSv. The annual limit is ${l.value} mSv.
- Patient Details (My Details): Age: ${Z}, Gender: ${y.value.gender}. ${W}. Pregnancy Status: ${he}. My cumulative dose this year: ${y.value.patientCumulativeDose} mSv.
- Scan Details: ${Ne}
- My Exposure Context: ${y.value.doctorAdditionalContext||"No additional context provided."}
Tasks:
1. **Recommendation (recommendationText):** Justify if the scan is appropriate for me.
2. **Patient Dose (patientCalculatedMsv):** Estimate my total effective dose in mSv from this procedure.
3. **Occupational Dose (doctorOccupationalMsv):** This MUST be 0 because I am the patient.
4. **Warning (Warning):** Warn if my new total dose (occupational + patient) exceeds any limits.
Respond ONLY with valid JSON in ${i.value==="en"?"English":"Arabic"}.`:qt=`
As a medical radiation safety advisor, provide a recommendation for a patient scan, adhering strictly to the ALARA principle.
- Scenario Context: A doctor is the PRACTITIONER for another patient.
- Doctor's State: The doctor's annual occupational dose is ${o.value.toFixed(2)} mSv. The annual limit is ${l.value} mSv.
- Patient Details: Age: ${Z}, Gender: ${y.value.gender}. ${W}. Pregnancy Status: ${he}. Patient's cumulative dose this year: ${y.value.patientCumulativeDose} mSv.
- Scan Details: ${Ne}
- Doctor's Exposure Context: ${y.value.doctorAdditionalContext||"No additional context provided."}
Tasks:
1. **Recommendation (recommendationText):** Justify if the scan is appropriate for the patient.
2. **Patient Dose (patientCalculatedMsv):** Estimate the patient's total effective dose in mSv from this procedure.
3. **Occupational Dose (doctorOccupationalMsv):** Estimate the doctor's total occupational dose in mSv from performing this procedure. For multiple X-rays, calculate this the same way as the patient dose (single scan * number of scans).
4. **Warning (Warning):** Warn if the patient's new total dose will exceed the public limit, OR if the doctor's new occupational dose exceeds their limit.
Respond ONLY with valid JSON in ${i.value==="en"?"English":"Arabic"}.`,Yt={type:"OBJECT",properties:{recommendationText:{type:"STRING"},patientCalculatedMsv:{type:"NUMBER"},doctorOccupationalMsv:{type:"NUMBER"},Warning:{type:"STRING"}},required:["recommendationText","patientCalculatedMsv","doctorOccupationalMsv","Warning"]}):(qt=`
As a patient advocate, explain a medical scan.
- My estimated radiation dose this year: ${y.value.patientCumulativeDose} mSv.
- My Details: Born on ${y.value.birthDate}, Gender: ${y.value.gender}, ${W}, Pregnancy: ${he}.
- Scan Details: ${Ne}
Tasks:
1. **Information (recommendationText):** Explain the purpose of this scan in simple terms.
2. **Dose Estimation (patientCalculatedMsv):** Estimate my total dose in mSv from this procedure.
3. **Warning (Warning):** If my new total dose exceeds 1 mSv, provide a clear warning.
Respond ONLY with valid JSON in ${i.value==="en"?"English":"Arabic"}.`,Yt={type:"OBJECT",properties:{recommendationText:{type:"STRING"},patientCalculatedMsv:{type:"NUMBER"},Warning:{type:"STRING"}},required:["recommendationText","patientCalculatedMsv","Warning"]});try{const re=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:qt}]}],generationConfig:{responseMimeType:"application/json",responseSchema:Yt}})});if(!re.ok)throw new Error(`API Error: ${re.statusText}`);const ue=await re.json();v.value=JSON.parse(ue.candidates[0].content.parts[0].text)}catch(gt){console.warn("AI recommendation failed. Attempting fallback. Error:",gt);const B=Ve("patient");let ae=0;V.value==="doctor"&&!$.value&&(ae=Ve("doctor")),B!==null&&ae!==null?v.value={recommendationText:i.value==="en"?"The AI recommendation could not be generated. The typical dose for this procedure is shown above. Please use your clinical judgment to decide if this scan is appropriate.":"تعذر إنشاء توصية الذكاء الاصطناعي. الجرعة النموذجية لهذا الإجراء معروضة أعلاه. يرجى استخدام حكمك السريري لتقرير ما إذا كان هذا الفحص مناسبًا.",patientCalculatedMsv:B,doctorOccupationalMsv:ae,Warning:i.value==="en"?"AI service failed. Using predefined typical dose values. Please review carefully as these are general estimates.":"فشلت خدمة الذكاء الاصطناعي. يتم استخدام قيم الجرعات النموذجية المحددة مسبقًا. يرجى المراجعة بعناية لأنها تقديرات عامة."}:b.value=i.value==="en"?"An error occurred and no fallback value is available. Please try again later.":"حدث خطأ ولا توجد قيمة بديلة متاحة. الرجاء معاودة المحاولة في وقت لاحق."}finally{x.value=!1}},de=async()=>{if(!v.value||!y.value.patientId){alert("No recommendation data to save or patient ID is missing.");return}N.value=!0;try{const Z=y.value.scanPlace==="other"?y.value.otherScanPlaceDescription:y.value.scanPlace,W=y.value.subScanType==="Other"?y.value.otherScanDescription:y.value.subScanType,he={patientId:y.value.patientId,scanType:y.value.scanType,scanPlace:Z,scanDetail:W,numberOfScans:y.value.numberOfScans,scanDate:Oe.now(),patientDose:Number(v.value.patientCalculatedMsv)||0,doctorDose:Number(v.value.doctorOccupationalMsv)||0,reason:y.value.currentSymptoms||"As per AI recommendation",notes:v.value.recommendationText,isPersonalScan:m.value==="personal"};if(await s.createScan(he))alert(i.value==="en"?"Scan record saved successfully!":"!تم حفظ سجل الفحص بنجاح"),u&&u(),v.value=null;else throw new Error(s.error)}catch(Z){console.error("Error saving scan from recommendation:",Z),alert(i.value==="en"?`Failed to save scan: ${Z.message}`:`فشل حفظ الفحص: ${Z.message}`)}finally{N.value=!1}};return(Z,W)=>(U(),G("div",{class:"recommend-page",dir:_(i)==="ar"?"rtl":"ltr"},[f("main",wk,[f("section",Ek,[f("h2",null,I(_(i)==="en"?"Medical Scan Recommendation":"توصية الفحص الطبي"),1),f("p",null,I(_(i)==="en"?"Get an AI-powered recommendation based on patient details and radiation safety principles.":"احصل على توصية مدعومة بالذكاء الاصطناعي بناءً على تفاصيل المريض ومبادئ السلامة من الإشعاع."),1),f("div",Tk,[f("button",{class:Ts({active:m.value==="personal"}),onClick:W[0]||(W[0]=he=>m.value="personal")},I(_(i)==="en"?"For Myself":"لنفسي"),3),V.value==="doctor"?(U(),G("button",{key:0,class:Ts({active:m.value==="general"}),onClick:W[1]||(W[1]=he=>m.value="general")},I(_(i)==="en"?"For Another Patient":"لمريض آخر"),3)):Ie("",!0)]),k.value?(U(),G("div",Ik,[f("span",null,I(_(i)==="en"?"Loading Patient Data...":"جاري تحميل بيانات المريض..."),1)])):Ie("",!0),y.value.patientId&&y.value.patientName?(U(),G("div",Sk,[yt(I(_(i)==="en"?"Getting recommendation for:":"الحصول على توصية لـ:")+" ",1),f("strong",null,I(y.value.patientName),1),yt(" ("+I(y.value.weight?`${y.value.weight} kg`:"Weight N/A")+") ",1)])):Ie("",!0),f("form",{onSubmit:rt(Te,["prevent"]),class:"recommend-form"},[f("div",Ak,[f("label",null,I(_(i)==="en"?"Weight (kg)":"الوزن (كجم)"),1),le(f("input",{type:"number",step:"0.1","onUpdate:modelValue":W[2]||(W[2]=he=>y.value.weight=he),disabled:m.value==="personal",placeholder:"e.g. 70.5"},null,8,Pk),[[ve,y.value.weight]])]),f("div",Ck,[f("label",null,[yt(I(_(i)==="en"?"Date of Birth":"تاريخ الميلاد")+" ",1),W[16]||(W[16]=f("span",{class:"required-indicator"},"*",-1))]),le(f("input",{type:"date","onUpdate:modelValue":W[3]||(W[3]=he=>y.value.birthDate=he),disabled:m.value==="personal",required:""},null,8,Rk),[[ve,y.value.birthDate]])]),f("div",Dk,[f("label",null,[yt(I(_(i)==="en"?"Gender":"الجنس")+" ",1),W[17]||(W[17]=f("span",{class:"required-indicator"},"*",-1))]),le(f("select",{"onUpdate:modelValue":W[4]||(W[4]=he=>y.value.gender=he),disabled:m.value==="personal",required:""},[f("option",Ok,I(_(i)==="en"?"Male":"ذكر"),1),f("option",xk,I(_(i)==="en"?"Female":"أنثى"),1)],8,kk),[[wt,y.value.gender]])]),y.value.gender==="female"?(U(),G("div",Nk,[f("div",Vk,[f("label",null,[le(f("input",{type:"checkbox","onUpdate:modelValue":W[5]||(W[5]=he=>y.value.isPregnant=he),disabled:m.value==="personal"},null,8,Mk),[[Xl,y.value.isPregnant]]),f("span",null,I(_(i)==="en"?"Is Pregnant?":"هل هي حامل؟"),1)])]),y.value.isPregnant?(U(),G("div",Lk,[f("label",null,[yt(I(_(i)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع")+" ",1),W[18]||(W[18]=f("span",{class:"required-indicator"},"*",-1))]),le(f("input",{type:"date","onUpdate:modelValue":W[6]||(W[6]=he=>y.value.estimatedDueDate=he),disabled:m.value==="personal",required:""},null,8,$k),[[ve,y.value.estimatedDueDate]])])):Ie("",!0)])):Ie("",!0),f("div",Fk,[f("label",null,I(_(i)==="en"?"Relevant Medical History":"التاريخ الطبي ذو الصلة"),1),le(f("textarea",{"onUpdate:modelValue":W[7]||(W[7]=he=>y.value.medicalHistory=he),rows:"3",disabled:m.value==="personal"},null,8,Uk),[[ve,y.value.medicalHistory]])]),f("div",Bk,[f("label",null,I(_(i)==="en"?"Current Symptoms":"الأعراض الحالية"),1),le(f("textarea",{"onUpdate:modelValue":W[8]||(W[8]=he=>y.value.currentSymptoms=he),rows:"3"},null,512),[[ve,y.value.currentSymptoms]])]),V.value==="doctor"&&m.value==="general"?(U(),G("div",jk,[f("h3",qk,I(_(i)==="en"?"Occupational Exposure Context":"سياق التعرض المهني"),1),f("div",Hk,[f("label",null,I(_(i)==="en"?"Your positioning, shielding, etc. (Optional)":"موقعك، التدريع المستخدم، إلخ (اختياري)"),1),le(f("textarea",{"onUpdate:modelValue":W[9]||(W[9]=he=>y.value.doctorAdditionalContext=he),rows:"3"},null,512),[[ve,y.value.doctorAdditionalContext]])])])):Ie("",!0),f("h3",zk,I(_(i)==="en"?"Scan to Consider":"الفحص المقترح"),1),f("div",Wk,[f("label",null,[yt(I(_(i)==="en"?"Place of Scan":"مكان الفحص")+" ",1),W[19]||(W[19]=f("span",{class:"required-indicator"},"*",-1))]),le(f("select",{"onUpdate:modelValue":W[10]||(W[10]=he=>y.value.scanPlace=he),required:""},[f("option",Gk,I(_(i)==="en"?"Select...":"اختر..."),1),(U(),G(et,null,pn(h,he=>f("option",{key:he.value,value:he.value},I(_(i)==="en"?he.en:he.ar),9,Kk)),64))],512),[[wt,y.value.scanPlace]])]),A.value?(U(),G("div",Yk,[f("label",null,[yt(I(_(i)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر")+" ",1),W[20]||(W[20]=f("span",{class:"required-indicator"},"*",-1))]),le(f("input",{type:"text","onUpdate:modelValue":W[11]||(W[11]=he=>y.value.otherScanPlaceDescription=he),required:""},null,512),[[ve,y.value.otherScanPlaceDescription]])])):Ie("",!0),f("div",Xk,[f("div",Qk,[f("label",null,[yt(I(_(i)==="en"?"Scan Category":"فئة الفحص")+" ",1),W[21]||(W[21]=f("span",{class:"required-indicator"},"*",-1))]),le(f("select",{"onUpdate:modelValue":W[12]||(W[12]=he=>y.value.scanType=he),required:""},[f("option",Jk,I(_(i)==="en"?"CT Scan":"الأشعة المقطعية"),1),f("option",Zk,I(_(i)==="en"?"X-ray":"الأشعة السينية"),1)],512),[[wt,y.value.scanType]])]),f("div",eO,[f("label",null,[yt(I(_(i)==="en"?"Scan Protocol":"بروتوكول الفحص")+" ",1),W[22]||(W[22]=f("span",{class:"required-indicator"},"*",-1))]),le(f("select",{"onUpdate:modelValue":W[13]||(W[13]=he=>y.value.subScanType=he),required:""},[f("option",tO,I(_(i)==="en"?"Select...":"اختر..."),1),(U(!0),G(et,null,pn(z.value,he=>(U(),G("option",{key:he.value,value:he.value},I(_(i)==="en"?he.en:he.ar),9,nO))),128))],512),[[wt,y.value.subScanType]])])]),Y.value?(U(),G("div",rO,[f("label",null,[yt(I(_(i)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص")+" ",1),W[23]||(W[23]=f("span",{class:"required-indicator"},"*",-1))]),le(f("input",{type:"text","onUpdate:modelValue":W[14]||(W[14]=he=>y.value.otherScanDescription=he),placeholder:_(i)==="en"?"e.g., Chest X-ray":"مثال: أشعة سينية للصدر",required:""},null,8,sO),[[ve,y.value.otherScanDescription]])])):Ie("",!0),f("button",{type:"submit",disabled:x.value,class:"action-button"},I(x.value?_(i)==="en"?"Getting Recommendations...":"جاري الحصول على التوصيات...":_(i)==="en"?"Get Recommendation":"الحصول على توصية"),9,iO)],32),b.value?(U(),G("div",oO,I(b.value),1)):Ie("",!0),v.value?(U(),G("div",aO,[v.value.Warning?(U(),G("div",lO,[f("h4",null,I(_(i)==="en"?"Important Warning":"تحذير هام"),1),f("p",null,I(v.value.Warning),1)])):Ie("",!0),f("div",cO,[f("h3",null,I(_(i)==="en"?"AI Powered Recommendation":"التوصية المدعومة بالذكاء الاصطناعي"),1),f("div",uO,[v.value.patientCalculatedMsv!==null?(U(),G("div",hO,[f("h4",null,I(E.value),1),f("p",null,[f("strong",null,I(v.value.patientCalculatedMsv)+" mSv",1)])])):Ie("",!0),P.value?(U(),G("div",dO,[f("h4",null,I(T.value),1),f("p",null,[f("strong",null,I(v.value.doctorOccupationalMsv)+" mSv",1)])])):Ie("",!0)]),f("div",fO,[f("h4",null,I(_(i)==="en"?"Recommendation":"التوصية"),1),f("p",null,I(v.value.recommendationText),1)])]),f("div",pO,[f("button",{onClick:de,disabled:N.value,class:"action-button save-button"},I(N.value?_(i)==="en"?"Saving...":"...جاري الحفظ":_(i)==="en"?"Save Recommendation as Scan":"حفظ التوصية كفحص"),9,mO),f("p",gO,I(_(i)==="en"?"This will create a new scan record with today's date using the estimated doses.":"سيؤدي هذا إلى إنشاء سجل فحص جديد بتاريخ اليوم باستخدام الجرعات المقدرة."),1)])])):Ie("",!0),f("p",yO,[f("a",{href:"#",onClick:W[15]||(W[15]=rt(he=>_(e).push("/dashboard"),["prevent"]))},I(_(i)==="en"?"Back to Dashboard":"العودة إلى لوحة التحكم"),1)])])])],8,bk))}},vO=Tt(_O,[["__scopeId","data-v-a1120468"]]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function bO(t,e,n){return(e=EO(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Cg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cg(Object(n),!0).forEach(function(r){bO(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function wO(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function EO(t){var e=wO(t,"string");return typeof e=="symbol"?e:e+""}const Rg=()=>{};let Hd={},cb={},ub=null,hb={mark:Rg,measure:Rg};try{typeof window<"u"&&(Hd=window),typeof document<"u"&&(cb=document),typeof MutationObserver<"u"&&(ub=MutationObserver),typeof performance<"u"&&(hb=performance)}catch{}const{userAgent:Dg=""}=Hd.navigator||{},Zr=Hd,nt=cb,kg=ub,Ua=hb;Zr.document;const mr=!!nt.documentElement&&!!nt.head&&typeof nt.addEventListener=="function"&&typeof nt.createElement=="function",db=~Dg.indexOf("MSIE")||~Dg.indexOf("Trident/");var TO=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,IO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,fb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},SO={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},pb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],jt="classic",Ec="duotone",AO="sharp",PO="sharp-duotone",mb=[jt,Ec,AO,PO],CO={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},RO={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},DO=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),kO={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},OO=["fak","fa-kit","fakd","fa-kit-duotone"],Og={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},xO=["kit"],NO={kit:{"fa-kit":"fak"}},VO=["fak","fakd"],MO={kit:{fak:"fa-kit"}},xg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ba={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},LO=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],$O=["fak","fa-kit","fakd","fa-kit-duotone"],FO={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},UO={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},BO={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},uh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},jO=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],hh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...LO,...jO],qO=["solid","regular","light","thin","duotone","brands"],gb=[1,2,3,4,5,6,7,8,9,10],HO=gb.concat([11,12,13,14,15,16,17,18,19,20]),zO=[...Object.keys(BO),...qO,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ba.GROUP,Ba.SWAP_OPACITY,Ba.PRIMARY,Ba.SECONDARY].concat(gb.map(t=>"".concat(t,"x"))).concat(HO.map(t=>"w-".concat(t))),WO={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ur="___FONT_AWESOME___",dh=16,yb="fa",_b="svg-inline--fa",Ds="data-fa-i2svg",fh="data-fa-pseudo-element",GO="data-fa-pseudo-element-pending",zd="data-prefix",Wd="data-icon",Ng="fontawesome-i2svg",KO="async",YO=["HTML","HEAD","STYLE","SCRIPT"],vb=(()=>{try{return!0}catch{return!1}})();function ca(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[jt]}})}const bb=J({},fb);bb[jt]=J(J(J(J({},{"fa-duotone":"duotone"}),fb[jt]),Og.kit),Og["kit-duotone"]);const XO=ca(bb),ph=J({},kO);ph[jt]=J(J(J(J({},{duotone:"fad"}),ph[jt]),xg.kit),xg["kit-duotone"]);const Vg=ca(ph),mh=J({},uh);mh[jt]=J(J({},mh[jt]),MO.kit);const Gd=ca(mh),gh=J({},UO);gh[jt]=J(J({},gh[jt]),NO.kit);ca(gh);const QO=TO,wb="fa-layers-text",JO=IO,ZO=J({},CO);ca(ZO);const ex=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mu=SO,tx=[...xO,...zO],wo=Zr.FontAwesomeConfig||{};function nx(t){var e=nt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function rx(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}nt&&typeof nt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=rx(nx(n));s!=null&&(wo[r]=s)});const Eb={styleDefault:"solid",familyDefault:jt,cssPrefix:yb,replacementClass:_b,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wo.familyPrefix&&(wo.cssPrefix=wo.familyPrefix);const bi=J(J({},Eb),wo);bi.autoReplaceSvg||(bi.observeMutations=!1);const pe={};Object.keys(Eb).forEach(t=>{Object.defineProperty(pe,t,{enumerable:!0,set:function(e){bi[t]=e,Eo.forEach(n=>n(pe))},get:function(){return bi[t]}})});Object.defineProperty(pe,"familyPrefix",{enumerable:!0,set:function(t){bi.cssPrefix=t,Eo.forEach(e=>e(pe))},get:function(){return bi.cssPrefix}});Zr.FontAwesomeConfig=pe;const Eo=[];function sx(t){return Eo.push(t),()=>{Eo.splice(Eo.indexOf(t),1)}}const Ir=dh,Dn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ix(t){if(!t||!mr)return;const e=nt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=nt.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return nt.head.insertBefore(e,r),t}const ox="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function jo(){let t=12,e="";for(;t-- >0;)e+=ox[Math.random()*62|0];return e}function ki(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Kd(t){return t.classList?ki(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Tb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ax(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Tb(t[n]),'" '),"").trim()}function Tc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Yd(t){return t.size!==Dn.size||t.x!==Dn.x||t.y!==Dn.y||t.rotate!==Dn.rotate||t.flipX||t.flipY}function lx(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:u,path:c}}function cx(t){let{transform:e,width:n=dh,height:r=dh,startCentered:s=!1}=t,i="";return s&&db?i+="translate(".concat(e.x/Ir-n/2,"em, ").concat(e.y/Ir-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Ir,"em), calc(-50% + ").concat(e.y/Ir,"em)) "):i+="translate(".concat(e.x/Ir,"em, ").concat(e.y/Ir,"em) "),i+="scale(".concat(e.size/Ir*(e.flipX?-1:1),", ").concat(e.size/Ir*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var ux=`:root, :host {
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
}`;function Ib(){const t=yb,e=_b,n=pe.cssPrefix,r=pe.replacementClass;let s=ux;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return s}let Mg=!1;function gu(){pe.autoAddCss&&!Mg&&(ix(Ib()),Mg=!0)}var hx={mixout(){return{dom:{css:Ib,insertCss:gu}}},hooks(){return{beforeDOMElementCreation(){gu()},beforeI2svg(){gu()}}}};const hr=Zr||{};hr[ur]||(hr[ur]={});hr[ur].styles||(hr[ur].styles={});hr[ur].hooks||(hr[ur].hooks={});hr[ur].shims||(hr[ur].shims=[]);var kn=hr[ur];const Sb=[],Ab=function(){nt.removeEventListener("DOMContentLoaded",Ab),xl=1,Sb.map(t=>t())};let xl=!1;mr&&(xl=(nt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(nt.readyState),xl||nt.addEventListener("DOMContentLoaded",Ab));function dx(t){mr&&(xl?setTimeout(t,0):Sb.push(t))}function ua(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Tb(t):"<".concat(e," ").concat(ax(n),">").concat(r.map(ua).join(""),"</").concat(e,">")}function Lg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yu=function(e,n,r,s){var i=Object.keys(e),o=i.length,l=n,u,c,h;for(r===void 0?(u=1,h=e[i[0]]):(u=0,h=r);u<o;u++)c=i[u],h=l(h,e[c],c,e);return h};function fx(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function yh(t){const e=fx(t);return e.length===1?e[0].toString(16):null}function px(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function $g(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function _h(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=$g(e);typeof kn.hooks.addPack=="function"&&!r?kn.hooks.addPack(t,$g(e)):kn.styles[t]=J(J({},kn.styles[t]||{}),s),t==="fas"&&_h("fa",e)}const{styles:qo,shims:mx}=kn,Pb=Object.keys(Gd),gx=Pb.reduce((t,e)=>(t[e]=Object.keys(Gd[e]),t),{});let Xd=null,Cb={},Rb={},Db={},kb={},Ob={};function yx(t){return~tx.indexOf(t)}function _x(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!yx(s)?s:null}const xb=()=>{const t=r=>yu(qo,(s,i,o)=>(s[o]=yu(i,r,{}),s),{});Cb=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=i}),r)),Rb=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=i}),r)),Ob=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(l=>{r[l]=i}),r});const e="far"in qo||pe.autoFetchSvg,n=yu(mx,(r,s)=>{const i=s[0];let o=s[1];const l=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});Db=n.names,kb=n.unicodes,Xd=Ic(pe.styleDefault,{family:pe.familyDefault})};sx(t=>{Xd=Ic(t.styleDefault,{family:pe.familyDefault})});xb();function Qd(t,e){return(Cb[t]||{})[e]}function vx(t,e){return(Rb[t]||{})[e]}function vs(t,e){return(Ob[t]||{})[e]}function Nb(t){return Db[t]||{prefix:null,iconName:null}}function bx(t){const e=kb[t],n=Qd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function es(){return Xd}const Vb=()=>({prefix:null,iconName:null,rest:[]});function wx(t){let e=jt;const n=Pb.reduce((r,s)=>(r[s]="".concat(pe.cssPrefix,"-").concat(s),r),{});return mb.forEach(r=>{(t.includes(n[r])||t.some(s=>gx[r].includes(s)))&&(e=r)}),e}function Ic(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=jt}=e,r=XO[n][t];if(n===Ec&&!t)return"fad";const s=Vg[n][t]||Vg[n][r],i=t in kn.styles?t:null;return s||i||null}function Ex(t){let e=[],n=null;return t.forEach(r=>{const s=_x(pe.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Fg(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Sc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=hh.concat($O),i=Fg(t.filter(p=>s.includes(p))),o=Fg(t.filter(p=>!hh.includes(p))),l=i.filter(p=>(r=p,!pb.includes(p))),[u=null]=l,c=wx(i),h=J(J({},Ex(o)),{},{prefix:Ic(u,{family:c})});return J(J(J({},h),Ax({values:t,family:c,styles:qo,config:pe,canonical:h,givenPrefix:r})),Tx(n,r,h))}function Tx(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?Nb(s):{},o=vs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!qo.far&&qo.fas&&!pe.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const Ix=mb.filter(t=>t!==jt||t!==Ec),Sx=Object.keys(uh).filter(t=>t!==jt).map(t=>Object.keys(uh[t])).flat();function Ax(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,l=n===Ec,u=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(u||c||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Ix.includes(n)&&(Object.keys(i).find(m=>Sx.includes(m))||o.autoFetchSvg)){const m=DO.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=vs(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=es()||"fas"),r}class Px{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=J(J({},this.definitions[i]||{}),s[i]),_h(i,s[i]);const o=Gd[jt][i];o&&_h(o,s[i]),xb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:l}=r[s],u=l[2];e[i]||(e[i]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[i][c]=l)}),e[i][o]=l}),e}}let Ug=[],Zs={};const li={},Cx=Object.keys(li);function Rx(t,e){let{mixoutsTo:n}=e;return Ug=t,Zs={},Object.keys(li).forEach(r=>{Cx.indexOf(r)===-1&&delete li[r]}),Ug.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Zs[o]||(Zs[o]=[]),Zs[o].push(i[o])})}r.provides&&r.provides(li)}),n}function vh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Zs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function ks(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Zs[t]||[]).forEach(i=>{i.apply(null,n)})}function ts(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return li[t]?li[t].apply(null,e):void 0}function bh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||es();if(e)return e=vs(n,e)||e,Lg(Mb.definitions,n,e)||Lg(kn.styles,n,e)}const Mb=new Px,Dx=()=>{pe.autoReplaceSvg=!1,pe.observeMutations=!1,ks("noAuto")},kx={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(ks("beforeI2svg",t),ts("pseudoElements2svg",t),ts("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;pe.autoReplaceSvg===!1&&(pe.autoReplaceSvg=!0),pe.observeMutations=!0,dx(()=>{xx({autoReplaceSvgRoot:e}),ks("watch",t)})}},Ox={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vs(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ic(t[0]);return{prefix:n,iconName:vs(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(pe.cssPrefix,"-"))>-1||t.match(QO))){const e=Sc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||es(),iconName:vs(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=es();return{prefix:e,iconName:vs(e,t)||t}}}},an={noAuto:Dx,config:pe,dom:kx,parse:Ox,library:Mb,findIconDefinition:bh,toHtml:ua},xx=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=nt}=t;(Object.keys(kn.styles).length>0||pe.autoFetchSvg)&&mr&&pe.autoReplaceSvg&&an.dom.i2svg({node:e})};function Ac(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ua(n))}}),Object.defineProperty(t,"node",{get:function(){if(!mr)return;const n=nt.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Nx(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Yd(o)&&n.found&&!r.found){const{width:l,height:u}=n,c={x:l/u/2,y:.5};s.style=Tc(J(J({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function Vx(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(pe.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:J(J({},s),{},{id:o}),children:r}]}]}function Jd(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:l,maskId:u,titleId:c,extra:h,watchable:p=!1}=t,{width:m,height:y}=n.found?n:e,x=VO.includes(r),N=[pe.replacementClass,s?"".concat(pe.cssPrefix,"-").concat(s):""].filter(z=>h.classes.indexOf(z)===-1).filter(z=>z!==""||!!z).concat(h.classes).join(" ");let k={children:[],attributes:J(J({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:N,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(y)})};const v=x&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/y*16*.0625,"em")}:{};p&&(k.attributes[Ds]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||jo())},children:[l]}),delete k.attributes.title);const b=J(J({},k),{},{prefix:r,iconName:s,main:e,mask:n,maskId:u,transform:i,symbol:o,styles:J(J({},v),h.styles)}),{children:V,attributes:$}=n.found&&e.found?ts("generateAbstractMask",b)||{children:[],attributes:{}}:ts("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=V,b.attributes=$,o?Vx(b):Nx(b)}function Bg(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:l=!1}=t,u=J(J(J({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[Ds]="");const c=J({},o.styles);Yd(s)&&(c.transform=cx({transform:s,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const h=Tc(c);h.length>0&&(u.style=h);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Mx(t){const{content:e,title:n,extra:r}=t,s=J(J(J({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Tc(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:_u}=kn;function wh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(pe.cssPrefix,"-").concat(mu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(pe.cssPrefix,"-").concat(mu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(pe.cssPrefix,"-").concat(mu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const Lx={found:!1,width:512,height:512};function $x(t,e){!vb&&!pe.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Eh(t,e){let n=e;return e==="fa"&&pe.styleDefault!==null&&(e=es()),new Promise((r,s)=>{if(n==="fa"){const i=Nb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&_u[e]&&_u[e][t]){const i=_u[e][t];return r(wh(i))}$x(t,e),r(J(J({},Lx),{},{icon:pe.showMissingIcons&&t?ts("missingIconAbstract")||{}:{}}))})}const jg=()=>{},Th=pe.measurePerformance&&Ua&&Ua.mark&&Ua.measure?Ua:{mark:jg,measure:jg},no='FA "6.7.2"',Fx=t=>(Th.mark("".concat(no," ").concat(t," begins")),()=>Lb(t)),Lb=t=>{Th.mark("".concat(no," ").concat(t," ends")),Th.measure("".concat(no," ").concat(t),"".concat(no," ").concat(t," begins"),"".concat(no," ").concat(t," ends"))};var Zd={begin:Fx,end:Lb};const nl=()=>{};function qg(t){return typeof(t.getAttribute?t.getAttribute(Ds):null)=="string"}function Ux(t){const e=t.getAttribute?t.getAttribute(zd):null,n=t.getAttribute?t.getAttribute(Wd):null;return e&&n}function Bx(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(pe.replacementClass)}function jx(){return pe.autoReplaceSvg===!0?rl.replace:rl[pe.autoReplaceSvg]||rl.replace}function qx(t){return nt.createElementNS("http://www.w3.org/2000/svg",t)}function Hx(t){return nt.createElement(t)}function $b(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?qx:Hx}=e;if(typeof t=="string")return nt.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild($b(i,{ceFn:n}))}),r}function zx(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const rl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore($b(n),e)}),e.getAttribute(Ds)===null&&pe.keepOriginalSource){let n=nt.createComment(zx(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Kd(e).indexOf(pe.replacementClass))return rl.replace(t);const r=new RegExp("".concat(pe.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===pe.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>ua(i)).join(`
`);e.setAttribute(Ds,""),e.innerHTML=s}};function Hg(t){t()}function Fb(t,e){const n=typeof e=="function"?e:nl;if(t.length===0)n();else{let r=Hg;pe.mutateApproach===KO&&(r=Zr.requestAnimationFrame||Hg),r(()=>{const s=jx(),i=Zd.begin("mutate");t.map(s),i(),n()})}}let ef=!1;function Ub(){ef=!0}function Ih(){ef=!1}let Nl=null;function zg(t){if(!kg||!pe.observeMutations)return;const{treeCallback:e=nl,nodeCallback:n=nl,pseudoElementsCallback:r=nl,observeMutationsRoot:s=nt}=t;Nl=new kg(i=>{if(ef)return;const o=es();ki(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!qg(l.addedNodes[0])&&(pe.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&pe.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&qg(l.target)&&~ex.indexOf(l.attributeName))if(l.attributeName==="class"&&Ux(l.target)){const{prefix:u,iconName:c}=Sc(Kd(l.target));l.target.setAttribute(zd,u||o),c&&l.target.setAttribute(Wd,c)}else Bx(l.target)&&n(l.target)})}),mr&&Nl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Wx(){Nl&&Nl.disconnect()}function Gx(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Kx(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Sc(Kd(t));return s.prefix||(s.prefix=es()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=vx(s.prefix,t.innerText)||Qd(s.prefix,yh(t.innerText))),!s.iconName&&pe.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function Yx(t){const e=ki(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return pe.autoA11y&&(n?e["aria-labelledby"]="".concat(pe.replacementClass,"-title-").concat(r||jo()):(e["aria-hidden"]="true",e.focusable="false")),e}function Xx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Dn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=Kx(t),i=Yx(t),o=vh("parseNodeAttributes",{},t);let l=e.styleParser?Gx(t):[];return J({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Dn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:i}},o)}const{styles:Qx}=kn;function Bb(t){const e=pe.autoReplaceSvg==="nest"?Wg(t,{styleParser:!1}):Wg(t);return~e.extra.classes.indexOf(wb)?ts("generateLayersText",t,e):ts("generateSvgReplacementMutation",t,e)}function Jx(){return[...OO,...hh]}function Gg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();const n=nt.documentElement.classList,r=h=>n.add("".concat(Ng,"-").concat(h)),s=h=>n.remove("".concat(Ng,"-").concat(h)),i=pe.autoFetchSvg?Jx():pb.concat(Object.keys(Qx));i.includes("fa")||i.push("fa");const o=[".".concat(wb,":not([").concat(Ds,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Ds,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=ki(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();const u=Zd.begin("onTree"),c=l.reduce((h,p)=>{try{const m=Bb(p);m&&h.push(m)}catch(m){vb||m.name==="MissingIcon"&&console.error(m)}return h},[]);return new Promise((h,p)=>{Promise.all(c).then(m=>{Fb(m,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),u(),h()})}).catch(m=>{u(),p(m)})})}function Zx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bb(t).then(n=>{n&&Fb([n],e)})}function eN(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:bh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:bh(s||{})),t(r,J(J({},n),{},{mask:s}))}}const tN=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Dn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:l=null,classes:u=[],attributes:c={},styles:h={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:y}=t;return Ac(J({type:"icon"},t),()=>(ks("beforeDOMElementCreation",{iconDefinition:t,params:e}),pe.autoA11y&&(o?c["aria-labelledby"]="".concat(pe.replacementClass,"-title-").concat(l||jo()):(c["aria-hidden"]="true",c.focusable="false")),Jd({icons:{main:wh(y),mask:s?wh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:J(J({},Dn),n),symbol:r,title:o,maskId:i,titleId:l,extra:{attributes:c,styles:h,classes:u}})))};var nN={mixout(){return{icon:eN(tN)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Gg,t.nodeCallback=Zx,t}}},provides(t){t.i2svg=function(e){const{node:n=nt,callback:r=()=>{}}=e;return Gg(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:l,symbol:u,mask:c,maskId:h,extra:p}=n;return new Promise((m,y)=>{Promise.all([Eh(r,o),c.iconName?Eh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[N,k]=x;m([e,Jd({icons:{main:N,mask:k},prefix:o,iconName:r,transform:l,symbol:u,maskId:h,title:s,titleId:i,extra:p,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const l=Tc(o);l.length>0&&(r.style=l);let u;return Yd(i)&&(u=ts("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(u||s.icon),{children:n,attributes:r}}}},rN={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ac({type:"layer"},()=>{ks("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(pe.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},sN={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Ac({type:"counter",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),Mx({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(pe.cssPrefix,"-layers-counter"),...r]}})))}}}},iN={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Dn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Ac({type:"text",content:t},()=>(ks("beforeDOMElementCreation",{content:t,params:e}),Bg({content:t,transform:J(J({},Dn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(pe.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,l=null;if(db){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,l=c.height/u}return pe.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Bg({content:e.innerHTML,width:o,height:l,transform:s,title:r,extra:i,watchable:!0})])}}};const oN=new RegExp('"',"ug"),Kg=[1105920,1112319],Yg=J(J(J(J({},{FontAwesome:{normal:"fas",400:"fas"}}),RO),WO),FO),Sh=Object.keys(Yg).reduce((t,e)=>(t[e.toLowerCase()]=Yg[e],t),{}),aN=Object.keys(Sh).reduce((t,e)=>{const n=Sh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function lN(t){const e=t.replace(oN,""),n=px(e,0),r=n>=Kg[0]&&n<=Kg[1],s=e.length===2?e[0]===e[1]:!1;return{value:yh(s?e[0]:e),isSecondary:r||s}}function cN(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Sh[n]||{})[s]||aN[n]}function Xg(t,e){const n="".concat(GO).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=ki(t.children).filter(m=>m.getAttribute(fh)===e)[0],l=Zr.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(JO),h=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let y=cN(u,h);const{value:x,isSecondary:N}=lN(m),k=c[0].startsWith("FontAwesome");let v=Qd(y,x),b=v;if(k){const V=bx(x);V.iconName&&V.prefix&&(v=V.iconName,y=V.prefix)}if(v&&!N&&(!o||o.getAttribute(zd)!==y||o.getAttribute(Wd)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);const V=Xx(),{extra:$}=V;$.attributes[fh]=e,Eh(v,y).then(z=>{const Y=Jd(J(J({},V),{},{icons:{main:z,mask:Vb()},prefix:y,iconName:b,extra:$,watchable:!0})),A=nt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(A,t.firstChild):t.appendChild(A),A.outerHTML=Y.map(E=>ua(E)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function uN(t){return Promise.all([Xg(t,"::before"),Xg(t,"::after")])}function hN(t){return t.parentNode!==document.head&&!~YO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Qg(t){if(mr)return new Promise((e,n)=>{const r=ki(t.querySelectorAll("*")).filter(hN).map(uN),s=Zd.begin("searchPseudoElements");Ub(),Promise.all(r).then(()=>{s(),Ih(),e()}).catch(()=>{s(),Ih(),n()})})}var dN={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Qg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=nt}=e;pe.searchPseudoElements&&Qg(n)}}};let Jg=!1;var fN={mixout(){return{dom:{unwatch(){Ub(),Jg=!0}}}},hooks(){return{bootstrap(){zg(vh("mutationObserverCallbacks",{}))},noAuto(){Wx()},watch(t){const{observeMutationsRoot:e}=t;Jg?Ih():zg(vh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Zg=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var pN={mixout(){return{parse:{transform:t=>Zg(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Zg(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:h,path:p};return{tag:"g",attributes:J({},m.outer),children:[{tag:"g",attributes:J({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:J(J({},n.icon.attributes),m.path)}]}]}}}};const vu={x:0,y:0,width:"100%",height:"100%"};function ey(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function mN(t){return t.tag==="g"?t.children:[t]}var gN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Sc(n.split(" ").map(s=>s.trim())):Vb();return r.prefix||(r.prefix=es()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:l}=e;const{width:u,icon:c}=s,{width:h,icon:p}=i,m=lx({transform:l,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:J(J({},vu),{},{fill:"white"})},x=c.children?{children:c.children.map(ey)}:{},N={tag:"g",attributes:J({},m.inner),children:[ey(J({tag:c.tag,attributes:J(J({},c.attributes),m.path)},x))]},k={tag:"g",attributes:J({},m.outer),children:[N]},v="mask-".concat(o||jo()),b="clip-".concat(o||jo()),V={tag:"mask",attributes:J(J({},vu),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,k]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:mN(p)},V]};return n.push($,{tag:"rect",attributes:J({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(v,")")},vu)}),{children:n,attributes:r}}}},yN={provides(t){let e=!1;Zr.matchMedia&&(e=Zr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:J(J({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=J(J({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:J(J({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:J(J({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:J(J({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:J(J({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:J(J({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:J(J({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:J(J({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},_N={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},vN=[hx,nN,rN,sN,iN,dN,fN,pN,gN,yN,_N];Rx(vN,{mixoutsTo:an});an.noAuto;an.config;const bN=an.library;an.dom;const Ah=an.parse;an.findIconDefinition;an.toHtml;const wN=an.icon;an.layer;an.text;an.counter;function ty(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Jn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ty(Object(n),!0).forEach(function(r){Xt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ty(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function EN(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function TN(t){var e=EN(t,"string");return typeof e=="symbol"?e:e+""}function Vl(t){"@babel/helpers - typeof";return Vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vl(t)}function Xt(t,e,n){return e=TN(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function IN(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function SN(t,e){if(t==null)return{};var n=IN(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var AN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jb={exports:{}};(function(t){(function(e){var n=function(v,b,V){if(!c(b)||p(b)||m(b)||y(b)||u(b))return b;var $,z=0,Y=0;if(h(b))for($=[],Y=b.length;z<Y;z++)$.push(n(v,b[z],V));else{$={};for(var A in b)Object.prototype.hasOwnProperty.call(b,A)&&($[v(A,V)]=n(v,b[A],V))}return $},r=function(v,b){b=b||{};var V=b.separator||"_",$=b.split||/(?=[A-Z])/;return v.split($).join(V)},s=function(v){return x(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(b,V){return V?V.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var b=s(v);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(v,b){return r(v,b).toLowerCase()},l=Object.prototype.toString,u=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},h=function(v){return l.call(v)=="[object Array]"},p=function(v){return l.call(v)=="[object Date]"},m=function(v){return l.call(v)=="[object RegExp]"},y=function(v){return l.call(v)=="[object Boolean]"},x=function(v){return v=v-0,v===v},N=function(v,b){var V=b&&"process"in b?b.process:b;return typeof V!="function"?v:function($,z){return V($,v,z)}},k={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,b){return n(N(s,b),v)},decamelizeKeys:function(v,b){return n(N(o,b),v,b)},pascalizeKeys:function(v,b){return n(N(i,b),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=k:e.humps=k})(AN)})(jb);var PN=jb.exports,CN=["class","style"];function RN(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=PN.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function DN(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function qb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return qb(u)}),s=Object.keys(t.attributes||{}).reduce(function(u,c){var h=t.attributes[c];switch(c){case"class":u.class=DN(h);break;case"style":u.style=RN(h);break;default:u.attrs[c]=h}return u},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=SN(n,CN);return ci(t.tag,Jn(Jn(Jn({},e),{},{class:s.class,style:Jn(Jn({},s.style),o)},s.attrs),l),r)}var Hb=!1;try{Hb=!0}catch{}function kN(){if(!Hb&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function bu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Xt({},t,e):{}}function ON(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Xt(Xt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ny(t){if(t&&Vl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ah.icon)return Ah.icon(t);if(t===null)return null;if(Vl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var bt=jh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Re(function(){return ny(e.icon)}),i=Re(function(){return bu("classes",ON(e))}),o=Re(function(){return bu("transform",typeof e.transform=="string"?Ah.transform(e.transform):e.transform)}),l=Re(function(){return bu("mask",ny(e.mask))}),u=Re(function(){return wN(s.value,Jn(Jn(Jn(Jn({},i.value),o.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});tt(u,function(h){if(!h)return kN("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var c=Re(function(){return u.value?qb(u.value.abstract[0],{},r):null});return function(){return c.value}}});const xN=["dir"],NN={class:"modal-title"},VN={class:"form-group"},MN={class:"form-group"},LN={class:"form-group"},$N={class:"form-group"},FN={value:"male"},UN={value:"female"},BN={key:0,class:"pregnancy-section"},jN={class:"form-group checkbox-group"},qN={key:0,class:"form-group"},HN={class:"form-group"},zN={class:"form-group"},WN={class:"modal-actions"},GN=["disabled"],KN={__name:"PatientFormModal",props:{show:Boolean,patient:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Ue("currentLanguage"),i=Un({id:null,name:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""});tt(()=>n.show,l=>{l&&(n.patient?(i.id=n.patient.id,i.name=n.patient.name,i.gender=n.patient.gender,i.weight=n.patient.weight||null,i.isPregnant=n.patient.isPregnant||!1,i.birthDate=n.patient.birthDate?.toDate?n.patient.birthDate.toDate().toISOString().split("T")[0]:"",i.estimatedDueDate=n.patient.estimatedDueDate?.toDate?n.patient.estimatedDueDate.toDate().toISOString().split("T")[0]:"",i.medicalHistory=Array.isArray(n.patient.medicalHistory)?n.patient.medicalHistory.join(", "):"",i.allergies=Array.isArray(n.patient.allergies)?n.patient.allergies.join(", "):""):Object.assign(i,{id:null,name:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""}))},{immediate:!0}),tt(()=>i.isPregnant,l=>{l||(i.estimatedDueDate="")});const o=()=>{if(!i.name||!i.birthDate){alert("Name and Date of Birth are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Please provide the estimated due date for the pregnancy.");return}(i.gender==="male"||!i.isPregnant)&&(i.isPregnant=!1,i.estimatedDueDate=null);const l={...i,weight:Number(i.weight)||null,birthDate:new Date(i.birthDate),estimatedDueDate:i.estimatedDueDate?new Date(i.estimatedDueDate):null,medicalHistory:i.medicalHistory.split(",").map(u=>u.trim()).filter(Boolean),allergies:i.allergies.split(",").map(u=>u.trim()).filter(Boolean)};r("save",l)};return(l,u)=>(U(),Bn(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(U(),G("div",{key:0,class:"modal-overlay",onClick:u[10]||(u[10]=rt(c=>l.$emit("close"),["self"]))},[f("div",{class:"modal-content",dir:_(s)==="ar"?"rtl":"ltr"},[f("button",{onClick:u[0]||(u[0]=c=>l.$emit("close")),class:"close-button"},"×"),f("h3",NN,I(t.patient?"Edit Patient":"Add New Patient"),1),f("form",{onSubmit:rt(o,["prevent"]),class:"patient-form"},[f("div",VN,[f("label",null,I(_(s)==="en"?"Name":"الاسم"),1),le(f("input",{type:"text","onUpdate:modelValue":u[1]||(u[1]=c=>i.name=c),required:""},null,512),[[ve,i.name]])]),f("div",MN,[f("label",null,I(_(s)==="en"?"Weight (kg)":"الوزن (كجم)"),1),le(f("input",{type:"number",step:"0.1","onUpdate:modelValue":u[2]||(u[2]=c=>i.weight=c),placeholder:"e.g., 70.5"},null,512),[[ve,i.weight]])]),f("div",LN,[f("label",null,I(_(s)==="en"?"Date of Birth":"تاريخ الميلاد"),1),le(f("input",{type:"date","onUpdate:modelValue":u[3]||(u[3]=c=>i.birthDate=c),required:""},null,512),[[ve,i.birthDate]])]),f("div",$N,[f("label",null,I(_(s)==="en"?"Gender":"الجنس"),1),le(f("select",{"onUpdate:modelValue":u[4]||(u[4]=c=>i.gender=c)},[f("option",FN,I(_(s)==="en"?"Male":"ذكر"),1),f("option",UN,I(_(s)==="en"?"Female":"أنثى"),1)],512),[[wt,i.gender]])]),i.gender==="female"?(U(),G("div",BN,[f("div",jN,[f("label",null,[le(f("input",{type:"checkbox","onUpdate:modelValue":u[5]||(u[5]=c=>i.isPregnant=c)},null,512),[[Xl,i.isPregnant]]),f("span",null,I(_(s)==="en"?"Currently Pregnant?":"هل هي حامل حاليًا؟"),1)])]),i.isPregnant?(U(),G("div",qN,[f("label",null,I(_(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),le(f("input",{type:"date","onUpdate:modelValue":u[6]||(u[6]=c=>i.estimatedDueDate=c),required:""},null,512),[[ve,i.estimatedDueDate]])])):Ie("",!0)])):Ie("",!0),f("div",HN,[f("label",null,I(_(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي"),1),le(f("textarea",{"onUpdate:modelValue":u[7]||(u[7]=c=>i.medicalHistory=c),rows:"3"},null,512),[[ve,i.medicalHistory]])]),f("div",zN,[f("label",null,I(_(s)==="en"?"Allergies (comma-separated)":"الحساسية"),1),le(f("textarea",{"onUpdate:modelValue":u[8]||(u[8]=c=>i.allergies=c),rows:"3"},null,512),[[ve,i.allergies]])]),f("div",WN,[f("button",{type:"submit",class:"action-button",disabled:t.isSaving},I(t.isSaving?"Saving...":"Save"),9,GN),f("button",{type:"button",onClick:u[9]||(u[9]=c=>l.$emit("close")),class:"action-button secondary"}," Cancel ")])],32)],8,xN)])):Ie("",!0)]),_:1}))}},YN=Tt(KN,[["__scopeId","data-v-8459b92e"]]),XN=["dir"],QN={key:0,class:"patient-context-display"},JN={key:0,class:"form-row pregnancy-section"},ZN={class:"form-group checkbox-group"},eV={key:0,class:"form-group"},tV={class:"form-group"},nV={disabled:"",value:""},rV=["value"],sV={key:1,class:"form-group"},iV={class:"form-row"},oV={class:"form-group"},aV={value:"X-ray"},lV={value:"CT"},cV={class:"form-group"},uV={disabled:"",value:""},hV=["value"],dV={key:2,class:"form-group"},fV=["placeholder"],pV={key:3,class:"form-group"},mV={class:"form-group"},gV={class:"form-row"},yV={class:"form-group"},_V=["placeholder"],vV={class:"form-group"},bV=["placeholder"],wV={class:"form-group"},EV={class:"form-group"},TV={class:"form-group"},IV={class:"modal-actions"},SV=["disabled"],AV={__name:"ScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean,patient:{type:Object,default:null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Ue("currentLanguage"),i={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},o=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],l={patient:{CT:{"Abdomen & Pelvis":14,"Brain with contrast":2,"Angiography CTA":12,Urography:8,Enterography:8,default:6},"X-ray":{"Barium Enema":7,"IV Urogram (IVP)":2.5,HSG:1.5,VCUG:1,default:.5}},doctor:{CT:{default:.113},"X-ray":{"Barium Enema":.1,"IV Urogram (IVP)":.05,HSG:.2,VCUG:.15,default:5e-5}}},u=()=>new Date().toISOString().split("T")[0],c=Un({id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:u(),patientDose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""}),h=Re(()=>i[c.scanType]||[]),p=Re(()=>c.subScanType==="Other"),m=Re(()=>c.scanPlace==="other");tt(()=>n.show,k=>{if(k&&(Object.assign(c,{id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:u(),patientDose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""}),n.scan)){c.id=n.scan.id,c.isPregnant=n.scan.isPregnant||!1,c.pregnancyMonth=n.scan.pregnancyMonth||null,c.scanType=n.scan.scanType;const v=n.scan.scanDate?.toDate?n.scan.scanDate.toDate():new Date(n.scan.scanDate);c.scanDate=isNaN(v)?u():v.toISOString().split("T")[0],c.patientDose=n.scan.patientDose,c.doctorDose=n.scan.doctorDose,c.reason=n.scan.reason,c.notes=n.scan.notes,c.doctorAdditionalContext=n.scan.doctorAdditionalContext,c.numberOfScans=n.scan.numberOfScans||1;const b=n.scan.scanDetail;(h.value||[]).some(Y=>Y.value===b)?c.subScanType=b:b&&(c.subScanType="Other",c.otherScanDescription=b);const $=n.scan.scanPlace;o.some(Y=>Y.value===$)?c.scanPlace=$:$&&(c.scanPlace="other",c.otherScanPlaceDescription=$)}}),tt(()=>c.scanType,(k,v)=>{k!==v&&(c.subScanType="",c.otherScanDescription="")});const y=k=>{try{const v=c.subScanType==="Other"?"default":c.subScanType,V=l[k][c.scanType];if(!V)return null;let $=V[v]??V.default;return $===void 0?null:c.scanType==="X-ray"?$*c.numberOfScans:$}catch(v){return console.error("Error retrieving fallback dose:",v),null}},x=async k=>{if(!n.patient)return alert("Cannot estimate dose without a patient context."),!1;const v=n.patient.birthDate?new Date().getFullYear()-new Date(n.patient.birthDate.toDate()).getFullYear():"N/A",b=n.patient.weight||70;let V=p.value?c.otherScanDescription:c.subScanType,$=m.value?c.otherScanPlaceDescription:c.scanPlace,z="";k==="patient"?c.scanType==="X-ray"&&c.numberOfScans>1?z=`
              Task: Calculate the TOTAL effective dose in mSv for a patient from a procedure involving multiple X-rays.
              Step 1: First, determine the typical effective dose for a SINGLE X-ray of the ${$} with protocol "${V}".
              Step 2: Multiply that single-scan dose by the number of scans, which is ${c.numberOfScans}.
              Patient Context: Age: ${v}, Weight: ${b} kg. Reason for scan: "${c.reason||"Not provided"}".
              Respond ONLY with the final numeric value from Step 2. Do not show your work or include units.
            `:z=`Estimate the typical effective dose (in mSv) for a patient undergoing a single ${c.scanType} scan of the ${$} with protocol "${V}". Patient Age: ${v}. Patient Weight: ${b} kg. Reason for scan: "${c.reason||"Not provided"}". Respond ONLY with a single number.`:c.scanType==="X-ray"&&c.numberOfScans>1?z=`
              Task: Calculate the TOTAL occupational dose in mSv for a doctor from a procedure involving multiple X-rays.
              Step 1: First, determine the typical occupational dose for a SINGLE X-ray of the ${$} with protocol "${V}".
              Step 2: Multiply that single-scan dose by the number of scans, which is ${c.numberOfScans}.
              Doctor's Context: "${c.doctorAdditionalContext||"None"}".
              Respond ONLY with the final numeric value from Step 2. Do not show your work or include units.
            `:z=`Estimate the typical occupational dose (in mSv) for a doctor during a single patient's ${c.scanType} scan of the ${$} with protocol "${V}". Doctor's additional context: "${c.doctorAdditionalContext||"None"}". Respond ONLY with a single number.`;try{let Y=k==="patient"?c.scanType==="CT"?{min:.5,max:40}:{min:.001,max:10}:{min:0,max:.5};const P=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:z}]}],generationConfig:{responseMimeType:"text/plain"}})});if(!P.ok)throw new Error(`API Error: ${P.statusText}`);const R=(await P.json()).candidates?.[0]?.content?.parts?.[0]?.text||"",S=parseFloat(R.match(/[\d.]+/));if(isNaN(S)||S<Y.min||S>Y.max)throw new Error(`AI returned an invalid or out-of-range value. Got: ${S}`);return k==="patient"?c.patientDose=S:c.doctorDose=S,!0}catch(Y){console.warn(`AI dose estimation failed for ${k}. Attempting fallback. Error:`,Y);const A=y(k);return A!==null?(k==="patient"?c.patientDose=A:c.doctorDose=A,alert(s.value==="en"?`AI estimation failed. A typical value of ${A.toFixed(5)} mSv has been used for the ${k}. You can review and adjust this value.`:`فشل تقدير الذكاء الاصطناعي. تم استخدام قيمة نموذجية تبلغ ${A.toFixed(5)} ملي سيفرت لـ ${k==="patient"?"المريض":"الطبيب"}. يمكنك مراجعة هذه القيمة وتعديلها.`),!0):(alert(s.value==="en"?`AI estimation for the ${k} failed and no fallback value is available. Please enter the dose manually.`:`فشل تقدير الذكاء الاصطناعي لجرعة ${k==="patient"?"المريض":"الطبيب"} ولا توجد قيمة بديلة. يرجى إدخالها يدويًا.`),!1)}},N=async()=>{if(!c.scanDate||!c.scanPlace||m.value&&!c.otherScanPlaceDescription||!c.subScanType||p.value&&!c.otherScanDescription){alert("Please fill all required scan details.");return}if(c.scanType==="X-ray"&&(c.numberOfScans===null||c.numberOfScans<1)){alert(s.value==="en"?"Number of scans must be at least 1 for X-ray.":"عدد الفحوصات لأشعة إكس يجب أن يكون 1 على الأقل.");return}if((c.patientDose===null||c.patientDose==="")&&!await x("patient")||(c.doctorDose===null||c.doctorDose==="")&&!await x("doctor"))return;if(!c.scanDate||!/^\d{4}-\d{2}-\d{2}$/.test(c.scanDate)){alert("Invalid date format. Please select a valid date.");return}const k=c.scanDate.split("-"),v=new Date(Date.UTC(k[0],parseInt(k[1],10)-1,parseInt(k[2],10),12,0,0)),b={id:c.id,isPregnant:c.isPregnant,pregnancyMonth:c.pregnancyMonth,scanType:c.scanType,scanDetail:c.subScanType==="Other"?c.otherScanDescription:c.subScanType,scanPlace:c.scanPlace==="other"?c.otherScanPlaceDescription:c.scanPlace,numberOfScans:c.scanType==="X-ray"?Number(c.numberOfScans):1,scanDate:Oe.fromDate(v),patientDose:c.patientDose,doctorDose:c.doctorDose,reason:c.reason,notes:c.notes,doctorAdditionalContext:c.doctorAdditionalContext};r("save",b)};return(k,v)=>(U(),Bn(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(U(),G("div",{key:0,class:"modal-overlay",onClick:v[16]||(v[16]=rt(b=>k.$emit("close"),["self"]))},[f("div",{class:"modal-content",dir:_(s)==="ar"?"rtl":"ltr"},[f("button",{class:"close-modal-button",onClick:v[0]||(v[0]=b=>k.$emit("close"))},"×"),f("h3",null,I(t.scan?_(s)==="en"?"Edit Scan Record":"تعديل سجل الفحص":_(s)==="en"?"Add New Scan Record":"إضافة سجل فحص جديد"),1),t.patient?(U(),G("div",QN,[yt(I(_(s)==="en"?"For Patient":"للمريض")+": ",1),f("strong",null,I(t.patient.name)+" ("+I(t.patient.weight?`${t.patient.weight} kg`:"Weight N/A")+")",1)])):Ie("",!0),f("form",{onSubmit:rt(N,["prevent"]),class:"scan-form"},[t.patient?.gender==="female"?(U(),G("div",JN,[f("div",ZN,[f("label",null,[le(f("input",{type:"checkbox","onUpdate:modelValue":v[1]||(v[1]=b=>c.isPregnant=b)},null,512),[[Xl,c.isPregnant]]),f("span",null,I(_(s)==="en"?"Is Pregnant?":"هل المريضة حامل؟"),1)])]),c.isPregnant?(U(),G("div",eV,[f("label",null,I(_(s)==="en"?"Month of Pregnancy":"شهر الحمل"),1),le(f("input",{type:"number","onUpdate:modelValue":v[2]||(v[2]=b=>c.pregnancyMonth=b),min:"1",max:"9",placeholder:"1-9"},null,512),[[ve,c.pregnancyMonth,void 0,{number:!0}]])])):Ie("",!0)])):Ie("",!0),f("div",tV,[f("label",null,I(_(s)==="en"?"Place of Scan":"مكان الفحص"),1),le(f("select",{"onUpdate:modelValue":v[3]||(v[3]=b=>c.scanPlace=b),required:""},[f("option",nV,I(_(s)==="en"?"Select...":"اختر..."),1),(U(),G(et,null,pn(o,b=>f("option",{key:b.value,value:b.value},I(_(s)==="en"?b.en:b.ar),9,rV)),64))],512),[[wt,c.scanPlace]])]),m.value?(U(),G("div",sV,[f("label",null,I(_(s)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر"),1),le(f("input",{type:"text","onUpdate:modelValue":v[4]||(v[4]=b=>c.otherScanPlaceDescription=b),required:""},null,512),[[ve,c.otherScanPlaceDescription]])])):Ie("",!0),f("div",iV,[f("div",oV,[f("label",null,I(_(s)==="en"?"Scan Category":"فئة الفحص"),1),le(f("select",{"onUpdate:modelValue":v[5]||(v[5]=b=>c.scanType=b),required:""},[f("option",aV,I(_(s)==="en"?"X-ray":"أشعة سينية"),1),f("option",lV,I(_(s)==="en"?"CT":"أشعة مقطعية"),1)],512),[[wt,c.scanType]])]),f("div",cV,[f("label",null,I(_(s)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),le(f("select",{"onUpdate:modelValue":v[6]||(v[6]=b=>c.subScanType=b),required:""},[f("option",uV,I(_(s)==="en"?"Select...":"اختر..."),1),(U(!0),G(et,null,pn(h.value,b=>(U(),G("option",{key:b.value,value:b.value},I(_(s)==="en"?b.en:b.ar),9,hV))),128))],512),[[wt,c.subScanType]])])]),p.value?(U(),G("div",dV,[f("label",null,I(_(s)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص"),1),le(f("input",{type:"text","onUpdate:modelValue":v[7]||(v[7]=b=>c.otherScanDescription=b),placeholder:_(s)==="en"?"e.g., Chest X-ray":"مثال: أشعة سينية للصدر",required:""},null,8,fV),[[ve,c.otherScanDescription]])])):Ie("",!0),c.scanType==="X-ray"?(U(),G("div",pV,[f("label",null,I(_(s)==="en"?"Number of Scans":"عدد الفحوصات"),1),le(f("input",{type:"number","onUpdate:modelValue":v[8]||(v[8]=b=>c.numberOfScans=b),min:"1",required:""},null,512),[[ve,c.numberOfScans,void 0,{number:!0}]])])):Ie("",!0),f("div",mV,[f("label",null,I(_(s)==="en"?"Scan Date":"تاريخ الفحص"),1),le(f("input",{type:"date","onUpdate:modelValue":v[9]||(v[9]=b=>c.scanDate=b),required:""},null,512),[[ve,c.scanDate]])]),f("div",gV,[f("div",yV,[f("label",null,I(_(s)==="en"?"Patient's Dose (mSv)":"جرعة المريض (mSv)"),1),le(f("input",{type:"number",step:"0.0001","onUpdate:modelValue":v[10]||(v[10]=b=>c.patientDose=b),placeholder:_(s)==="en"?"Leave blank for AI estimate":"اتركه فارغًا لتقدير الذكاء الاصطناعي"},null,8,_V),[[ve,c.patientDose,void 0,{number:!0}]])]),f("div",vV,[f("label",null,I(_(s)==="en"?"Doctor's Dose (mSv)":"جرعة الطبيب (mSv)"),1),le(f("input",{type:"number",step:"0.0001","onUpdate:modelValue":v[11]||(v[11]=b=>c.doctorDose=b),placeholder:_(s)==="en"?"Leave blank for AI estimate":"اتركه فارغًا لتقدير الذكاء الاصطناعي"},null,8,bV),[[ve,c.doctorDose,void 0,{number:!0}]])])]),f("div",wV,[f("label",null,I(_(s)==="en"?"Reason for Scan":"أسباب الفحص"),1),le(f("textarea",{"onUpdate:modelValue":v[12]||(v[12]=b=>c.reason=b),rows:"2"},null,512),[[ve,c.reason]])]),f("div",EV,[f("label",null,I(_(s)==="en"?"Additional Notes":"ملاحظات إضافية"),1),le(f("textarea",{"onUpdate:modelValue":v[13]||(v[13]=b=>c.notes=b),rows:"3"},null,512),[[ve,c.notes]])]),f("div",TV,[f("label",null,I(_(s)==="en"?"Details affecting your exposure (optional)":"تفاصيل إضافية على تعرضك (اختياري)"),1),le(f("textarea",{"onUpdate:modelValue":v[14]||(v[14]=b=>c.doctorAdditionalContext=b),rows:"2"},null,512),[[ve,c.doctorAdditionalContext]])]),f("div",IV,[f("button",{type:"submit",class:"action-button",disabled:t.isSaving},I(t.isSaving?_(s)==="en"?"Saving...":"جار الحفظ...":_(s)==="en"?"Save":"حفظ"),9,SV),f("button",{type:"button",onClick:v[15]||(v[15]=b=>k.$emit("close")),class:"action-button secondary"},I(_(s)==="en"?"Cancel":"إلغاء"),1)])],32)],8,XN)])):Ie("",!0)]),_:1}))}},PV=Tt(AV,[["__scopeId","data-v-4483d78e"]]),CV={class:"modal-content delete-confirm-modal"},RV={class:"modal-title"},DV={class:"warning-text"},kV={class:"modal-actions"},OV={__name:"ConfirmDeleteModal",props:{show:Boolean,title:String,message:String},emits:["close","confirm"],setup(t){const e=Ue("triggerMsvRecalculation"),n=Ue("currentLanguage");return(r,s)=>(U(),Bn(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(U(),G("div",{key:0,class:"modal-overlay",onClick:s[2]||(s[2]=rt(i=>r.$emit("close"),["self"]))},[f("div",CV,[f("h3",RV,I(t.title),1),f("p",null,I(t.message),1),f("p",DV,I(_(n)==="en"?"This action cannot be undone.":"لا يمكن التراجع عن هذا الإجراء."),1),f("div",kV,[f("button",{onClick:s[0]||(s[0]=i=>r.$emit("close")),class:"action-button secondary"},I(_(n)==="en"?"Cancel":"إلغاء"),1),f("button",{onClick:s[1]||(s[1]=i=>{r.$emit("confirm"),_(e)()}),class:"action-button delete-button-confirm"},I(_(n)==="en"?"Delete":"حذف"),1)])])])):Ie("",!0)]),_:1}))}},Ml=Tt(OV,[["__scopeId","data-v-8046b31b"]]),xV=["dir"],NV={key:0},VV={class:"patient-details-grid"},MV={class:"detail-item"},LV={class:"detail-label"},$V={class:"detail-value"},FV={class:"detail-item"},UV={class:"detail-label"},BV={class:"detail-value"},jV={class:"scans-list-container"},qV={key:0,class:"loading-message"},HV={key:1,class:"no-scans-message"},zV={key:2,class:"scans-list"},WV={class:"scan-info"},GV={class:"scan-type-place"},KV={class:"scan-type"},YV={class:"scan-place"},XV={class:"scan-date"},QV={class:"scan-dose"},JV={class:"scan-actions"},ZV=["onClick"],e4=["onClick"],t4={__name:"PatientDetailsModal",props:{show:Boolean,patient:Object},emits:["close","scan-saved"],setup(t,{emit:e}){const n=t,r=e,s=Di(),i=Ue("currentLanguage"),o=Ue("triggerMsvRecalculation"),l=Se([]),u=Se(null),c=Se(null),h=Se(!1),p=Se(!1),m=Re(()=>n.patient?.id),y=async()=>{if(!m.value){l.value=[];return}const $=await s.fetchScansForPatient(m.value);l.value=$||[]};tt(()=>n.show,$=>{$&&m.value&&y()});const x=async $=>{if(!n.patient?.id){alert("Error: No patient selected to save this scan for.");return}const z={...$,patientId:n.patient.id};(z.id?await s.updateScan(z.id,z):await s.createScan(z))?(h.value=!1,await y(),r("scan-saved"),o&&o()):alert(`Error saving patient scan: ${s.error}`)},N=async()=>{if(!c.value?.id)return;await s.deleteScan(c.value.id)?(p.value=!1,await y(),r("scan-saved"),o&&o()):alert(`Failed to delete scan: ${s.error}`)};function k(){u.value=null,h.value=!0}function v($){u.value=$,h.value=!0}function b($){c.value=$,p.value=!0}const V=$=>!$||!$.toDate?"N/A":$.toDate().toLocaleDateString(i.value==="ar"?"ar-EG":"en-US");return($,z)=>(U(),G(et,null,[Pe(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(U(),G("div",{key:0,class:"modal-overlay",onClick:z[1]||(z[1]=rt(Y=>$.$emit("close"),["self"]))},[f("div",{class:"modal-content-details",dir:_(i)==="ar"?"rtl":"ltr"},[f("button",{class:"close-modal-button",onClick:z[0]||(z[0]=Y=>$.$emit("close"))},"×"),t.patient?(U(),G("div",NV,[f("h3",null,[yt(I(_(i)==="en"?"Scan History for":"سجل الفحوصات لـ")+" ",1),f("strong",null,I(t.patient.name),1)]),f("p",null,I(_(i)==="en"?"Review past scans or add a new record.":"مراجعة الفحوصات السابقة أو إضافة سجل جديد."),1),f("div",VV,[f("div",MV,[f("span",LV,I(_(i)==="en"?"Gender":"الجنس"),1),f("span",$V,I(t.patient.gender||"N/A"),1)]),f("div",FV,[f("span",UV,I(_(i)==="en"?"Weight":"الوزن"),1),f("span",BV,I(t.patient.weight?`${t.patient.weight} kg`:"N/A"),1)])]),f("button",{onClick:k,class:"add-scan-button"},[Pe(_(bt),{icon:"plus"}),yt(" "+I(_(i)==="en"?"Add New Scan":"إضافة فحص جديد"),1)]),f("div",jV,[_(s).loading?(U(),G("div",qV,[Pe(_(bt),{icon:"spinner",spin:""}),yt(" "+I(_(i)==="en"?"Loading scans...":"جاري تحميل الفحوصات..."),1)])):l.value.length===0?(U(),G("div",HV,I(_(i)==="en"?"No scans recorded for this patient yet.":"لا توجد فحوصات مسجلة لهذا المريض بعد."),1)):(U(),G("ul",zV,[(U(!0),G(et,null,pn(l.value,Y=>(U(),G("li",{key:Y.id,class:"scan-item"},[f("div",WV,[f("span",GV,[f("span",KV,I(Y.scanType),1),f("span",YV,"of the "+I(Y.scanPlace||"N/A"),1)]),f("span",XV,I(V(Y.scanDate)),1),f("span",QV,I(_(i)==="en"?"Dose:":"الجرعة:")+" "+I(Y.patientDose)+" mSv",1)]),f("div",JV,[f("button",{onClick:A=>v(Y),class:"action-button-icon edit-button"},[Pe(_(bt),{icon:"edit"})],8,ZV),f("button",{onClick:A=>b(Y),class:"action-button-icon delete-button"},[Pe(_(bt),{icon:"trash-alt"})],8,e4)])]))),128))]))])])):Ie("",!0)],8,xV)])):Ie("",!0)]),_:1}),Pe(PV,{show:h.value,patient:t.patient,scan:u.value,"is-saving":_(s).loading,onClose:z[2]||(z[2]=Y=>h.value=!1),onSave:x},null,8,["show","patient","scan","is-saving"]),Pe(Ml,{show:p.value,title:_(i)==="en"?"Delete Scan":"حذف الفحص",message:`${_(i)==="en"?"Are you sure you want to delete this scan from":"هل أنت متأكد من حذف هذا الفحص بتاريخ"} ${V(c.value?.scanDate)}?`,onClose:z[3]||(z[3]=Y=>p.value=!1),onConfirm:N},null,8,["show","title","message"])],64))}},n4=Tt(t4,[["__scopeId","data-v-e5fe2d03"]]),r4={class:"patient-list-page"},s4={class:"patient-list-main-content"},i4={class:"patient-list-card"},o4=["dir"],a4={key:0,class:"loading-message"},l4={key:1,class:"no-patients-message"},c4={key:2,class:"patient-table-container"},u4={class:"patient-table"},h4={class:"details-column"},d4={class:"details-column"},f4={class:"details-column"},p4={class:"details-column"},m4={class:"action-buttons-wrapper"},g4=["onClick","title"],y4=["onClick","title"],_4=["onClick","title"],v4=["onClick","title"],b4={class:"switch-link-container"},w4={__name:"PatientsView",setup(t){const e=on(),n=Di(),r=Ns(),s=Ue("currentLanguage"),i=Se([]),o=Se(null),l=Se(null),u=Se(null),c=Se(!1),h=Se(!1),p=Se(!1),m=Re(()=>e.user?.uid),y=async()=>{const Y=await n.fetchPatientsForDoctor();Y&&(i.value=Y)},x=Y=>{if(!Y?.toDate)return"N/A";const A=Y.toDate(),E=new Date;let T=E.getFullYear()-A.getFullYear(),P=E.getMonth()-A.getMonth();if(E.getDate()<A.getDate()&&P--,P<0&&(T--,P+=12),T>=2)return`${T} ${s.value==="ar"?"سنوات":"years"}`;{const O=s.value==="ar"?"سنة":"year",R=s.value==="ar"?"أشهر":"months",S=s.value==="ar"?"شهر":"month";return T>0?`${T} ${O}, ${P} ${P===1?S:R}`:P>0?`${P} ${P===1?S:R}`:s.value==="ar"?"أقل من شهر":"Less than a month"}},N=async Y=>{const{id:A,...E}=Y;let T=!1;A?T=await n.updatePatientProfile(A,E):T=!!await n.addNewPatient(E),T?(c.value=!1,await y()):alert(`Failed to save patient. Error: ${n.error}`)},k=async()=>{if(!o.value?.id)return;await n.deletePatientProfile(o.value.id)?(p.value=!1,await y()):alert(`Failed to delete patient. Error: ${n.error}`)};function v(){u.value=null,c.value=!0}function b(Y){u.value=Y,c.value=!0}function V(Y){l.value=Y,h.value=!0}function $(Y){o.value=Y,p.value=!0}function z(Y){Y&&r.push({name:"recommend",query:{patientId:Y}})}return tt(m,Y=>{Y&&y()},{immediate:!0}),(Y,A)=>(U(),G("div",r4,[f("div",s4,[f("div",i4,[f("h2",null,I(_(s)==="en"?"Manage Patients":"إدارة المرضى"),1),f("p",null,I(_(s)==="en"?"Add new patients or view existing records":"أضف مرضى جدد أو اطلع على السجلات الحالية."),1),f("button",{onClick:v,class:"add-new-patient-button"},I(_(s)==="en"?"Add New Patient":"إضافة مريض جديد"),1),f("div",{class:"patient-list-section",dir:_(s)==="ar"?"rtl":"ltr"},[f("h3",null,I(_(s)==="en"?"Existing Patients":"المرضى الحاليون"),1),_(n).loading?(U(),G("div",a4,[Pe(_(bt),{icon:"spinner",spin:""}),yt(" "+I(_(s)==="en"?"Loading patients...":"جاري تحميل المرضى..."),1)])):!i.value||i.value.length===0?(U(),G("div",l4,I(_(s)==="en"?"No patients added yet.":"لم يتم إضافة أي مرضى بعد."),1)):(U(),G("div",c4,[f("table",u4,[f("thead",null,[f("tr",null,[f("th",null,I(_(s)==="en"?"Name":"الاسم"),1),f("th",null,I(_(s)==="en"?"Age":"العمر"),1),f("th",null,I(_(s)==="en"?"Weight":"الوزن"),1),f("th",null,I(_(s)==="en"?"Gender":"الجنس"),1),f("th",h4,I(_(s)==="en"?"Medical History":"التاريخ الطبي"),1),f("th",d4,I(_(s)==="en"?"Allergies":"الحساسية"),1),f("th",null,I(_(s)==="en"?"Actions":"الإجراءات"),1)])]),f("tbody",null,[(U(!0),G(et,null,pn(i.value,E=>(U(),G("tr",{key:E.id},[f("td",null,I(E.name??"N/A"),1),f("td",null,I(x(E.birthDate)),1),f("td",null,I(E.weight?`${E.weight} kg`:"N/A"),1),f("td",null,I(_(s)==="en"?(E.gender?.charAt(0).toUpperCase()??"")+(E.gender?.slice(1)??"N/A"):E.gender==="male"?"ذكر":"أنثى"),1),f("td",f4,I(E.medicalHistory?.join(", ")||(_(s)==="en"?"None":"لا يوجد")),1),f("td",p4,I(E.allergies?.join(", ")||(_(s)==="en"?"None":"لا يوجد")),1),f("td",null,[f("div",m4,[f("button",{onClick:T=>V(E),class:"action-button-sm view-button",title:_(s)==="en"?"View Scan History":"عرض سجل الفحوصات"},[Pe(_(bt),{icon:"eye"})],8,g4),f("button",{onClick:T=>b(E),class:"action-button-sm edit-button",title:_(s)==="en"?"Edit Patient Details":"تعديل تفاصيل المريض"},[Pe(_(bt),{icon:"edit"})],8,y4),f("button",{onClick:T=>$(E),class:"action-button-sm delete-button",title:_(s)==="en"?"Delete Patient":"حذف المريض"},[Pe(_(bt),{icon:"trash-alt"})],8,_4),f("button",{onClick:T=>z(E.id),class:"action-button-sm recommend-button",title:_(s)==="en"?"Get Recommendation":"الحصول على توصية"},[Pe(_(bt),{icon:"file-medical"})],8,v4)])])]))),128))])])]))],8,o4),f("div",b4,[f("a",{href:"#",onClick:A[0]||(A[0]=rt(E=>_(r).push("/dashboard"),["prevent"]))},I(_(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])])]),Pe(YN,{show:c.value,patient:u.value,"is-saving":_(n).loading,onClose:A[1]||(A[1]=E=>c.value=!1),onSave:N},null,8,["show","patient","is-saving"]),Pe(n4,{show:h.value,patient:l.value,onClose:A[2]||(A[2]=E=>h.value=!1),onScanSaved:y},null,8,["show","patient"]),Pe(Ml,{show:p.value,title:_(s)==="en"?"Delete Patient":"حذف المريض",message:`${_(s)==="en"?"Are you sure you want to delete":"هل أنت متأكد من الحذف"} ${o.value?.name??"this patient"}?`,onClose:A[3]||(A[3]=E=>p.value=!1),onConfirm:k},null,8,["show","title","message"])]))}},E4=Tt(w4,[["__scopeId","data-v-63db406d"]]),T4={key:0,class:"loading-container"},I4={key:0,class:"role-modal-backdrop"},S4={class:"role-modal"},A4={class:"form-group"},P4={value:"",disabled:""},C4={value:"doctor"},R4={value:"patient"},D4={class:"form-group"},k4={class:"form-group"},O4={value:"",disabled:""},x4={value:"male"},N4={value:"female"},V4={class:"form-group"},M4=["placeholder"],L4={class:"form-group"},$4=["placeholder"],F4=["disabled"],U4={key:1},B4={class:"dashboard-main-content"},j4={class:"dashboard-card"},q4=["dir"],H4=["dir"],z4={class:"dashboard-features"},W4=["dir"],G4=["dir"],K4=["dir"],Y4=["dir"],X4=["dir"],Q4=["dir"],J4={__name:"DashboardView",setup(t){const e=on(),n=Di(),r=Ns(),s=Se({role:null,birthDate:"",gender:"",allergies:"",medicalHistory:""}),i=Re(()=>!e.isAuthReady||e.isProfileLoading),o=Re(()=>e.user?!e.isProfileComplete:!1),l=Re(()=>e.role),u=Ue("currentLanguage"),c=async()=>{const{uid:p,email:m,displayName:y}=e.user,{role:x,birthDate:N,gender:k,allergies:v,medicalHistory:b}=s.value;if(!x||!N||!k){alert("Please fill out all required fields: Role, Birth Date, and Gender.");return}const V={email:m,displayName:y,role:x,birthDate:Oe.fromDate(new Date(N)),gender:k,allergies:v.split(",").map(z=>z.trim()).filter(Boolean),medicalHistory:b.split(",").map(z=>z.trim()).filter(Boolean)};await n.setUserProfile(p,V)?e.setUserProfile(V):alert(`Failed to save profile. Error: ${n.error}`)},h=async()=>{await e.logout(),r.push("/signin")};return(p,m)=>(U(),G("div",null,[i.value?(U(),G("div",T4,[f("p",null,I(_(u)==="en"?"Verifying session...":"جار التحقق من الجلسة..."),1),Pe(_(bt),{icon:"spinner",spin:"",size:"2x"})])):(U(),G(et,{key:1},[o.value?(U(),G("div",I4,[f("div",S4,[f("h2",null,I(_(u)==="en"?"Complete Your Profile":"أكمل ملفك الشخصي"),1),f("div",A4,[f("label",null,I(_(u)==="en"?"I am a:":"أنا:"),1),le(f("select",{"onUpdate:modelValue":m[0]||(m[0]=y=>s.value.role=y)},[f("option",P4,I(_(u)==="en"?"-- Select Role --":"-- اختر دورك --"),1),f("option",C4,I(_(u)==="en"?"Doctor":"طبيب"),1),f("option",R4,I(_(u)==="en"?"Patient":"مريض"),1)],512),[[wt,s.value.role]])]),f("div",D4,[f("label",null,I(_(u)==="en"?"Birth Date":"تاريخ الميلاد"),1),le(f("input",{type:"date","onUpdate:modelValue":m[1]||(m[1]=y=>s.value.birthDate=y)},null,512),[[ve,s.value.birthDate]])]),f("div",k4,[f("label",null,I(_(u)==="en"?"Gender":"الجنس"),1),le(f("select",{"onUpdate:modelValue":m[2]||(m[2]=y=>s.value.gender=y)},[f("option",O4,I(_(u)==="en"?"-- Select Gender --":"-- اختر الجنس --"),1),f("option",x4,I(_(u)==="en"?"Male":"ذكر"),1),f("option",N4,I(_(u)==="en"?"Female":"أنثى"),1)],512),[[wt,s.value.gender]])]),f("div",V4,[f("label",null,I(_(u)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),le(f("textarea",{"onUpdate:modelValue":m[3]||(m[3]=y=>s.value.allergies=y),rows:"2",placeholder:_(u)==="en"?"e.g., Iodine-Based Dyes":"مثال: صبغات اليود"},null,8,M4),[[ve,s.value.allergies]])]),f("div",L4,[f("label",null,I(_(u)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),le(f("textarea",{"onUpdate:modelValue":m[4]||(m[4]=y=>s.value.medicalHistory=y),rows:"2",placeholder:_(u)==="en"?"e.g., Diabetes, Asthma":"مثال: مرض السكري, الربو"},null,8,$4),[[ve,s.value.medicalHistory]])]),f("button",{class:"action-button",onClick:c,disabled:_(n).loading},[_(n).loading?(U(),Bn(_(bt),{key:0,icon:"spinner",spin:""})):(U(),G("span",U4,I(_(u)==="en"?"Save & Continue":"حفظ ومتابعة"),1))],8,F4)])])):Ie("",!0),f("div",{class:Ts(["dashboard-page dashboard-blur-area",{"is-blurred":o.value}])},[f("main",B4,[f("section",j4,[f("h2",{dir:_(u)==="ar"?"rtl":"ltr"},I(_(u)==="en"?"Welcome to mSv Dose Tracker":"مرحبًا بك في متتبع جرعات الأشعة السينية"),9,q4),f("p",{dir:_(u)==="ar"?"rtl":"ltr"},I(_(u)==="en"?"Your comprehensive tool for managing radiation exposure.":"أداتك الشاملة لإدارة التعرض للإشعاع."),9,H4),f("div",z4,[f("div",{class:"feature-item",onClick:m[5]||(m[5]=y=>_(r).push("/recommend"))},[m[8]||(m[8]=f("i",{class:"fas fa-file-medical"},null,-1)),f("h3",{dir:_(u)==="ar"?"rtl":"ltr"},I(_(u)==="en"?"Get Scan Recommendation":"الحصول على توصية"),9,W4),f("p",{dir:_(u)==="ar"?"rtl":"ltr"},I(_(u)==="en"?"Use AI to get recommendations on the necessity of radiological scans.":"استخدم الذكاء الاصطناعي للحصول على توصيات حول ضرورة الفحوصات الإشعاعية."),9,G4)]),l.value==="doctor"?(U(),G("div",{key:0,class:"feature-item",onClick:m[6]||(m[6]=y=>_(r).push("/patients"))},[m[9]||(m[9]=f("i",{class:"fas fa-users"},null,-1)),f("h3",{dir:_(u)==="ar"?"rtl":"ltr"},I(_(u)==="en"?"Manage Patients":"إدارة المرضى"),9,K4),f("p",{dir:_(u)==="ar"?"rtl":"ltr"},I(_(u)==="en"?"View, add, and manage your patient records and their scan histories.":"عرض وإضافة وإدارة سجلات مرضاك وتاريخ فحوصاتهم."),9,Y4)])):Ie("",!0),f("div",{class:"feature-item",onClick:m[7]||(m[7]=y=>_(r).push("/profile"))},[m[10]||(m[10]=f("i",{class:"fas fa-user"},null,-1)),f("h3",{dir:_(u)==="ar"?"rtl":"ltr"},I(_(u)==="en"?"View Profile":"عرض الملف الشخصي"),9,X4),f("p",{dir:_(u)==="ar"?"rtl":"ltr"},I(_(u)==="en"?"Review your personal details and dose history.":"راجع معلوماتك الشخصية وسجل جرعاتك."),9,Q4)])]),f("button",{onClick:h,class:"action-button secondary logout-button"},I(_(u)==="en"?"Logout":"تسجيل الخروج"),1)])])],2)],64))]))}},Z4=Tt(J4,[["__scopeId","data-v-2c9adee3"]]),eM={class:"reset-password-page"},tM={class:"reset-password-main-content"},nM={class:"reset-password-card"},rM=["dir"],sM=["dir"],iM={class:"form-group"},oM=["dir"],aM=["placeholder","dir"],lM=["disabled"],cM={key:0},uM={key:1},hM=["dir"],dM=["dir"],fM=["dir"],pM={__name:"ResetPasswordView",setup(t){const e=Ns(),n=on(),r=Ue("currentLanguage"),s=Se(""),i=async()=>{await n.sendPasswordReset(s.value)},o=()=>{e.push("/signin")};return(l,u)=>(U(),G("div",eM,[f("main",tM,[f("section",nM,[f("h2",{dir:_(r)==="ar"?"rtl":"ltr"},I(_(r)==="en"?"Reset Your Password":"إعادة تعيين كلمة المرور"),9,rM),f("p",{dir:_(r)==="ar"?"rtl":"ltr"},I(_(r)==="en"?"Enter your email address to receive a password reset link.":"أدخل عنوان بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور."),9,sM),f("form",{onSubmit:rt(i,["prevent"]),class:"reset-password-form"},[f("div",iM,[f("label",{for:"email",dir:_(r)==="ar"?"rtl":"ltr"},I(_(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,oM),le(f("input",{type:"email",id:"email","onUpdate:modelValue":u[0]||(u[0]=c=>s.value=c),placeholder:_(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:_(r)==="ar"?"rtl":"ltr",required:""},null,8,aM),[[ve,s.value]])]),f("button",{class:"action-button primary",type:"submit",disabled:_(n).loading},[_(n).loading?(U(),G("span",cM,I(_(r)==="en"?"Sending Link...":"جاري إرسال الرابط..."),1)):(U(),G("span",uM,I(_(r)==="en"?"Send Reset Link":"إرسال رابط إعادة التعيين"),1))],8,lM)],32),_(n).error?(U(),G("div",{key:0,class:"message error-message",dir:_(r)==="ar"?"rtl":"ltr"},I(_(n).error),9,hM)):Ie("",!0),_(n).successMessage?(U(),G("div",{key:1,class:"message success-message",dir:_(r)==="ar"?"rtl":"ltr"},I(_(n).successMessage),9,dM)):Ie("",!0),f("p",{class:"switch-link-container",dir:_(r)==="ar"?"rtl":"ltr"},[yt(I(_(r)==="en"?"Remembered your password?":"هل تذكرت كلمة المرور؟")+" ",1),f("a",{href:"#",onClick:rt(o,["prevent"])},I(_(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,fM)])])]))}},mM=Tt(pM,[["__scopeId","data-v-73a48bd7"]]),gM=["dir"],yM={class:"modal-title"},_M={class:"form-group"},vM={value:"doctor"},bM={value:"patient"},wM={class:"form-group"},EM={class:"form-group"},TM={class:"form-group"},IM={value:"male"},SM={value:"female"},AM={key:0,class:"pregnancy-section"},PM={class:"form-group checkbox-group"},CM={key:0,class:"form-group"},RM={class:"form-group"},DM={class:"form-group"},kM={class:"modal-actions"},OM={type:"submit",class:"action-button"},xM={__name:"ProfileFormModal",props:{show:Boolean,profileData:{type:Object,default:()=>null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Ue("currentLanguage"),i=Un({role:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",allergies:"",medicalHistory:""});tt(()=>n.show,l=>{l&&n.profileData&&(i.role=n.profileData.role||"patient",i.birthDate=n.profileData.birthDate||"",i.gender=n.profileData.gender||"male",i.weight=n.profileData.weight||null,i.isPregnant=n.profileData.isPregnant||!1,i.estimatedDueDate=n.profileData.estimatedDueDate||"",i.allergies=Array.isArray(n.profileData.allergies)?n.profileData.allergies.join(", "):"",i.medicalHistory=Array.isArray(n.profileData.medicalHistory)?n.profileData.medicalHistory.join(", "):"")},{immediate:!0}),tt(()=>i.gender,l=>{l==="male"&&(i.isPregnant=!1,i.estimatedDueDate="")}),tt(()=>i.isPregnant,l=>{l||(i.estimatedDueDate="")});const o=()=>{if(!i.role||!i.birthDate||!i.gender){alert("Role, Birth Date, and Gender are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Estimated due date is required for pregnant patients.");return}r("save",i)};return(l,u)=>(U(),Bn(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(U(),G("div",{key:0,class:"modal-overlay",onClick:u[10]||(u[10]=rt(c=>r("close"),["self"]))},[f("div",{class:"modal-content",dir:_(s)==="ar"?"rtl":"ltr"},[f("button",{class:"close-button",onClick:u[0]||(u[0]=c=>r("close"))},"×"),f("h3",yM,I(_(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1),f("form",{onSubmit:rt(o,["prevent"]),class:"profile-form"},[f("div",_M,[f("label",null,I(_(s)==="en"?"Role":"الدور"),1),le(f("select",{"onUpdate:modelValue":u[1]||(u[1]=c=>i.role=c),required:""},[f("option",vM,I(_(s)==="en"?"Doctor":"طبيب"),1),f("option",bM,I(_(s)==="en"?"Patient":"مريض"),1)],512),[[wt,i.role]])]),f("div",wM,[f("label",null,I(_(s)==="en"?"Weight (kg)":"الوزن (كجم)"),1),le(f("input",{type:"number",step:"0.1","onUpdate:modelValue":u[2]||(u[2]=c=>i.weight=c),placeholder:"e.g., 70.5"},null,512),[[ve,i.weight]])]),f("div",EM,[f("label",null,I(_(s)==="en"?"Birth Date":"تاريخ الميلاد"),1),le(f("input",{type:"date","onUpdate:modelValue":u[3]||(u[3]=c=>i.birthDate=c),required:""},null,512),[[ve,i.birthDate]])]),f("div",TM,[f("label",null,I(_(s)==="en"?"Gender":"الجنس"),1),le(f("select",{"onUpdate:modelValue":u[4]||(u[4]=c=>i.gender=c),required:""},[f("option",IM,I(_(s)==="en"?"Male":"ذكر"),1),f("option",SM,I(_(s)==="en"?"Female":"أنثى"),1)],512),[[wt,i.gender]])]),i.gender==="female"?(U(),G("div",AM,[f("div",PM,[f("label",null,[le(f("input",{type:"checkbox","onUpdate:modelValue":u[5]||(u[5]=c=>i.isPregnant=c)},null,512),[[Xl,i.isPregnant]]),f("span",null,I(_(s)==="en"?"Currently Pregnant?":"هل أنت حامل حاليًا؟"),1)])]),i.isPregnant?(U(),G("div",CM,[f("label",null,I(_(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),le(f("input",{type:"date","onUpdate:modelValue":u[6]||(u[6]=c=>i.estimatedDueDate=c),required:""},null,512),[[ve,i.estimatedDueDate]])])):Ie("",!0)])):Ie("",!0),f("div",RM,[f("label",null,I(_(s)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),le(f("textarea",{"onUpdate:modelValue":u[7]||(u[7]=c=>i.allergies=c),rows:"2"},null,512),[[ve,i.allergies]])]),f("div",DM,[f("label",null,I(_(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),le(f("textarea",{"onUpdate:modelValue":u[8]||(u[8]=c=>i.medicalHistory=c),rows:"2"},null,512),[[ve,i.medicalHistory]])]),f("div",kM,[f("button",{type:"button",onClick:u[9]||(u[9]=c=>r("close")),class:"action-button secondary"},I(_(s)==="en"?"Cancel":"إلغاء"),1),f("button",OM,I(_(s)==="en"?"Save Changes":"حفظ التغييرات"),1)])],32)],8,gM)])):Ie("",!0)]),_:1}))}},NM=Tt(xM,[["__scopeId","data-v-efada37a"]]),VM=["dir"],MM={class:"form-row"},LM={class:"form-group"},$M={disabled:"",value:""},FM=["value"],UM={key:0,class:"form-group"},BM={class:"form-row"},jM={class:"form-group"},qM={value:"X-ray"},HM={value:"CT"},zM={class:"form-group"},WM={disabled:"",value:""},GM=["value"],KM={key:0,class:"form-group"},YM=["placeholder"],XM={key:1,class:"form-group"},QM={class:"form-group"},JM={class:"form-group"},ZM=["placeholder"],eL={class:"form-group"},tL={class:"form-group"},nL={class:"modal-actions"},rL=["disabled"],sL={__name:"PersonalScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=on(),i=Ue("currentLanguage"),o={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},l=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],u={patient:{CT:{"Abdomen & Pelvis":14,"Brain with contrast":2,"Angiography CTA":12,Urography:8,Enterography:8,default:6},"X-ray":{"Barium Enema":7,"IV Urogram (IVP)":2.5,HSG:1.5,VCUG:1,default:.5}},doctor:{CT:{default:.113},"X-ray":{"Barium Enema":.1,"IV Urogram (IVP)":.05,HSG:.2,VCUG:.15,default:5e-5}}},c=Un({id:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:new Date().toISOString().split("T")[0],patientDose:null,reason:"",notes:""}),h=Re(()=>o[c.scanType]||[]),p=Re(()=>c.subScanType==="Other"),m=Re(()=>c.scanPlace==="other");tt(()=>n.show,k=>{if(k&&(Object.assign(c,{id:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",numberOfScans:1,scanDate:new Date().toISOString().split("T")[0],patientDose:null,reason:"",notes:""}),n.scan)){c.id=n.scan.id,c.scanType=n.scan.scanType,c.scanDate=n.scan.scanDate?.toDate()?.toISOString().split("T")[0]||"",c.patientDose=n.scan.patientDose,c.reason=n.scan.reason,c.notes=n.scan.notes,c.numberOfScans=n.scan.numberOfScans||1;const v=n.scan.scanDetail;h.value.some(z=>z.value===v)?c.subScanType=v:v&&(c.subScanType="Other",c.otherScanDescription=v);const V=n.scan.scanPlace;l.some(z=>z.value===V)?c.scanPlace=V:V&&(c.scanPlace="other",c.otherScanPlaceDescription=V)}}),tt(()=>c.scanType,()=>{c.subScanType="",c.otherScanDescription=""});const y=()=>{try{const k=c.subScanType==="Other"?"default":c.subScanType,b=u.patient[c.scanType];if(!b)return null;let V=b[k]??b.default;return V===void 0?null:c.scanType==="X-ray"?V*c.numberOfScans:V}catch(k){return console.error("Error retrieving fallback dose:",k),null}},x=async()=>{const k=s.userProfile;if(!k)return alert("User profile not available. Cannot estimate dose."),!1;const v=k.birthDate?new Date().getFullYear()-k.birthDate.toDate().getFullYear():"N/A",b=k.weight||70;let V=p.value?c.otherScanDescription:c.subScanType,$=m.value?c.otherScanPlaceDescription:c.scanPlace,z="";c.scanType==="X-ray"&&c.numberOfScans>1?z=`
      Task: Calculate the TOTAL effective dose in mSv for a patient from a procedure involving multiple X-rays.
      Step 1: First, determine the typical effective dose for a SINGLE X-ray of the ${$} with protocol "${V}".
      Step 2: Multiply that single-scan dose by the number of scans, which is ${c.numberOfScans}.
      Patient Context: Age: ${v}, Weight: ${b} kg. Reason for scan: "${c.reason||"Not provided"}".
      Respond ONLY with the final numeric value from Step 2. Do not show your work or include units.
    `:z=`Estimate the typical effective dose (in mSv) for a patient undergoing a single ${c.scanType} scan of the ${$} with the specific protocol: "${V}". Patient Age: ${v}. Patient Weight: ${b} kg. Reason for scan: "${c.reason||"Not provided"}". Respond ONLY with a single number. Do not add any other text or units.`;try{const Y=c.scanType==="CT"?{min:.5,max:40}:{min:1e-4,max:10},P=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:z}]}],generationConfig:{responseMimeType:"text/plain"}})});if(!P.ok)throw new Error(`API Error: ${P.statusText}`);const R=(await P.json()).candidates?.[0]?.content?.parts?.[0]?.text||"",S=parseFloat(R.match(/[\d.]+/));if(isNaN(S)||S<Y.min||S>Y.max)throw new Error(`AI returned an invalid or out-of-range value. Got: ${S}`);return c.patientDose=S,!0}catch(Y){console.warn("AI dose estimation failed. Attempting fallback. Error:",Y);const A=y();return A!==null?(c.patientDose=A,alert(i.value==="en"?`AI estimation failed. A typical value of ${A.toFixed(3)} mSv has been used. You can review and adjust this value.`:`فشل تقدير الذكاء الاصطناعي. تم استخدام قيمة نموذجية تبلغ ${A.toFixed(3)} ملي سيفرت. يمكنك مراجعة هذه القيمة وتعديلها.`),!0):(alert(i.value==="en"?"AI estimation failed and no fallback value is available. Please enter the dose manually.":"فشل تقدير الذكاء الاصطناعي ولا توجد قيمة بديلة. يرجى إدخال الجرعة يدويًا."),!1)}},N=async()=>{if(!c.scanDate||!c.scanPlace||m.value&&!c.otherScanPlaceDescription||!c.subScanType||p.value&&!c.otherScanDescription){alert(i.value==="en"?"Please fill all required scan details.":"يرجى ملء جميع تفاصيل الفحص المطلوبة.");return}if(c.scanType==="X-ray"&&(c.numberOfScans===null||c.numberOfScans<1)){alert(i.value==="en"?"Number of scans must be at least 1 for X-ray.":"عدد الفحوصات لأشعة إكس يجب أن يكون 1 على الأقل.");return}if(!c.patientDose&&c.patientDose!==0&&!await x())return;const k=c.scanDate.split("-"),v=new Date(Date.UTC(k[0],parseInt(k[1],10)-1,k[2]));if(isNaN(v.getTime())){alert("Invalid date. Please select a valid date.");return}const b=p.value?c.otherScanDescription:c.subScanType,V=m.value?c.otherScanPlaceDescription:c.scanPlace,$={id:c.id,scanType:c.scanType,scanDetail:b,scanPlace:V,numberOfScans:c.scanType==="X-ray"?Number(c.numberOfScans):1,scanDate:Oe.fromDate(v),patientDose:c.patientDose,reason:c.reason,notes:c.notes,isPersonalScan:!0};r("save",$)};return(k,v)=>(U(),Bn(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(U(),G("div",{key:0,class:"modal-overlay",onClick:v[12]||(v[12]=rt(b=>k.$emit("close"),["self"]))},[f("div",{class:"modal-content",dir:_(i)==="ar"?"rtl":"ltr"},[f("button",{class:"close-modal-button",onClick:v[0]||(v[0]=b=>k.$emit("close"))},"×"),f("h3",null,I(t.scan?_(i)==="en"?"Edit Personal Scan":"تعديل الفحص الشخصي":_(i)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1),f("form",{onSubmit:rt(N,["prevent"]),class:"scan-form"},[f("div",MM,[f("div",LM,[f("label",null,I(_(i)==="en"?"Place of Scan":"مكان الفحص"),1),le(f("select",{"onUpdate:modelValue":v[1]||(v[1]=b=>c.scanPlace=b),required:""},[f("option",$M,I(_(i)==="en"?"Select...":"اختر..."),1),(U(),G(et,null,pn(l,b=>f("option",{key:b.value,value:b.value},I(_(i)==="en"?b.en:b.ar),9,FM)),64))],512),[[wt,c.scanPlace]])]),m.value?(U(),G("div",UM,[f("label",null,I(_(i)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر"),1),le(f("input",{type:"text","onUpdate:modelValue":v[2]||(v[2]=b=>c.otherScanPlaceDescription=b),required:""},null,512),[[ve,c.otherScanPlaceDescription]])])):Ie("",!0)]),f("div",BM,[f("div",jM,[f("label",null,I(_(i)==="en"?"Scan Category":"فئة الفحص"),1),le(f("select",{"onUpdate:modelValue":v[3]||(v[3]=b=>c.scanType=b),required:""},[f("option",qM,I(_(i)==="en"?"X-ray":"أشعة سينية"),1),f("option",HM,I(_(i)==="en"?"CT":"أشعة مقطعية"),1)],512),[[wt,c.scanType]])]),f("div",zM,[f("label",null,I(_(i)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),le(f("select",{"onUpdate:modelValue":v[4]||(v[4]=b=>c.subScanType=b),required:""},[f("option",WM,I(_(i)==="en"?"Select...":"اختر..."),1),(U(!0),G(et,null,pn(h.value,b=>(U(),G("option",{key:b.value,value:b.value},I(_(i)==="en"?b.en:b.ar),9,GM))),128))],512),[[wt,c.subScanType]])])]),p.value?(U(),G("div",KM,[f("label",null,I(_(i)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص"),1),le(f("input",{type:"text","onUpdate:modelValue":v[5]||(v[5]=b=>c.otherScanDescription=b),placeholder:_(i)==="en"?"e.g., Left Hand X-ray":"مثال: أشعة سينية لليد اليسرى",required:""},null,8,YM),[[ve,c.otherScanDescription]])])):Ie("",!0),c.scanType==="X-ray"?(U(),G("div",XM,[f("label",null,I(_(i)==="en"?"Number of Scans":"عدد الفحوصات"),1),le(f("input",{type:"number","onUpdate:modelValue":v[6]||(v[6]=b=>c.numberOfScans=b),min:"1",required:""},null,512),[[ve,c.numberOfScans,void 0,{number:!0}]])])):Ie("",!0),f("div",QM,[f("label",null,I(_(i)==="en"?"Scan Date":"تاريخ الفحص"),1),le(f("input",{type:"date","onUpdate:modelValue":v[7]||(v[7]=b=>c.scanDate=b),required:""},null,512),[[ve,c.scanDate]])]),f("div",JM,[f("label",null,I(_(i)==="en"?"Your Dose (mSv)":"جرعتك (mSv)"),1),le(f("input",{type:"number",step:"0.0001","onUpdate:modelValue":v[8]||(v[8]=b=>c.patientDose=b),placeholder:_(i)==="en"?"Leave blank for AI estimate":"اتركه فارغًا لتقدير الذكاء الاصطناعي"},null,8,ZM),[[ve,c.patientDose,void 0,{number:!0}]])]),f("div",eL,[f("label",null,I(_(i)==="en"?"Reason for Scan":"أسباب الفحص"),1),le(f("textarea",{"onUpdate:modelValue":v[9]||(v[9]=b=>c.reason=b),rows:"2"},null,512),[[ve,c.reason]])]),f("div",tL,[f("label",null,I(_(i)==="en"?"Additional Notes":"ملاحظات إضافية"),1),le(f("textarea",{"onUpdate:modelValue":v[10]||(v[10]=b=>c.notes=b),rows:"3"},null,512),[[ve,c.notes]])]),f("div",nL,[f("button",{type:"button",onClick:v[11]||(v[11]=b=>k.$emit("close")),class:"action-button secondary"},I(_(i)==="en"?"Cancel":"إلغاء"),1),f("button",{type:"submit",class:"action-button",disabled:t.isSaving},I(t.isSaving?_(i)==="en"?"Saving...":"جار الحفظ...":_(i)==="en"?"Save":"حفظ"),9,rL)])],32)],8,VM)])):Ie("",!0)]),_:1}))}},iL=Tt(sL,[["__scopeId","data-v-399e3f04"]]),oL=["dir"],aL={key:0,class:"loading-state"},lL={key:1,class:"empty-state"},cL={key:2,class:"table-container"},uL={class:"history-table"},hL={class:"details-column"},dL={class:"details-column"},fL={class:"details-column"},pL={class:"details-column"},mL={class:"details-column"},gL={class:"details-column"},yL={class:"details-column"},_L={class:"details-column"},vL={class:"action-buttons"},bL=["onClick","title"],wL=["onClick","title"],EL={__name:"HistoryTable",props:{scans:{type:Array,required:!0},isLoading:{type:Boolean,default:!1},isPersonalView:{type:Boolean,default:!1}},emits:["edit","delete"],setup(t,{emit:e}){const n=Ue("currentLanguage"),r=s=>!s||!s.toDate?"N/A":s.toDate().toLocaleDateString();return(s,i)=>(U(),G("div",{class:"history-table-wrapper",dir:_(n)==="ar"?"rtl":"ltr"},[t.isLoading?(U(),G("div",aL,[Pe(_(bt),{icon:"spinner",spin:""}),f("span",null,I(_(n)==="en"?"Loading history...":"جاري تحميل السجل..."),1)])):!t.scans||t.scans.length===0?(U(),G("div",lL,[f("p",null,I(_(n)==="en"?"No scan records found.":"لم يتم العثور على سجلات فحوصات."),1)])):(U(),G("div",cL,[f("table",uL,[f("thead",null,[f("tr",null,[f("th",null,I(_(n)==="en"?"Scan Type":"نوع الفحص"),1),f("th",hL,I(_(n)==="en"?"Place of Scan":"مكان الفحص"),1),f("th",dL,I(_(n)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),f("th",null,I(_(n)==="en"?"Date":"التاريخ"),1),f("th",null,I(_(n)==="en"?"Dose":"الجرعة")+" (mSv)",1),f("th",fL,I(_(n)==="en"?"Reason for Scan":"سبب الفحص"),1),f("th",pL,I(_(n)==="en"?"Additional Notes":"ملاحظات إضافية"),1),f("th",null,I(_(n)==="en"?"Actions":"الإجراءات"),1)])]),f("tbody",null,[(U(!0),G(et,null,pn(t.scans,o=>(U(),G("tr",{key:o.id},[f("td",null,I(o.scanType||"N/A"),1),f("td",mL,I(o.scanPlace||"N/A"),1),f("td",gL,I(o.scanDetail||"N/A"),1),f("td",null,I(r(o.scanDate)),1),f("td",null,I(o.patientDose??"N/A"),1),f("td",yL,I(o.reason||"N/A"),1),f("td",_L,I(o.notes||"N/A"),1),f("td",null,[f("div",vL,[f("button",{onClick:l=>s.$emit("edit",o),class:"action-button-icon edit-button",title:_(n)==="en"?"Edit":"تعديل"},[Pe(_(bt),{icon:"edit"})],8,bL),f("button",{onClick:l=>s.$emit("delete",o),class:"action-button-icon delete-button",title:_(n)==="en"?"Delete":"حذف"},[Pe(_(bt),{icon:"trash-alt"})],8,wL)])])]))),128))])])]))],8,oL))}},TL=Tt(EL,[["__scopeId","data-v-757f7f6d"]]),IL=["dir"],SL={class:"form-group"},AL=["value"],PL={key:0,class:"form-group"},CL={class:"form-group"},RL={class:"form-group"},DL=["disabled"],kL=["value"],OL={key:1,class:"form-group"},xL={key:2,class:"form-group"},NL={class:"form-group"},VL={class:"form-group"},ML=["placeholder"],LL={class:"form-group"},$L={class:"modal-actions"},FL=["disabled"],UL={__name:"OtherScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=on(),i=Ue("currentLanguage"),o={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},l=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],u={doctor:{CT:{default:.113},"X-ray":{"Barium Enema":.1,"IV Urogram (IVP)":.05,HSG:.2,VCUG:.15,default:5e-5}}},c=Un({id:null,scanPlace:"",otherScanPlaceDescription:"",scanType:"X-ray",scanDetail:"",otherScanDetailDescription:"",numberOfScans:1,date:new Date().toISOString().split("T")[0],dosage:null,doctorAdditionalContext:""}),h=Re(()=>o[c.scanType]||[]),p=Re(()=>c.scanPlace==="other"),m=Re(()=>c.scanDetail==="Other");tt(()=>n.show,k=>{k&&(Object.assign(c,{id:null,scanPlace:"",otherScanPlaceDescription:"",scanType:"X-ray",scanDetail:"",otherScanDetailDescription:"",numberOfScans:1,date:new Date().toISOString().split("T")[0],dosage:null,doctorAdditionalContext:""}),n.scan&&(c.id=n.scan.id,c.scanPlace=n.scan.scanPlace||"",c.scanType=n.scan.scanType||"X-ray",c.scanDetail=n.scan.scanDetail||"",c.numberOfScans=n.scan.numberOfScans||1,c.dosage=n.scan.dosage,c.date=n.scan.date?.toDate?n.scan.date.toDate().toISOString().split("T")[0]:"",c.doctorAdditionalContext=n.scan.doctorAdditionalContext||""))}),tt(()=>c.scanType,()=>{c.scanDetail="",c.otherScanDetailDescription=""});const y=()=>{try{const k=c.scanDetail==="Other"?"default":c.scanDetail,b=u.doctor[c.scanType];if(!b)return null;let V=b[k]??b.default;return V===void 0?null:c.scanType==="X-ray"?V*c.numberOfScans:V}catch(k){return console.error("Error retrieving fallback dose:",k),null}},x=async()=>{if(!s.userProfile)return alert("User profile is not available. Cannot estimate dose."),!1;const k=p.value?c.otherScanPlaceDescription:c.scanPlace,v=m.value?c.otherScanDetailDescription:c.scanDetail;let b="";c.scanType==="X-ray"&&c.numberOfScans>1?b=`
        A single occupational X-ray of an extremity typically results in a dose of about 0.00005 mSv.
        Based on this, calculate the TOTAL occupational dose in mSv for a doctor from a procedure involving ${c.numberOfScans} separate X-ray scans of the ${k} with the specific protocol: "${v}".
        The final value should be the single scan dose multiplied by the number of scans.
        Doctor's additional context: "${c.doctorAdditionalContext||"None"}".
        Respond ONLY with a single numeric value representing the total dose. Do NOT output the number of scans.
      `:b=`Estimate the typical occupational dose (in mSv) for a doctor during a single patient's ${c.scanType} source/scan of the ${k} with the specific protocol: "${v}". Doctor's additional context: "${c.doctorAdditionalContext||"None"}". Respond ONLY with a single number.`;try{const V={min:0,max:.5},A=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:b}]}],generationConfig:{responseMimeType:"text/plain"}})});if(!A.ok)throw new Error(`API Error: ${A.statusText}`);const T=(await A.json()).candidates?.[0]?.content?.parts?.[0]?.text||"",P=parseFloat(T.match(/[\d.]+/));if(isNaN(P)||P<V.min||P>V.max)throw new Error(`AI returned an invalid or out-of-range value. Got: ${P}`);return c.dosage=P,!0}catch(V){console.warn("AI dose estimation failed. Attempting fallback. Error:",V);const $=y();return $!==null?(c.dosage=$,alert(i.value==="en"?`AI estimation failed. A typical value of ${$.toFixed(5)} mSv has been used. You can review and adjust this value.`:`فشل تقدير الذكاء الاصطناعي. تم استخدام قيمة نموذجية تبلغ ${$.toFixed(5)} ملي سيفرت. يمكنك مراجعة هذه القيمة وتعديلها.`),!0):(alert(i.value==="en"?"AI estimation failed and no fallback value is available. Please enter the dose manually.":"فشل تقدير الذكاء الاصطناعي ولا توجد قيمة بديلة. يرجى إدخال الجرعة يدويًا."),!1)}},N=async()=>{if(!c.scanPlace||!c.scanType||!c.date){alert("Please fill all required fields.");return}if(c.dosage===null&&!await x())return;const k=c.date.split("-"),v=new Date(Date.UTC(k[0],parseInt(k[1],10)-1,k[2]));if(isNaN(v.getTime())){alert("Invalid date format. Please use YYYY-MM-DD.");return}const b={id:c.id,scanPlace:p.value?c.otherScanPlaceDescription:c.scanPlace,scanType:c.scanType,scanDetail:m.value?c.otherScanDetailDescription:c.scanDetail,numberOfScans:c.scanType==="X-ray"?Number(c.numberOfScans):1,date:Oe.fromDate(v),dosage:Number(c.dosage),doctorAdditionalContext:c.doctorAdditionalContext};r("save",b)};return(k,v)=>(U(),Bn(xs,{name:"modal-fade"},{default:ns(()=>[t.show?(U(),G("div",{key:0,class:"modal-overlay",onClick:v[11]||(v[11]=rt(b=>k.$emit("close"),["self"]))},[f("div",{class:"modal-content",dir:_(i)==="ar"?"rtl":"ltr"},[f("button",{class:"close-modal-button",onClick:v[0]||(v[0]=b=>k.$emit("close"))},"×"),f("h3",null,I(t.scan?"Edit Other Source":"Add Other Source"),1),v[22]||(v[22]=f("p",{class:"subtitle"},"For miscellaneous radiation sources like background radiation or occupational exposure.",-1)),f("form",{onSubmit:rt(N,["prevent"]),class:"scan-form"},[f("div",SL,[v[13]||(v[13]=f("label",null,"Place of Scan",-1)),le(f("select",{"onUpdate:modelValue":v[1]||(v[1]=b=>c.scanPlace=b),required:""},[v[12]||(v[12]=f("option",{disabled:"",value:""},"Select...",-1)),(U(),G(et,null,pn(l,b=>f("option",{key:b.value,value:b.value},I(_(i)==="en"?b.en:b.ar),9,AL)),64))],512),[[wt,c.scanPlace]])]),p.value?(U(),G("div",PL,[v[14]||(v[14]=f("label",null,"Please specify place",-1)),le(f("input",{type:"text","onUpdate:modelValue":v[2]||(v[2]=b=>c.otherScanPlaceDescription=b),required:""},null,512),[[ve,c.otherScanPlaceDescription]])])):Ie("",!0),f("div",CL,[v[16]||(v[16]=f("label",null,"Scan Type",-1)),le(f("select",{"onUpdate:modelValue":v[3]||(v[3]=b=>c.scanType=b),required:""},v[15]||(v[15]=[f("option",{value:"X-ray"},"X-ray",-1),f("option",{value:"CT"},"CT",-1)]),512),[[wt,c.scanType]])]),f("div",RL,[v[18]||(v[18]=f("label",null,"Scan Detail / Protocol",-1)),le(f("select",{"onUpdate:modelValue":v[4]||(v[4]=b=>c.scanDetail=b),disabled:!h.value.length},[v[17]||(v[17]=f("option",{disabled:"",value:""},"Select...",-1)),(U(!0),G(et,null,pn(h.value,b=>(U(),G("option",{key:b.value,value:b.value},I(_(i)==="en"?b.en:b.ar),9,kL))),128))],8,DL),[[wt,c.scanDetail]])]),m.value?(U(),G("div",OL,[v[19]||(v[19]=f("label",null,"Please specify detail",-1)),le(f("input",{type:"text","onUpdate:modelValue":v[5]||(v[5]=b=>c.otherScanDetailDescription=b),required:""},null,512),[[ve,c.otherScanDetailDescription]])])):Ie("",!0),c.scanType==="X-ray"?(U(),G("div",xL,[v[20]||(v[20]=f("label",null,"Number of Scans",-1)),le(f("input",{type:"number","onUpdate:modelValue":v[6]||(v[6]=b=>c.numberOfScans=b),min:"1",required:""},null,512),[[ve,c.numberOfScans,void 0,{number:!0}]])])):Ie("",!0),f("div",NL,[v[21]||(v[21]=f("label",null,"History (Date)",-1)),le(f("input",{type:"date","onUpdate:modelValue":v[7]||(v[7]=b=>c.date=b),required:""},null,512),[[ve,c.date]])]),f("div",VL,[f("label",null,I(_(i)==="en"?"Your Exposure Context (Optional)":"سياق تعرضك (اختياري)"),1),le(f("textarea",{"onUpdate:modelValue":v[8]||(v[8]=b=>c.doctorAdditionalContext=b),rows:"2",placeholder:_(i)==="en"?"e.g., shielding used, distance from source...":"مثال: التدريع المستخدم، المسافة من المصدر..."},"          ",8,ML),[[ve,c.doctorAdditionalContext]])]),f("div",LL,[f("label",null,I(_(i)==="en"?"Occupational Dose (mSv)":"الجرعة المهنية (mSv)"),1),le(f("input",{type:"number",step:"0.00005","onUpdate:modelValue":v[9]||(v[9]=b=>c.dosage=b),placeholder:"Leave blank for AI estimate"},null,512),[[ve,c.dosage,void 0,{number:!0}]])]),f("div",$L,[f("button",{type:"submit",class:"action-button",disabled:t.isSaving},I(t.isSaving?_(i)==="en"?"Saving...":"جاري الحفظ...":_(i)==="en"?"Save":"حفظ"),9,FL),f("button",{type:"button",onClick:v[10]||(v[10]=b=>k.$emit("close")),class:"action-button secondary"},I(_(i)==="en"?"Cancel":"إلغاء"),1)])],32)],8,IL)])):Ie("",!0)]),_:1}))}},BL=Tt(UL,[["__scopeId","data-v-b77946e8"]]),jL=["dir"],qL={key:0,class:"loading-state"},HL={key:1,class:"empty-state"},zL={key:2,class:"table-container"},WL={class:"history-table"},GL=["title"],KL={class:"action-buttons"},YL=["onClick","title"],XL=["onClick","title"],QL={__name:"OtherScansTable",props:{scans:{type:Array,required:!0},isLoading:{type:Boolean,default:!1}},emits:["edit","delete"],setup(t,{emit:e}){const n=Ue("currentLanguage"),r=s=>!s||!s.toDate?"N/A":s.toDate().toLocaleDateString(n.value==="ar"?"ar-EG":"en-US");return(s,i)=>(U(),G("div",{class:"history-table-wrapper",dir:_(n)==="ar"?"rtl":"ltr"},[t.isLoading?(U(),G("div",qL,[Pe(_(bt),{icon:"spinner",spin:""}),f("span",null,I(_(n)==="en"?"Loading other sources...":"جاري تحميل المصادر الأخرى..."),1)])):!t.scans||t.scans.length===0?(U(),G("div",HL,[f("p",null,I(_(n)==="en"?"No other scan records found.":"لم يتم العثور على سجلات فحوصات أخرى."),1)])):(U(),G("div",zL,[f("table",WL,[f("thead",null,[f("tr",null,[f("th",null,I(_(n)==="en"?"Place":"المكان"),1),f("th",null,I(_(n)==="en"?"Type":"النوع"),1),f("th",null,I(_(n)==="en"?"Detail":"التفاصيل"),1),f("th",null,I(_(n)==="en"?"Context":"السياق"),1),f("th",null,I(_(n)==="en"?"Date":"التاريخ"),1),f("th",null,I(_(n)==="en"?"Dosage":"الجرعة")+" (mSv)",1),f("th",null,I(_(n)==="en"?"Actions":"الإجراءات"),1)])]),f("tbody",null,[(U(!0),G(et,null,pn(t.scans,o=>(U(),G("tr",{key:o.id},[f("td",null,I(o.scanPlace||"N/A"),1),f("td",null,I(o.scanType||"N/A"),1),f("td",null,I(o.scanDetail||"N/A"),1),f("td",{class:"context-cell",title:o.doctorAdditionalContext},I(o.doctorAdditionalContext||"N/A"),9,GL),f("td",null,I(r(o.date)),1),f("td",null,I(o.dosage??"N/A"),1),f("td",null,[f("div",KL,[f("button",{onClick:l=>s.$emit("edit",o),class:"action-button-icon edit-button",title:_(n)==="en"?"Edit":"تعديل"},[Pe(_(bt),{icon:"edit"})],8,YL),f("button",{onClick:l=>s.$emit("delete",o),class:"action-button-icon delete-button",title:_(n)==="en"?"Delete":"حذف"},[Pe(_(bt),{icon:"trash-alt"})],8,XL)])])]))),128))])])]))],8,jL))}},JL=Tt(QL,[["__scopeId","data-v-46c6e165"]]),ZL=["dir"],e6={class:"profile-section card"},t6={class:"card-header"},n6={key:0,class:"loading-state"},r6={key:1,class:"profile-details"},s6={key:0,class:"role-tag"},i6={key:1,class:"role-tag"},o6={key:0},a6={key:1},l6={key:2},c6={key:0},u6={key:0},h6={key:1},d6={class:"history-section card"},f6={class:"card-header"},p6={class:"history-section card"},m6={class:"card-header"},g6={class:"switch-link-container"},y6={__name:"ProfileView",setup(t){const e=on(),n=Di(),r=Ns(),s=Ue("currentLanguage"),i=Ue("triggerMsvRecalculation"),o=Se([]),l=Se([]),u=Se(!1),c=Se(!1),h=Se(!1),p=Se(null),m=Se(null),y=Se(!1),x=Se(null),N=Se(null),k=Se(!1),v=Re(()=>e.user?.uid),b=Re(()=>{if(!e.userProfile)return{displayName:e.user?.displayName||"",email:e.user?.email||""};const Te=de=>{if(!de)return"";const Z=de.toDate?de.toDate():new Date(de);return isNaN(Z)?"":Z.toISOString().split("T")[0]};return{...e.userProfile,displayName:e.user?.displayName,email:e.user?.email,birthDate:Te(e.userProfile.birthDate),estimatedDueDate:Te(e.userProfile.estimatedDueDate)}}),V=async()=>{v.value&&(o.value=await n.fetchScansForPatient(v.value),l.value=await n.fetchOtherScansForUser(v.value))},$=async Te=>{if(!v.value)return;const de={};await n.setUserProfile(v.value,de)?(e.setUserProfile(de),u.value=!1,i&&i()):alert(`Failed to save profile. Error: ${n.error}`)},z=async Te=>{if(!v.value)return;const de={...Te,patientId:v.value};(de.id?await n.updateScan(de.id,de):await n.createScan(de))?(c.value=!1,await V(),i&&i()):alert(`Failed to save scan: ${n.error}`)},Y=async()=>{if(!m.value?.id)return;await n.deleteScan(m.value.id)?(h.value=!1,await V(),i&&i()):alert(`Failed to delete scan: ${n.error}`)},A=async Te=>{(Te.id?await n.updateOtherScan(Te.id,Te):await n.createOtherScan(Te))?(y.value=!1,console.log("[ProfileView] Save successful. Waiting 1 second before refetching data..."),setTimeout(async()=>{console.log("[ProfileView] Refetching data now..."),await V(),i&&i()},1e3)):alert(`Failed to save other scan: ${n.error}`)},E=async()=>{if(!N.value?.id)return;await n.deleteOtherScan(N.value.id)?(k.value=!1,await V(),i&&i()):alert(`Failed to delete other scan: ${n.error}`)},T=()=>{p.value=null,c.value=!0},P=Te=>{p.value=Te,c.value=!0},O=Te=>{m.value=Te,h.value=!0},R=()=>{x.value=null,y.value=!0},S=Te=>{x.value=Te,y.value=!0},Ve=Te=>{N.value=Te,k.value=!0};return qh(()=>{tt(()=>e.isAuthReady,Te=>{Te&&v.value&&V()},{immediate:!0})}),(Te,de)=>(U(),G("div",{class:"profile-page",dir:_(s)==="ar"?"rtl":"ltr"},[f("div",e6,[f("div",t6,[f("h2",null,I(_(s)==="en"?"My Profile":"ملفي الشخصي"),1),f("button",{onClick:de[0]||(de[0]=Z=>u.value=!0),class:"action-button"},I(_(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1)]),_(e).isProfileLoading?(U(),G("div",n6,"Loading profile...")):b.value?(U(),G("div",r6,[f("p",null,[f("strong",null,I(_(s)==="en"?"Name:":"اﻹسم:"),1),f("span",null,I(b.value.displayName),1)]),f("p",null,[f("strong",null,I(_(s)==="en"?"Email:":"البريد اﻹلكتروني:"),1),f("span",null,I(b.value.email),1)]),f("p",null,[f("strong",null,I(_(s)==="en"?"Role":"الدور")+":",1),b.value.role==="doctor"?(U(),G("span",s6,I(_(s)==="en"?"Doctor":"طبيب"),1)):(U(),G("span",i6,I(_(s)==="en"?"Patient":"مريض"),1))]),f("p",null,[f("strong",null,I(_(s)==="en"?"Birth Date:":"تاريخ الميلاد:"),1),f("span",null,I(b.value.birthDate||"Not set"),1)]),f("p",null,[f("strong",null,I(_(s)==="en"?"Weight:":"الوزن:"),1),f("span",null,I(b.value.weight?`${b.value.weight} kg`:"Not set"),1)]),f("p",null,[f("strong",null,I(_(s)==="en"?"Gender: ":"الجنس: "),1),b.value.gender==="male"?(U(),G("span",o6,I(_(s)==="en"?"Male":"ذكر"),1)):b.value.gender==="female"?(U(),G("span",a6,I(_(s)==="en"?"Female":"أنثى"),1)):(U(),G("span",l6,"Not set"))]),b.value.gender==="female"?(U(),G("p",c6,[f("strong",null,I(_(s)==="en"?"Pregnant: ":"حامل: "),1),b.value.isPregnant?(U(),G("span",u6,I(_(s)==="en"?"Yes":"نعم")+" ("+I(_(s)==="en"?"Due:":"المتوقع:")+" "+I(b.value.estimatedDueDate)+")",1)):(U(),G("span",h6,I(_(s)==="en"?"No":"لا"),1))])):Ie("",!0),f("p",null,[f("strong",null,I(_(s)==="en"?"Allergies:":"الحساسية:"),1),f("span",null,I(b.value.allergies?.join(", ")||"None"),1)]),f("p",null,[f("strong",null,I(_(s)==="en"?"Medical History:":"التاريخ الطبي:"),1),f("span",null,I(b.value.medicalHistory?.join(", ")||"None"),1)])])):Ie("",!0)]),f("div",d6,[f("div",f6,[f("h2",null,I(_(s)==="en"?"Personal Scan History":"تاريخ الفحوصات الشخصية"),1),f("button",{onClick:T,class:"action-button"},I(_(s)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1)]),Pe(TL,{scans:o.value,"is-loading":_(n).loading,"is-personal-view":!0,onEdit:P,onDelete:O},null,8,["scans","is-loading"])]),f("div",p6,[f("div",m6,[f("h2",null,I(_(s)==="en"?"Other Scans / Sources":"الفحوصات / المصادر الأخرى"),1),f("button",{onClick:R,class:"action-button"},I(_(s)==="en"?"Add Other Source":"إضافة مصدر آخر"),1)]),Pe(JL,{scans:l.value,"is-loading":_(n).loading,onEdit:S,onDelete:Ve},null,8,["scans","is-loading"])]),Pe(NM,{show:u.value,"profile-data":b.value,onClose:de[1]||(de[1]=Z=>u.value=!1),onSave:$},null,8,["show","profile-data"]),Pe(iL,{show:c.value,scan:p.value,"is-saving":_(n).loading,onClose:de[2]||(de[2]=Z=>c.value=!1),onSave:z},null,8,["show","scan","is-saving"]),Pe(Ml,{show:h.value,title:"Delete Scan",message:"Are you sure you want to delete this scan record?",onClose:de[3]||(de[3]=Z=>h.value=!1),onConfirm:Y},null,8,["show"]),Pe(BL,{show:y.value,scan:x.value,"is-saving":_(n).loading,onClose:de[4]||(de[4]=Z=>y.value=!1),onSave:A},null,8,["show","scan","is-saving"]),Pe(Ml,{show:k.value,title:"Delete Other Scan",message:"Are you sure you want to delete this record?",onClose:de[5]||(de[5]=Z=>k.value=!1),onConfirm:E},null,8,["show"]),f("div",g6,[f("a",{href:"#",onClick:de[6]||(de[6]=rt(Z=>_(r).push("/dashboard"),["prevent"]))},I(_(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])],8,ZL))}},_6=Tt(y6,[["__scopeId","data-v-69e1071a"]]),Ll=HT({history:bT("/X-ray"),routes:[{path:"/",name:"signup",component:Q2},{path:"/signin",name:"signin",component:vk},{path:"/dashboard",name:"dashboard",component:Z4,meta:{requiresAuth:!0}},{path:"/recommend/:patientId?",name:"recommend",component:vO,meta:{requiresAuth:!0}},{path:"/patients",name:"patients",component:E4,meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:_6,meta:{requiresAuth:!0}},{path:"/resetpassword",name:"resetpassword",component:mM},{path:"/__/auth/handler",name:"firebaseAuthHandler",component:{render(){return ci("div")}},beforeEnter:(t,e,n)=>{n()}},{path:"/:catchAll(.*)",redirect:"/dashboard"},{path:"/__/auth/iframe",name:"firebaseAuthIframeHandler",component:{render(){return ci("div")}},beforeEnter:(t,e,n)=>{n()}}]});Ll.beforeEach(async(t,e,n)=>{const r=on();r.isAuthReady||await new Promise(l=>{const u=r.$subscribe((c,h)=>{h.isAuthReady&&(u(),l())})});const s=!!r.user;if(t.path.startsWith("/__/auth/handler")||t.path.startsWith("/__/auth/iframe")){n();return}console.log(`Navigating to: ${t.path} (name: ${t.name})`),console.log(`isAuthenticated: ${s}`);const o=["signup","signin","resetpassword","newpassword"].includes(t.name);s?o?(console.log(`Redirecting authenticated user from ${t.name} to /dashboard.`),n("/dashboard")):(console.log(`Allowing authenticated access to ${t.path}.`),n()):o?(console.log(`Allowing unauthenticated access to ${t.name}.`),n()):(console.log(`Redirecting unauthenticated user from ${t.path} (requires auth) to /signin.`),n("/signin"))});var v6="firebase",b6="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur(v6,b6,"app");/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const w6={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},E6=w6,T6={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},I6=T6,S6={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},A6=S6,P6={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},C6={prefix:"fas",iconName:"file-medical",icon:[384,512,[],"f477","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"]},R6={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},D6={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};bN.add(P6,I6,E6,C6,R6,D6,A6);const k6={apiKey:"AIzaSyBKiw2ibjMQB-i_sMorpK5nXyHb87_6uZA",authDomain:"x-ray-b0cb8.firebaseapp.com",projectId:"x-ray-b0cb8",storageBucket:"x-ray-b0cb8.firebasestorage.app",messagingSenderId:"382664693760",appId:"1:382664693760:web:7582abe58d70b3260f20e5",measurementId:"G-5MKNMY9VGY"},zb=z_(k6),tf=nC(zb),O6=Js(zb),gr=BE(C2),x6=GT();gr.use(x6);gr.use(Ll);gr.component("font-awesome-icon",bt);const Ph=Se(null),Wb=Se(!1),ro=on();ro.initAuth(tf);gv(tf,t=>{if(Ph.value=t?t.uid:null,ro.user=t,ro.isAuthenticated=!!t,Wb.value=!0,t){const e=Ll.currentRoute.value.name;["signup","signin","resetpassword","newpassword"].includes(e)&&Ll.push("/dashboard")}else Ph.value=null,ro.user=null,ro.isAuthenticated=!1});gr.provide("db",O6);gr.provide("auth",tf);gr.provide("currentUserId",Ph);gr.provide("isAuthReady",Wb);gr.provide("appId",typeof __app_id<"u"?__app_id:"default-app-id");gr.mount("#app");
