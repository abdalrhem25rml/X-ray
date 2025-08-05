(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ch(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ke={},Xs=[],Nn=()=>{},vb=()=>!1,Vl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Rh=t=>t.startsWith("onUpdate:"),vt=Object.assign,Dh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},wb=Object.prototype.hasOwnProperty,qe=(t,e)=>wb.call(t,e),pe=Array.isArray,Js=t=>Ho(t)==="[object Map]",_i=t=>Ho(t)==="[object Set]",Qf=t=>Ho(t)==="[object Date]",Te=t=>typeof t=="function",ot=t=>typeof t=="string",Un=t=>typeof t=="symbol",Ye=t=>t!==null&&typeof t=="object",oy=t=>(Ye(t)||Te(t))&&Te(t.then)&&Te(t.catch),ay=Object.prototype.toString,Ho=t=>ay.call(t),bb=t=>Ho(t).slice(8,-1),ly=t=>Ho(t)==="[object Object]",kh=t=>ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=Ch(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ml=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Eb=/-(\w)/g,hn=Ml(t=>t.replace(Eb,(e,n)=>n?n.toUpperCase():"")),Tb=/\B([A-Z])/g,xs=Ml(t=>t.replace(Tb,"-$1").toLowerCase()),Ll=Ml(t=>t.charAt(0).toUpperCase()+t.slice(1)),Uc=Ml(t=>t?`on${Ll(t)}`:""),$r=(t,e)=>!Object.is(t,e),Ua=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},bu=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},nl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ib=t=>{const e=ot(t)?Number(t):NaN;return isNaN(e)?t:e};let Xf;const Fl=()=>Xf||(Xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $l(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ot(r)?Cb(r):$l(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ot(t)||Ye(t))return t}const Ab=/;(?![^(]*\))/g,Sb=/:([^]+)/,Pb=/\/\*[^]*?\*\//g;function Cb(t){const e={};return t.replace(Pb,"").split(Ab).forEach(n=>{if(n){const r=n.split(Sb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Is(t){let e="";if(ot(t))e=t;else if(pe(t))for(let n=0;n<t.length;n++){const r=Is(t[n]);r&&(e+=r+" ")}else if(Ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Db=Ch(Rb);function cy(t){return!!t||t===""}function kb(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=qo(t[r],e[r]);return n}function qo(t,e){if(t===e)return!0;let n=Qf(t),r=Qf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Un(t),r=Un(e),n||r)return t===e;if(n=pe(t),r=pe(e),n||r)return n&&r?kb(t,e):!1;if(n=Ye(t),r=Ye(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!qo(t[o],e[o]))return!1}}return String(t)===String(e)}function Oh(t,e){return t.findIndex(n=>qo(n,e))}const uy=t=>!!(t&&t.__v_isRef===!0),E=t=>ot(t)?t:t==null?"":pe(t)||Ye(t)&&(t.toString===ay||!Te(t.toString))?uy(t)?E(t.value):JSON.stringify(t,hy,2):String(t),hy=(t,e)=>uy(e)?hy(t,e.value):Js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Bc(r,i)+" =>"]=s,n),{})}:_i(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Bc(n))}:Un(e)?Bc(e):Ye(e)&&!pe(e)&&!ly(e)?String(e):e,Bc=(t,e="")=>{var n;return Un(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class dy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){++this._on===1&&(this.prevScope=Nt,Nt=this)}off(){this._on>0&&--this._on===0&&(Nt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function fy(t){return new dy(t)}function py(){return Nt}function Ob(t,e=!1){Nt&&Nt.cleanups.push(t)}let Qe;const jc=new WeakSet;class my{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&Nt.active&&Nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jc.has(this)&&(jc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||yy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jf(this),_y(this);const e=Qe,n=_n;Qe=this,_n=!0;try{return this.fn()}finally{vy(this),Qe=e,_n=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vh(e);this.deps=this.depsTail=void 0,Jf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Eu(this)&&this.run()}get dirty(){return Eu(this)}}let gy=0,ro,so;function yy(t,e=!1){if(t.flags|=8,e){t.next=so,so=t;return}t.next=ro,ro=t}function xh(){gy++}function Nh(){if(--gy>0)return;if(so){let e=so;for(so=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ro;){let e=ro;for(ro=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function _y(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vy(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Vh(r),xb(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Eu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function wy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Eo)||(t.globalVersion=Eo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Eu(t))))return;t.flags|=2;const e=t.dep,n=Qe,r=_n;Qe=t,_n=!0;try{_y(t);const s=t.fn(t._value);(e.version===0||$r(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Qe=n,_n=r,vy(t),t.flags&=-3}}function Vh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function xb(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _n=!0;const by=[];function sr(){by.push(_n),_n=!1}function ir(){const t=by.pop();_n=t===void 0?!0:t}function Jf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Qe;Qe=void 0;try{e()}finally{Qe=n}}}let Eo=0;class Nb{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Qe||!_n||Qe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Qe)n=this.activeLink=new Nb(Qe,this),Qe.deps?(n.prevDep=Qe.depsTail,Qe.depsTail.nextDep=n,Qe.depsTail=n):Qe.deps=Qe.depsTail=n,Ey(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Qe.depsTail,n.nextDep=void 0,Qe.depsTail.nextDep=n,Qe.depsTail=n,Qe.deps===n&&(Qe.deps=r)}return n}trigger(e){this.version++,Eo++,this.notify(e)}notify(e){xh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nh()}}}function Ey(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ey(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const rl=new WeakMap,bs=Symbol(""),Tu=Symbol(""),To=Symbol("");function Mt(t,e,n){if(_n&&Qe){let r=rl.get(t);r||rl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Mh),s.map=r,s.key=n),s.track()}}function Yn(t,e,n,r,s,i){const o=rl.get(t);if(!o){Eo++;return}const c=l=>{l&&l.trigger()};if(xh(),e==="clear")o.forEach(c);else{const l=pe(t),u=l&&kh(n);if(l&&n==="length"){const h=Number(r);o.forEach((m,f)=>{(f==="length"||f===To||!Un(f)&&f>=h)&&c(m)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(To)),e){case"add":l?u&&c(o.get("length")):(c(o.get(bs)),Js(t)&&c(o.get(Tu)));break;case"delete":l||(c(o.get(bs)),Js(t)&&c(o.get(Tu)));break;case"set":Js(t)&&c(o.get(bs));break}}Nh()}function Vb(t,e){const n=rl.get(t);return n&&n.get(e)}function js(t){const e=Fe(t);return e===t?e:(Mt(e,"iterate",To),un(t)?e:e.map(Pt))}function Ul(t){return Mt(t=Fe(t),"iterate",To),t}const Mb={__proto__:null,[Symbol.iterator](){return Hc(this,Symbol.iterator,Pt)},concat(...t){return js(this).concat(...t.map(e=>pe(e)?js(e):e))},entries(){return Hc(this,"entries",t=>(t[1]=Pt(t[1]),t))},every(t,e){return zn(this,"every",t,e,void 0,arguments)},filter(t,e){return zn(this,"filter",t,e,n=>n.map(Pt),arguments)},find(t,e){return zn(this,"find",t,e,Pt,arguments)},findIndex(t,e){return zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zn(this,"findLast",t,e,Pt,arguments)},findLastIndex(t,e){return zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return qc(this,"includes",t)},indexOf(...t){return qc(this,"indexOf",t)},join(t){return js(this).join(t)},lastIndexOf(...t){return qc(this,"lastIndexOf",t)},map(t,e){return zn(this,"map",t,e,void 0,arguments)},pop(){return ji(this,"pop")},push(...t){return ji(this,"push",t)},reduce(t,...e){return Zf(this,"reduce",t,e)},reduceRight(t,...e){return Zf(this,"reduceRight",t,e)},shift(){return ji(this,"shift")},some(t,e){return zn(this,"some",t,e,void 0,arguments)},splice(...t){return ji(this,"splice",t)},toReversed(){return js(this).toReversed()},toSorted(t){return js(this).toSorted(t)},toSpliced(...t){return js(this).toSpliced(...t)},unshift(...t){return ji(this,"unshift",t)},values(){return Hc(this,"values",Pt)}};function Hc(t,e,n){const r=Ul(t),s=r[e]();return r!==t&&!un(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Lb=Array.prototype;function zn(t,e,n,r,s,i){const o=Ul(t),c=o!==t&&!un(t),l=o[e];if(l!==Lb[e]){const m=l.apply(t,i);return c?Pt(m):m}let u=n;o!==t&&(c?u=function(m,f){return n.call(this,Pt(m),f,t)}:n.length>2&&(u=function(m,f){return n.call(this,m,f,t)}));const h=l.call(o,u,r);return c&&s?s(h):h}function Zf(t,e,n,r){const s=Ul(t);let i=n;return s!==t&&(un(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,Pt(c),l,t)}),s[e](i,...r)}function qc(t,e,n){const r=Fe(t);Mt(r,"iterate",To);const s=r[e](...n);return(s===-1||s===!1)&&$h(n[0])?(n[0]=Fe(n[0]),r[e](...n)):s}function ji(t,e,n=[]){sr(),xh();const r=Fe(t)[e].apply(t,n);return Nh(),ir(),r}const Fb=Ch("__proto__,__v_isRef,__isVue"),Ty=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Un));function $b(t){Un(t)||(t=String(t));const e=Fe(this);return Mt(e,"has",t),e.hasOwnProperty(t)}class Iy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Yb:Cy:i?Py:Sy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=pe(e);if(!s){let l;if(o&&(l=Mb[n]))return l;if(n==="hasOwnProperty")return $b}const c=Reflect.get(e,n,ut(e)?e:r);return(Un(n)?Ty.has(n):Fb(n))||(s||Mt(e,"get",n),i)?c:ut(c)?o&&kh(n)?c:c.value:Ye(c)?s?Dy(c):fr(c):c}}class Ay extends Iy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Wr(i);if(!un(r)&&!Wr(r)&&(i=Fe(i),r=Fe(r)),!pe(e)&&ut(i)&&!ut(r))return l?!1:(i.value=r,!0)}const o=pe(e)&&kh(n)?Number(n)<e.length:qe(e,n),c=Reflect.set(e,n,r,ut(e)?e:s);return e===Fe(s)&&(o?$r(r,i)&&Yn(e,"set",n,r):Yn(e,"add",n,r)),c}deleteProperty(e,n){const r=qe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Un(n)||!Ty.has(n))&&Mt(e,"has",n),r}ownKeys(e){return Mt(e,"iterate",pe(e)?"length":bs),Reflect.ownKeys(e)}}class Ub extends Iy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Bb=new Ay,jb=new Ub,Hb=new Ay(!0);const Iu=t=>t,Sa=t=>Reflect.getPrototypeOf(t);function qb(t,e,n){return function(...r){const s=this.__v_raw,i=Fe(s),o=Js(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Iu:e?sl:Pt;return!e&&Mt(i,"iterate",l?Tu:bs),{next(){const{value:m,done:f}=u.next();return f?{value:m,done:f}:{value:c?[h(m[0]),h(m[1])]:h(m),done:f}},[Symbol.iterator](){return this}}}}function Pa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function zb(t,e){const n={get(s){const i=this.__v_raw,o=Fe(i),c=Fe(s);t||($r(s,c)&&Mt(o,"get",s),Mt(o,"get",c));const{has:l}=Sa(o),u=e?Iu:t?sl:Pt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Mt(Fe(s),"iterate",bs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Fe(i),c=Fe(s);return t||($r(s,c)&&Mt(o,"has",s),Mt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Fe(c),u=e?Iu:t?sl:Pt;return!t&&Mt(l,"iterate",bs),c.forEach((h,m)=>s.call(i,u(h),u(m),o))}};return vt(n,t?{add:Pa("add"),set:Pa("set"),delete:Pa("delete"),clear:Pa("clear")}:{add(s){!e&&!un(s)&&!Wr(s)&&(s=Fe(s));const i=Fe(this);return Sa(i).has.call(i,s)||(i.add(s),Yn(i,"add",s,s)),this},set(s,i){!e&&!un(i)&&!Wr(i)&&(i=Fe(i));const o=Fe(this),{has:c,get:l}=Sa(o);let u=c.call(o,s);u||(s=Fe(s),u=c.call(o,s));const h=l.call(o,s);return o.set(s,i),u?$r(i,h)&&Yn(o,"set",s,i):Yn(o,"add",s,i),this},delete(s){const i=Fe(this),{has:o,get:c}=Sa(i);let l=o.call(i,s);l||(s=Fe(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Yn(i,"delete",s,void 0),u},clear(){const s=Fe(this),i=s.size!==0,o=s.clear();return i&&Yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=qb(s,t,e)}),n}function Lh(t,e){const n=zb(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(qe(n,s)&&s in r?n:r,s,i)}const Wb={get:Lh(!1,!1)},Gb={get:Lh(!1,!0)},Kb={get:Lh(!0,!1)};const Sy=new WeakMap,Py=new WeakMap,Cy=new WeakMap,Yb=new WeakMap;function Qb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xb(t){return t.__v_skip||!Object.isExtensible(t)?0:Qb(bb(t))}function fr(t){return Wr(t)?t:Fh(t,!1,Bb,Wb,Sy)}function Ry(t){return Fh(t,!1,Hb,Gb,Py)}function Dy(t){return Fh(t,!0,jb,Kb,Cy)}function Fh(t,e,n,r,s){if(!Ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Xb(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Ur(t){return Wr(t)?Ur(t.__v_raw):!!(t&&t.__v_isReactive)}function Wr(t){return!!(t&&t.__v_isReadonly)}function un(t){return!!(t&&t.__v_isShallow)}function $h(t){return t?!!t.__v_raw:!1}function Fe(t){const e=t&&t.__v_raw;return e?Fe(e):t}function Uh(t){return!qe(t,"__v_skip")&&Object.isExtensible(t)&&bu(t,"__v_skip",!0),t}const Pt=t=>Ye(t)?fr(t):t,sl=t=>Ye(t)?Dy(t):t;function ut(t){return t?t.__v_isRef===!0:!1}function Ce(t){return ky(t,!1)}function Jb(t){return ky(t,!0)}function ky(t,e){return ut(t)?t:new Zb(t,e)}class Zb{constructor(e,n){this.dep=new Mh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Fe(e),this._value=n?e:Pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||un(e)||Wr(e);e=r?e:Fe(e),$r(e,n)&&(this._rawValue=e,this._value=r?e:Pt(e),this.dep.trigger())}}function y(t){return ut(t)?t.value:t}const eE={get:(t,e,n)=>e==="__v_raw"?t:y(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ut(s)&&!ut(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Oy(t){return Ur(t)?t:new Proxy(t,eE)}function tE(t){const e=pe(t)?new Array(t.length):{};for(const n in t)e[n]=rE(t,n);return e}class nE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Vb(Fe(this._object),this._key)}}function rE(t,e,n){const r=t[e];return ut(r)?r:new nE(t,e,n)}class sE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Mh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Eo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Qe!==this)return yy(this,!0),!0}get value(){const e=this.dep.track();return wy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function iE(t,e,n=!1){let r,s;return Te(t)?r=t:(r=t.get,s=t.set),new sE(r,s,n)}const Ca={},il=new WeakMap;let ms;function oE(t,e=!1,n=ms){if(n){let r=il.get(n);r||il.set(n,r=[]),r.push(t)}}function aE(t,e,n=Ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=$=>s?$:un($)||s===!1||s===0?Qn($,1):Qn($);let h,m,f,_,k=!1,C=!1;if(ut(t)?(m=()=>t.value,k=un(t)):Ur(t)?(m=()=>u(t),k=!0):pe(t)?(C=!0,k=t.some($=>Ur($)||un($)),m=()=>t.map($=>{if(ut($))return $.value;if(Ur($))return u($);if(Te($))return l?l($,2):$()})):Te(t)?e?m=l?()=>l(t,2):t:m=()=>{if(f){sr();try{f()}finally{ir()}}const $=ms;ms=h;try{return l?l(t,3,[_]):t(_)}finally{ms=$}}:m=Nn,e&&s){const $=m,F=s===!0?1/0:s;m=()=>Qn($(),F)}const A=py(),N=()=>{h.stop(),A&&A.active&&Dh(A.effects,h)};if(i&&e){const $=e;e=(...F)=>{$(...F),N()}}let x=C?new Array(t.length).fill(Ca):Ca;const M=$=>{if(!(!(h.flags&1)||!h.dirty&&!$))if(e){const F=h.run();if(s||k||(C?F.some((B,T)=>$r(B,x[T])):$r(F,x))){f&&f();const B=ms;ms=h;try{const T=[F,x===Ca?void 0:C&&x[0]===Ca?[]:x,_];x=F,l?l(e,3,T):e(...T)}finally{ms=B}}}else h.run()};return c&&c(M),h=new my(m),h.scheduler=o?()=>o(M,!1):M,_=$=>oE($,!1,h),f=h.onStop=()=>{const $=il.get(h);if($){if(l)l($,4);else for(const F of $)F();il.delete(h)}},e?r?M(!0):x=h.run():o?o(M.bind(null,!0),!0):h.run(),N.pause=h.pause.bind(h),N.resume=h.resume.bind(h),N.stop=N,N}function Qn(t,e=1/0,n){if(e<=0||!Ye(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ut(t))Qn(t.value,e,n);else if(pe(t))for(let r=0;r<t.length;r++)Qn(t[r],e,n);else if(_i(t)||Js(t))t.forEach(r=>{Qn(r,e,n)});else if(ly(t)){for(const r in t)Qn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Qn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zo(t,e,n,r){try{return r?t(...r):t()}catch(s){Bl(s,e,n)}}function wn(t,e,n,r){if(Te(t)){const s=zo(t,e,n,r);return s&&oy(s)&&s.catch(i=>{Bl(i,e,n)}),s}if(pe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(wn(t[i],e,n,r));return s}}function Bl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ke;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const h=c.ec;if(h){for(let m=0;m<h.length;m++)if(h[m](t,l,u)===!1)return}c=c.parent}if(i){sr(),zo(i,null,10,[t,l,u]),ir();return}}lE(t,n,s,r,o)}function lE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const zt=[];let Pn=-1;const Zs=[];let Dr=null,qs=0;const xy=Promise.resolve();let ol=null;function jl(t){const e=ol||xy;return t?e.then(this?t.bind(this):t):e}function cE(t){let e=Pn+1,n=zt.length;for(;e<n;){const r=e+n>>>1,s=zt[r],i=Io(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Bh(t){if(!(t.flags&1)){const e=Io(t),n=zt[zt.length-1];!n||!(t.flags&2)&&e>=Io(n)?zt.push(t):zt.splice(cE(e),0,t),t.flags|=1,Ny()}}function Ny(){ol||(ol=xy.then(My))}function uE(t){pe(t)?Zs.push(...t):Dr&&t.id===-1?Dr.splice(qs+1,0,t):t.flags&1||(Zs.push(t),t.flags|=1),Ny()}function ep(t,e,n=Pn+1){for(;n<zt.length;n++){const r=zt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;zt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Vy(t){if(Zs.length){const e=[...new Set(Zs)].sort((n,r)=>Io(n)-Io(r));if(Zs.length=0,Dr){Dr.push(...e);return}for(Dr=e,qs=0;qs<Dr.length;qs++){const n=Dr[qs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Dr=null,qs=0}}const Io=t=>t.id==null?t.flags&2?-1:1/0:t.id;function My(t){try{for(Pn=0;Pn<zt.length;Pn++){const e=zt[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<zt.length;Pn++){const e=zt[Pn];e&&(e.flags&=-2)}Pn=-1,zt.length=0,Vy(),ol=null,(zt.length||Zs.length)&&My()}}let Gt=null,Ly=null;function al(t){const e=Gt;return Gt=t,Ly=t&&t.type.__scopeId||null,e}function bn(t,e=Gt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&hp(-1);const i=al(e);let o;try{o=t(...s)}finally{al(i),r._d&&hp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ue(t,e){if(Gt===null)return t;const n=Gl(Gt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ke]=e[s];i&&(Te(i)&&(i={mounted:i,updated:i}),i.deep&&Qn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function hs(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(sr(),wn(l,n,8,[t.el,c,t,e]),ir())}}const hE=Symbol("_vte"),Fy=t=>t.__isTeleport,kr=Symbol("_leaveCb"),Ra=Symbol("_enterCb");function dE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hh(()=>{t.isMounted=!0}),Wy(()=>{t.isUnmounting=!0}),t}const ln=[Function,Array],$y={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},Uy=t=>{const e=t.subTree;return e.component?Uy(e.component):e},fE={name:"BaseTransition",props:$y,setup(t,{slots:e}){const n=h0(),r=dE();return()=>{const s=e.default&&Hy(e.default(),!0);if(!s||!s.length)return;const i=By(s),o=Fe(t),{mode:c}=o;if(r.isLeaving)return zc(i);const l=tp(i);if(!l)return zc(i);let u=Au(l,o,r,n,m=>u=m);l.type!==Wt&&Ao(l,u);let h=n.subTree&&tp(n.subTree);if(h&&h.type!==Wt&&!ys(l,h)&&Uy(n).type!==Wt){let m=Au(h,o,r,n);if(Ao(h,m),c==="out-in"&&l.type!==Wt)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete m.afterLeave,h=void 0},zc(i);c==="in-out"&&l.type!==Wt?m.delayLeave=(f,_,k)=>{const C=jy(r,h);C[String(h.key)]=h,f[kr]=()=>{_(),f[kr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{k(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function By(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Wt){e=n;break}}return e}const pE=fE;function jy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Au(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:m,onBeforeLeave:f,onLeave:_,onAfterLeave:k,onLeaveCancelled:C,onBeforeAppear:A,onAppear:N,onAfterAppear:x,onAppearCancelled:M}=e,$=String(t.key),F=jy(n,t),B=(b,S)=>{b&&wn(b,r,9,S)},T=(b,S)=>{const O=S[1];B(b,S),pe(b)?b.every(R=>R.length<=1)&&O():b.length<=1&&O()},v={mode:o,persisted:c,beforeEnter(b){let S=l;if(!n.isMounted)if(i)S=A||l;else return;b[kr]&&b[kr](!0);const O=F[$];O&&ys(t,O)&&O.el[kr]&&O.el[kr](),B(S,[b])},enter(b){let S=u,O=h,R=m;if(!n.isMounted)if(i)S=N||u,O=x||h,R=M||m;else return;let I=!1;const Ve=b[Ra]=ye=>{I||(I=!0,ye?B(R,[b]):B(O,[b]),v.delayedLeave&&v.delayedLeave(),b[Ra]=void 0)};S?T(S,[b,Ve]):Ve()},leave(b,S){const O=String(t.key);if(b[Ra]&&b[Ra](!0),n.isUnmounting)return S();B(f,[b]);let R=!1;const I=b[kr]=Ve=>{R||(R=!0,S(),Ve?B(C,[b]):B(k,[b]),b[kr]=void 0,F[O]===t&&delete F[O])};F[O]=t,_?T(_,[b,I]):I()},clone(b){const S=Au(b,e,n,r,s);return s&&s(S),S}};return v}function zc(t){if(Hl(t))return t=Gr(t),t.children=null,t}function tp(t){if(!Hl(t))return Fy(t.type)&&t.children?By(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Te(n.default))return n.default()}}function Ao(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ao(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Hy(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===st?(o.patchFlag&128&&s++,r=r.concat(Hy(o.children,e,c))):(e||o.type!==Wt)&&r.push(c!=null?Gr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function jh(t,e){return Te(t)?vt({name:t.name},e,{setup:t}):t}function qy(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function io(t,e,n,r,s=!1){if(pe(t)){t.forEach((k,C)=>io(k,e&&(pe(e)?e[C]:e),n,r,s));return}if(oo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&io(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Gl(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,h=c.refs===Ke?c.refs={}:c.refs,m=c.setupState,f=Fe(m),_=m===Ke?()=>!1:k=>qe(f,k);if(u!=null&&u!==l&&(ot(u)?(h[u]=null,_(u)&&(m[u]=null)):ut(u)&&(u.value=null)),Te(l))zo(l,c,12,[o,h]);else{const k=ot(l),C=ut(l);if(k||C){const A=()=>{if(t.f){const N=k?_(l)?m[l]:h[l]:l.value;s?pe(N)&&Dh(N,i):pe(N)?N.includes(i)||N.push(i):k?(h[l]=[i],_(l)&&(m[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else k?(h[l]=o,_(l)&&(m[l]=o)):C&&(l.value=o,t.k&&(h[t.k]=o))};o?(A.id=-1,en(A,n)):A()}}}Fl().requestIdleCallback;Fl().cancelIdleCallback;const oo=t=>!!t.type.__asyncLoader,Hl=t=>t.type.__isKeepAlive;function mE(t,e){zy(t,"a",e)}function gE(t,e){zy(t,"da",e)}function zy(t,e,n=_t){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ql(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Hl(s.parent.vnode)&&yE(r,e,n,s),s=s.parent}}function yE(t,e,n,r){const s=ql(e,t,r,!0);Gy(()=>{Dh(r[e],s)},n)}function ql(t,e,n=_t,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{sr();const c=Wo(n),l=wn(e,n,t,o);return c(),ir(),l});return r?s.unshift(i):s.push(i),i}}const pr=t=>(e,n=_t)=>{(!Po||t==="sp")&&ql(t,(...r)=>e(...r),n)},_E=pr("bm"),Hh=pr("m"),vE=pr("bu"),wE=pr("u"),Wy=pr("bum"),Gy=pr("um"),bE=pr("sp"),EE=pr("rtg"),TE=pr("rtc");function IE(t,e=_t){ql("ec",t,e)}const AE="components",Ky=Symbol.for("v-ndc");function SE(t){return ot(t)?PE(AE,t,!1)||t:t||Ky}function PE(t,e,n=!0,r=!1){const s=Gt||_t;if(s){const i=s.type;{const c=g0(i,!1);if(c&&(c===e||c===hn(e)||c===Ll(hn(e))))return i}const o=np(s[t]||i[t],e)||np(s.appContext[t],e);return!o&&r?i:o}}function np(t,e){return t&&(t[e]||t[hn(e)]||t[Ll(hn(e))])}function or(t,e,n,r){let s;const i=n,o=pe(t);if(o||ot(t)){const c=o&&Ur(t);let l=!1,u=!1;c&&(l=!un(t),u=Wr(t),t=Ul(t)),s=new Array(t.length);for(let h=0,m=t.length;h<m;h++)s[h]=e(l?u?sl(Pt(t[h])):Pt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ye(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const h=c[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}const Su=t=>t?p_(t)?Gl(t):Su(t.parent):null,ao=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Su(t.parent),$root:t=>Su(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Qy(t),$forceUpdate:t=>t.f||(t.f=()=>{Bh(t.update)}),$nextTick:t=>t.n||(t.n=jl.bind(t.proxy)),$watch:t=>QE.bind(t)}),Wc=(t,e)=>t!==Ke&&!t.__isScriptSetup&&qe(t,e),CE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Wc(r,e))return o[e]=1,r[e];if(s!==Ke&&qe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&qe(u,e))return o[e]=3,i[e];if(n!==Ke&&qe(n,e))return o[e]=4,n[e];Pu&&(o[e]=0)}}const h=ao[e];let m,f;if(h)return e==="$attrs"&&Mt(t.attrs,"get",""),h(t);if((m=c.__cssModules)&&(m=m[e]))return m;if(n!==Ke&&qe(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,qe(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Wc(s,e)?(s[e]=n,!0):r!==Ke&&qe(r,e)?(r[e]=n,!0):qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ke&&qe(t,o)||Wc(e,o)||(c=i[0])&&qe(c,o)||qe(r,o)||qe(ao,o)||qe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rp(t){return pe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pu=!0;function RE(t){const e=Qy(t),n=t.proxy,r=t.ctx;Pu=!1,e.beforeCreate&&sp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:h,beforeMount:m,mounted:f,beforeUpdate:_,updated:k,activated:C,deactivated:A,beforeDestroy:N,beforeUnmount:x,destroyed:M,unmounted:$,render:F,renderTracked:B,renderTriggered:T,errorCaptured:v,serverPrefetch:b,expose:S,inheritAttrs:O,components:R,directives:I,filters:Ve}=e;if(u&&DE(u,r,null),o)for(const X in o){const De=o[X];Te(De)&&(r[X]=De.bind(n))}if(s){const X=s.call(n,n);Ye(X)&&(t.data=fr(X))}if(Pu=!0,i)for(const X in i){const De=i[X],pt=Te(De)?De.bind(n,n):Te(De.get)?De.get.bind(n,n):Nn,bt=!Te(De)&&Te(De.set)?De.set.bind(n):Nn,Je=Pe({get:pt,set:bt});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>Je.value,set:je=>Je.value=je})}if(c)for(const X in c)Yy(c[X],r,n,X);if(l){const X=Te(l)?l.call(n):l;Reflect.ownKeys(X).forEach(De=>{Dn(De,X[De])})}h&&sp(h,t,"c");function Y(X,De){pe(De)?De.forEach(pt=>X(pt.bind(n))):De&&X(De.bind(n))}if(Y(_E,m),Y(Hh,f),Y(vE,_),Y(wE,k),Y(mE,C),Y(gE,A),Y(IE,v),Y(TE,B),Y(EE,T),Y(Wy,x),Y(Gy,$),Y(bE,b),pe(S))if(S.length){const X=t.exposed||(t.exposed={});S.forEach(De=>{Object.defineProperty(X,De,{get:()=>n[De],set:pt=>n[De]=pt})})}else t.exposed||(t.exposed={});F&&t.render===Nn&&(t.render=F),O!=null&&(t.inheritAttrs=O),R&&(t.components=R),I&&(t.directives=I),b&&qy(t)}function DE(t,e,n=Nn){pe(t)&&(t=Cu(t));for(const r in t){const s=t[r];let i;Ye(s)?"default"in s?i=$e(s.from||r,s.default,!0):i=$e(s.from||r):i=$e(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sp(t,e,n){wn(pe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yy(t,e,n,r){let s=r.includes(".")?l_(n,r):()=>n[r];if(ot(t)){const i=e[t];Te(i)&&it(s,i)}else if(Te(t))it(s,t.bind(n));else if(Ye(t))if(pe(t))t.forEach(i=>Yy(i,e,n,r));else{const i=Te(t.handler)?t.handler.bind(n):e[t.handler];Te(i)&&it(s,i,t)}}function Qy(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ll(l,u,o,!0)),ll(l,e,o)),Ye(e)&&i.set(e,l),l}function ll(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ll(t,i,n,!0),s&&s.forEach(o=>ll(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=kE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const kE={data:ip,props:op,emits:op,methods:Gi,computed:Gi,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:Gi,directives:Gi,watch:xE,provide:ip,inject:OE};function ip(t,e){return e?t?function(){return vt(Te(t)?t.call(this,this):t,Te(e)?e.call(this,this):e)}:e:t}function OE(t,e){return Gi(Cu(t),Cu(e))}function Cu(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function qt(t,e){return t?[...new Set([].concat(t,e))]:e}function Gi(t,e){return t?vt(Object.create(null),t,e):e}function op(t,e){return t?pe(t)&&pe(e)?[...new Set([...t,...e])]:vt(Object.create(null),rp(t),rp(e??{})):e}function xE(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const r in e)n[r]=qt(t[r],e[r]);return n}function Xy(){return{app:null,config:{isNativeTag:vb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let NE=0;function VE(t,e){return function(r,s=null){Te(r)||(r=vt({},r)),s!=null&&!Ye(s)&&(s=null);const i=Xy(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:NE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:_0,get config(){return i.config},set config(h){},use(h,...m){return o.has(h)||(h&&Te(h.install)?(o.add(h),h.install(u,...m)):Te(h)&&(o.add(h),h(u,...m))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,m){return m?(i.components[h]=m,u):i.components[h]},directive(h,m){return m?(i.directives[h]=m,u):i.directives[h]},mount(h,m,f){if(!l){const _=u._ceVNode||Se(r,s);return _.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),t(_,h,f),l=!0,u._container=h,h.__vue_app__=u,Gl(_.component)}},onUnmount(h){c.push(h)},unmount(){l&&(wn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,m){return i.provides[h]=m,u},runWithContext(h){const m=Es;Es=u;try{return h()}finally{Es=m}}};return u}}let Es=null;function Dn(t,e){if(_t){let n=_t.provides;const r=_t.parent&&_t.parent.provides;r===n&&(n=_t.provides=Object.create(r)),n[t]=e}}function $e(t,e,n=!1){const r=_t||Gt;if(r||Es){let s=Es?Es._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Te(e)?e.call(r&&r.proxy):e}}function ME(){return!!(_t||Gt||Es)}const Jy={},Zy=()=>Object.create(Jy),e_=t=>Object.getPrototypeOf(t)===Jy;function LE(t,e,n,r=!1){const s={},i=Zy();t.propsDefaults=Object.create(null),t_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ry(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function FE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Fe(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let m=0;m<h.length;m++){let f=h[m];if(zl(t.emitsOptions,f))continue;const _=e[f];if(l)if(qe(i,f))_!==i[f]&&(i[f]=_,u=!0);else{const k=hn(f);s[k]=Ru(l,c,k,_,t,!1)}else _!==i[f]&&(i[f]=_,u=!0)}}}else{t_(t,e,s,i)&&(u=!0);let h;for(const m in c)(!e||!qe(e,m)&&((h=xs(m))===m||!qe(e,h)))&&(l?n&&(n[m]!==void 0||n[h]!==void 0)&&(s[m]=Ru(l,c,m,void 0,t,!0)):delete s[m]);if(i!==c)for(const m in i)(!e||!qe(e,m))&&(delete i[m],u=!0)}u&&Yn(t.attrs,"set","")}function t_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(no(l))continue;const u=e[l];let h;s&&qe(s,h=hn(l))?!i||!i.includes(h)?n[h]=u:(c||(c={}))[h]=u:zl(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Fe(n),u=c||Ke;for(let h=0;h<i.length;h++){const m=i[h];n[m]=Ru(s,l,m,u[m],t,!qe(u,m))}}return o}function Ru(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=qe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Te(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Wo(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===xs(n))&&(r=!0))}return r}const $E=new WeakMap;function n_(t,e,n=!1){const r=n?$E:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!Te(t)){const h=m=>{l=!0;const[f,_]=n_(m,e,!0);vt(o,f),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Ye(t)&&r.set(t,Xs),Xs;if(pe(i))for(let h=0;h<i.length;h++){const m=hn(i[h]);ap(m)&&(o[m]=Ke)}else if(i)for(const h in i){const m=hn(h);if(ap(m)){const f=i[h],_=o[m]=pe(f)||Te(f)?{type:f}:vt({},f),k=_.type;let C=!1,A=!0;if(pe(k))for(let N=0;N<k.length;++N){const x=k[N],M=Te(x)&&x.name;if(M==="Boolean"){C=!0;break}else M==="String"&&(A=!1)}else C=Te(k)&&k.name==="Boolean";_[0]=C,_[1]=A,(C||qe(_,"default"))&&c.push(m)}}const u=[o,c];return Ye(t)&&r.set(t,u),u}function ap(t){return t[0]!=="$"&&!no(t)}const qh=t=>t[0]==="_"||t==="$stable",zh=t=>pe(t)?t.map(kn):[kn(t)],UE=(t,e,n)=>{if(e._n)return e;const r=bn((...s)=>zh(e(...s)),n);return r._c=!1,r},r_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(qh(s))continue;const i=t[s];if(Te(i))e[s]=UE(s,i,r);else if(i!=null){const o=zh(i);e[s]=()=>o}}},s_=(t,e)=>{const n=zh(e);t.slots.default=()=>n},i_=(t,e,n)=>{for(const r in e)(n||!qh(r))&&(t[r]=e[r])},BE=(t,e,n)=>{const r=t.slots=Zy();if(t.vnode.shapeFlag&32){const s=e.__;s&&bu(r,"__",s,!0);const i=e._;i?(i_(r,e,n),n&&bu(r,"_",i,!0)):r_(e,r)}else e&&s_(t,e)},jE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ke;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:i_(s,e,n):(i=!e.$stable,r_(e,s)),o=e}else e&&(s_(t,e),o={default:1});if(i)for(const c in s)!qh(c)&&o[c]==null&&delete s[c]},en=r0;function HE(t){return qE(t)}function qE(t,e){const n=Fl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:h,parentNode:m,nextSibling:f,setScopeId:_=Nn,insertStaticContent:k}=t,C=(P,D,V,q=null,K=null,z=null,se=void 0,te=null,ee=!!D.dynamicChildren)=>{if(P===D)return;P&&!ys(P,D)&&(q=j(P),je(P,K,z,!0),P=null),D.patchFlag===-2&&(ee=!1,D.dynamicChildren=null);const{type:J,ref:fe,shapeFlag:re}=D;switch(J){case Wl:A(P,D,V,q);break;case Wt:N(P,D,V,q);break;case Ba:P==null&&x(D,V,q,se);break;case st:R(P,D,V,q,K,z,se,te,ee);break;default:re&1?F(P,D,V,q,K,z,se,te,ee):re&6?I(P,D,V,q,K,z,se,te,ee):(re&64||re&128)&&J.process(P,D,V,q,K,z,se,te,ee,ce)}fe!=null&&K?io(fe,P&&P.ref,z,D||P,!D):fe==null&&P&&P.ref!=null&&io(P.ref,null,z,P,!0)},A=(P,D,V,q)=>{if(P==null)r(D.el=c(D.children),V,q);else{const K=D.el=P.el;D.children!==P.children&&u(K,D.children)}},N=(P,D,V,q)=>{P==null?r(D.el=l(D.children||""),V,q):D.el=P.el},x=(P,D,V,q)=>{[P.el,P.anchor]=k(P.children,D,V,q,P.el,P.anchor)},M=({el:P,anchor:D},V,q)=>{let K;for(;P&&P!==D;)K=f(P),r(P,V,q),P=K;r(D,V,q)},$=({el:P,anchor:D})=>{let V;for(;P&&P!==D;)V=f(P),s(P),P=V;s(D)},F=(P,D,V,q,K,z,se,te,ee)=>{D.type==="svg"?se="svg":D.type==="math"&&(se="mathml"),P==null?B(D,V,q,K,z,se,te,ee):b(P,D,K,z,se,te,ee)},B=(P,D,V,q,K,z,se,te)=>{let ee,J;const{props:fe,shapeFlag:re,transition:he,dirs:we}=P;if(ee=P.el=o(P.type,z,fe&&fe.is,fe),re&8?h(ee,P.children):re&16&&v(P.children,ee,null,q,K,Gc(P,z),se,te),we&&hs(P,null,q,"created"),T(ee,P,P.scopeId,se,q),fe){for(const Re in fe)Re!=="value"&&!no(Re)&&i(ee,Re,null,fe[Re],z,q);"value"in fe&&i(ee,"value",null,fe.value,z),(J=fe.onVnodeBeforeMount)&&Sn(J,q,P)}we&&hs(P,null,q,"beforeMount");const ge=zE(K,he);ge&&he.beforeEnter(ee),r(ee,D,V),((J=fe&&fe.onVnodeMounted)||ge||we)&&en(()=>{J&&Sn(J,q,P),ge&&he.enter(ee),we&&hs(P,null,q,"mounted")},K)},T=(P,D,V,q,K)=>{if(V&&_(P,V),q)for(let z=0;z<q.length;z++)_(P,q[z]);if(K){let z=K.subTree;if(D===z||u_(z.type)&&(z.ssContent===D||z.ssFallback===D)){const se=K.vnode;T(P,se,se.scopeId,se.slotScopeIds,K.parent)}}},v=(P,D,V,q,K,z,se,te,ee=0)=>{for(let J=ee;J<P.length;J++){const fe=P[J]=te?Or(P[J]):kn(P[J]);C(null,fe,D,V,q,K,z,se,te)}},b=(P,D,V,q,K,z,se)=>{const te=D.el=P.el;let{patchFlag:ee,dynamicChildren:J,dirs:fe}=D;ee|=P.patchFlag&16;const re=P.props||Ke,he=D.props||Ke;let we;if(V&&ds(V,!1),(we=he.onVnodeBeforeUpdate)&&Sn(we,V,D,P),fe&&hs(D,P,V,"beforeUpdate"),V&&ds(V,!0),(re.innerHTML&&he.innerHTML==null||re.textContent&&he.textContent==null)&&h(te,""),J?S(P.dynamicChildren,J,te,V,q,Gc(D,K),z):se||De(P,D,te,null,V,q,Gc(D,K),z,!1),ee>0){if(ee&16)O(te,re,he,V,K);else if(ee&2&&re.class!==he.class&&i(te,"class",null,he.class,K),ee&4&&i(te,"style",re.style,he.style,K),ee&8){const ge=D.dynamicProps;for(let Re=0;Re<ge.length;Re++){const Me=ge[Re],Et=re[Me],Tt=he[Me];(Tt!==Et||Me==="value")&&i(te,Me,Et,Tt,K,V)}}ee&1&&P.children!==D.children&&h(te,D.children)}else!se&&J==null&&O(te,re,he,V,K);((we=he.onVnodeUpdated)||fe)&&en(()=>{we&&Sn(we,V,D,P),fe&&hs(D,P,V,"updated")},q)},S=(P,D,V,q,K,z,se)=>{for(let te=0;te<D.length;te++){const ee=P[te],J=D[te],fe=ee.el&&(ee.type===st||!ys(ee,J)||ee.shapeFlag&198)?m(ee.el):V;C(ee,J,fe,null,q,K,z,se,!0)}},O=(P,D,V,q,K)=>{if(D!==V){if(D!==Ke)for(const z in D)!no(z)&&!(z in V)&&i(P,z,D[z],null,K,q);for(const z in V){if(no(z))continue;const se=V[z],te=D[z];se!==te&&z!=="value"&&i(P,z,te,se,K,q)}"value"in V&&i(P,"value",D.value,V.value,K)}},R=(P,D,V,q,K,z,se,te,ee)=>{const J=D.el=P?P.el:c(""),fe=D.anchor=P?P.anchor:c("");let{patchFlag:re,dynamicChildren:he,slotScopeIds:we}=D;we&&(te=te?te.concat(we):we),P==null?(r(J,V,q),r(fe,V,q),v(D.children||[],V,fe,K,z,se,te,ee)):re>0&&re&64&&he&&P.dynamicChildren?(S(P.dynamicChildren,he,V,K,z,se,te),(D.key!=null||K&&D===K.subTree)&&o_(P,D,!0)):De(P,D,V,fe,K,z,se,te,ee)},I=(P,D,V,q,K,z,se,te,ee)=>{D.slotScopeIds=te,P==null?D.shapeFlag&512?K.ctx.activate(D,V,q,se,ee):Ve(D,V,q,K,z,se,ee):ye(P,D,ee)},Ve=(P,D,V,q,K,z,se)=>{const te=P.component=u0(P,q,K);if(Hl(P)&&(te.ctx.renderer=ce),d0(te,!1,se),te.asyncDep){if(K&&K.registerDep(te,Y,se),!P.el){const ee=te.subTree=Se(Wt);N(null,ee,D,V)}}else Y(te,P,D,V,K,z,se)},ye=(P,D,V)=>{const q=D.component=P.component;if(t0(P,D,V))if(q.asyncDep&&!q.asyncResolved){X(q,D,V);return}else q.next=D,q.update();else D.el=P.el,q.vnode=D},Y=(P,D,V,q,K,z,se)=>{const te=()=>{if(P.isMounted){let{next:re,bu:he,u:we,parent:ge,vnode:Re}=P;{const Dt=a_(P);if(Dt){re&&(re.el=Re.el,X(P,re,se)),Dt.asyncDep.then(()=>{P.isUnmounted||te()});return}}let Me=re,Et;ds(P,!1),re?(re.el=Re.el,X(P,re,se)):re=Re,he&&Ua(he),(Et=re.props&&re.props.onVnodeBeforeUpdate)&&Sn(Et,ge,re,Re),ds(P,!0);const Tt=cp(P),on=P.subTree;P.subTree=Tt,C(on,Tt,m(on.el),j(on),P,K,z),re.el=Tt.el,Me===null&&n0(P,Tt.el),we&&en(we,K),(Et=re.props&&re.props.onVnodeUpdated)&&en(()=>Sn(Et,ge,re,Re),K)}else{let re;const{el:he,props:we}=D,{bm:ge,m:Re,parent:Me,root:Et,type:Tt}=P,on=oo(D);ds(P,!1),ge&&Ua(ge),!on&&(re=we&&we.onVnodeBeforeMount)&&Sn(re,Me,D),ds(P,!0);{Et.ce&&Et.ce._def.shadowRoot!==!1&&Et.ce._injectChildStyle(Tt);const Dt=P.subTree=cp(P);C(null,Dt,V,q,P,K,z),D.el=Dt.el}if(Re&&en(Re,K),!on&&(re=we&&we.onVnodeMounted)){const Dt=D;en(()=>Sn(re,Me,Dt),K)}(D.shapeFlag&256||Me&&oo(Me.vnode)&&Me.vnode.shapeFlag&256)&&P.a&&en(P.a,K),P.isMounted=!0,D=V=q=null}};P.scope.on();const ee=P.effect=new my(te);P.scope.off();const J=P.update=ee.run.bind(ee),fe=P.job=ee.runIfDirty.bind(ee);fe.i=P,fe.id=P.uid,ee.scheduler=()=>Bh(fe),ds(P,!0),J()},X=(P,D,V)=>{D.component=P;const q=P.vnode.props;P.vnode=D,P.next=null,FE(P,D.props,q,V),jE(P,D.children,V),sr(),ep(P),ir()},De=(P,D,V,q,K,z,se,te,ee=!1)=>{const J=P&&P.children,fe=P?P.shapeFlag:0,re=D.children,{patchFlag:he,shapeFlag:we}=D;if(he>0){if(he&128){bt(J,re,V,q,K,z,se,te,ee);return}else if(he&256){pt(J,re,V,q,K,z,se,te,ee);return}}we&8?(fe&16&&jt(J,K,z),re!==J&&h(V,re)):fe&16?we&16?bt(J,re,V,q,K,z,se,te,ee):jt(J,K,z,!0):(fe&8&&h(V,""),we&16&&v(re,V,q,K,z,se,te,ee))},pt=(P,D,V,q,K,z,se,te,ee)=>{P=P||Xs,D=D||Xs;const J=P.length,fe=D.length,re=Math.min(J,fe);let he;for(he=0;he<re;he++){const we=D[he]=ee?Or(D[he]):kn(D[he]);C(P[he],we,V,null,K,z,se,te,ee)}J>fe?jt(P,K,z,!0,!1,re):v(D,V,q,K,z,se,te,ee,re)},bt=(P,D,V,q,K,z,se,te,ee)=>{let J=0;const fe=D.length;let re=P.length-1,he=fe-1;for(;J<=re&&J<=he;){const we=P[J],ge=D[J]=ee?Or(D[J]):kn(D[J]);if(ys(we,ge))C(we,ge,V,null,K,z,se,te,ee);else break;J++}for(;J<=re&&J<=he;){const we=P[re],ge=D[he]=ee?Or(D[he]):kn(D[he]);if(ys(we,ge))C(we,ge,V,null,K,z,se,te,ee);else break;re--,he--}if(J>re){if(J<=he){const we=he+1,ge=we<fe?D[we].el:q;for(;J<=he;)C(null,D[J]=ee?Or(D[J]):kn(D[J]),V,ge,K,z,se,te,ee),J++}}else if(J>he)for(;J<=re;)je(P[J],K,z,!0),J++;else{const we=J,ge=J,Re=new Map;for(J=ge;J<=he;J++){const It=D[J]=ee?Or(D[J]):kn(D[J]);It.key!=null&&Re.set(It.key,J)}let Me,Et=0;const Tt=he-ge+1;let on=!1,Dt=0;const wr=new Array(Tt);for(J=0;J<Tt;J++)wr[J]=0;for(J=we;J<=re;J++){const It=P[J];if(Et>=Tt){je(It,K,z,!0);continue}let an;if(It.key!=null)an=Re.get(It.key);else for(Me=ge;Me<=he;Me++)if(wr[Me-ge]===0&&ys(It,D[Me])){an=Me;break}an===void 0?je(It,K,z,!0):(wr[an-ge]=J+1,an>=Dt?Dt=an:on=!0,C(It,D[an],V,null,K,z,se,te,ee),Et++)}const Ri=on?WE(wr):Xs;for(Me=Ri.length-1,J=Tt-1;J>=0;J--){const It=ge+J,an=D[It],ua=It+1<fe?D[It+1].el:q;wr[J]===0?C(null,an,V,ua,K,z,se,te,ee):on&&(Me<0||J!==Ri[Me]?Je(an,V,ua,2):Me--)}}},Je=(P,D,V,q,K=null)=>{const{el:z,type:se,transition:te,children:ee,shapeFlag:J}=P;if(J&6){Je(P.component.subTree,D,V,q);return}if(J&128){P.suspense.move(D,V,q);return}if(J&64){se.move(P,D,V,ce);return}if(se===st){r(z,D,V);for(let re=0;re<ee.length;re++)Je(ee[re],D,V,q);r(P.anchor,D,V);return}if(se===Ba){M(P,D,V);return}if(q!==2&&J&1&&te)if(q===0)te.beforeEnter(z),r(z,D,V),en(()=>te.enter(z),K);else{const{leave:re,delayLeave:he,afterLeave:we}=te,ge=()=>{P.ctx.isUnmounted?s(z):r(z,D,V)},Re=()=>{re(z,()=>{ge(),we&&we()})};he?he(z,ge,Re):Re()}else r(z,D,V)},je=(P,D,V,q=!1,K=!1)=>{const{type:z,props:se,ref:te,children:ee,dynamicChildren:J,shapeFlag:fe,patchFlag:re,dirs:he,cacheIndex:we}=P;if(re===-2&&(K=!1),te!=null&&(sr(),io(te,null,V,P,!0),ir()),we!=null&&(D.renderCache[we]=void 0),fe&256){D.ctx.deactivate(P);return}const ge=fe&1&&he,Re=!oo(P);let Me;if(Re&&(Me=se&&se.onVnodeBeforeUnmount)&&Sn(Me,D,P),fe&6)mn(P.component,V,q);else{if(fe&128){P.suspense.unmount(V,q);return}ge&&hs(P,null,D,"beforeUnmount"),fe&64?P.type.remove(P,D,V,ce,q):J&&!J.hasOnce&&(z!==st||re>0&&re&64)?jt(J,D,V,!1,!0):(z===st&&re&384||!K&&fe&16)&&jt(ee,D,V),q&&We(P)}(Re&&(Me=se&&se.onVnodeUnmounted)||ge)&&en(()=>{Me&&Sn(Me,D,P),ge&&hs(P,null,D,"unmounted")},V)},We=P=>{const{type:D,el:V,anchor:q,transition:K}=P;if(D===st){Bt(V,q);return}if(D===Ba){$(P);return}const z=()=>{s(V),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(P.shapeFlag&1&&K&&!K.persisted){const{leave:se,delayLeave:te}=K,ee=()=>se(V,z);te?te(P.el,z,ee):ee()}else z()},Bt=(P,D)=>{let V;for(;P!==D;)V=f(P),s(P),P=V;s(D)},mn=(P,D,V)=>{const{bum:q,scope:K,job:z,subTree:se,um:te,m:ee,a:J,parent:fe,slots:{__:re}}=P;lp(ee),lp(J),q&&Ua(q),fe&&pe(re)&&re.forEach(he=>{fe.renderCache[he]=void 0}),K.stop(),z&&(z.flags|=8,je(se,P,D,V)),te&&en(te,D),en(()=>{P.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},jt=(P,D,V,q=!1,K=!1,z=0)=>{for(let se=z;se<P.length;se++)je(P[se],D,V,q,K)},j=P=>{if(P.shapeFlag&6)return j(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const D=f(P.anchor||P.el),V=D&&D[hE];return V?f(V):D};let ae=!1;const oe=(P,D,V)=>{P==null?D._vnode&&je(D._vnode,null,null,!0):C(D._vnode||null,P,D,null,null,null,V),D._vnode=P,ae||(ae=!0,ep(),Vy(),ae=!1)},ce={p:C,um:je,m:Je,r:We,mt:Ve,mc:v,pc:De,pbc:S,n:j,o:t};return{render:oe,hydrate:void 0,createApp:VE(oe)}}function Gc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ds({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function zE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function o_(t,e,n=!1){const r=t.children,s=e.children;if(pe(r)&&pe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Or(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&o_(o,c)),c.type===Wl&&(c.el=o.el),c.type===Wt&&!c.el&&(c.el=o.el)}}function WE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function a_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:a_(e)}function lp(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const GE=Symbol.for("v-scx"),KE=()=>$e(GE);function YE(t,e){return Wh(t,null,e)}function it(t,e,n){return Wh(t,e,n)}function Wh(t,e,n=Ke){const{immediate:r,deep:s,flush:i,once:o}=n,c=vt({},n),l=e&&r||!e&&i!=="post";let u;if(Po){if(i==="sync"){const _=KE();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Nn,_.resume=Nn,_.pause=Nn,_}}const h=_t;c.call=(_,k,C)=>wn(_,h,k,C);let m=!1;i==="post"?c.scheduler=_=>{en(_,h&&h.suspense)}:i!=="sync"&&(m=!0,c.scheduler=(_,k)=>{k?_():Bh(_)}),c.augmentJob=_=>{e&&(_.flags|=4),m&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const f=aE(t,e,c);return Po&&(u?u.push(f):l&&f()),f}function QE(t,e,n){const r=this.proxy,s=ot(t)?t.includes(".")?l_(r,t):()=>r[t]:t.bind(r,r);let i;Te(e)?i=e:(i=e.handler,n=e);const o=Wo(this),c=Wh(s,i.bind(r),n);return o(),c}function l_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const XE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${xs(e)}Modifiers`];function JE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ke;let s=n;const i=e.startsWith("update:"),o=i&&XE(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>ot(h)?h.trim():h)),o.number&&(s=n.map(nl)));let c,l=r[c=Uc(e)]||r[c=Uc(hn(e))];!l&&i&&(l=r[c=Uc(xs(e))]),l&&wn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,wn(u,t,6,s)}}function c_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!Te(t)){const l=u=>{const h=c_(u,e,!0);h&&(c=!0,vt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ye(t)&&r.set(t,null),null):(pe(i)?i.forEach(l=>o[l]=null):vt(o,i),Ye(t)&&r.set(t,o),o)}function zl(t,e){return!t||!Vl(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(t,e[0].toLowerCase()+e.slice(1))||qe(t,xs(e))||qe(t,e))}function cp(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:h,props:m,data:f,setupState:_,ctx:k,inheritAttrs:C}=t,A=al(t);let N,x;try{if(n.shapeFlag&4){const $=s||r,F=$;N=kn(u.call(F,$,h,m,_,f,k)),x=c}else{const $=e;N=kn($.length>1?$(m,{attrs:c,slots:o,emit:l}):$(m,null)),x=e.props?c:ZE(c)}}catch($){lo.length=0,Bl($,t,1),N=Se(Wt)}let M=N;if(x&&C!==!1){const $=Object.keys(x),{shapeFlag:F}=M;$.length&&F&7&&(i&&$.some(Rh)&&(x=e0(x,i)),M=Gr(M,x,!1,!0))}return n.dirs&&(M=Gr(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Ao(M,n.transition),N=M,al(A),N}const ZE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vl(n))&&((e||(e={}))[n]=t[n]);return e},e0=(t,e)=>{const n={};for(const r in t)(!Rh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function t0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?up(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let m=0;m<h.length;m++){const f=h[m];if(o[f]!==r[f]&&!zl(u,f))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?up(r,o,u):!0:!!o;return!1}function up(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!zl(n,i))return!0}return!1}function n0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const u_=t=>t.__isSuspense;function r0(t,e){e&&e.pendingBranch?pe(t)?e.effects.push(...t):e.effects.push(t):uE(t)}const st=Symbol.for("v-fgt"),Wl=Symbol.for("v-txt"),Wt=Symbol.for("v-cmt"),Ba=Symbol.for("v-stc"),lo=[];let nn=null;function W(t=!1){lo.push(nn=t?null:[])}function s0(){lo.pop(),nn=lo[lo.length-1]||null}let So=1;function hp(t,e=!1){So+=t,t<0&&nn&&e&&(nn.hasOnce=!0)}function h_(t){return t.dynamicChildren=So>0?nn||Xs:null,s0(),So>0&&nn&&nn.push(t),t}function Q(t,e,n,r,s,i){return h_(p(t,e,n,r,s,i,!0))}function In(t,e,n,r,s){return h_(Se(t,e,n,r,s,!0))}function cl(t){return t?t.__v_isVNode===!0:!1}function ys(t,e){return t.type===e.type&&t.key===e.key}const d_=({key:t})=>t??null,ja=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ot(t)||ut(t)||Te(t)?{i:Gt,r:t,k:e,f:!!n}:t:null);function p(t,e=null,n=null,r=0,s=null,i=t===st?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&d_(e),ref:e&&ja(e),scopeId:Ly,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Gt};return c?(Gh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ot(n)?8:16),So>0&&!o&&nn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&nn.push(l),l}const Se=i0;function i0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ky)&&(t=Wt),cl(t)){const c=Gr(t,e,!0);return n&&Gh(c,n),So>0&&!i&&nn&&(c.shapeFlag&6?nn[nn.indexOf(t)]=c:nn.push(c)),c.patchFlag=-2,c}if(y0(t)&&(t=t.__vccOpts),e){e=o0(e);let{class:c,style:l}=e;c&&!ot(c)&&(e.class=Is(c)),Ye(l)&&($h(l)&&!pe(l)&&(l=vt({},l)),e.style=$l(l))}const o=ot(t)?1:u_(t)?128:Fy(t)?64:Ye(t)?4:Te(t)?2:0;return p(t,e,n,r,s,o,i,!0)}function o0(t){return t?$h(t)||e_(t)?vt({},t):t:null}function Gr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?a0(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&d_(u),ref:e&&e.ref?n&&i?pe(i)?i.concat(ja(e)):[i,ja(e)]:ja(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==st?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gr(t.ssContent),ssFallback:t.ssFallback&&Gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ao(h,l.clone(h)),h}function mt(t=" ",e=0){return Se(Wl,null,t,e)}function f_(t,e){const n=Se(Ba,null,t);return n.staticCount=e,n}function Ee(t="",e=!1){return e?(W(),In(Wt,null,t)):Se(Wt,null,t)}function kn(t){return t==null||typeof t=="boolean"?Se(Wt):pe(t)?Se(st,null,t.slice()):cl(t)?Or(t):Se(Wl,null,String(t))}function Or(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gr(t)}function Gh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(pe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!e_(e)?e._ctx=Gt:s===3&&Gt&&(Gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Te(e)?(e={default:e,_ctx:Gt},n=32):(e=String(e),r&64?(n=16,e=[mt(e)]):n=8);t.children=e,t.shapeFlag|=n}function a0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Is([e.class,r.class]));else if(s==="style")e.style=$l([e.style,r.style]);else if(Vl(s)){const i=e[s],o=r[s];o&&i!==o&&!(pe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Sn(t,e,n,r=null){wn(t,e,7,[n,r])}const l0=Xy();let c0=0;function u0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||l0,i={uid:c0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:n_(r,s),emitsOptions:c_(r,s),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:r.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=JE.bind(null,i),t.ce&&t.ce(i),i}let _t=null;const h0=()=>_t||Gt;let ul,Du;{const t=Fl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ul=e("__VUE_INSTANCE_SETTERS__",n=>_t=n),Du=e("__VUE_SSR_SETTERS__",n=>Po=n)}const Wo=t=>{const e=_t;return ul(t),t.scope.on(),()=>{t.scope.off(),ul(e)}},dp=()=>{_t&&_t.scope.off(),ul(null)};function p_(t){return t.vnode.shapeFlag&4}let Po=!1;function d0(t,e=!1,n=!1){e&&Du(e);const{props:r,children:s}=t.vnode,i=p_(t);LE(t,r,i,e),BE(t,s,n||e);const o=i?f0(t,e):void 0;return e&&Du(!1),o}function f0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,CE);const{setup:r}=n;if(r){sr();const s=t.setupContext=r.length>1?m0(t):null,i=Wo(t),o=zo(r,t,0,[t.props,s]),c=oy(o);if(ir(),i(),(c||t.sp)&&!oo(t)&&qy(t),c){if(o.then(dp,dp),e)return o.then(l=>{fp(t,l)}).catch(l=>{Bl(l,t,0)});t.asyncDep=o}else fp(t,o)}else m_(t)}function fp(t,e,n){Te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ye(e)&&(t.setupState=Oy(e)),m_(t)}function m_(t,e,n){const r=t.type;t.render||(t.render=r.render||Nn);{const s=Wo(t);sr();try{RE(t)}finally{ir(),s()}}}const p0={get(t,e){return Mt(t,"get",""),t[e]}};function m0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,p0),slots:t.slots,emit:t.emit,expose:e}}function Gl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Oy(Uh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ao)return ao[n](t)},has(e,n){return n in e||n in ao}})):t.proxy}function g0(t,e=!0){return Te(t)?t.displayName||t.name:t.name||e&&t.__name}function y0(t){return Te(t)&&"__vccOpts"in t}const Pe=(t,e)=>iE(t,e,Po);function oi(t,e,n){const r=arguments.length;return r===2?Ye(e)&&!pe(e)?cl(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&cl(n)&&(n=[n]),Se(t,e,n))}const _0="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ku;const pp=typeof window<"u"&&window.trustedTypes;if(pp)try{ku=pp.createPolicy("vue",{createHTML:t=>t})}catch{}const g_=ku?t=>ku.createHTML(t):t=>t,v0="http://www.w3.org/2000/svg",w0="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,mp=Kn&&Kn.createElement("template"),b0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Kn.createElementNS(v0,t):e==="mathml"?Kn.createElementNS(w0,t):n?Kn.createElement(t,{is:n}):Kn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Kn.createTextNode(t),createComment:t=>Kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mp.innerHTML=g_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=mp.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ir="transition",Hi="animation",Co=Symbol("_vtc"),y_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},E0=vt({},$y,y_),T0=t=>(t.displayName="Transition",t.props=E0,t),mr=T0((t,{slots:e})=>oi(pE,I0(t),e)),fs=(t,e=[])=>{pe(t)?t.forEach(n=>n(...e)):t&&t(...e)},gp=t=>t?pe(t)?t.some(e=>e.length>1):t.length>1:!1;function I0(t){const e={};for(const R in t)R in y_||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=c,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,k=A0(s),C=k&&k[0],A=k&&k[1],{onBeforeEnter:N,onEnter:x,onEnterCancelled:M,onLeave:$,onLeaveCancelled:F,onBeforeAppear:B=N,onAppear:T=x,onAppearCancelled:v=M}=e,b=(R,I,Ve,ye)=>{R._enterCancelled=ye,ps(R,I?h:c),ps(R,I?u:o),Ve&&Ve()},S=(R,I)=>{R._isLeaving=!1,ps(R,m),ps(R,_),ps(R,f),I&&I()},O=R=>(I,Ve)=>{const ye=R?T:x,Y=()=>b(I,R,Ve);fs(ye,[I,Y]),yp(()=>{ps(I,R?l:i),Wn(I,R?h:c),gp(ye)||_p(I,r,C,Y)})};return vt(e,{onBeforeEnter(R){fs(N,[R]),Wn(R,i),Wn(R,o)},onBeforeAppear(R){fs(B,[R]),Wn(R,l),Wn(R,u)},onEnter:O(!1),onAppear:O(!0),onLeave(R,I){R._isLeaving=!0;const Ve=()=>S(R,I);Wn(R,m),R._enterCancelled?(Wn(R,f),bp()):(bp(),Wn(R,f)),yp(()=>{R._isLeaving&&(ps(R,m),Wn(R,_),gp($)||_p(R,r,A,Ve))}),fs($,[R,Ve])},onEnterCancelled(R){b(R,!1,void 0,!0),fs(M,[R])},onAppearCancelled(R){b(R,!0,void 0,!0),fs(v,[R])},onLeaveCancelled(R){S(R),fs(F,[R])}})}function A0(t){if(t==null)return null;if(Ye(t))return[Kc(t.enter),Kc(t.leave)];{const e=Kc(t);return[e,e]}}function Kc(t){return Ib(t)}function Wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Co]||(t[Co]=new Set)).add(e)}function ps(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Co];n&&(n.delete(e),n.size||(t[Co]=void 0))}function yp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let S0=0;function _p(t,e,n,r){const s=t._endId=++S0,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=P0(t,e);if(!o)return r();const u=o+"end";let h=0;const m=()=>{t.removeEventListener(u,f),i()},f=_=>{_.target===t&&++h>=l&&m()};setTimeout(()=>{h<l&&m()},c+1),t.addEventListener(u,f)}function P0(t,e){const n=window.getComputedStyle(t),r=k=>(n[k]||"").split(", "),s=r(`${Ir}Delay`),i=r(`${Ir}Duration`),o=vp(s,i),c=r(`${Hi}Delay`),l=r(`${Hi}Duration`),u=vp(c,l);let h=null,m=0,f=0;e===Ir?o>0&&(h=Ir,m=o,f=i.length):e===Hi?u>0&&(h=Hi,m=u,f=l.length):(m=Math.max(o,u),h=m>0?o>u?Ir:Hi:null,f=h?h===Ir?i.length:l.length:0);const _=h===Ir&&/\b(transform|all)(,|$)/.test(r(`${Ir}Property`).toString());return{type:h,timeout:m,propCount:f,hasTransform:_}}function vp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>wp(n)+wp(t[r])))}function wp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function bp(){return document.body.offsetHeight}function C0(t,e,n){const r=t[Co];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ep=Symbol("_vod"),R0=Symbol("_vsh"),D0=Symbol(""),k0=/(^|;)\s*display\s*:/;function O0(t,e,n){const r=t.style,s=ot(n);let i=!1;if(n&&!s){if(e)if(ot(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ha(r,c,"")}else for(const o in e)n[o]==null&&Ha(r,o,"");for(const o in n)o==="display"&&(i=!0),Ha(r,o,n[o])}else if(s){if(e!==n){const o=r[D0];o&&(n+=";"+o),r.cssText=n,i=k0.test(n)}}else e&&t.removeAttribute("style");Ep in t&&(t[Ep]=i?r.display:"",t[R0]&&(r.display="none"))}const Tp=/\s*!important$/;function Ha(t,e,n){if(pe(n))n.forEach(r=>Ha(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=x0(t,e);Tp.test(n)?t.setProperty(xs(r),n.replace(Tp,""),"important"):t[r]=n}}const Ip=["Webkit","Moz","ms"],Yc={};function x0(t,e){const n=Yc[e];if(n)return n;let r=hn(e);if(r!=="filter"&&r in t)return Yc[e]=r;r=Ll(r);for(let s=0;s<Ip.length;s++){const i=Ip[s]+r;if(i in t)return Yc[e]=i}return e}const Ap="http://www.w3.org/1999/xlink";function Sp(t,e,n,r,s,i=Db(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ap,e.slice(6,e.length)):t.setAttributeNS(Ap,e,n):n==null||i&&!cy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Un(n)?String(n):n)}function Pp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?g_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=cy(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Nr(t,e,n,r){t.addEventListener(e,n,r)}function N0(t,e,n,r){t.removeEventListener(e,n,r)}const Cp=Symbol("_vei");function V0(t,e,n,r,s=null){const i=t[Cp]||(t[Cp]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=M0(e);if(r){const u=i[e]=$0(r,s);Nr(t,c,u,l)}else o&&(N0(t,c,o,l),i[e]=void 0)}}const Rp=/(?:Once|Passive|Capture)$/;function M0(t){let e;if(Rp.test(t)){e={};let r;for(;r=t.match(Rp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xs(t.slice(2)),e]}let Qc=0;const L0=Promise.resolve(),F0=()=>Qc||(L0.then(()=>Qc=0),Qc=Date.now());function $0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;wn(U0(r,n.value),e,5,[r])};return n.value=t,n.attached=F0(),n}function U0(t,e){if(pe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Dp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,B0=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?C0(t,r,o):e==="style"?O0(t,n,r):Vl(e)?Rh(e)||V0(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):j0(t,e,r,o))?(Pp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ot(r))?Pp(t,hn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Sp(t,e,r,o))};function j0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Dp(e)&&Te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Dp(e)&&ot(n)?!1:e in t}const ai=t=>{const e=t.props["onUpdate:modelValue"]||!1;return pe(e)?n=>Ua(e,n):e};function H0(t){t.target.composing=!0}function kp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tr=Symbol("_assign"),Ae={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[tr]=ai(s);const i=r||s.props&&s.props.type==="number";Nr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=nl(c)),t[tr](c)}),n&&Nr(t,"change",()=>{t.value=t.value.trim()}),e||(Nr(t,"compositionstart",H0),Nr(t,"compositionend",kp),Nr(t,"change",kp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[tr]=ai(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?nl(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Kl={deep:!0,created(t,e,n){t[tr]=ai(n),Nr(t,"change",()=>{const r=t._modelValue,s=Ro(t),i=t.checked,o=t[tr];if(pe(r)){const c=Oh(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(_i(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(__(t,i))})},mounted:Op,beforeUpdate(t,e,n){t[tr]=ai(n),Op(t,e,n)}};function Op(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(pe(e))s=Oh(e,r.props.value)>-1;else if(_i(e))s=e.has(r.props.value);else{if(e===n)return;s=qo(e,__(t,!0))}t.checked!==s&&(t.checked=s)}const Kt={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=_i(e);Nr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?nl(Ro(o)):Ro(o));t[tr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,jl(()=>{t._assigning=!1})}),t[tr]=ai(r)},mounted(t,{value:e}){xp(t,e)},beforeUpdate(t,e,n){t[tr]=ai(n)},updated(t,{value:e}){t._assigning||xp(t,e)}};function xp(t,e){const n=t.multiple,r=pe(e);if(!(n&&!r&&!_i(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Ro(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=Oh(e,c)>-1}else o.selected=e.has(c);else if(qo(Ro(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ro(t){return"_value"in t?t._value:t.value}function __(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const q0=["ctrl","shift","alt","meta"],z0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>q0.some(n=>t[`${n}Key`]&&!e.includes(n))},tt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=z0[e[o]];if(c&&c(s,e))return}return t(s,...i)})},W0=vt({patchProp:B0},b0);let Np;function G0(){return Np||(Np=HE(W0))}const K0=(...t)=>{const e=G0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Q0(r);if(!s)return;const i=e._component;!Te(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Y0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Y0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Q0(t){return ot(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const zs=typeof document<"u";function v_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function X0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&v_(t.default)}const He=Object.assign;function Xc(t,e){const n={};for(const r in e){const s=e[r];n[r]=En(s)?s.map(t):t(s)}return n}const co=()=>{},En=Array.isArray,w_=/#/g,J0=/&/g,Z0=/\//g,eT=/=/g,tT=/\?/g,b_=/\+/g,nT=/%5B/g,rT=/%5D/g,E_=/%5E/g,sT=/%60/g,T_=/%7B/g,iT=/%7C/g,I_=/%7D/g,oT=/%20/g;function Kh(t){return encodeURI(""+t).replace(iT,"|").replace(nT,"[").replace(rT,"]")}function aT(t){return Kh(t).replace(T_,"{").replace(I_,"}").replace(E_,"^")}function Ou(t){return Kh(t).replace(b_,"%2B").replace(oT,"+").replace(w_,"%23").replace(J0,"%26").replace(sT,"`").replace(T_,"{").replace(I_,"}").replace(E_,"^")}function lT(t){return Ou(t).replace(eT,"%3D")}function cT(t){return Kh(t).replace(w_,"%23").replace(tT,"%3F")}function uT(t){return t==null?"":cT(t).replace(Z0,"%2F")}function Do(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const hT=/\/$/,dT=t=>t.replace(hT,"");function Jc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=gT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Do(o)}}function fT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&li(e.matched[r],n.matched[s])&&A_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function li(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function A_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mT(t[n],e[n]))return!1;return!0}function mT(t,e){return En(t)?Mp(t,e):En(e)?Mp(e,t):t===e}function Mp(t,e){return En(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ar={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ko;(function(t){t.pop="pop",t.push="push"})(ko||(ko={}));var uo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(uo||(uo={}));function yT(t){if(!t)if(zs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dT(t)}const _T=/^[^#]+#/;function vT(t,e){return t.replace(_T,"#")+e}function wT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Yl=()=>({left:window.scrollX,top:window.scrollY});function bT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=wT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Lp(t,e){return(history.state?history.state.position-e:-1)+t}const xu=new Map;function ET(t,e){xu.set(t,e)}function TT(t){const e=xu.get(t);return xu.delete(t),e}let IT=()=>location.protocol+"//"+location.host;function S_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Vp(l,"")}return Vp(n,t)+r+s}function AT(t,e,n,r){let s=[],i=[],o=null;const c=({state:f})=>{const _=S_(t,location),k=n.value,C=e.value;let A=0;if(f){if(n.value=_,e.value=f,o&&o===k){o=null;return}A=C?f.position-C.position:0}else r(_);s.forEach(N=>{N(n.value,k,{delta:A,type:ko.pop,direction:A?A>0?uo.forward:uo.back:uo.unknown})})};function l(){o=n.value}function u(f){s.push(f);const _=()=>{const k=s.indexOf(f);k>-1&&s.splice(k,1)};return i.push(_),_}function h(){const{history:f}=window;f.state&&f.replaceState(He({},f.state,{scroll:Yl()}),"")}function m(){for(const f of i)f();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:m}}function Fp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Yl():null}}function ST(t){const{history:e,location:n}=window,r={value:S_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const m=t.indexOf("#"),f=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+l:IT()+t+l;try{e[h?"replaceState":"pushState"](u,"",f),s.value=u}catch(_){console.error(_),n[h?"replace":"assign"](f)}}function o(l,u){const h=He({},e.state,Fp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function c(l,u){const h=He({},s.value,e.state,{forward:l,scroll:Yl()});i(h.current,h,!0);const m=He({},Fp(r.value,l,null),{position:h.position+1},u);i(l,m,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function PT(t){t=yT(t);const e=ST(t),n=AT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=He({location:"",base:t,go:r,createHref:vT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function CT(t){return typeof t=="string"||t&&typeof t=="object"}function P_(t){return typeof t=="string"||typeof t=="symbol"}const C_=Symbol("");var $p;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($p||($p={}));function ci(t,e){return He(new Error,{type:t,[C_]:!0},e)}function Gn(t,e){return t instanceof Error&&C_ in t&&(e==null||!!(t.type&e))}const Up="[^/]+?",RT={sensitive:!1,strict:!1,start:!0,end:!0},DT=/[.+*?^${}()[\]/\\]/g;function kT(t,e){const n=He({},RT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let m=0;m<u.length;m++){const f=u[m];let _=40+(n.sensitive?.25:0);if(f.type===0)m||(s+="/"),s+=f.value.replace(DT,"\\$&"),_+=40;else if(f.type===1){const{value:k,repeatable:C,optional:A,regexp:N}=f;i.push({name:k,repeatable:C,optional:A});const x=N||Up;if(x!==Up){_+=10;try{new RegExp(`(${x})`)}catch($){throw new Error(`Invalid custom RegExp for param "${k}" (${x}): `+$.message)}}let M=C?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;m||(M=A&&u.length<2?`(?:/${M})`:"/"+M),A&&(M+="?"),s+=M,_+=20,A&&(_+=-8),C&&(_+=-20),x===".*"&&(_+=-50)}h.push(_)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const h=u.match(o),m={};if(!h)return null;for(let f=1;f<h.length;f++){const _=h[f]||"",k=i[f-1];m[k.name]=_&&k.repeatable?_.split("/"):_}return m}function l(u){let h="",m=!1;for(const f of t){(!m||!h.endsWith("/"))&&(h+="/"),m=!1;for(const _ of f)if(_.type===0)h+=_.value;else if(_.type===1){const{value:k,repeatable:C,optional:A}=_,N=k in u?u[k]:"";if(En(N)&&!C)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const x=En(N)?N.join("/"):N;if(!x)if(A)f.length<2&&(h.endsWith("/")?h=h.slice(0,-1):m=!0);else throw new Error(`Missing required param "${k}"`);h+=x}}return h||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function OT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function R_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=OT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Bp(r))return 1;if(Bp(s))return-1}return s.length-r.length}function Bp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const xT={type:0,value:""},NT=/[a-zA-Z0-9_]/;function VT(t){if(!t)return[[]];if(t==="/")return[[xT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",h="";function m(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&m(),o()):l===":"?(m(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:NT.test(l)?f():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),m(),o(),s}function MT(t,e,n){const r=kT(VT(t.path),n),s=He(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function LT(t,e){const n=[],r=new Map;e=zp({strict:!1,end:!0,sensitive:!1},e);function s(m){return r.get(m)}function i(m,f,_){const k=!_,C=Hp(m);C.aliasOf=_&&_.record;const A=zp(e,m),N=[C];if("alias"in m){const $=typeof m.alias=="string"?[m.alias]:m.alias;for(const F of $)N.push(Hp(He({},C,{components:_?_.record.components:C.components,path:F,aliasOf:_?_.record:C})))}let x,M;for(const $ of N){const{path:F}=$;if(f&&F[0]!=="/"){const B=f.record.path,T=B[B.length-1]==="/"?"":"/";$.path=f.record.path+(F&&T+F)}if(x=MT($,f,A),_?_.alias.push(x):(M=M||x,M!==x&&M.alias.push(x),k&&m.name&&!qp(x)&&o(m.name)),D_(x)&&l(x),C.children){const B=C.children;for(let T=0;T<B.length;T++)i(B[T],x,_&&_.children[T])}_=_||x}return M?()=>{o(M)}:co}function o(m){if(P_(m)){const f=r.get(m);f&&(r.delete(m),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(m);f>-1&&(n.splice(f,1),m.record.name&&r.delete(m.record.name),m.children.forEach(o),m.alias.forEach(o))}}function c(){return n}function l(m){const f=UT(m,n);n.splice(f,0,m),m.record.name&&!qp(m)&&r.set(m.record.name,m)}function u(m,f){let _,k={},C,A;if("name"in m&&m.name){if(_=r.get(m.name),!_)throw ci(1,{location:m});A=_.record.name,k=He(jp(f.params,_.keys.filter(M=>!M.optional).concat(_.parent?_.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),m.params&&jp(m.params,_.keys.map(M=>M.name))),C=_.stringify(k)}else if(m.path!=null)C=m.path,_=n.find(M=>M.re.test(C)),_&&(k=_.parse(C),A=_.record.name);else{if(_=f.name?r.get(f.name):n.find(M=>M.re.test(f.path)),!_)throw ci(1,{location:m,currentLocation:f});A=_.record.name,k=He({},f.params,m.params),C=_.stringify(k)}const N=[];let x=_;for(;x;)N.unshift(x.record),x=x.parent;return{name:A,path:C,params:k,matched:N,meta:$T(N)}}t.forEach(m=>i(m));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:c,getRecordMatcher:s}}function jp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Hp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:FT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function FT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function qp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $T(t){return t.reduce((e,n)=>He(e,n.meta),{})}function zp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function UT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;R_(t,e[i])<0?r=i:n=i+1}const s=BT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function BT(t){let e=t;for(;e=e.parent;)if(D_(e)&&R_(t,e)===0)return e}function D_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function jT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(b_," "),o=i.indexOf("="),c=Do(o<0?i:i.slice(0,o)),l=o<0?null:Do(i.slice(o+1));if(c in e){let u=e[c];En(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Wp(t){let e="";for(let n in t){const r=t[n];if(n=lT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(En(r)?r.map(i=>i&&Ou(i)):[r&&Ou(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function HT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=En(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const qT=Symbol(""),Gp=Symbol(""),Ql=Symbol(""),Yh=Symbol(""),Nu=Symbol("");function qi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=f=>{f===!1?l(ci(4,{from:n,to:e})):f instanceof Error?l(f):CT(f)?l(ci(2,{from:e,to:f})):(o&&r.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),c())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let m=Promise.resolve(h);t.length<3&&(m=m.then(u)),m.catch(f=>l(f))})}function Zc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(v_(l)){const h=(l.__vccOpts||l)[e];h&&i.push(xr(h,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const m=X0(h)?h.default:h;o.mods[c]=h,o.components[c]=m;const _=(m.__vccOpts||m)[e];return _&&xr(_,n,r,o,c,s)()}))}}return i}function Kp(t){const e=$e(Ql),n=$e(Yh),r=Pe(()=>{const l=y(t.to);return e.resolve(l)}),s=Pe(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],m=n.matched;if(!h||!m.length)return-1;const f=m.findIndex(li.bind(null,h));if(f>-1)return f;const _=Yp(l[u-2]);return u>1&&Yp(h)===_&&m[m.length-1].path!==_?m.findIndex(li.bind(null,l[u-2])):f}),i=Pe(()=>s.value>-1&&YT(n.params,r.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&A_(n.params,r.value.params));function c(l={}){if(KT(l)){const u=e[y(t.replace)?"replace":"push"](y(t.to)).catch(co);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function zT(t){return t.length===1?t[0]:t}const WT=jh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Kp,setup(t,{slots:e}){const n=fr(Kp(t)),{options:r}=$e(Ql),s=Pe(()=>({[Qp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&zT(e.default(n));return t.custom?i:oi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),GT=WT;function KT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function YT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!En(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Yp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qp=(t,e,n)=>t??e??n,QT=jh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$e(Nu),s=Pe(()=>t.route||r.value),i=$e(Gp,0),o=Pe(()=>{let u=y(i);const{matched:h}=s.value;let m;for(;(m=h[u])&&!m.components;)u++;return u}),c=Pe(()=>s.value.matched[o.value]);Dn(Gp,Pe(()=>o.value+1)),Dn(qT,c),Dn(Nu,s);const l=Ce();return it(()=>[l.value,c.value,t.name],([u,h,m],[f,_,k])=>{h&&(h.instances[m]=u,_&&_!==h&&u&&u===f&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!li(h,_)||!f)&&(h.enterCallbacks[m]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,m=c.value,f=m&&m.components[h];if(!f)return Xp(n.default,{Component:f,route:u});const _=m.props[h],k=_?_===!0?u.params:typeof _=="function"?_(u):_:null,A=oi(f,He({},k,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(m.instances[h]=null)},ref:l}));return Xp(n.default,{Component:A,route:u})||A}}});function Xp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const k_=QT;function XT(t){const e=LT(t.routes,t),n=t.parseQuery||jT,r=t.stringifyQuery||Wp,s=t.history,i=qi(),o=qi(),c=qi(),l=Jb(Ar);let u=Ar;zs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Xc.bind(null,j=>""+j),m=Xc.bind(null,uT),f=Xc.bind(null,Do);function _(j,ae){let oe,ce;return P_(j)?(oe=e.getRecordMatcher(j),ce=ae):ce=j,e.addRoute(ce,oe)}function k(j){const ae=e.getRecordMatcher(j);ae&&e.removeRoute(ae)}function C(){return e.getRoutes().map(j=>j.record)}function A(j){return!!e.getRecordMatcher(j)}function N(j,ae){if(ae=He({},ae||l.value),typeof j=="string"){const V=Jc(n,j,ae.path),q=e.resolve({path:V.path},ae),K=s.createHref(V.fullPath);return He(V,q,{params:f(q.params),hash:Do(V.hash),redirectedFrom:void 0,href:K})}let oe;if(j.path!=null)oe=He({},j,{path:Jc(n,j.path,ae.path).path});else{const V=He({},j.params);for(const q in V)V[q]==null&&delete V[q];oe=He({},j,{params:m(V)}),ae.params=m(ae.params)}const ce=e.resolve(oe,ae),Ue=j.hash||"";ce.params=h(f(ce.params));const P=fT(r,He({},j,{hash:aT(Ue),path:ce.path})),D=s.createHref(P);return He({fullPath:P,hash:Ue,query:r===Wp?HT(j.query):j.query||{}},ce,{redirectedFrom:void 0,href:D})}function x(j){return typeof j=="string"?Jc(n,j,l.value.path):He({},j)}function M(j,ae){if(u!==j)return ci(8,{from:ae,to:j})}function $(j){return T(j)}function F(j){return $(He(x(j),{replace:!0}))}function B(j){const ae=j.matched[j.matched.length-1];if(ae&&ae.redirect){const{redirect:oe}=ae;let ce=typeof oe=="function"?oe(j):oe;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=x(ce):{path:ce},ce.params={}),He({query:j.query,hash:j.hash,params:ce.path!=null?{}:j.params},ce)}}function T(j,ae){const oe=u=N(j),ce=l.value,Ue=j.state,P=j.force,D=j.replace===!0,V=B(oe);if(V)return T(He(x(V),{state:typeof V=="object"?He({},Ue,V.state):Ue,force:P,replace:D}),ae||oe);const q=oe;q.redirectedFrom=ae;let K;return!P&&pT(r,ce,oe)&&(K=ci(16,{to:q,from:ce}),Je(ce,ce,!0,!1)),(K?Promise.resolve(K):S(q,ce)).catch(z=>Gn(z)?Gn(z,2)?z:bt(z):De(z,q,ce)).then(z=>{if(z){if(Gn(z,2))return T(He({replace:D},x(z.to),{state:typeof z.to=="object"?He({},Ue,z.to.state):Ue,force:P}),ae||q)}else z=R(q,ce,!0,D,Ue);return O(q,ce,z),z})}function v(j,ae){const oe=M(j,ae);return oe?Promise.reject(oe):Promise.resolve()}function b(j){const ae=Bt.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(j):j()}function S(j,ae){let oe;const[ce,Ue,P]=JT(j,ae);oe=Zc(ce.reverse(),"beforeRouteLeave",j,ae);for(const V of ce)V.leaveGuards.forEach(q=>{oe.push(xr(q,j,ae))});const D=v.bind(null,j,ae);return oe.push(D),jt(oe).then(()=>{oe=[];for(const V of i.list())oe.push(xr(V,j,ae));return oe.push(D),jt(oe)}).then(()=>{oe=Zc(Ue,"beforeRouteUpdate",j,ae);for(const V of Ue)V.updateGuards.forEach(q=>{oe.push(xr(q,j,ae))});return oe.push(D),jt(oe)}).then(()=>{oe=[];for(const V of P)if(V.beforeEnter)if(En(V.beforeEnter))for(const q of V.beforeEnter)oe.push(xr(q,j,ae));else oe.push(xr(V.beforeEnter,j,ae));return oe.push(D),jt(oe)}).then(()=>(j.matched.forEach(V=>V.enterCallbacks={}),oe=Zc(P,"beforeRouteEnter",j,ae,b),oe.push(D),jt(oe))).then(()=>{oe=[];for(const V of o.list())oe.push(xr(V,j,ae));return oe.push(D),jt(oe)}).catch(V=>Gn(V,8)?V:Promise.reject(V))}function O(j,ae,oe){c.list().forEach(ce=>b(()=>ce(j,ae,oe)))}function R(j,ae,oe,ce,Ue){const P=M(j,ae);if(P)return P;const D=ae===Ar,V=zs?history.state:{};oe&&(ce||D?s.replace(j.fullPath,He({scroll:D&&V&&V.scroll},Ue)):s.push(j.fullPath,Ue)),l.value=j,Je(j,ae,oe,D),bt()}let I;function Ve(){I||(I=s.listen((j,ae,oe)=>{if(!mn.listening)return;const ce=N(j),Ue=B(ce);if(Ue){T(He(Ue,{replace:!0,force:!0}),ce).catch(co);return}u=ce;const P=l.value;zs&&ET(Lp(P.fullPath,oe.delta),Yl()),S(ce,P).catch(D=>Gn(D,12)?D:Gn(D,2)?(T(He(x(D.to),{force:!0}),ce).then(V=>{Gn(V,20)&&!oe.delta&&oe.type===ko.pop&&s.go(-1,!1)}).catch(co),Promise.reject()):(oe.delta&&s.go(-oe.delta,!1),De(D,ce,P))).then(D=>{D=D||R(ce,P,!1),D&&(oe.delta&&!Gn(D,8)?s.go(-oe.delta,!1):oe.type===ko.pop&&Gn(D,20)&&s.go(-1,!1)),O(ce,P,D)}).catch(co)}))}let ye=qi(),Y=qi(),X;function De(j,ae,oe){bt(j);const ce=Y.list();return ce.length?ce.forEach(Ue=>Ue(j,ae,oe)):console.error(j),Promise.reject(j)}function pt(){return X&&l.value!==Ar?Promise.resolve():new Promise((j,ae)=>{ye.add([j,ae])})}function bt(j){return X||(X=!j,Ve(),ye.list().forEach(([ae,oe])=>j?oe(j):ae()),ye.reset()),j}function Je(j,ae,oe,ce){const{scrollBehavior:Ue}=t;if(!zs||!Ue)return Promise.resolve();const P=!oe&&TT(Lp(j.fullPath,0))||(ce||!oe)&&history.state&&history.state.scroll||null;return jl().then(()=>Ue(j,ae,P)).then(D=>D&&bT(D)).catch(D=>De(D,j,ae))}const je=j=>s.go(j);let We;const Bt=new Set,mn={currentRoute:l,listening:!0,addRoute:_,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:A,getRoutes:C,resolve:N,options:t,push:$,replace:F,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Y.add,isReady:pt,install(j){const ae=this;j.component("RouterLink",GT),j.component("RouterView",k_),j.config.globalProperties.$router=ae,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>y(l)}),zs&&!We&&l.value===Ar&&(We=!0,$(s.location).catch(Ue=>{}));const oe={};for(const Ue in Ar)Object.defineProperty(oe,Ue,{get:()=>l.value[Ue],enumerable:!0});j.provide(Ql,ae),j.provide(Yh,Ry(oe)),j.provide(Nu,l);const ce=j.unmount;Bt.add(j),j.unmount=function(){Bt.delete(j),Bt.size<1&&(u=Ar,I&&I(),I=null,l.value=Ar,We=!1,X=!1),ce()}}};function jt(j){return j.reduce((ae,oe)=>ae.then(()=>b(oe)),Promise.resolve())}return mn}function JT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>li(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>li(u,l))||s.push(l))}return[n,r,s]}function Ns(){return $e(Ql)}function O_(t){return $e(Yh)}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let x_;const Xl=t=>x_=t,N_=Symbol();function Vu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ho;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ho||(ho={}));function ZT(){const t=fy(!0),e=t.run(()=>Ce({}));let n=[],r=[];const s=Uh({install(i){Xl(s),s._a=i,i.provide(N_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const V_=()=>{};function Jp(t,e,n,r=V_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&py()&&Ob(s),s}function Hs(t,...e){t.slice().forEach(n=>{n(...e)})}const eI=t=>t(),Zp=Symbol(),eu=Symbol();function Mu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Vu(s)&&Vu(r)&&t.hasOwnProperty(n)&&!ut(r)&&!Ur(r)?t[n]=Mu(s,r):t[n]=r}return t}const tI=Symbol();function nI(t){return!Vu(t)||!Object.prototype.hasOwnProperty.call(t,tI)}const{assign:Rr}=Object;function rI(t){return!!(ut(t)&&t.effect)}function sI(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const h=tE(n.state.value[t]);return Rr(h,i,Object.keys(o||{}).reduce((m,f)=>(m[f]=Uh(Pe(()=>{Xl(n);const _=n._s.get(t);return o[f].call(_,_)})),m),{}))}return l=M_(t,u,e,n,r,!0),l}function M_(t,e,n={},r,s,i){let o;const c=Rr({actions:{}},n),l={deep:!0};let u,h,m=[],f=[],_;const k=r.state.value[t];!i&&!k&&(r.state.value[t]={}),Ce({});let C;function A(v){let b;u=h=!1,typeof v=="function"?(v(r.state.value[t]),b={type:ho.patchFunction,storeId:t,events:_}):(Mu(r.state.value[t],v),b={type:ho.patchObject,payload:v,storeId:t,events:_});const S=C=Symbol();jl().then(()=>{C===S&&(u=!0)}),h=!0,Hs(m,b,r.state.value[t])}const N=i?function(){const{state:b}=n,S=b?b():{};this.$patch(O=>{Rr(O,S)})}:V_;function x(){o.stop(),m=[],f=[],r._s.delete(t)}const M=(v,b="")=>{if(Zp in v)return v[eu]=b,v;const S=function(){Xl(r);const O=Array.from(arguments),R=[],I=[];function Ve(X){R.push(X)}function ye(X){I.push(X)}Hs(f,{args:O,name:S[eu],store:F,after:Ve,onError:ye});let Y;try{Y=v.apply(this&&this.$id===t?this:F,O)}catch(X){throw Hs(I,X),X}return Y instanceof Promise?Y.then(X=>(Hs(R,X),X)).catch(X=>(Hs(I,X),Promise.reject(X))):(Hs(R,Y),Y)};return S[Zp]=!0,S[eu]=b,S},$={_p:r,$id:t,$onAction:Jp.bind(null,f),$patch:A,$reset:N,$subscribe(v,b={}){const S=Jp(m,v,b.detached,()=>O()),O=o.run(()=>it(()=>r.state.value[t],R=>{(b.flush==="sync"?h:u)&&v({storeId:t,type:ho.direct,events:_},R)},Rr({},l,b)));return S},$dispose:x},F=fr($);r._s.set(t,F);const T=(r._a&&r._a.runWithContext||eI)(()=>r._e.run(()=>(o=fy()).run(()=>e({action:M}))));for(const v in T){const b=T[v];if(ut(b)&&!rI(b)||Ur(b))i||(k&&nI(b)&&(ut(b)?b.value=k[v]:Mu(b,k[v])),r.state.value[t][v]=b);else if(typeof b=="function"){const S=M(b,v);T[v]=S,c.actions[v]=b}}return Rr(F,T),Rr(Fe(F),T),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:v=>{A(b=>{Rr(b,v)})}}),r._p.forEach(v=>{Rr(F,o.run(()=>v({store:F,app:r._a,pinia:r,options:c})))}),k&&i&&n.hydrate&&n.hydrate(F.$state,k),u=!0,h=!0,F}/*! #__NO_SIDE_EFFECTS__ */function L_(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=ME();return o=o||(l?$e(N_,null):null),o&&Xl(o),o=x_,o._s.has(t)||(s?M_(t,e,r,o):sI(t,r,o)),o._s.get(t)}return i.$id=t,i}const iI=()=>{};var em={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},oI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,m=(i&3)<<4|c>>4;let f=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(f=64)),r.push(n[h],n[m],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(F_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||m==null)throw new aI;const f=i<<2|c>>4;if(r.push(f),u!==64){const _=c<<4&240|u>>2;if(r.push(_),m!==64){const k=u<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lI=function(t){const e=F_(t);return $_.encodeByteArray(e,!0)},hl=function(t){return lI(t).replace(/\./g,"")},U_=function(t){try{return $_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uI=()=>cI().__FIREBASE_DEFAULTS__,hI=()=>{if(typeof process>"u"||typeof em>"u")return;const t=em.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&U_(t[1]);return e&&JSON.parse(e)},Jl=()=>{try{return iI()||uI()||hI()||dI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},B_=t=>{var e,n;return(n=(e=Jl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fI=t=>{const e=B_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},j_=()=>{var t;return(t=Jl())===null||t===void 0?void 0:t.config},H_=t=>{var e;return(e=Jl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function vi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function q_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function mI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[hl(JSON.stringify(n)),hl(JSON.stringify(o)),""].join(".")}const fo={};function gI(){const t={prod:[],emulator:[]};for(const e of Object.keys(fo))fo[e]?t.emulator.push(e):t.prod.push(e);return t}function yI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let tm=!1;function z_(t,e){if(typeof window>"u"||typeof document>"u"||!vi(window.location.host)||fo[t]===e||fo[t]||tm)return;fo[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",i=gI().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function c(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,_){f.setAttribute("width","24"),f.setAttribute("id",_),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{tm=!0,o()},f}function h(f,_){f.setAttribute("id",_),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function m(){const f=yI(r),_=n("text"),k=document.getElementById(_)||document.createElement("span"),C=n("learnmore"),A=document.getElementById(C)||document.createElement("a"),N=n("preprendIcon"),x=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const M=f.element;c(M),h(A,C);const $=u();l(x,N),M.append(x,k,A,$),document.body.appendChild(M)}i?(k.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _I(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function vI(){var t;const e=(t=Jl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function EI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TI(){const t=$t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function II(){return!vI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AI(){try{return typeof indexedDB=="object"}catch{return!1}}function SI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="FirebaseError";class gr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PI,Object.setPrototypeOf(this,gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?CI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new gr(s,c,r)}}function CI(t,e){return t.replace(RI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const RI=/\{\$([^}]+)}/g;function DI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function As(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(nm(i)&&nm(o)){if(!As(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function nm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ki(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Yi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kI(t,e){const n=new OI(t,e);return n.subscribe.bind(n)}class OI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=tu),s.error===void 0&&(s.error=tu),s.complete===void 0&&(s.complete=tu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tu(){}/**
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
 */const gs="[DEFAULT]";/**
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
 */class NI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MI(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VI(t){return t===gs?void 0:t}function MI(t){return t.instantiationMode==="EAGER"}/**
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
 */class LI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const FI={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},$I=xe.INFO,UI={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},BI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=UI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qh{constructor(e){this.name=e,this._logLevel=$I,this._logHandler=BI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const jI=(t,e)=>e.some(n=>t instanceof n);let rm,sm;function HI(){return rm||(rm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qI(){return sm||(sm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const W_=new WeakMap,Lu=new WeakMap,G_=new WeakMap,nu=new WeakMap,Xh=new WeakMap;function zI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Br(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&W_.set(n,t)}).catch(()=>{}),Xh.set(e,t),e}function WI(t){if(Lu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lu.set(t,e)}let Fu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||G_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GI(t){Fu=t(Fu)}function KI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ru(this),e,...n);return G_.set(r,e.sort?e.sort():[e]),Br(r)}:qI().includes(t)?function(...e){return t.apply(ru(this),e),Br(W_.get(this))}:function(...e){return Br(t.apply(ru(this),e))}}function YI(t){return typeof t=="function"?KI(t):(t instanceof IDBTransaction&&WI(t),jI(t,HI())?new Proxy(t,Fu):t)}function Br(t){if(t instanceof IDBRequest)return zI(t);if(nu.has(t))return nu.get(t);const e=YI(t);return e!==t&&(nu.set(t,e),Xh.set(e,t)),e}const ru=t=>Xh.get(t);function QI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Br(o.result),l.oldVersion,l.newVersion,Br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const XI=["get","getKey","getAll","getAllKeys","count"],JI=["put","add","delete","clear"],su=new Map;function im(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(su.get(e))return su.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=JI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||XI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return su.set(e,i),i}GI(t=>({...t,get:(e,n,r)=>im(e,n)||t.get(e,n,r),has:(e,n)=>!!im(e,n)||t.has(e,n)}));/**
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
 */class ZI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eA(t){const e=t.getComponent();return e?.type==="VERSION"}const $u="@firebase/app",om="0.13.2";/**
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
 */const ar=new Qh("@firebase/app"),tA="@firebase/app-compat",nA="@firebase/analytics-compat",rA="@firebase/analytics",sA="@firebase/app-check-compat",iA="@firebase/app-check",oA="@firebase/auth",aA="@firebase/auth-compat",lA="@firebase/database",cA="@firebase/data-connect",uA="@firebase/database-compat",hA="@firebase/functions",dA="@firebase/functions-compat",fA="@firebase/installations",pA="@firebase/installations-compat",mA="@firebase/messaging",gA="@firebase/messaging-compat",yA="@firebase/performance",_A="@firebase/performance-compat",vA="@firebase/remote-config",wA="@firebase/remote-config-compat",bA="@firebase/storage",EA="@firebase/storage-compat",TA="@firebase/firestore",IA="@firebase/ai",AA="@firebase/firestore-compat",SA="firebase",PA="11.10.0";/**
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
 */const Uu="[DEFAULT]",CA={[$u]:"fire-core",[tA]:"fire-core-compat",[rA]:"fire-analytics",[nA]:"fire-analytics-compat",[iA]:"fire-app-check",[sA]:"fire-app-check-compat",[oA]:"fire-auth",[aA]:"fire-auth-compat",[lA]:"fire-rtdb",[cA]:"fire-data-connect",[uA]:"fire-rtdb-compat",[hA]:"fire-fn",[dA]:"fire-fn-compat",[fA]:"fire-iid",[pA]:"fire-iid-compat",[mA]:"fire-fcm",[gA]:"fire-fcm-compat",[yA]:"fire-perf",[_A]:"fire-perf-compat",[vA]:"fire-rc",[wA]:"fire-rc-compat",[bA]:"fire-gcs",[EA]:"fire-gcs-compat",[TA]:"fire-fst",[AA]:"fire-fst-compat",[IA]:"fire-vertex","fire-js":"fire-js",[SA]:"fire-js-all"};/**
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
 */const dl=new Map,RA=new Map,Bu=new Map;function am(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(t){const e=t.name;if(Bu.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;Bu.set(e,t);for(const n of dl.values())am(n,t);for(const n of RA.values())am(n,t);return!0}function Jh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const DA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new Go("app","Firebase",DA);/**
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
 */class kA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
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
 */const wi=PA;function K_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw jr.create("bad-app-name",{appName:String(s)});if(n||(n=j_()),!n)throw jr.create("no-options");const i=dl.get(s);if(i){if(As(n,i.options)&&As(r,i.config))return i;throw jr.create("duplicate-app",{appName:s})}const o=new LI(s);for(const l of Bu.values())o.addComponent(l);const c=new kA(n,r,o);return dl.set(s,c),c}function Y_(t=Uu){const e=dl.get(t);if(!e&&t===Uu&&j_())return K_();if(!e)throw jr.create("no-app",{appName:t});return e}function Hr(t,e,n){var r;let s=(r=CA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(c.join(" "));return}ui(new Ss(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const OA="firebase-heartbeat-database",xA=1,Oo="firebase-heartbeat-store";let iu=null;function Q_(){return iu||(iu=QI(OA,xA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw jr.create("idb-open",{originalErrorMessage:t.message})})),iu}async function NA(t){try{const n=(await Q_()).transaction(Oo),r=await n.objectStore(Oo).get(X_(t));return await n.done,r}catch(e){if(e instanceof gr)ar.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:e?.message});ar.warn(n.message)}}}async function lm(t,e){try{const r=(await Q_()).transaction(Oo,"readwrite");await r.objectStore(Oo).put(e,X_(t)),await r.done}catch(n){if(n instanceof gr)ar.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n?.message});ar.warn(r.message)}}}function X_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const VA=1024,MA=30;class LA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $A(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>MA){const o=UA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cm(),{heartbeatsToSend:r,unsentEntries:s}=FA(this._heartbeatsCache.heartbeats),i=hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ar.warn(n),""}}}function cm(){return new Date().toISOString().substring(0,10)}function FA(t,e=VA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),um(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),um(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $A{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AI()?SI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function um(t){return hl(JSON.stringify({version:2,heartbeats:t})).length}function UA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function BA(t){ui(new Ss("platform-logger",e=>new ZI(e),"PRIVATE")),ui(new Ss("heartbeat",e=>new LA(e),"PRIVATE")),Hr($u,om,t),Hr($u,om,"esm2017"),Hr("fire-js","")}BA("");function Zh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function J_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jA=J_,Z_=new Go("auth","Firebase",J_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Qh("@firebase/auth");function HA(t,...e){fl.logLevel<=xe.WARN&&fl.warn(`Auth (${wi}): ${t}`,...e)}function qa(t,...e){fl.logLevel<=xe.ERROR&&fl.error(`Auth (${wi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,...e){throw td(t,...e)}function vn(t,...e){return td(t,...e)}function ed(t,e,n){const r=Object.assign(Object.assign({},jA()),{[e]:n});return new Go("auth","Firebase",r).create(e,{appName:t.name})}function nr(t){return ed(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&dn(t,"argument-error"),ed(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function td(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Z_.create(t,...e)}function _e(t,e,...n){if(!t)throw td(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qa(e),new Error(e)}function lr(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zA(){return hm()==="http:"||hm()==="https:"}function hm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zA()||bI()||"connection"in navigator)?navigator.onLine:!0}function GA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=_I()||EI()}get(){return WA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],QA=new Yo(3e4,6e4);function jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function An(t,e,n,r,s={}){return tv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ko(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return wI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&vi(t.emulatorConfig.host)&&(u.credentials="include"),ev.fetch()(await nv(t,t.config.apiHost,n,c),u)})}async function tv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},KA),e);try{const s=new JA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Da(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Da(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Da(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Da(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ed(t,h,u);dn(t,h)}}catch(s){if(s instanceof gr)throw s;dn(t,"network-request-failed",{message:String(s)})}}async function Qo(t,e,n,r,s={}){const i=await An(t,e,n,r,s);return"mfaPendingCredential"in i&&dn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function nv(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?nd(t.config,s):`${t.config.apiScheme}://${s}`;return YA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function XA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),QA.get())})}}function Da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=vn(t,e,r);return s.customData._tokenResponse=n,s}function dm(t){return t!==void 0&&t.enterprise!==void 0}class ZA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return XA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eS(t,e){return An(t,"GET","/v2/recaptchaConfig",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(t,e){return An(t,"POST","/v1/accounts:delete",e)}async function pl(t,e){return An(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nS(t,e=!1){const n=at(t),r=await n.getIdToken(e),s=rd(r);_e(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:po(ou(s.auth_time)),issuedAtTime:po(ou(s.iat)),expirationTime:po(ou(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ou(t){return Number(t)*1e3}function rd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qa("JWT malformed, contained fewer than 3 sections"),null;try{const s=U_(n);return s?JSON.parse(s):(qa("Failed to decode base64 JWT payload"),null)}catch(s){return qa("Caught error parsing JWT payload as JSON",s?.toString()),null}}function fm(t){const e=rd(t);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gr&&rS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function ml(t){var e;const n=t.auth,r=await t.getIdToken(),s=await hi(t,pl(n,{idToken:r}));_e(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?rv(i.providerUserInfo):[],c=oS(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!c?.length,h=l?u:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Hu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function iS(t){const e=at(t);await ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function rv(t){return t.map(e=>{var{providerId:n}=e,r=Zh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(t,e){const n=await tv(t,{},async()=>{const r=Ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await nv(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&vi(t.emulatorConfig.host)&&(l.credentials="include"),ev.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lS(t,e){return An(t,"POST","/v2/accounts:revokeToken",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=fm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await aS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ei;return r&&(_e(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(_e(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(_e(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t,e){_e(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hi(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nS(this,e)}reload(){return iS(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await hi(this,tS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,h;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(c=n.tenantId)!==null&&c!==void 0?c:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:M,emailVerified:$,isAnonymous:F,providerData:B,stsTokenManager:T}=n;_e(M&&T,e,"internal-error");const v=ei.fromJSON(this.name,T);_e(typeof M=="string",e,"internal-error"),Sr(m,e.name),Sr(f,e.name),_e(typeof $=="boolean",e,"internal-error"),_e(typeof F=="boolean",e,"internal-error"),Sr(_,e.name),Sr(k,e.name),Sr(C,e.name),Sr(A,e.name),Sr(N,e.name),Sr(x,e.name);const b=new yn({uid:M,auth:e,email:f,emailVerified:$,displayName:m,isAnonymous:F,photoURL:k,phoneNumber:_,tenantId:C,stsTokenManager:v,createdAt:N,lastLoginAt:x});return B&&Array.isArray(B)&&(b.providerData=B.map(S=>Object.assign({},S))),A&&(b._redirectEventId=A),b}static async _fromIdTokenResponse(e,n,r=!1){const s=new ei;s.updateFromServerResponse(n);const i=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ml(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];_e(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?rv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new ei;c.updateFromIdToken(r);const l=new yn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Hu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=new Map;function er(t){lr(t instanceof Function,"Expected a class definition");let e=pm.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pm.set(t,e),e)}/**
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
 */class sv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sv.type="NONE";const mm=sv;/**
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
 */function za(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=za(this.userKey,s.apiKey,i),this.fullPersistenceKey=za("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pl(this.auth,{idToken:e}).catch(()=>{});return n?yn._fromGetAccountInfoResponse(this.auth,n,e):null}return yn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(er(mm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||er(mm);const o=za(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const h=await u._get(o);if(h){let m;if(typeof h=="string"){const f=await pl(e,{idToken:h}).catch(()=>{});if(!f)break;m=await yn._fromGetAccountInfoResponse(e,f,h)}else m=yn._fromJSON(e,h);u!==i&&(c=m),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ti(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ti(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uv(e))return"Blackberry";if(hv(e))return"Webos";if(ov(e))return"Safari";if((e.includes("chrome/")||av(e))&&!e.includes("edge/"))return"Chrome";if(cv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function iv(t=$t()){return/firefox\//i.test(t)}function ov(t=$t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function av(t=$t()){return/crios\//i.test(t)}function lv(t=$t()){return/iemobile/i.test(t)}function cv(t=$t()){return/android/i.test(t)}function uv(t=$t()){return/blackberry/i.test(t)}function hv(t=$t()){return/webos/i.test(t)}function sd(t=$t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cS(t=$t()){var e;return sd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uS(){return TI()&&document.documentMode===10}function dv(t=$t()){return sd(t)||cv(t)||hv(t)||uv(t)||/windows phone/i.test(t)||lv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t,e=[]){let n;switch(t){case"Browser":n=gm($t());break;case"Worker":n=`${gm($t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wi}/${r}`}/**
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
 */class hS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function dS(t,e={}){return An(t,"GET","/v2/passwordPolicy",jn(t,e))}/**
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
 */const fS=6;class pS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ym(this),this.idTokenSubscription=new ym(this),this.beforeStateQueue=new hS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Z_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pl(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ml(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(nr(this));const n=e?at(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dS(this),n=new pS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&HA(`Error while retrieving App Check token: ${n.error}`),n?.token}}function yr(t){return at(t)}class ym{constructor(e){this.auth=e,this.observer=null,this.addObserver=kI(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gS(t){Zl=t}function pv(t){return Zl.loadJS(t)}function yS(){return Zl.recaptchaEnterpriseScript}function _S(){return Zl.gapiScript}function vS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class wS{constructor(){this.enterprise=new bS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class bS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ES="recaptcha-enterprise",mv="NO_RECAPTCHA";class TS{constructor(e){this.type=ES,this.auth=yr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{eS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new ZA(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;dm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(mv)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&dm(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=yS();l.length!==0&&(l+=c),pv(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function _m(t,e,n,r=!1,s=!1){const i=new TS(t);let o;if(s)o=mv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function gl(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await _m(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await _m(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t,e){const n=Jh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(As(i,e??{}))return s;dn(s,"already-initialized")}return n.initialize({options:e})}function AS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(er);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function SS(t,e,n){const r=yr(t);_e(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gv(e),{host:o,port:c}=PS(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){_e(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),_e(As(u,r.config.emulator)&&As(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,vi(o)?(q_(`${i}//${o}${l}`),z_("Auth",!0)):CS()}function gv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PS(t){const e=gv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vm(o)}}}function vm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function CS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(t,e){return An(t,"POST","/v1/accounts:resetPassword",jn(t,e))}async function DS(t,e){return An(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(t,e){return Qo(t,"POST","/v1/accounts:signInWithPassword",jn(t,e))}async function OS(t,e){return An(t,"POST","/v1/accounts:sendOobCode",jn(t,e))}async function xS(t,e){return OS(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}async function VS(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends id{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gl(e,n,"signInWithPassword",kS);case"emailLink":return NS(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gl(e,r,"signUpPassword",DS);case"emailLink":return VS(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e){return Qo(t,"POST","/v1/accounts:signInWithIdp",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="http://localhost";class Ps extends id{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ps(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:MS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ko(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FS(t){const e=Ki(Yi(t)).link,n=e?Ki(Yi(e)).deep_link_id:null,r=Ki(Yi(t)).deep_link_id;return(r?Ki(Yi(r)).link:null)||r||n||e||t}class od{constructor(e){var n,r,s,i,o,c;const l=Ki(Yi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,m=LS((s=l.mode)!==null&&s!==void 0?s:null);_e(u&&h&&m,"argument-error"),this.apiKey=u,this.operation=m,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=FS(e);try{return new od(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=od.parseLink(n);return _e(r,"argument-error"),xo._fromEmailAndCode(e,r.code,r.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vr extends Xo{constructor(){super("facebook.com")}static credential(e){return Ps._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ps._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Xo{constructor(){super("github.com")}static credential(e){return Ps._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Xo{constructor(){super("twitter.com")}static credential(e,n){return Ps._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.TWITTER_SIGN_IN_METHOD="twitter.com";Lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(t,e){return Qo(t,"POST","/v1/accounts:signUp",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yn._fromIdTokenResponse(e,r,s),o=wm(r);return new Cs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wm(r);return new Cs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends gr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,yl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new yl(e,n,r,s)}}function yv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yl._fromErrorAndOperation(t,i,e,r):i})}async function US(t,e,n=!1){const r=await hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cs._forOperation(t,"link",r)}/**
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
 */async function BS(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(nr(r));const s="reauthenticate";try{const i=await hi(t,yv(r,s,e,t),n);_e(i.idToken,r,"internal-error");const o=rd(i.idToken);_e(o,r,"internal-error");const{sub:c}=o;return _e(t.uid===c,r,"user-mismatch"),Cs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&dn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(t,e,n=!1){if(tn(t.app))return Promise.reject(nr(t));const r="signIn",s=await yv(t,r,e),i=await Cs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function jS(t,e){return _v(yr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(t){const e=yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HS(t,e,n){const r=yr(t);await gl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",xS)}async function qS(t,e,n){await RS(at(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ld(t),r})}async function zS(t,e,n){if(tn(t.app))return Promise.reject(nr(t));const r=yr(t),o=await gl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$S).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ld(t),l}),c=await Cs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function WS(t,e,n){return tn(t.app)?Promise.reject(nr(t)):jS(at(t),bi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ld(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(t,e){return An(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=at(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await hi(r,GS(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function YS(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function QS(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function vv(t,e,n,r){return at(t).onAuthStateChanged(e,n,r)}function XS(t){return at(t).signOut()}const _l="__sak";/**
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
 */class wv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=1e3,ZS=10;class bv extends wv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ZS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},JS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bv.type="LOCAL";const eP=bv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev extends wv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ev.type="SESSION";const Tv=Ev;/**
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
 */function tP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await tP(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=cd("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const f=m;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(f.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function rP(t){Vn().location.href=t}/**
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
 */function Iv(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function sP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iP(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oP(){return Iv()?self:null}/**
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
 */const Av="firebaseLocalStorageDb",aP=1,vl="firebaseLocalStorage",Sv="fbase_key";class Jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([vl],e?"readwrite":"readonly").objectStore(vl)}function lP(){const t=indexedDB.deleteDatabase(Av);return new Jo(t).toPromise()}function qu(){const t=indexedDB.open(Av,aP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vl,{keyPath:Sv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vl)?e(r):(r.close(),await lP(),e(await qu()))})})}async function bm(t,e,n){const r=tc(t,!0).put({[Sv]:e,value:n});return new Jo(r).toPromise()}async function cP(t,e){const n=tc(t,!1).get(e),r=await new Jo(n).toPromise();return r===void 0?null:r.value}function Em(t,e){const n=tc(t,!0).delete(e);return new Jo(n).toPromise()}const uP=800,hP=3;class Pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Iv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(oP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sP(),!this.activeServiceWorker)return;this.sender=new nP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qu();return await bm(e,_l,"1"),await Em(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Em(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=tc(s,!1).getAll();return new Jo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pv.type="LOCAL";const dP=Pv;new Yo(3e4,6e4);/**
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
 */function Cv(t,e){return e?er(e):(_e(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ud extends id{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fP(t){return _v(t.auth,new ud(t),t.bypassAuthState)}function pP(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),BS(n,new ud(t),t.bypassAuthState)}async function mP(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),US(n,new ud(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fP;case"linkViaPopup":case"linkViaRedirect":return mP;case"reauthViaPopup":case"reauthViaRedirect":return pP;default:dn(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=new Yo(2e3,1e4);async function yP(t,e,n){if(tn(t.app))return Promise.reject(vn(t,"operation-not-supported-in-this-environment"));const r=yr(t);qA(t,e,ad);const s=Cv(r,n);return new _s(r,"signInViaPopup",e,s).executeNotNull()}class _s extends Rv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gP.get())};e()}}_s.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P="pendingRedirect",Wa=new Map;class vP extends Rv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wa.get(this.auth._key());if(!e){try{const r=await wP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wa.set(this.auth._key(),e)}return this.bypassAuthState||Wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wP(t,e){const n=TP(e),r=EP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function bP(t,e){Wa.set(t._key(),e)}function EP(t){return er(t._redirectPersistence)}function TP(t){return za(_P,t.config.apiKey,t.name)}async function IP(t,e,n=!1){if(tn(t.app))return Promise.reject(nr(t));const r=yr(t),s=Cv(r,e),o=await new vP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=10*60*1e3;class SP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tm(e))}saveEventToCache(e){this.cachedEventUids.add(Tm(e)),this.lastProcessedEventTime=Date.now()}}function Tm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dv({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function PP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e={}){return An(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DP=/^https?/;async function kP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CP(t);for(const n of e)try{if(OP(n))return}catch{}dn(t,"unauthorized-domain")}function OP(t){const e=ju(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!DP.test(n))return!1;if(RP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const xP=new Yo(3e4,6e4);function Im(){const t=Vn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NP(t){return new Promise((e,n)=>{var r,s,i;function o(){Im(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Im(),n(vn(t,"network-request-failed"))},timeout:xP.get()})}if(!((s=(r=Vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Vn().gapi)===null||i===void 0)&&i.load)o();else{const c=vS("iframefcb");return Vn()[c]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},pv(`${_S()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Ga=null,e})}let Ga=null;function VP(t){return Ga=Ga||NP(t),Ga}/**
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
 */const MP=new Yo(5e3,15e3),LP="__/auth/iframe",FP="emulator/auth/iframe",$P={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BP(t){const e=t.config;_e(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nd(e,FP):`https://${t.config.authDomain}/${LP}`,r={apiKey:e.apiKey,appName:t.name,v:wi},s=UP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ko(r).slice(1)}`}async function jP(t){const e=await VP(t),n=Vn().gapi;return _e(n,t,"internal-error"),e.open({where:document.body,url:BP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$P,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),c=Vn().setTimeout(()=>{i(o)},MP.get());function l(){Vn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const HP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qP=500,zP=600,WP="_blank",GP="http://localhost";class Am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KP(t,e,n,r=qP,s=zP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},HP),{width:r.toString(),height:s.toString(),top:i,left:o}),u=$t().toLowerCase();n&&(c=av(u)?WP:n),iv(u)&&(e=e||GP,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[_,k])=>`${f}${_}=${k},`,"");if(cS(u)&&c!=="_self")return YP(e||"",c),new Am(null);const m=window.open(e||"",c,h);_e(m,t,"popup-blocked");try{m.focus()}catch{}return new Am(m)}function YP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QP="__/auth/handler",XP="emulator/auth/handler",JP=encodeURIComponent("fac");async function Sm(t,e,n,r,s,i){_e(t.config.authDomain,t,"auth-domain-config-required"),_e(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wi,eventId:s};if(e instanceof ad){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",DI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof Xo){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),u=l?`#${JP}=${encodeURIComponent(l)}`:"";return`${ZP(t)}?${Ko(c).slice(1)}${u}`}function ZP({config:t}){return t.emulator?nd(t,XP):`https://${t.authDomain}/${QP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="webStorageSupport";class eC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tv,this._completeRedirectFn=IP,this._overrideRedirectResult=bP}async _openPopup(e,n,r,s){var i;lr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sm(e,n,r,ju(),s);return KP(e,o,cd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Sm(e,n,r,ju(),s);return rP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(lr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jP(e),r=new SP(e);return n.register("authEvent",s=>(_e(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(au,{type:au},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[au];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dv()||ov()||sd()}}const tC=eC;var Pm="@firebase/auth",Cm="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sC(t){ui(new Ss("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;_e(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fv(t)},u=new mS(r,s,i,l);return AS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ui(new Ss("auth-internal",e=>{const n=yr(e.getProvider("auth").getImmediate());return(r=>new nC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hr(Pm,Cm,rC(t)),Hr(Pm,Cm,"esm2017")}/**
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
 */const iC=5*60,oC=H_("authIdTokenMaxAge")||iC;let Rm=null;const aC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oC)return;const s=n?.token;Rm!==s&&(Rm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lC(t=Y_()){const e=Jh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IS(t,{popupRedirectResolver:tC,persistence:[dP,eP,Tv]}),r=H_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=aC(i.toString());QS(n,o,()=>o(n.currentUser)),YS(n,c=>o(c))}}const s=B_("auth");return s&&SS(n,`http://${s}`),n}function cC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}gS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=vn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sC("Browser");var Dm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,kv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function b(){}b.prototype=v.prototype,T.D=v.prototype,T.prototype=new b,T.prototype.constructor=T,T.C=function(S,O,R){for(var I=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)I[Ve-2]=arguments[Ve];return v.prototype[O].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,b){b||(b=0);var S=Array(16);if(typeof v=="string")for(var O=0;16>O;++O)S[O]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(O=0;16>O;++O)S[O]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=T.g[0],b=T.g[1],O=T.g[2];var R=T.g[3],I=v+(R^b&(O^R))+S[0]+3614090360&4294967295;v=b+(I<<7&4294967295|I>>>25),I=R+(O^v&(b^O))+S[1]+3905402710&4294967295,R=v+(I<<12&4294967295|I>>>20),I=O+(b^R&(v^b))+S[2]+606105819&4294967295,O=R+(I<<17&4294967295|I>>>15),I=b+(v^O&(R^v))+S[3]+3250441966&4294967295,b=O+(I<<22&4294967295|I>>>10),I=v+(R^b&(O^R))+S[4]+4118548399&4294967295,v=b+(I<<7&4294967295|I>>>25),I=R+(O^v&(b^O))+S[5]+1200080426&4294967295,R=v+(I<<12&4294967295|I>>>20),I=O+(b^R&(v^b))+S[6]+2821735955&4294967295,O=R+(I<<17&4294967295|I>>>15),I=b+(v^O&(R^v))+S[7]+4249261313&4294967295,b=O+(I<<22&4294967295|I>>>10),I=v+(R^b&(O^R))+S[8]+1770035416&4294967295,v=b+(I<<7&4294967295|I>>>25),I=R+(O^v&(b^O))+S[9]+2336552879&4294967295,R=v+(I<<12&4294967295|I>>>20),I=O+(b^R&(v^b))+S[10]+4294925233&4294967295,O=R+(I<<17&4294967295|I>>>15),I=b+(v^O&(R^v))+S[11]+2304563134&4294967295,b=O+(I<<22&4294967295|I>>>10),I=v+(R^b&(O^R))+S[12]+1804603682&4294967295,v=b+(I<<7&4294967295|I>>>25),I=R+(O^v&(b^O))+S[13]+4254626195&4294967295,R=v+(I<<12&4294967295|I>>>20),I=O+(b^R&(v^b))+S[14]+2792965006&4294967295,O=R+(I<<17&4294967295|I>>>15),I=b+(v^O&(R^v))+S[15]+1236535329&4294967295,b=O+(I<<22&4294967295|I>>>10),I=v+(O^R&(b^O))+S[1]+4129170786&4294967295,v=b+(I<<5&4294967295|I>>>27),I=R+(b^O&(v^b))+S[6]+3225465664&4294967295,R=v+(I<<9&4294967295|I>>>23),I=O+(v^b&(R^v))+S[11]+643717713&4294967295,O=R+(I<<14&4294967295|I>>>18),I=b+(R^v&(O^R))+S[0]+3921069994&4294967295,b=O+(I<<20&4294967295|I>>>12),I=v+(O^R&(b^O))+S[5]+3593408605&4294967295,v=b+(I<<5&4294967295|I>>>27),I=R+(b^O&(v^b))+S[10]+38016083&4294967295,R=v+(I<<9&4294967295|I>>>23),I=O+(v^b&(R^v))+S[15]+3634488961&4294967295,O=R+(I<<14&4294967295|I>>>18),I=b+(R^v&(O^R))+S[4]+3889429448&4294967295,b=O+(I<<20&4294967295|I>>>12),I=v+(O^R&(b^O))+S[9]+568446438&4294967295,v=b+(I<<5&4294967295|I>>>27),I=R+(b^O&(v^b))+S[14]+3275163606&4294967295,R=v+(I<<9&4294967295|I>>>23),I=O+(v^b&(R^v))+S[3]+4107603335&4294967295,O=R+(I<<14&4294967295|I>>>18),I=b+(R^v&(O^R))+S[8]+1163531501&4294967295,b=O+(I<<20&4294967295|I>>>12),I=v+(O^R&(b^O))+S[13]+2850285829&4294967295,v=b+(I<<5&4294967295|I>>>27),I=R+(b^O&(v^b))+S[2]+4243563512&4294967295,R=v+(I<<9&4294967295|I>>>23),I=O+(v^b&(R^v))+S[7]+1735328473&4294967295,O=R+(I<<14&4294967295|I>>>18),I=b+(R^v&(O^R))+S[12]+2368359562&4294967295,b=O+(I<<20&4294967295|I>>>12),I=v+(b^O^R)+S[5]+4294588738&4294967295,v=b+(I<<4&4294967295|I>>>28),I=R+(v^b^O)+S[8]+2272392833&4294967295,R=v+(I<<11&4294967295|I>>>21),I=O+(R^v^b)+S[11]+1839030562&4294967295,O=R+(I<<16&4294967295|I>>>16),I=b+(O^R^v)+S[14]+4259657740&4294967295,b=O+(I<<23&4294967295|I>>>9),I=v+(b^O^R)+S[1]+2763975236&4294967295,v=b+(I<<4&4294967295|I>>>28),I=R+(v^b^O)+S[4]+1272893353&4294967295,R=v+(I<<11&4294967295|I>>>21),I=O+(R^v^b)+S[7]+4139469664&4294967295,O=R+(I<<16&4294967295|I>>>16),I=b+(O^R^v)+S[10]+3200236656&4294967295,b=O+(I<<23&4294967295|I>>>9),I=v+(b^O^R)+S[13]+681279174&4294967295,v=b+(I<<4&4294967295|I>>>28),I=R+(v^b^O)+S[0]+3936430074&4294967295,R=v+(I<<11&4294967295|I>>>21),I=O+(R^v^b)+S[3]+3572445317&4294967295,O=R+(I<<16&4294967295|I>>>16),I=b+(O^R^v)+S[6]+76029189&4294967295,b=O+(I<<23&4294967295|I>>>9),I=v+(b^O^R)+S[9]+3654602809&4294967295,v=b+(I<<4&4294967295|I>>>28),I=R+(v^b^O)+S[12]+3873151461&4294967295,R=v+(I<<11&4294967295|I>>>21),I=O+(R^v^b)+S[15]+530742520&4294967295,O=R+(I<<16&4294967295|I>>>16),I=b+(O^R^v)+S[2]+3299628645&4294967295,b=O+(I<<23&4294967295|I>>>9),I=v+(O^(b|~R))+S[0]+4096336452&4294967295,v=b+(I<<6&4294967295|I>>>26),I=R+(b^(v|~O))+S[7]+1126891415&4294967295,R=v+(I<<10&4294967295|I>>>22),I=O+(v^(R|~b))+S[14]+2878612391&4294967295,O=R+(I<<15&4294967295|I>>>17),I=b+(R^(O|~v))+S[5]+4237533241&4294967295,b=O+(I<<21&4294967295|I>>>11),I=v+(O^(b|~R))+S[12]+1700485571&4294967295,v=b+(I<<6&4294967295|I>>>26),I=R+(b^(v|~O))+S[3]+2399980690&4294967295,R=v+(I<<10&4294967295|I>>>22),I=O+(v^(R|~b))+S[10]+4293915773&4294967295,O=R+(I<<15&4294967295|I>>>17),I=b+(R^(O|~v))+S[1]+2240044497&4294967295,b=O+(I<<21&4294967295|I>>>11),I=v+(O^(b|~R))+S[8]+1873313359&4294967295,v=b+(I<<6&4294967295|I>>>26),I=R+(b^(v|~O))+S[15]+4264355552&4294967295,R=v+(I<<10&4294967295|I>>>22),I=O+(v^(R|~b))+S[6]+2734768916&4294967295,O=R+(I<<15&4294967295|I>>>17),I=b+(R^(O|~v))+S[13]+1309151649&4294967295,b=O+(I<<21&4294967295|I>>>11),I=v+(O^(b|~R))+S[4]+4149444226&4294967295,v=b+(I<<6&4294967295|I>>>26),I=R+(b^(v|~O))+S[11]+3174756917&4294967295,R=v+(I<<10&4294967295|I>>>22),I=O+(v^(R|~b))+S[2]+718787259&4294967295,O=R+(I<<15&4294967295|I>>>17),I=b+(R^(O|~v))+S[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(O+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+O&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var b=v-this.blockSize,S=this.B,O=this.h,R=0;R<v;){if(O==0)for(;R<=b;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<v;)if(S[O++]=T.charCodeAt(R++),O==this.blockSize){s(this,S),O=0;break}}else for(;R<v;)if(S[O++]=T[R++],O==this.blockSize){s(this,S),O=0;break}}this.h=O,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var b=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=b&255,b/=256;for(this.u(T),T=Array(16),v=b=0;4>v;++v)for(var S=0;32>S;S+=8)T[b++]=this.g[v]>>>S&255;return T};function i(T,v){var b=c;return Object.prototype.hasOwnProperty.call(b,T)?b[T]:b[T]=v(T)}function o(T,v){this.h=v;for(var b=[],S=!0,O=T.length-1;0<=O;O--){var R=T[O]|0;S&&R==v||(b[O]=R,S=!1)}this.g=b}var c={};function l(T){return-128<=T&&128>T?i(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return A(u(-T));for(var v=[],b=1,S=0;T>=b;S++)v[S]=T/b|0,b*=4294967296;return new o(v,0)}function h(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return A(h(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(v,8)),S=m,O=0;O<T.length;O+=8){var R=Math.min(8,T.length-O),I=parseInt(T.substring(O,O+R),v);8>R?(R=u(Math.pow(v,R)),S=S.j(R).add(u(I))):(S=S.j(b),S=S.add(u(I)))}return S}var m=l(0),f=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(C(this))return-A(this).m();for(var T=0,v=1,b=0;b<this.g.length;b++){var S=this.i(b);T+=(0<=S?S:4294967296+S)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(C(this))return"-"+A(this).toString(T);for(var v=u(Math.pow(T,6)),b=this,S="";;){var O=$(b,v).g;b=N(b,O.j(v));var R=((0<b.g.length?b.g[0]:b.h)>>>0).toString(T);if(b=O,k(b))return R+S;for(;6>R.length;)R="0"+R;S=R+S}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function C(T){return T.h==-1}t.l=function(T){return T=N(this,T),C(T)?-1:k(T)?0:1};function A(T){for(var v=T.g.length,b=[],S=0;S<v;S++)b[S]=~T.g[S];return new o(b,~T.h).add(f)}t.abs=function(){return C(this)?A(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),b=[],S=0,O=0;O<=v;O++){var R=S+(this.i(O)&65535)+(T.i(O)&65535),I=(R>>>16)+(this.i(O)>>>16)+(T.i(O)>>>16);S=I>>>16,R&=65535,I&=65535,b[O]=I<<16|R}return new o(b,b[b.length-1]&-2147483648?-1:0)};function N(T,v){return T.add(A(v))}t.j=function(T){if(k(this)||k(T))return m;if(C(this))return C(T)?A(this).j(A(T)):A(A(this).j(T));if(C(T))return A(this.j(A(T)));if(0>this.l(_)&&0>T.l(_))return u(this.m()*T.m());for(var v=this.g.length+T.g.length,b=[],S=0;S<2*v;S++)b[S]=0;for(S=0;S<this.g.length;S++)for(var O=0;O<T.g.length;O++){var R=this.i(S)>>>16,I=this.i(S)&65535,Ve=T.i(O)>>>16,ye=T.i(O)&65535;b[2*S+2*O]+=I*ye,x(b,2*S+2*O),b[2*S+2*O+1]+=R*ye,x(b,2*S+2*O+1),b[2*S+2*O+1]+=I*Ve,x(b,2*S+2*O+1),b[2*S+2*O+2]+=R*Ve,x(b,2*S+2*O+2)}for(S=0;S<v;S++)b[S]=b[2*S+1]<<16|b[2*S];for(S=v;S<2*v;S++)b[S]=0;return new o(b,0)};function x(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function M(T,v){this.g=T,this.h=v}function $(T,v){if(k(v))throw Error("division by zero");if(k(T))return new M(m,m);if(C(T))return v=$(A(T),v),new M(A(v.g),A(v.h));if(C(v))return v=$(T,A(v)),new M(A(v.g),v.h);if(30<T.g.length){if(C(T)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var b=f,S=v;0>=S.l(T);)b=F(b),S=F(S);var O=B(b,1),R=B(S,1);for(S=B(S,2),b=B(b,2);!k(S);){var I=R.add(S);0>=I.l(T)&&(O=O.add(b),R=I),S=B(S,1),b=B(b,1)}return v=N(T,O.j(v)),new M(O,v)}for(O=m;0<=T.l(v);){for(b=Math.max(1,Math.floor(T.m()/v.m())),S=Math.ceil(Math.log(b)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),R=u(b),I=R.j(v);C(I)||0<I.l(T);)b-=S,R=u(b),I=R.j(v);k(R)&&(R=f),O=O.add(R),T=N(T,I)}return new M(O,T)}t.A=function(T){return $(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),b=[],S=0;S<v;S++)b[S]=this.i(S)&T.i(S);return new o(b,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),b=[],S=0;S<v;S++)b[S]=this.i(S)|T.i(S);return new o(b,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),b=[],S=0;S<v;S++)b[S]=this.i(S)^T.i(S);return new o(b,this.h^T.h)};function F(T){for(var v=T.g.length+1,b=[],S=0;S<v;S++)b[S]=T.i(S)<<1|T.i(S-1)>>>31;return new o(b,T.h)}function B(T,v){var b=v>>5;v%=32;for(var S=T.g.length-b,O=[],R=0;R<S;R++)O[R]=0<v?T.i(R+b)>>>v|T.i(R+b+1)<<32-v:T.i(R+b);return new o(O,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,qr=o}).apply(typeof Dm<"u"?Dm:typeof self<"u"?self:typeof window<"u"?window:{});var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ov,Qi,xv,Ka,zu,Nv,Vv,Mv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,g){return a==Array.prototype||a==Object.prototype||(a[d]=g.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ka=="object"&&ka];for(var d=0;d<a.length;++d){var g=a[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var g=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var L=a[w];if(!(L in g))break e;g=g[L]}a=a[a.length-1],w=g[a],d=d(w),d!=w&&d!=null&&e(g,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var g=0,w=!1,L={next:function(){if(!w&&g<a.length){var U=g++;return{value:d(U,a[U]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,g){return a.call.apply(a.bind,arguments)}function m(a,d,g){if(!a)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),a.apply(d,L)}}return function(){return a.apply(d,arguments)}}function f(a,d,g){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:m,f.apply(null,arguments)}function _(a,d){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function k(a,d){function g(){}g.prototype=d.prototype,a.aa=d.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(w,L,U){for(var ne=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)ne[Ge-2]=arguments[Ge];return d.prototype[L].apply(w,ne)}}function C(a){const d=a.length;if(0<d){const g=Array(d);for(let w=0;w<d;w++)g[w]=a[w];return g}return[]}function A(a,d){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(l(w)){const L=a.length||0,U=w.length||0;a.length=L+U;for(let ne=0;ne<U;ne++)a[L+ne]=w[ne]}else a.push(w)}}class N{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function x(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var F=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function B(a,d,g){for(const w in a)d.call(g,a[w],w,a)}function T(a,d){for(const g in a)d.call(void 0,a[g],g,a)}function v(a){const d={};for(const g in a)d[g]=a[g];return d}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,d){let g,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(g in w)a[g]=w[g];for(let U=0;U<b.length;U++)g=b[U],Object.prototype.hasOwnProperty.call(w,g)&&(a[g]=w[g])}}function O(a){var d=1;a=a.split(":");const g=[];for(;0<d&&a.length;)g.push(a.shift()),d--;return a.length&&g.push(a.join(":")),g}function R(a){c.setTimeout(()=>{throw a},0)}function I(){var a=pt;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ve{constructor(){this.h=this.g=null}add(d,g){const w=ye.get();w.set(d,g),this.h?this.h.next=w:this.g=w,this.h=w}}var ye=new N(()=>new Y,a=>a.reset());class Y{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let X,De=!1,pt=new Ve,bt=()=>{const a=c.Promise.resolve(void 0);X=()=>{a.then(Je)}};var Je=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(g){R(g)}var d=ye;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}De=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var Bt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};c.addEventListener("test",g,d),c.removeEventListener("test",g,d)}catch{}return a}();function mn(a,d){if(We.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(F){e:{try{$(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else g=="mouseover"?d=a.fromElement:g=="mouseout"&&(d=a.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:jt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&mn.aa.h.call(this)}}k(mn,We);var jt={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),ae=0;function oe(a,d,g,w,L){this.listener=a,this.proxy=null,this.src=d,this.type=g,this.capture=!!w,this.ha=L,this.key=++ae,this.da=this.fa=!1}function ce(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ue(a){this.src=a,this.g={},this.h=0}Ue.prototype.add=function(a,d,g,w,L){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var ne=D(a,d,w,L);return-1<ne?(d=a[ne],g||(d.fa=!1)):(d=new oe(d,this.src,U,!!w,L),d.fa=g,a.push(d)),d};function P(a,d){var g=d.type;if(g in a.g){var w=a.g[g],L=Array.prototype.indexOf.call(w,d,void 0),U;(U=0<=L)&&Array.prototype.splice.call(w,L,1),U&&(ce(d),a.g[g].length==0&&(delete a.g[g],a.h--))}}function D(a,d,g,w){for(var L=0;L<a.length;++L){var U=a[L];if(!U.da&&U.listener==d&&U.capture==!!g&&U.ha==w)return L}return-1}var V="closure_lm_"+(1e6*Math.random()|0),q={};function K(a,d,g,w,L){if(Array.isArray(d)){for(var U=0;U<d.length;U++)K(a,d[U],g,w,L);return null}return g=we(g),a&&a[j]?a.K(d,g,u(w)?!!w.capture:!1,L):z(a,d,g,!1,w,L)}function z(a,d,g,w,L,U){if(!d)throw Error("Invalid event type");var ne=u(L)?!!L.capture:!!L,Ge=re(a);if(Ge||(a[V]=Ge=new Ue(a)),g=Ge.add(d,g,w,ne,U),g.proxy)return g;if(w=se(),g.proxy=w,w.src=a,w.listener=g,a.addEventListener)Bt||(L=ne),L===void 0&&(L=!1),a.addEventListener(d.toString(),w,L);else if(a.attachEvent)a.attachEvent(J(d.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function se(){function a(g){return d.call(a.src,a.listener,g)}const d=fe;return a}function te(a,d,g,w,L){if(Array.isArray(d))for(var U=0;U<d.length;U++)te(a,d[U],g,w,L);else w=u(w)?!!w.capture:!!w,g=we(g),a&&a[j]?(a=a.i,d=String(d).toString(),d in a.g&&(U=a.g[d],g=D(U,g,w,L),-1<g&&(ce(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete a.g[d],a.h--)))):a&&(a=re(a))&&(d=a.g[d.toString()],a=-1,d&&(a=D(d,g,w,L)),(g=-1<a?d[a]:null)&&ee(g))}function ee(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[j])P(d.i,a);else{var g=a.type,w=a.proxy;d.removeEventListener?d.removeEventListener(g,w,a.capture):d.detachEvent?d.detachEvent(J(g),w):d.addListener&&d.removeListener&&d.removeListener(w),(g=re(d))?(P(g,a),g.h==0&&(g.src=null,d[V]=null)):ce(a)}}}function J(a){return a in q?q[a]:q[a]="on"+a}function fe(a,d){if(a.da)a=!0;else{d=new mn(d,this);var g=a.listener,w=a.ha||a.src;a.fa&&ee(a),a=g.call(w,d)}return a}function re(a){return a=a[V],a instanceof Ue?a:null}var he="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(a){return typeof a=="function"?a:(a[he]||(a[he]=function(d){return a.handleEvent(d)}),a[he])}function ge(){je.call(this),this.i=new Ue(this),this.M=this,this.F=null}k(ge,je),ge.prototype[j]=!0,ge.prototype.removeEventListener=function(a,d,g,w){te(this,a,d,g,w)};function Re(a,d){var g,w=a.F;if(w)for(g=[];w;w=w.F)g.push(w);if(a=a.M,w=d.type||d,typeof d=="string")d=new We(d,a);else if(d instanceof We)d.target=d.target||a;else{var L=d;d=new We(w,a),S(d,L)}if(L=!0,g)for(var U=g.length-1;0<=U;U--){var ne=d.g=g[U];L=Me(ne,w,!0,d)&&L}if(ne=d.g=a,L=Me(ne,w,!0,d)&&L,L=Me(ne,w,!1,d)&&L,g)for(U=0;U<g.length;U++)ne=d.g=g[U],L=Me(ne,w,!1,d)&&L}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var g=a.g[d],w=0;w<g.length;w++)ce(g[w]);delete a.g[d],a.h--}}this.F=null},ge.prototype.K=function(a,d,g,w){return this.i.add(String(a),d,!1,g,w)},ge.prototype.L=function(a,d,g,w){return this.i.add(String(a),d,!0,g,w)};function Me(a,d,g,w){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,U=0;U<d.length;++U){var ne=d[U];if(ne&&!ne.da&&ne.capture==g){var Ge=ne.listener,At=ne.ha||ne.src;ne.fa&&P(a.i,ne),L=Ge.call(At,w)!==!1&&L}}return L&&!w.defaultPrevented}function Et(a,d,g){if(typeof a=="function")g&&(a=f(a,g));else if(a&&typeof a.handleEvent=="function")a=f(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function Tt(a){a.g=Et(()=>{a.g=null,a.i&&(a.i=!1,Tt(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class on extends je{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dt(a){je.call(this),this.h=a,this.g={}}k(Dt,je);var wr=[];function Ri(a){B(a.g,function(d,g){this.g.hasOwnProperty(g)&&ee(d)},a),a.g={}}Dt.prototype.N=function(){Dt.aa.N.call(this),Ri(this)},Dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var It=c.JSON.stringify,an=c.JSON.parse,ua=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Ac(){}Ac.prototype.h=null;function sf(a){return a.h||(a.h=a.i())}function of(){}var Di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sc(){We.call(this,"d")}k(Sc,We);function Pc(){We.call(this,"c")}k(Pc,We);var as={},af=null;function ha(){return af=af||new ge}as.La="serverreachability";function lf(a){We.call(this,as.La,a)}k(lf,We);function ki(a){const d=ha();Re(d,new lf(d))}as.STAT_EVENT="statevent";function cf(a,d){We.call(this,as.STAT_EVENT,a),this.stat=d}k(cf,We);function Ht(a){const d=ha();Re(d,new cf(d,a))}as.Ma="timingevent";function uf(a,d){We.call(this,as.Ma,a),this.size=d}k(uf,We);function Oi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function xi(){this.g=!0}xi.prototype.xa=function(){this.g=!1};function Qw(a,d,g,w,L,U){a.info(function(){if(a.g)if(U)for(var ne="",Ge=U.split("&"),At=0;At<Ge.length;At++){var Be=Ge[At].split("=");if(1<Be.length){var kt=Be[0];Be=Be[1];var Ot=kt.split("_");ne=2<=Ot.length&&Ot[1]=="type"?ne+(kt+"="+Be+"&"):ne+(kt+"=redacted&")}}else ne=null;else ne=U;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+d+`
`+g+`
`+ne})}function Xw(a,d,g,w,L,U,ne){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+d+`
`+g+`
`+U+" "+ne})}function Fs(a,d,g,w){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Zw(a,g)+(w?" "+w:"")})}function Jw(a,d){a.info(function(){return"TIMEOUT: "+d})}xi.prototype.info=function(){};function Zw(a,d){if(!a.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var w=g[a];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var ne=1;ne<L.length;ne++)L[ne]=""}}}}return It(g)}catch{return d}}var da={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cc;function fa(){}k(fa,Ac),fa.prototype.g=function(){return new XMLHttpRequest},fa.prototype.i=function(){return{}},Cc=new fa;function br(a,d,g,w){this.j=a,this.i=d,this.l=g,this.R=w||1,this.U=new Dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new df}function df(){this.i=null,this.g="",this.h=!1}var ff={},Rc={};function Dc(a,d,g){a.L=1,a.v=ya(Hn(d)),a.m=g,a.P=!0,pf(a,null)}function pf(a,d){a.F=Date.now(),pa(a),a.A=Hn(a.v);var g=a.A,w=a.R;Array.isArray(w)||(w=[String(w)]),Cf(g.i,"t",w),a.C=0,g=a.j.J,a.h=new df,a.g=Wf(a.j,g?d:null,!a.m),0<a.O&&(a.M=new on(f(a.Y,a,a.g),a.O)),d=a.U,g=a.g,w=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(wr[0]=L.toString()),L=wr);for(var U=0;U<L.length;U++){var ne=K(g,L[U],w||d.handleEvent,!1,d.h||d);if(!ne)break;d.g[ne.key]=ne}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),ki(),Qw(a.i,a.u,a.A,a.l,a.R,a.m)}br.prototype.ca=function(a){a=a.target;const d=this.M;d&&qn(a)==3?d.j():this.Y(a)},br.prototype.Y=function(a){try{if(a==this.g)e:{const Ot=qn(this.g);var d=this.g.Ba();const Bs=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||Vf(this.g)))){this.J||Ot!=4||d==7||(d==8||0>=Bs?ki(3):ki(2)),kc(this);var g=this.g.Z();this.X=g;t:if(mf(this)){var w=Vf(this.g);a="";var L=w.length,U=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ls(this),Ni(this);var ne="";break t}this.h.i=new c.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,a+=this.h.i.decode(w[d],{stream:!(U&&d==L-1)});w.length=0,this.h.g+=a,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=g==200,Xw(this.i,this.u,this.A,this.l,this.R,Ot,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ge,At=this.g;if((Ge=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Ge)){var Be=Ge;break t}}Be=null}if(g=Be)Fs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oc(this,g);else{this.o=!1,this.s=3,Ht(12),ls(this),Ni(this);break e}}if(this.P){g=!0;let gn;for(;!this.J&&this.C<ne.length;)if(gn=eb(this,ne),gn==Rc){Ot==4&&(this.s=4,Ht(14),g=!1),Fs(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==ff){this.s=4,Ht(15),Fs(this.i,this.l,ne,"[Invalid Chunk]"),g=!1;break}else Fs(this.i,this.l,gn,null),Oc(this,gn);if(mf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||ne.length!=0||this.h.h||(this.s=1,Ht(16),g=!1),this.o=this.o&&g,!g)Fs(this.i,this.l,ne,"[Invalid Chunked Response]"),ls(this),Ni(this);else if(0<ne.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Fc(kt),kt.M=!0,Ht(11))}}else Fs(this.i,this.l,ne,null),Oc(this,ne);Ot==4&&ls(this),this.o&&!this.J&&(Ot==4?jf(this.j,this):(this.o=!1,pa(this)))}else yb(this.g),g==400&&0<ne.indexOf("Unknown SID")?(this.s=3,Ht(12)):(this.s=0,Ht(13)),ls(this),Ni(this)}}}catch{}finally{}};function mf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function eb(a,d){var g=a.C,w=d.indexOf(`
`,g);return w==-1?Rc:(g=Number(d.substring(g,w)),isNaN(g)?ff:(w+=1,w+g>d.length?Rc:(d=d.slice(w,w+g),a.C=w+g,d)))}br.prototype.cancel=function(){this.J=!0,ls(this)};function pa(a){a.S=Date.now()+a.I,gf(a,a.I)}function gf(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Oi(f(a.ba,a),d)}function kc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}br.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Jw(this.i,this.A),this.L!=2&&(ki(),Ht(17)),ls(this),this.s=2,Ni(this)):gf(this,this.S-a)};function Ni(a){a.j.G==0||a.J||jf(a.j,a)}function ls(a){kc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Ri(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Oc(a,d){try{var g=a.j;if(g.G!=0&&(g.g==a||xc(g.h,a))){if(!a.K&&xc(g.h,a)&&g.G==3){try{var w=g.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)Ta(g),ba(g);else break e;Lc(g),Ht(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=Oi(f(g.Za,g),6e3));if(1>=vf(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else us(g,11)}else if((a.K||g.g==a)&&Ta(g),!x(d))for(L=g.Da.g.parse(d),d=0;d<L.length;d++){let Be=L[d];if(g.T=Be[0],Be=Be[1],g.G==2)if(Be[0]=="c"){g.K=Be[1],g.ia=Be[2];const kt=Be[3];kt!=null&&(g.la=kt,g.j.info("VER="+g.la));const Ot=Be[4];Ot!=null&&(g.Aa=Ot,g.j.info("SVER="+g.Aa));const Bs=Be[5];Bs!=null&&typeof Bs=="number"&&0<Bs&&(w=1.5*Bs,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const gn=a.g;if(gn){const Aa=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Aa){var U=w.h;U.g||Aa.indexOf("spdy")==-1&&Aa.indexOf("quic")==-1&&Aa.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Nc(U,U.h),U.h=null))}if(w.D){const $c=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;$c&&(w.ya=$c,Ze(w.I,w.D,$c))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var ne=a;if(w.qa=zf(w,w.J?w.ia:null,w.W),ne.K){wf(w.h,ne);var Ge=ne,At=w.L;At&&(Ge.I=At),Ge.B&&(kc(Ge),pa(Ge)),w.g=ne}else Uf(w);0<g.i.length&&Ea(g)}else Be[0]!="stop"&&Be[0]!="close"||us(g,7);else g.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?us(g,7):Mc(g):Be[0]!="noop"&&g.l&&g.l.ta(Be),g.v=0)}}ki(4)}catch{}}var tb=class{constructor(a,d){this.g=a,this.map=d}};function yf(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _f(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vf(a){return a.h?1:a.g?a.g.size:0}function xc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Nc(a,d){a.g?a.g.add(d):a.h=d}function wf(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}yf.prototype.cancel=function(){if(this.i=bf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const g of a.g.values())d=d.concat(g.D);return d}return C(a.i)}function nb(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],g=a.length,w=0;w<g;w++)d.push(a[w]);return d}d=[],g=0;for(w in a)d[g++]=a[w];return d}function rb(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var g=0;g<a;g++)d.push(g);return d}d=[],g=0;for(const w in a)d[g++]=w;return d}}}function Ef(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var g=rb(a),w=nb(a),L=w.length,U=0;U<L;U++)d.call(void 0,w[U],g&&g[U],a)}var Tf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sb(a,d){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var w=a[g].indexOf("="),L=null;if(0<=w){var U=a[g].substring(0,w);L=a[g].substring(w+1)}else U=a[g];d(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function cs(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof cs){this.h=a.h,ma(this,a.j),this.o=a.o,this.g=a.g,ga(this,a.s),this.l=a.l;var d=a.i,g=new Li;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),If(this,g),this.m=a.m}else a&&(d=String(a).match(Tf))?(this.h=!1,ma(this,d[1]||"",!0),this.o=Vi(d[2]||""),this.g=Vi(d[3]||"",!0),ga(this,d[4]),this.l=Vi(d[5]||"",!0),If(this,d[6]||"",!0),this.m=Vi(d[7]||"")):(this.h=!1,this.i=new Li(null,this.h))}cs.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Mi(d,Af,!0),":");var g=this.g;return(g||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Mi(d,Af,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(Mi(g,g.charAt(0)=="/"?ab:ob,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",Mi(g,cb)),a.join("")};function Hn(a){return new cs(a)}function ma(a,d,g){a.j=g?Vi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ga(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function If(a,d,g){d instanceof Li?(a.i=d,ub(a.i,a.h)):(g||(d=Mi(d,lb)),a.i=new Li(d,a.h))}function Ze(a,d,g){a.i.set(d,g)}function ya(a){return Ze(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Vi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Mi(a,d,g){return typeof a=="string"?(a=encodeURI(a).replace(d,ib),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ib(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Af=/[#\/\?@]/g,ob=/[#\?:]/g,ab=/[#\?]/g,lb=/[#\?@]/g,cb=/#/g;function Li(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Er(a){a.g||(a.g=new Map,a.h=0,a.i&&sb(a.i,function(d,g){a.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=Li.prototype,t.add=function(a,d){Er(this),this.i=null,a=$s(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(d),this.h+=1,this};function Sf(a,d){Er(a),d=$s(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Pf(a,d){return Er(a),d=$s(a,d),a.g.has(d)}t.forEach=function(a,d){Er(this),this.g.forEach(function(g,w){g.forEach(function(L){a.call(d,L,w,this)},this)},this)},t.na=function(){Er(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let w=0;w<d.length;w++){const L=a[w];for(let U=0;U<L.length;U++)g.push(d[w])}return g},t.V=function(a){Er(this);let d=[];if(typeof a=="string")Pf(this,a)&&(d=d.concat(this.g.get($s(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)d=d.concat(a[g])}return d},t.set=function(a,d){return Er(this),this.i=null,a=$s(this,a),Pf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Cf(a,d,g){Sf(a,d),0<g.length&&(a.i=null,a.g.set($s(a,d),C(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var w=d[g];const U=encodeURIComponent(String(w)),ne=this.V(w);for(w=0;w<ne.length;w++){var L=U;ne[w]!==""&&(L+="="+encodeURIComponent(String(ne[w]))),a.push(L)}}return this.i=a.join("&")};function $s(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function ub(a,d){d&&!a.j&&(Er(a),a.i=null,a.g.forEach(function(g,w){var L=w.toLowerCase();w!=L&&(Sf(this,w),Cf(this,L,g))},a)),a.j=d}function hb(a,d){const g=new xi;if(c.Image){const w=new Image;w.onload=_(Tr,g,"TestLoadImage: loaded",!0,d,w),w.onerror=_(Tr,g,"TestLoadImage: error",!1,d,w),w.onabort=_(Tr,g,"TestLoadImage: abort",!1,d,w),w.ontimeout=_(Tr,g,"TestLoadImage: timeout",!1,d,w),c.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else d(!1)}function db(a,d){const g=new xi,w=new AbortController,L=setTimeout(()=>{w.abort(),Tr(g,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:w.signal}).then(U=>{clearTimeout(L),U.ok?Tr(g,"TestPingServer: ok",!0,d):Tr(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),Tr(g,"TestPingServer: error",!1,d)})}function Tr(a,d,g,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(g)}catch{}}function fb(){this.g=new ua}function pb(a,d,g){const w=g||"";try{Ef(a,function(L,U){let ne=L;u(L)&&(ne=It(L)),d.push(w+U+"="+encodeURIComponent(ne))})}catch(L){throw d.push(w+"type="+encodeURIComponent("_badmap")),L}}function _a(a){this.l=a.Ub||null,this.j=a.eb||!1}k(_a,Ac),_a.prototype.g=function(){return new va(this.l,this.j)},_a.prototype.i=function(a){return function(){return a}}({});function va(a,d){ge.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(va,ge),t=va.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,$i(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Fi(this):$i(this),this.readyState==3&&Rf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Fi(this))},t.Qa=function(a){this.g&&(this.response=a,Fi(this))},t.ga=function(){this.g&&Fi(this)};function Fi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,$i(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=d.next();return a.join(`\r
`)};function $i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Df(a){let d="";return B(a,function(g,w){d+=w,d+=":",d+=g,d+=`\r
`}),d}function Vc(a,d,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=Df(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):Ze(a,d,g))}function rt(a){ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(rt,ge);var mb=/^https?$/i,gb=["POST","PUT"];t=rt.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cc.g(),this.v=this.o?sf(this.o):sf(Cc),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(U){kf(this,U);return}if(a=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)g.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())g.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),L=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(gb,d,void 0))||w||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,ne]of g)this.g.setRequestHeader(U,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nf(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){kf(this,U)}};function kf(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Of(a),wa(a)}function Of(a){a.A||(a.A=!0,Re(a,"complete"),Re(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Re(this,"complete"),Re(this,"abort"),wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wa(this,!0)),rt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?xf(this):this.bb())},t.bb=function(){xf(this)};function xf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||qn(a)!=4||a.Z()!=2)){if(a.u&&qn(a)==4)Et(a.Ea,0,a);else if(Re(a,"readystatechange"),qn(a)==4){a.h=!1;try{const ne=a.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var w;if(w=ne===0){var L=String(a.D).match(Tf)[1]||null;!L&&c.self&&c.self.location&&(L=c.self.location.protocol.slice(0,-1)),w=!mb.test(L?L.toLowerCase():"")}g=w}if(g)Re(a,"complete"),Re(a,"success");else{a.m=6;try{var U=2<qn(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",Of(a)}}finally{wa(a)}}}}function wa(a,d){if(a.g){Nf(a);const g=a.g,w=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Re(a,"ready");try{g.onreadystatechange=w}catch{}}}function Nf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function qn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),an(d)}};function Vf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function yb(a){const d={};a=(a.g&&2<=qn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(x(a[w]))continue;var g=O(a[w]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=d[L]||[];d[L]=U,U.push(g)}T(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ui(a,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||d}function Mf(a){this.Aa=0,this.i=[],this.j=new xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ui("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ui("baseRetryDelayMs",5e3,a),this.cb=Ui("retryDelaySeedMs",1e4,a),this.Wa=Ui("forwardChannelMaxRetries",2,a),this.wa=Ui("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new yf(a&&a.concurrentRequestLimit),this.Da=new fb,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Mf.prototype,t.la=8,t.G=1,t.connect=function(a,d,g,w){Ht(0),this.W=a,this.H=d||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=zf(this,null,this.W),Ea(this)};function Mc(a){if(Lf(a),a.G==3){var d=a.U++,g=Hn(a.I);if(Ze(g,"SID",a.K),Ze(g,"RID",d),Ze(g,"TYPE","terminate"),Bi(a,g),d=new br(a,a.j,d),d.L=2,d.v=ya(Hn(g)),g=!1,c.navigator&&c.navigator.sendBeacon)try{g=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&c.Image&&(new Image().src=d.v,g=!0),g||(d.g=Wf(d.j,null),d.g.ea(d.v)),d.F=Date.now(),pa(d)}qf(a)}function ba(a){a.g&&(Fc(a),a.g.cancel(),a.g=null)}function Lf(a){ba(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ta(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ea(a){if(!_f(a.h)&&!a.s){a.s=!0;var d=a.Ga;X||bt(),De||(X(),De=!0),pt.add(d,a),a.B=0}}function _b(a,d){return vf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Oi(f(a.Ga,a,d),Hf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new br(this,this.j,a);let U=this.o;if(this.S&&(U?(U=v(U),S(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=$f(this,L,d),g=Hn(this.I),Ze(g,"RID",a),Ze(g,"CVER",22),this.D&&Ze(g,"X-HTTP-Session-Id",this.D),Bi(this,g),U&&(this.O?d="headers="+encodeURIComponent(String(Df(U)))+"&"+d:this.m&&Vc(g,this.m,U)),Nc(this.h,L),this.Ua&&Ze(g,"TYPE","init"),this.P?(Ze(g,"$req",d),Ze(g,"SID","null"),L.T=!0,Dc(L,g,null)):Dc(L,g,d),this.G=2}}else this.G==3&&(a?Ff(this,a):this.i.length==0||_f(this.h)||Ff(this))};function Ff(a,d){var g;d?g=d.l:g=a.U++;const w=Hn(a.I);Ze(w,"SID",a.K),Ze(w,"RID",g),Ze(w,"AID",a.T),Bi(a,w),a.m&&a.o&&Vc(w,a.m,a.o),g=new br(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),d&&(a.i=d.D.concat(a.i)),d=$f(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Nc(a.h,g),Dc(g,w,d)}function Bi(a,d){a.H&&B(a.H,function(g,w){Ze(d,w,g)}),a.l&&Ef({},function(g,w){Ze(d,w,g)})}function $f(a,d,g){g=Math.min(a.i.length,g);var w=a.l?f(a.l.Na,a.l,a):null;e:{var L=a.i;let U=-1;for(;;){const ne=["count="+g];U==-1?0<g?(U=L[0].g,ne.push("ofs="+U)):U=0:ne.push("ofs="+U);let Ge=!0;for(let At=0;At<g;At++){let Be=L[At].g;const kt=L[At].map;if(Be-=U,0>Be)U=Math.max(0,L[At].g-100),Ge=!1;else try{pb(kt,ne,"req"+Be+"_")}catch{w&&w(kt)}}if(Ge){w=ne.join("&");break e}}}return a=a.i.splice(0,g),d.D=a,w}function Uf(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;X||bt(),De||(X(),De=!0),pt.add(d,a),a.v=0}}function Lc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Oi(f(a.Fa,a),Hf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Bf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Oi(f(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ht(10),ba(this),Bf(this))};function Fc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Bf(a){a.g=new br(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Hn(a.qa);Ze(d,"RID","rpc"),Ze(d,"SID",a.K),Ze(d,"AID",a.T),Ze(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ze(d,"TO",a.ja),Ze(d,"TYPE","xmlhttp"),Bi(a,d),a.m&&a.o&&Vc(d,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=ya(Hn(d)),g.m=null,g.P=!0,pf(g,a)}t.Za=function(){this.C!=null&&(this.C=null,ba(this),Lc(this),Ht(19))};function Ta(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function jf(a,d){var g=null;if(a.g==d){Ta(a),Fc(a),a.g=null;var w=2}else if(xc(a.h,d))g=d.D,wf(a.h,d),w=1;else return;if(a.G!=0){if(d.o)if(w==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var L=a.B;w=ha(),Re(w,new uf(w,g)),Ea(a)}else Uf(a);else if(L=d.s,L==3||L==0&&0<d.X||!(w==1&&_b(a,d)||w==2&&Lc(a)))switch(g&&0<g.length&&(d=a.h,d.i=d.i.concat(g)),L){case 1:us(a,5);break;case 4:us(a,10);break;case 3:us(a,6);break;default:us(a,2)}}}function Hf(a,d){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*d}function us(a,d){if(a.j.info("Error code "+d),d==2){var g=f(a.fb,a),w=a.Xa;const L=!w;w=new cs(w||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ma(w,"https"),ya(w),L?hb(w.toString(),g):db(w.toString(),g)}else Ht(2);a.G=0,a.l&&a.l.sa(d),qf(a),Lf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))};function qf(a){if(a.G=0,a.ka=[],a.l){const d=bf(a.h);(d.length!=0||a.i.length!=0)&&(A(a.ka,d),A(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function zf(a,d,g){var w=g instanceof cs?Hn(g):new cs(g);if(w.g!="")d&&(w.g=d+"."+w.g),ga(w,w.s);else{var L=c.location;w=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var U=new cs(null);w&&ma(U,w),d&&(U.g=d),L&&ga(U,L),g&&(U.l=g),w=U}return g=a.D,d=a.ya,g&&d&&Ze(w,g,d),Ze(w,"VER",a.la),Bi(a,w),w}function Wf(a,d,g){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new rt(new _a({eb:g})):new rt(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gf(){}t=Gf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ia(){}Ia.prototype.g=function(a,d){return new Zt(a,d)};function Zt(a,d){ge.call(this),this.g=new Mf(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!x(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!x(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Us(this)}k(Zt,ge),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){Mc(this.g)},Zt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=It(a),a=g);d.i.push(new tb(d.Ya++,a)),d.G==3&&Ea(d)},Zt.prototype.N=function(){this.g.l=null,delete this.j,Mc(this.g),delete this.g,Zt.aa.N.call(this)};function Kf(a){Sc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const g in d){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}k(Kf,Sc);function Yf(){Pc.call(this),this.status=1}k(Yf,Pc);function Us(a){this.g=a}k(Us,Gf),Us.prototype.ua=function(){Re(this.g,"a")},Us.prototype.ta=function(a){Re(this.g,new Kf(a))},Us.prototype.sa=function(a){Re(this.g,new Yf)},Us.prototype.ra=function(){Re(this.g,"b")},Ia.prototype.createWebChannel=Ia.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,Mv=function(){return new Ia},Vv=function(){return ha()},Nv=as,zu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},da.NO_ERROR=0,da.TIMEOUT=8,da.HTTP_ERROR=6,Ka=da,hf.COMPLETE="complete",xv=hf,of.EventType=Di,Di.OPEN="a",Di.CLOSE="b",Di.ERROR="c",Di.MESSAGE="d",ge.prototype.listen=ge.prototype.K,Qi=of,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,Ov=rt}).apply(typeof ka<"u"?ka:typeof self<"u"?self:typeof window<"u"?window:{});const km="@firebase/firestore",Om="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Rs=new Qh("@firebase/firestore");function Ws(){return Rs.logLevel}function le(t,...e){if(Rs.logLevel<=xe.DEBUG){const n=e.map(hd);Rs.debug(`Firestore (${Ei}): ${t}`,...n)}}function cr(t,...e){if(Rs.logLevel<=xe.ERROR){const n=e.map(hd);Rs.error(`Firestore (${Ei}): ${t}`,...n)}}function Kr(t,...e){if(Rs.logLevel<=xe.WARN){const n=e.map(hd);Rs.warn(`Firestore (${Ei}): ${t}`,...n)}}function hd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ve(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Lv(t,r,n)}function Lv(t,e,n){let r=`FIRESTORE (${Ei}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw cr(r),new Error(r)}function ze(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Lv(e,s,r)}function Ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends gr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Vt.UNAUTHENTICATED))}shutdown(){}}class hC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dC{constructor(e){this.t=e,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ze(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string",31837,{l:r}),new Fv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Vt(e)}}class fC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new fC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ze(this.o===void 0,3512);const r=i=>{i.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,le("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new xm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function $v(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=gC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function Wu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ke(r,s);{const i=$v(),o=yC(i.encode(Nm(t,n)),i.encode(Nm(e,n)));return o!==0?o:ke(r,s)}}n+=r>65535?2:1}return ke(t.length,e.length)}function Nm(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function yC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ke(t[n],e[n]);return ke(t.length,e.length)}function di(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="__name__";class Rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ve(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ve(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Rn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ke(e.length,n.length)}static compareSegments(e,n){const r=Rn.isNumericId(e),s=Rn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Rn.extractNumericId(e).compare(Rn.extractNumericId(n)):Wu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qr.fromString(e.substring(4,e.length-2))}}class Xe extends Rn{construct(e,n,r){return new Xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Xe(n)}static emptyPath(){return new Xe([])}}const _C=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Rn{construct(e,n,r){return new Ct(e,n,r)}static isValidIdentifier(e){return _C.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vm}static keyField(){return new Ct([Vm])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(n)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Xe.fromString(e))}static fromName(e){return new me(Xe.fromString(e).popFirst(5))}static empty(){return new me(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Xe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t,e,n){if(!n)throw new ie(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vC(t,e,n,r){if(e===!0&&r===!0)throw new ie(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mm(t){if(!me.isDocumentKey(t))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lm(t){if(me.isDocumentKey(t))throw new ie(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ve(12329,{type:typeof t})}function fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nc(t);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function Zo(t,e){if(!Bv(t))throw new ie(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ie(H.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=-62135596800,$m=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*$m);return new Oe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fm)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$m}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zo(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:ft("string",Oe._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{static fromTimestamp(e){return new be(e)}static min(){return new be(new Oe(0,0))}static max(){return new be(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const No=-1;function wC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=be.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new Yr(s,me.empty(),e)}function bC(t){return new Yr(t.readTime,t.key,No)}class Yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yr(be.min(),me.empty(),No)}static max(){return new Yr(be.max(),me.empty(),No)}}function EC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==TC)throw t;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new G((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof G?n:G.resolve(n)}catch(n){return G.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):G.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):G.reject(n)}static resolve(e){return new G((n,r)=>{n(e)})}static reject(e){return new G((n,r)=>{r(e)})}static waitFor(e){return new G((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=G.resolve(!1);for(const r of e)n=n.next(s=>s?G.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new G((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new G((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function AC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ii(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const fd=-1;function sc(t){return t==null}function wl(t){return t===0&&1/t==-1/0}function SC(t){return typeof t=="number"&&Number.isInteger(t)&&!wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="";function PC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Um(e)),e=CC(t.get(n),e);return Um(e)}function CC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case jv:n+="";break;default:n+=i}}return n}function Um(t){return t+jv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oa(this.root,e,this.comparator,!0)}}class Oa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??St.RED,this.left=s??St.EMPTY,this.right=i??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new St(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return St.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new St(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jm(this.data.getIterator())}getIteratorFrom(e){return new jm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class jm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new rn([])}unionWith(e){let n=new gt(Ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qv("Invalid base64 string: "+i):i}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const RC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(t){if(ze(!!t,39018),typeof t=="string"){let e=0;const n=RC.exec(t);if(ze(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xr(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="server_timestamp",Wv="__type__",Gv="__previous_value__",Kv="__local_write_time__";function pd(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Wv])===null||n===void 0?void 0:n.stringValue)===zv}function ic(t){const e=t.mapValue.fields[Gv];return pd(e)?ic(e):e}function Vo(t){const e=Qr(t.mapValue.fields[Kv].timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r,s,i,o,c,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h}}const bl="(default)";class Mo{constructor(e,n){this.projectId=e,this.database=n||bl}static empty(){return new Mo("","")}get isDefaultDatabase(){return this.database===bl}isEqual(e){return e instanceof Mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="__type__",kC="__max__",xa={mapValue:{}},Qv="__vector__",El="value";function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pd(t)?4:xC(t)?9007199254740991:OC(t)?10:11:ve(28295,{value:t})}function Bn(t,e){if(t===e)return!0;const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qr(s.timestampValue),c=Qr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Xr(s.bytesValue).isEqual(Xr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return lt(s.geoPointValue.latitude)===lt(i.geoPointValue.latitude)&&lt(s.geoPointValue.longitude)===lt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return lt(s.integerValue)===lt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=lt(s.doubleValue),c=lt(i.doubleValue);return o===c?wl(o)===wl(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return di(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Bm(o)!==Bm(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Bn(o[l],c[l])))return!1;return!0}(t,e);default:return ve(52216,{left:t})}}function Lo(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=Jr(t),r=Jr(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=lt(i.integerValue||i.doubleValue),l=lt(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Hm(t.timestampValue,e.timestampValue);case 4:return Hm(Vo(t),Vo(e));case 5:return Wu(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Xr(i),l=Xr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=ke(c[u],l[u]);if(h!==0)return h}return ke(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ke(lt(i.latitude),lt(o.latitude));return c!==0?c:ke(lt(i.longitude),lt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,h;const m=i.fields||{},f=o.fields||{},_=(c=m[El])===null||c===void 0?void 0:c.arrayValue,k=(l=f[El])===null||l===void 0?void 0:l.arrayValue,C=ke(((u=_?.values)===null||u===void 0?void 0:u.length)||0,((h=k?.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:qm(_,k)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===xa.mapValue&&o===xa.mapValue)return 0;if(i===xa.mapValue)return 1;if(o===xa.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let m=0;m<l.length&&m<h.length;++m){const f=Wu(l[m],h[m]);if(f!==0)return f;const _=fi(c[l[m]],u[h[m]]);if(_!==0)return _}return ke(l.length,h.length)}(t.mapValue,e.mapValue);default:throw ve(23264,{le:n})}}function Hm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=Qr(t),r=Qr(e),s=ke(n.seconds,r.seconds);return s!==0?s:ke(n.nanos,r.nanos)}function qm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=fi(n[s],r[s]);if(i)return i}return ke(n.length,r.length)}function pi(t){return Gu(t)}function Gu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return me.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gu(n.fields[o])}`;return s+"}"}(t.mapValue):ve(61005,{value:t})}function Ya(t){switch(Jr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(t);return e?16+Ya(e):16;case 5:return 2*t.stringValue.length;case 6:return Xr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ya(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ss(r.fields,(i,o)=>{s+=i.length+Ya(o)}),s}(t.mapValue);default:throw ve(13486,{value:t})}}function zm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ku(t){return!!t&&"integerValue"in t}function md(t){return!!t&&"arrayValue"in t}function Wm(t){return!!t&&"nullValue"in t}function Gm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qa(t){return!!t&&"mapValue"in t}function OC(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Yv])===null||n===void 0?void 0:n.stringValue)===Qv}function mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ss(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===kC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mo(n)}setAll(e){let n=Ct.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=mo(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Qa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ss(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Jt(mo(this.value))}}function Xv(t){const e=[];return ss(t.fields,(n,r)=>{const s=new Ct([n]);if(Qa(r)){const i=Xv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Lt(e,0,be.min(),be.min(),be.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,s){return new Lt(e,1,n,be.min(),r,s,0)}static newNoDocument(e,n){return new Lt(e,2,n,be.min(),be.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new Lt(e,3,n,be.min(),be.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tl{constructor(e,n){this.position=e,this.inclusive=n}}function Km(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=me.comparator(me.fromName(o.referenceValue),n.key):r=fi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ym(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fo{constructor(e,n="asc"){this.field=e,this.dir=n}}function NC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Jv{}class dt extends Jv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MC(e,n,r):n==="array-contains"?new $C(e,r):n==="in"?new UC(e,r):n==="not-in"?new BC(e,r):n==="array-contains-any"?new jC(e,r):new dt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LC(e,r):new FC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(fi(n,this.value)):n!==null&&Jr(this.value)===Jr(n)&&this.matchesComparison(fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends Jv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Tn(e,n)}matches(e){return Zv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Zv(t){return t.op==="and"}function e1(t){return VC(t)&&Zv(t)}function VC(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function Yu(t){if(t instanceof dt)return t.field.canonicalString()+t.op.toString()+pi(t.value);if(e1(t))return t.filters.map(e=>Yu(e)).join(",");{const e=t.filters.map(n=>Yu(n)).join(",");return`${t.op}(${e})`}}function t1(t,e){return t instanceof dt?function(r,s){return s instanceof dt&&r.op===s.op&&r.field.isEqual(s.field)&&Bn(r.value,s.value)}(t,e):t instanceof Tn?function(r,s){return s instanceof Tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&t1(o,s.filters[c]),!0):!1}(t,e):void ve(19439)}function n1(t){return t instanceof dt?function(n){return`${n.field.canonicalString()} ${n.op} ${pi(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(n1).join(" ,")+"}"}(t):"Filter"}class MC extends dt{constructor(e,n,r){super(e,n,r),this.key=me.fromName(r.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class LC extends dt{constructor(e,n){super(e,"in",n),this.keys=r1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FC extends dt{constructor(e,n){super(e,"not-in",n),this.keys=r1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function r1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>me.fromName(r.referenceValue))}class $C extends dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return md(n)&&Lo(n.arrayValue,this.value)}}class UC extends dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class BC extends dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Lo(this.value.arrayValue,n)}}class jC extends dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!md(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lo(this.value.arrayValue,r))}}/**
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
 */class HC{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Pe=null}}function Qm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new HC(t,e,n,r,s,i,o)}function gd(t){const e=Ie(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pi(r)).join(",")),e.Pe=n}return e.Pe}function yd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!t1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ym(t.startAt,e.startAt)&&Ym(t.endAt,e.endAt)}function Qu(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function qC(t,e,n,r,s,i,o,c){return new Ai(t,e,n,r,s,i,o,c)}function _d(t){return new Ai(t)}function Xm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function s1(t){return t.collectionGroup!==null}function go(t){const e=Ie(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new gt(Ct.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Fo(i,r))}),n.has(Ct.keyField().canonicalString())||e.Te.push(new Fo(Ct.keyField(),r))}return e.Te}function Mn(t){const e=Ie(t);return e.Ie||(e.Ie=zC(e,go(t))),e.Ie}function zC(t,e){if(t.limitType==="F")return Qm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fo(s.field,i)});const n=t.endAt?new Tl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tl(t.startAt.position,t.startAt.inclusive):null;return Qm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xu(t,e){const n=t.filters.concat([e]);return new Ai(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ju(t,e,n){return new Ai(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oc(t,e){return yd(Mn(t),Mn(e))&&t.limitType===e.limitType}function i1(t){return`${gd(Mn(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>n1(s)).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>pi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>pi(s)).join(",")),`Target(${r})`}(Mn(t))}; limitType=${t.limitType})`}function ac(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):me.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of go(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Km(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,go(r),s)||r.endAt&&!function(o,c,l){const u=Km(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,go(r),s))}(t,e)}function WC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function o1(t){return(e,n)=>{let r=!1;for(const s of go(t)){const i=GC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function GC(t,e,n){const r=t.field.isKeyField()?me.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?fi(l,u):ve(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ve(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Hv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=new nt(me.comparator);function ur(){return KC}const a1=new nt(me.comparator);function Xi(...t){let e=a1;for(const n of t)e=e.insert(n.key,n);return e}function l1(t){let e=a1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vs(){return yo()}function c1(){return yo()}function yo(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const YC=new nt(me.comparator),QC=new gt(me.comparator);function Ne(...t){let e=QC;for(const n of t)e=e.add(n);return e}const XC=new gt(ke);function JC(){return XC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wl(e)?"-0":e}}function u1(t){return{integerValue:""+t}}function ZC(t,e){return SC(e)?u1(e):vd(t,e)}/**
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
 */class lc{constructor(){this._=void 0}}function eR(t,e,n){return t instanceof Il?function(s,i){const o={fields:{[Wv]:{stringValue:zv},[Kv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&pd(i)&&(i=ic(i)),i&&(o.fields[Gv]=i),{mapValue:o}}(n,e):t instanceof $o?d1(t,e):t instanceof Uo?f1(t,e):function(s,i){const o=h1(s,i),c=Jm(o)+Jm(s.Ee);return Ku(o)&&Ku(s.Ee)?u1(c):vd(s.serializer,c)}(t,e)}function tR(t,e,n){return t instanceof $o?d1(t,e):t instanceof Uo?f1(t,e):n}function h1(t,e){return t instanceof Al?function(r){return Ku(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Il extends lc{}class $o extends lc{constructor(e){super(),this.elements=e}}function d1(t,e){const n=p1(e);for(const r of t.elements)n.some(s=>Bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Uo extends lc{constructor(e){super(),this.elements=e}}function f1(t,e){let n=p1(e);for(const r of t.elements)n=n.filter(s=>!Bn(s,r));return{arrayValue:{values:n}}}class Al extends lc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Jm(t){return lt(t.integerValue||t.doubleValue)}function p1(t){return md(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function nR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof $o&&s instanceof $o||r instanceof Uo&&s instanceof Uo?di(r.elements,s.elements,Bn):r instanceof Al&&s instanceof Al?Bn(r.Ee,s.Ee):r instanceof Il&&s instanceof Il}(t.transform,e.transform)}class rR{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function m1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new uc(t.key,Yt.none()):new ea(t.key,t.data,Yt.none());{const n=t.data,r=Jt.empty();let s=new gt(Ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new is(t.key,r,new rn(s.toArray()),Yt.none())}}function sR(t,e,n){t instanceof ea?function(s,i,o){const c=s.value.clone(),l=eg(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof is?function(s,i,o){if(!Xa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=eg(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(g1(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof ea?function(i,o,c,l){if(!Xa(i.precondition,o))return c;const u=i.value.clone(),h=tg(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof is?function(i,o,c,l){if(!Xa(i.precondition,o))return c;const u=tg(i.fieldTransforms,l,o),h=o.data;return h.setAll(g1(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,c){return Xa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function iR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=h1(r.transform,s||null);i!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,i))}return n||null}function Zm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&di(r,s,(i,o)=>nR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends cc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class is extends cc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function g1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function eg(t,e,n){const r=new Map;ze(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,tR(o,c,n[s]))}return r}function tg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,eR(i,o,e))}return r}class uc extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oR extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=c1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=m1(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(be.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ne())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,(n,r)=>Zm(n,r))&&di(this.baseMutations,e.baseMutations,(n,r)=>Zm(n,r))}}class wd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ze(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return YC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new wd(e,n,r,s)}}/**
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
 */class lR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,Le;function uR(t){switch(t){case H.OK:return ve(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return ve(15467,{code:t})}}function y1(t){if(t===void 0)return cr("GRPC error has no .code"),H.UNKNOWN;switch(t){case ht.OK:return H.OK;case ht.CANCELLED:return H.CANCELLED;case ht.UNKNOWN:return H.UNKNOWN;case ht.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ht.INTERNAL:return H.INTERNAL;case ht.UNAVAILABLE:return H.UNAVAILABLE;case ht.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ht.NOT_FOUND:return H.NOT_FOUND;case ht.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ht.ABORTED:return H.ABORTED;case ht.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ht.DATA_LOSS:return H.DATA_LOSS;default:return ve(39323,{code:t})}}(Le=ht||(ht={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const hR=new qr([4294967295,4294967295],0);function ng(t){const e=$v().encode(t),n=new kv;return n.update(e),new Uint8Array(n.digest())}function rg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qr([n,r],0),new qr([s,i],0)]}class bd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ji(`Invalid padding: ${n}`);if(r<0)throw new Ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ji(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ji(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=qr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(qr.fromNumber(r)));return s.compare(hR)===1&&(s=new qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=ng(e),[r,s]=rg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new bd(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.fe===0)return;const n=ng(e),[r,s]=rg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hc(be.min(),s,new nt(ke),ur(),Ne())}}class ta{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ta(r,n,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class _1{constructor(e,n){this.targetId=e,this.De=n}}class v1{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class sg{constructor(){this.ve=0,this.Ce=ig(),this.Fe=Rt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ne(),n=Ne(),r=Ne();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ve(38017,{changeType:i})}}),new ta(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=ig()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class dR{constructor(e){this.We=e,this.Ge=new Map,this.ze=ur(),this.je=Na(),this.Je=Na(),this.He=new nt(ke)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Qu(i))if(r===0){const o=new me(i.path);this.Xe(n,o,Lt.newNoDocument(o,be.min()))}else ze(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Xr(r).toUint8Array()}catch(l){if(l instanceof qv)return Kr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new bd(o,s,i)}catch(l){return Kr(l instanceof Ji?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,o)=>{const c=this.st(o);if(c){if(i.current&&Qu(c.target)){const l=new me(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,Lt.newNoDocument(l,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}});let r=Ne();this.Je.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new hc(e,n,this.He,this.ze,r);return this.ze=ur(),this.je=Na(),this.Je=Na(),this.He=new nt(ke),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new sg,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new gt(ke),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new gt(ke),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||le("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new sg),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Na(){return new nt(me.comparator)}function ig(){return new nt(me.comparator)}const fR={asc:"ASCENDING",desc:"DESCENDING"},pR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mR={and:"AND",or:"OR"};class gR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zu(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function Sl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function w1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yR(t,e){return Sl(t,e.toTimestamp())}function Ln(t){return ze(!!t,49232),be.fromTimestamp(function(n){const r=Qr(n);return new Oe(r.seconds,r.nanos)}(t))}function Ed(t,e){return eh(t,e).canonicalString()}function eh(t,e){const n=function(s){return new Xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function b1(t){const e=Xe.fromString(t);return ze(S1(e),10190,{key:e.toString()}),e}function th(t,e){return Ed(t.databaseId,e.path)}function lu(t,e){const n=b1(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(T1(n))}function E1(t,e){return Ed(t.databaseId,e)}function _R(t){const e=b1(t);return e.length===4?Xe.emptyPath():T1(e)}function nh(t){return new Xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function T1(t){return ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function og(t,e,n){return{name:th(t,e),fields:n.value.mapValue.fields}}function vR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ve(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(ze(h===void 0||typeof h=="string",58123),Rt.fromBase64String(h||"")):(ze(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Rt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?H.UNKNOWN:y1(u.code);return new ie(h,u.message||"")}(o);n=new v1(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=lu(t,r.document.name),i=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):be.min(),c=new Jt({mapValue:{fields:r.document.fields}}),l=Lt.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Ja(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=lu(t,r.document),i=r.readTime?Ln(r.readTime):be.min(),o=Lt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ja([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=lu(t,r.document),i=r.removedTargetIds||[];n=new Ja([],i,s,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new cR(s,i),c=r.targetId;n=new _1(c,o)}}return n}function wR(t,e){let n;if(e instanceof ea)n={update:og(t,e.key,e.value)};else if(e instanceof uc)n={delete:th(t,e.key)};else if(e instanceof is)n={update:og(t,e.key,e.data),updateMask:RR(e.fieldMask)};else{if(!(e instanceof oR))return ve(16599,{Rt:e.type});n={verify:th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Il)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof $o)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Al)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw ve(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:yR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ve(27497)}(t,e.precondition)),n}function bR(t,e){return t&&t.length>0?(ze(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Ln(s.updateTime):Ln(i);return o.isEqual(be.min())&&(o=Ln(i)),new rR(o,s.transformResults||[])}(n,e))):[]}function ER(t,e){return{documents:[E1(t,e.path)]}}function TR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=E1(t,s);const i=function(u){if(u.length!==0)return A1(Tn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(f){return{field:Ks(f.field),direction:SR(f.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Zu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Vt:n,parent:s}}function IR(t){let e=_R(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ze(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(m){const f=I1(m);return f instanceof Tn&&e1(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(f=>function(k){return new Fo(Ys(k.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(f))}(n.orderBy));let c=null;n.limit&&(c=function(m){let f;return f=typeof m=="object"?m.value:m,sc(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(m){const f=!!m.before,_=m.values||[];return new Tl(_,f)}(n.startAt));let u=null;return n.endAt&&(u=function(m){const f=!m.before,_=m.values||[];return new Tl(_,f)}(n.endAt)),qC(e,s,o,i,c,"F",l,u)}function AR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function I1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ys(n.unaryFilter.field);return dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ys(n.unaryFilter.field);return dt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ys(n.unaryFilter.field);return dt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ys(n.unaryFilter.field);return dt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}}(t):t.fieldFilter!==void 0?function(n){return dt.create(Ys(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>I1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ve(1026)}}(n.compositeFilter.op))}(t):ve(30097,{filter:t})}function SR(t){return fR[t]}function PR(t){return pR[t]}function CR(t){return mR[t]}function Ks(t){return{fieldPath:t.canonicalString()}}function Ys(t){return Ct.fromServerFormat(t.fieldPath)}function A1(t){return t instanceof dt?function(n){if(n.op==="=="){if(Gm(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NAN"}};if(Wm(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gm(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NAN"}};if(Wm(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(n.field),op:PR(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(s=>A1(s));return r.length===1?r[0]:{compositeFilter:{op:CR(n.op),filters:r}}}(t):ve(54877,{filter:t})}function RR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function S1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,r,s,i=be.min(),o=be.min(),c=Rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.gt=e}}function kR(t){const e=IR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ju(e,e.limit,"L"):e}/**
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
 */class OR{constructor(){this.Dn=new xR}addToCollectionParentIndex(e,n){return this.Dn.add(n),G.resolve()}getCollectionParents(e,n){return G.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return G.resolve()}deleteFieldIndex(e,n){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,n){return G.resolve()}getDocumentsMatchingTarget(e,n){return G.resolve(null)}getIndexType(e,n){return G.resolve(0)}getFieldIndexes(e,n){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,n){return G.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,n){return G.resolve(Yr.min())}updateCollectionGroup(e,n,r){return G.resolve()}updateIndexEntries(e,n){return G.resolve()}}class xR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new gt(Xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new gt(Xe.comparator)).toArray()}}/**
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
 */const ag={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},P1=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(P1,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const lg="LruGarbageCollector",NR=1048576;function cg([t,e],[n,r]){const s=ke(t,n);return s===0?ke(e,r):s}class VR{constructor(e){this.Tr=e,this.buffer=new gt(cg),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();cg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class MR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){le(lg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ii(n)?le(lg,"Ignoring IndexedDB error during garbage collection: ",n):await Ti(n)}await this.Rr(3e5)})}}class LR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return G.resolve(rc.ue);const r=new VR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(ag)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ag):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),Ws()<=xe.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function FR(t,e){return new LR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?G.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class UR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&_o(r.mutation,s,rn.empty(),Oe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ne()){const s=vs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Xi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=ur();const o=yo(),c=function(){return yo()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof is)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),_o(h.mutation,u,h.mutation.getFieldMask(),Oe.now())):o.set(u.key,rn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var m;return c.set(u,new UR(h,(m=o.get(u))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,n){const r=yo();let s=new nt((o,c)=>o-c),i=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||rn.empty();h=c.applyToLocalView(u,h),r.set(l,h);const m=(s.get(c.batchId)||Ne()).add(l);s=s.insert(c.batchId,m)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,m=c1();h.forEach(f=>{if(!i.has(f)){const _=m1(n.get(f),r.get(f));_!==null&&m.set(f,_),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return G.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):s1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):G.resolve(vs());let c=No,l=i;return o.next(u=>G.forEach(u,(h,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(h)?G.resolve():this.remoteDocumentCache.getEntry(e,h).next(f=>{l=l.insert(h,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ne())).next(h=>({batchId:c,changes:l1(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next(r=>{let s=Xi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Xi();return this.indexManager.getCollectionParents(e,i).next(c=>G.forEach(c,l=>{const u=function(m,f){return new Ai(f,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((m,f)=>{o=o.insert(m,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Lt.newInvalidDocument(h)))});let c=Xi();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&_o(h.mutation,u,rn.empty(),Oe.now()),ac(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return G.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ln(s.createTime)}}(n)),G.resolve()}getNamedQuery(e,n){return G.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:kR(s.bundledQuery),readTime:Ln(s.readTime)}}(n)),G.resolve()}}/**
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
 */class HR{constructor(){this.overlays=new nt(me.comparator),this.kr=new Map}getOverlay(e,n){return G.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vs();return G.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),G.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),G.resolve()}getOverlaysForCollection(e,n,r){const s=vs(),i=n.length+1,o=new me(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return G.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new nt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=vs(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=vs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return G.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lR(n,r));let i=this.kr.get(n);i===void 0&&(i=Ne(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class qR{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.qr=new gt(yt.Qr),this.$r=new gt(yt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new yt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new yt(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new me(new Xe([])),r=new yt(n,e),s=new yt(n,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new me(new Xe([])),r=new yt(n,e),s=new yt(n,e+1);let i=Ne();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new yt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class yt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return me.comparator(e.key,n.key)||ke(e.Hr,n.Hr)}static Ur(e,n){return ke(e.Hr,n.Hr)||me.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new gt(yt.Qr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Yr=this.Yr.add(new yt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return G.resolve(o)}lookupMutationBatch(e,n){return G.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return G.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?fd:this.er-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new yt(n,0),s=new yt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const c=this.Zr(o.Hr);i.push(c)}),G.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(ke);return n.forEach(s=>{const i=new yt(s,0),o=new yt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],c=>{r=r.add(c.Hr)})}),G.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;me.isDocumentKey(i)||(i=i.child(""));const o=new yt(new me(i),0);let c=new gt(ke);return this.Yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)},o),G.resolve(this.ei(c))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ze(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return G.forEach(n.mutations,s=>{const i=new yt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new yt(n,0),s=this.Yr.firstAfterOrEqual(r);return G.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.ni=e,this.docs=function(){return new nt(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return G.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Lt.newInvalidDocument(s))}),G.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ur();const o=n.path,c=new me(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||EC(bC(h),r)<=0||(s.has(h.key)||ac(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return G.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ve(9500)}ri(e,n){return G.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GR(this)}getSize(e){return G.resolve(this.size)}}class GR extends $R{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),G.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.persistence=e,this.ii=new Vs(n=>gd(n),yd),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.si=0,this.oi=new Td,this.targetCount=0,this._i=mi.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),G.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,G.resolve()}updateTargetData(e,n){return this.hr(n),G.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),G.waitFor(i).next(()=>s)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return G.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),G.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),G.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),G.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return G.resolve(r)}containsKey(e,n){return G.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n){this.ai={},this.overlays={},this.ui=new rc(0),this.ci=!1,this.ci=!0,this.li=new qR,this.referenceDelegate=e(this),this.hi=new KR(this),this.indexManager=new OR,this.remoteDocumentCache=function(s){return new WR(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new DR(n),this.Ti=new jR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new zR(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){le("MemoryPersistence","Starting transaction:",e);const s=new YR(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return G.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class YR extends IC{constructor(e){super(),this.currentSequenceNumber=e}}class Id{constructor(e){this.persistence=e,this.Ai=new Td,this.Ri=null}static Vi(e){return new Id(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),G.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),G.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.mi,r=>{const s=me.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,be.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return G.or([()=>G.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Pl{constructor(e,n){this.persistence=e,this.gi=new Vs(r=>PC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=FR(this,n)}static Vi(e,n){return new Pl(e,n)}Ii(){}di(e){return G.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return G.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?G.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,be.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),G.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),G.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ya(e.data.value)),n}Sr(e,n,r){return G.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return G.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class QR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class XR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return II()?8:AC($t())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new QR;return this.ws(e,n,o).next(c=>{if(i.result=c,this.Rs)return this.Ss(e,n,o,c.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ws()<=xe.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",Gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(Ws()<=xe.DEBUG&&le("QueryEngine","Query:",Gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ws()<=xe.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",Gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mn(n))):G.resolve())}ps(e,n){if(Xm(n))return G.resolve(null);let r=Mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ju(n,null,"F"),r=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ne(...i);return this.gs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.bs(n,c);return this.Ds(n,u,o,l.readTime)?this.ps(e,Ju(n,null,"F")):this.vs(e,u,n,l)}))})))}ys(e,n,r,s){return Xm(n)||s.isEqual(be.min())?G.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?G.resolve(null):(Ws()<=xe.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gs(n)),this.vs(e,o,n,wC(s,No)).next(c=>c))})}bs(e,n){let r=new gt(o1(e));return n.forEach((s,i)=>{ac(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ws()<=xe.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.gs.getDocumentsMatchingQuery(e,n,Yr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="LocalStore",JR=3e8;class ZR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new nt(ke),this.Ms=new Vs(i=>gd(i),yd),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function eD(t,e,n,r){return new ZR(t,e,n,r)}async function R1(t,e){const n=Ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ne();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Bs:u,removedBatchIds:o,addedBatchIds:c}))})})}function tD(t,e){const n=Ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const m=u.batch,f=m.keys();let _=G.resolve();return f.forEach(k=>{_=_.next(()=>h.getEntry(l,k)).next(C=>{const A=u.docVersions.get(k);ze(A!==null,48541),C.version.compareTo(A)<0&&(m.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),h.addEntry(C)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Ne();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function D1(t){const e=Ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function nD(t,e){const n=Ie(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach((h,m)=>{const f=s.get(m);if(!f)return;c.push(n.hi.removeMatchingKeys(i,h.removedDocuments,m).next(()=>n.hi.addMatchingKeys(i,h.addedDocuments,m)));let _=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(Rt.EMPTY_BYTE_STRING,be.min()).withLastLimboFreeSnapshotVersion(be.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(m,_),function(C,A,N){return C.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=JR?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(f,_,h)&&c.push(n.hi.updateTargetData(i,_))});let l=ur(),u=Ne();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(rD(i,o,e.documentUpdates).next(h=>{l=h.Ls,u=h.ks})),!r.isEqual(be.min())){const h=n.hi.getLastRemoteSnapshotVersion(i).next(m=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return G.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Fs=s,i))}function rD(t,e,n){let r=Ne(),s=Ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ur();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(be.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):le(Sd,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ls:o,ks:s}})}function sD(t,e){const n=Ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=fd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iD(t,e){const n=Ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,G.resolve(s)):n.hi.allocateTargetId(r).next(o=>(s=new Fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function rh(t,e,n){const r=Ie(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ii(o))throw o;le(Sd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function ug(t,e,n){const r=Ie(t);let s=be.min(),i=Ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const m=Ie(l),f=m.Ms.get(h);return f!==void 0?G.resolve(m.Fs.get(f)):m.hi.getTargetData(u,h)}(r,o,Mn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:be.min(),n?i:Ne())).next(c=>(oD(r,WC(e),c),{documents:c,qs:i})))}function oD(t,e,n){let r=t.xs.get(e)||be.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class hg{constructor(){this.activeTargetIds=JC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aD{constructor(){this.Fo=new hg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new hg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lD{xo(e){}shutdown(){}}/**
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
 */const dg="ConnectivityMonitor";class fg{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){le(dg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){le(dg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const cu="RestConnection",cD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class uD{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===bl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=sh(),c=this.Go(e,n.toUriEncodedString());le(cu,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:u}=new URL(c),h=vi(u);return this.jo(e,c,l,r,h).then(m=>(le(cu,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Kr(cu,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m})}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ei}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=cD[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class dD extends uD{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=sh();return new Promise((c,l)=>{const u=new Ov;u.setWithCredentials(!0),u.listenOnce(xv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ka.NO_ERROR:const m=u.getResponseJson();le(xt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case Ka.TIMEOUT:le(xt,`RPC '${e}' ${o} timed out`),l(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case Ka.HTTP_ERROR:const f=u.getStatus();if(le(xt,`RPC '${e}' ${o} failed with status:`,f,"response text:",u.getResponseText()),f>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const k=_?.error;if(k&&k.status&&k.message){const C=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(x)>=0?x:H.UNKNOWN}(k.status);l(new ie(C,k.message))}else l(new ie(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new ie(H.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{le(xt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);le(xt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}P_(e,n,r){const s=sh(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Mv(),c=Vv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");le(xt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const m=o.createWebChannel(h,l);this.T_(m);let f=!1,_=!1;const k=new hD({Ho:A=>{_?le(xt,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(f||(le(xt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),f=!0),le(xt,`RPC '${e}' stream ${s} sending:`,A),m.send(A))},Yo:()=>m.close()}),C=(A,N,x)=>{A.listen(N,M=>{try{x(M)}catch($){setTimeout(()=>{throw $},0)}})};return C(m,Qi.EventType.OPEN,()=>{_||(le(xt,`RPC '${e}' stream ${s} transport opened.`),k.s_())}),C(m,Qi.EventType.CLOSE,()=>{_||(_=!0,le(xt,`RPC '${e}' stream ${s} transport closed`),k.__(),this.I_(m))}),C(m,Qi.EventType.ERROR,A=>{_||(_=!0,Kr(xt,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),k.__(new ie(H.UNAVAILABLE,"The operation could not be completed")))}),C(m,Qi.EventType.MESSAGE,A=>{var N;if(!_){const x=A.data[0];ze(!!x,16349);const M=x,$=M?.error||((N=M[0])===null||N===void 0?void 0:N.error);if($){le(xt,`RPC '${e}' stream ${s} received error:`,$);const F=$.status;let B=function(b){const S=ht[b];if(S!==void 0)return y1(S)}(F),T=$.message;B===void 0&&(B=H.INTERNAL,T="Unknown error status: "+F+" with message "+$.message),_=!0,k.__(new ie(B,T)),m.close()}else le(xt,`RPC '${e}' stream ${s} received:`,x),k.a_(x)}}),C(c,Nv.STAT_EVENT,A=>{A.stat===zu.PROXY?le(xt,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===zu.NOPROXY&&le(xt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.o_()},0),k}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function uu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){return new gR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&le("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="PersistentStream";class O1{constructor(e,n,r,s,i,o,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new k1(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new ie(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return le(pg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(le(pg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fD extends O1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=vR(this.serializer,e),r=function(i){if(!("targetChange"in i))return be.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?be.min():o.readTime?Ln(o.readTime):be.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=nh(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Qu(l)?{documents:ER(i,l)}:{query:TR(i,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=w1(i,o.resumeToken);const u=Zu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(be.min())>0){c.readTime=Sl(i,o.snapshotVersion.toTimestamp());const u=Zu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=AR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=nh(this.serializer),n.removeTarget=e,this.k_(n)}}class pD extends O1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=bR(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=nh(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wR(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{}class gD extends mD{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,eh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(H.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Jo(e,eh(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(H.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class yD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(cr(n),this._a=!1):le("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="RemoteStore";class _D{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Ms(this)&&(le(Ds,"Restarting streams for network reachability change."),await async function(l){const u=Ie(l);u.Ia.add(4),await na(u),u.Aa.set("Unknown"),u.Ia.delete(4),await fc(u)}(this))})}),this.Aa=new yD(r,s)}}async function fc(t){if(Ms(t))for(const e of t.da)await e(!0)}async function na(t){for(const e of t.da)await e(!1)}function x1(t,e){const n=Ie(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Dd(n)?Rd(n):Si(n).x_()&&Cd(n,e))}function Pd(t,e){const n=Ie(t),r=Si(n);n.Ta.delete(e),r.x_()&&N1(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ms(n)&&n.Aa.set("Unknown"))}function Cd(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(be.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Si(t).H_(e)}function N1(t,e){t.Ra.$e(e),Si(t).Y_(e)}function Rd(t){t.Ra=new dR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Si(t).start(),t.Aa.aa()}function Dd(t){return Ms(t)&&!Si(t).M_()&&t.Ta.size>0}function Ms(t){return Ie(t).Ia.size===0}function V1(t){t.Ra=void 0}async function vD(t){t.Aa.set("Online")}async function wD(t){t.Ta.forEach((e,n)=>{Cd(t,e)})}async function bD(t,e){V1(t),Dd(t)?(t.Aa.la(e),Rd(t)):t.Aa.set("Unknown")}async function ED(t,e,n){if(t.Aa.set("Online"),e instanceof v1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ta.delete(c),s.Ra.removeTarget(c))}(t,e)}catch(r){le(Ds,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cl(t,r)}else if(e instanceof Ja?t.Ra.Ye(e):e instanceof _1?t.Ra.it(e):t.Ra.et(e),!n.isEqual(be.min()))try{const r=await D1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Ra.Pt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ta.get(u);h&&i.Ta.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.Ta.get(l);if(!h)return;i.Ta.set(l,h.withResumeToken(Rt.EMPTY_BYTE_STRING,h.snapshotVersion)),N1(i,l);const m=new Fr(h.target,l,u,h.sequenceNumber);Cd(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){le(Ds,"Failed to raise snapshot:",r),await Cl(t,r)}}async function Cl(t,e,n){if(!Ii(e))throw e;t.Ia.add(1),await na(t),t.Aa.set("Offline"),n||(n=()=>D1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{le(Ds,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await fc(t)})}function M1(t,e){return e().catch(n=>Cl(t,n,e))}async function pc(t){const e=Ie(t),n=Zr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:fd;for(;TD(e);)try{const s=await sD(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,ID(e,s)}catch(s){await Cl(e,s)}L1(e)&&F1(e)}function TD(t){return Ms(t)&&t.Pa.length<10}function ID(t,e){t.Pa.push(e);const n=Zr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function L1(t){return Ms(t)&&!Zr(t).M_()&&t.Pa.length>0}function F1(t){Zr(t).start()}async function AD(t){Zr(t).na()}async function SD(t){const e=Zr(t);for(const n of t.Pa)e.X_(n.mutations)}async function PD(t,e,n){const r=t.Pa.shift(),s=wd.from(r,e,n);await M1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await pc(t)}async function CD(t,e){e&&Zr(t).Z_&&await async function(r,s){if(function(o){return uR(o)&&o!==H.ABORTED}(s.code)){const i=r.Pa.shift();Zr(r).N_(),await M1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pc(r)}}(t,e),L1(t)&&F1(t)}async function mg(t,e){const n=Ie(t);n.asyncQueue.verifyOperationInProgress(),le(Ds,"RemoteStore received new credentials");const r=Ms(n);n.Ia.add(3),await na(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await fc(n)}async function RD(t,e){const n=Ie(t);e?(n.Ia.delete(2),await fc(n)):e||(n.Ia.add(2),await na(n),n.Aa.set("Unknown"))}function Si(t){return t.Va||(t.Va=function(n,r,s){const i=Ie(n);return i.ia(),new fD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:vD.bind(null,t),e_:wD.bind(null,t),n_:bD.bind(null,t),J_:ED.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Dd(t)?Rd(t):t.Aa.set("Unknown")):(await t.Va.stop(),V1(t))})),t.Va}function Zr(t){return t.ma||(t.ma=function(n,r,s){const i=Ie(n);return i.ia(),new pD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:AD.bind(null,t),n_:CD.bind(null,t),ea:SD.bind(null,t),ta:PD.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await pc(t)):(await t.ma.stop(),t.Pa.length>0&&(le(Ds,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new kd(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Od(t,e){if(cr("AsyncQueue",`${e}: ${t}`),Ii(t))return new ie(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{static emptySet(e){return new ri(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||me.comparator(n.key,r.key):(n,r)=>me.comparator(n.key,r.key),this.keyedMap=Xi(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ri)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class gg{constructor(){this.fa=new nt(me.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ve(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class gi{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new gi(e,n,ri.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class kD{constructor(){this.queries=yg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=Ie(n),i=s.queries;s.queries=yg(),i.forEach((o,c)=>{for(const l of c.wa)l.onError(r)})})(this,new ie(H.ABORTED,"Firestore shutting down"))}}function yg(){return new Vs(t=>i1(t),oc)}async function $1(t,e){const n=Ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new DD,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Od(o,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&xd(n)}async function U1(t,e){const n=Ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function OD(t,e){const n=Ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.wa)c.Ca(s)&&(r=!0);o.ya=s}}r&&xd(n)}function xD(t,e,n){const r=Ie(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function xd(t){t.Da.forEach(e=>{e.next()})}var ih,_g;(_g=ih||(ih={})).Fa="default",_g.Cache="cache";class B1{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ih.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.key=e}}class H1{constructor(e){this.key=e}}class ND{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ne(),this.mutatedKeys=Ne(),this.Xa=o1(e),this.eu=new ri(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new gg,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,m)=>{const f=s.get(h),_=ac(this.query,m)?m:null,k=!!f&&this.mutatedKeys.has(f.key),C=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let A=!1;f&&_?f.data.isEqual(_.data)?k!==C&&(r.track({type:3,doc:_}),A=!0):this.iu(f,_)||(r.track({type:2,doc:_}),A=!0,(l&&this.Xa(_,l)>0||u&&this.Xa(_,u)<0)&&(c=!0)):!f&&_?(r.track({type:0,doc:_}),A=!0):f&&!_&&(r.track({type:1,doc:f}),A=!0,(l||u)&&(c=!0)),A&&(_?(o=o.add(_),i=C?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{eu:o,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((h,m)=>function(_,k){const C=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:A})}};return C(_)-C(k)}(h.type,m.type)||this.Xa(h.doc,m.doc)),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,u=l!==this.Ya;return this.Ya=l,o.length!==0||u?{snapshot:new gi(this.query,e.eu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new gg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ne(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new H1(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new j1(r))}),n}uu(e){this.Ha=e.qs,this.Za=Ne();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return gi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Nd="SyncEngine";class VD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MD{constructor(e){this.key=e,this.lu=!1}}class LD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Vs(c=>i1(c),oc),this.Tu=new Map,this.Iu=new Set,this.du=new nt(me.comparator),this.Eu=new Map,this.Au=new Td,this.Ru={},this.Vu=new Map,this.mu=mi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function FD(t,e,n=!0){const r=Y1(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await q1(r,e,n,!0),s}async function $D(t,e){const n=Y1(t);await q1(n,e,!0,!1)}async function q1(t,e,n,r){const s=await iD(t.localStore,Mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await UD(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&x1(t.remoteStore,s),c}async function UD(t,e,n,r,s){t.gu=(m,f,_)=>async function(C,A,N,x){let M=A.view.nu(N);M.Ds&&(M=await ug(C.localStore,A.query,!1).then(({documents:T})=>A.view.nu(T,M)));const $=x&&x.targetChanges.get(A.targetId),F=x&&x.targetMismatches.get(A.targetId)!=null,B=A.view.applyChanges(M,C.isPrimaryClient,$,F);return wg(C,A.targetId,B._u),B.snapshot}(t,m,f,_);const i=await ug(t.localStore,e,!0),o=new ND(e,i.qs),c=o.nu(i.documents),l=ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);wg(t,n,u._u);const h=new VD(e,n,o);return t.Pu.set(e,h),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function BD(t,e,n){const r=Ie(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!oc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Pd(r.remoteStore,s.targetId),oh(r,s.targetId)}).catch(Ti)):(oh(r,s.targetId),await rh(r.localStore,s.targetId,!0))}async function jD(t,e){const n=Ie(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Pd(n.remoteStore,r.targetId))}async function HD(t,e,n){const r=QD(t);try{const s=await function(o,c){const l=Ie(o),u=Oe.now(),h=c.reduce((_,k)=>_.add(k.key),Ne());let m,f;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let k=ur(),C=Ne();return l.Os.getEntries(_,h).next(A=>{k=A,k.forEach((N,x)=>{x.isValidDocument()||(C=C.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,k)).next(A=>{m=A;const N=[];for(const x of c){const M=iR(x,m.get(x.key).overlayedDocument);M!=null&&N.push(new is(x.key,M,Xv(M.value.mapValue),Yt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,N,c)}).next(A=>{f=A;const N=A.applyToLocalDocumentSet(m,C);return l.documentOverlayCache.saveOverlays(_,A.batchId,N)})}).then(()=>({batchId:f.batchId,changes:l1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ru[o.currentUser.toKey()];u||(u=new nt(ke)),u=u.insert(c,l),o.Ru[o.currentUser.toKey()]=u}(r,s.batchId,n),await ra(r,s.changes),await pc(r.remoteStore)}catch(s){const i=Od(s,"Failed to persist write");n.reject(i)}}async function z1(t,e){const n=Ie(t);try{const r=await nD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(ze(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?ze(o.lu,14607):s.removedDocuments.size>0&&(ze(o.lu,42227),o.lu=!1))}),await ra(n,r,e)}catch(r){await Ti(r)}}function vg(t,e,n){const r=Ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=Ie(o);l.onlineState=c;let u=!1;l.queries.forEach((h,m)=>{for(const f of m.wa)f.va(c)&&(u=!0)}),u&&xd(l)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qD(t,e,n){const r=Ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new nt(me.comparator);o=o.insert(i,Lt.newNoDocument(i,be.min()));const c=Ne().add(i),l=new hc(be.min(),new Map,new nt(ke),o,c);await z1(r,l),r.du=r.du.remove(i),r.Eu.delete(e),Vd(r)}else await rh(r.localStore,e,!1).then(()=>oh(r,e,n)).catch(Ti)}async function zD(t,e){const n=Ie(t),r=e.batch.batchId;try{const s=await tD(n.localStore,e);G1(n,r,null),W1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ra(n,s)}catch(s){await Ti(s)}}async function WD(t,e,n){const r=Ie(t);try{const s=await function(o,c){const l=Ie(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(m=>(ze(m!==null,37113),h=m.keys(),l.mutationQueue.removeMutationBatch(u,m))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);G1(r,e,n),W1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ra(r,s)}catch(s){await Ti(s)}}function W1(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function G1(t,e,n){const r=Ie(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function oh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||K1(t,r)})}function K1(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Pd(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Vd(t))}function wg(t,e,n){for(const r of n)r instanceof j1?(t.Au.addReference(r.key,e),GD(t,r)):r instanceof H1?(le(Nd,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||K1(t,r.key)):ve(19791,{yu:r})}function GD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(le(Nd,"New document in limbo: "+n),t.Iu.add(r),Vd(t))}function Vd(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new me(Xe.fromString(e)),r=t.mu.next();t.Eu.set(r,new MD(n)),t.du=t.du.insert(n,r),x1(t.remoteStore,new Fr(Mn(_d(n.path)),r,"TargetPurposeLimboResolution",rc.ue))}}async function ra(t,e,n){const r=Ie(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((c,l)=>{o.push(r.gu(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const m=u?!u.fromCache:(h=n?.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(u){s.push(u);const m=Ad.Es(l.targetId,u);i.push(m)}}))}),await Promise.all(o),r.hu.J_(s),await async function(l,u){const h=Ie(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>G.forEach(u,f=>G.forEach(f.Is,_=>h.persistence.referenceDelegate.addReference(m,f.targetId,_)).next(()=>G.forEach(f.ds,_=>h.persistence.referenceDelegate.removeReference(m,f.targetId,_)))))}catch(m){if(!Ii(m))throw m;le(Sd,"Failed to update sequence numbers: "+m)}for(const m of u){const f=m.targetId;if(!m.fromCache){const _=h.Fs.get(f),k=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(k);h.Fs=h.Fs.insert(f,C)}}}(r.localStore,i))}async function KD(t,e){const n=Ie(t);if(!n.currentUser.isEqual(e)){le(Nd,"User change. New user:",e.toKey());const r=await R1(n.localStore,e);n.currentUser=e,function(i,o){i.Vu.forEach(c=>{c.forEach(l=>{l.reject(new ie(H.CANCELLED,o))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ra(n,r.Bs)}}function YD(t,e){const n=Ie(t),r=n.Eu.get(e);if(r&&r.lu)return Ne().add(r.key);{let s=Ne();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const c=n.Pu.get(o);s=s.unionWith(c.view.tu)}return s}}function Y1(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=z1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qD.bind(null,e),e.hu.J_=OD.bind(null,e.eventManager),e.hu.pu=xD.bind(null,e.eventManager),e}function QD(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WD.bind(null,e),e}class Rl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return eD(this.persistence,new XR,e.initialUser,this.serializer)}Du(e){return new C1(Id.Vi,this.serializer)}bu(e){return new aD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rl.provider={build:()=>new Rl};class XD extends Rl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ze(this.persistence.referenceDelegate instanceof Pl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new MR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new C1(r=>Pl.Vi(r,n),this.serializer)}}class ah{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KD.bind(null,this.syncEngine),await RD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kD}()}createDatastore(e){const n=dc(e.databaseInfo.databaseId),r=function(i){return new dD(i)}(e.databaseInfo);return function(i,o,c,l){return new gD(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new _D(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>vg(this.syncEngine,n,0),function(){return fg.C()?new fg:new lD}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,h){const m=new LD(s,i,o,c,l,u);return h&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Ie(s);le(Ds,"RemoteStore shutting down."),i.Ia.add(5),await na(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ah.provider={build:()=>new ah};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Q1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="FirestoreClient";class JD{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Vt.UNAUTHENTICATED,this.clientId=dd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{le(es,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(le(es,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Od(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hu(t,e){t.asyncQueue.verifyOperationInProgress(),le(es,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await R1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Kr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{le("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Kr("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function bg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZD(t);le(es,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>mg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>mg(e.remoteStore,s)),t._onlineComponents=e}async function ZD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){le(es,"Using user provided OfflineComponentProvider");try{await hu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Kr("Error using user provided cache. Falling back to memory cache: "+n),await hu(t,new Rl)}}else le(es,"Using default OfflineComponentProvider"),await hu(t,new XD(void 0));return t._offlineComponents}async function X1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(le(es,"Using user provided OnlineComponentProvider"),await bg(t,t._uninitializedComponentsProvider._online)):(le(es,"Using default OnlineComponentProvider"),await bg(t,new ah))),t._onlineComponents}function e2(t){return X1(t).then(e=>e.syncEngine)}async function J1(t){const e=await X1(t),n=e.eventManager;return n.onListen=FD.bind(null,e.syncEngine),n.onUnlisten=BD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$D.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jD.bind(null,e.syncEngine),n}function t2(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new Q1({next:f=>{h.Ou(),o.enqueueAndForget(()=>U1(i,m));const _=f.docs.has(c);!_&&f.fromCache?u.reject(new ie(H.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&f.fromCache&&l&&l.source==="server"?u.reject(new ie(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),m=new B1(_d(c.path),h,{includeMetadataChanges:!0,ka:!0});return $1(i,m)}(await J1(t),t.asyncQueue,e,n,r)),r.promise}function n2(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new Q1({next:f=>{h.Ou(),o.enqueueAndForget(()=>U1(i,m)),f.fromCache&&l.source==="server"?u.reject(new ie(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),m=new B1(c,h,{includeMetadataChanges:!0,ka:!0});return $1(i,m)}(await J1(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Z1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="firestore.googleapis.com",Tg=!0;class Ig{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ew,this.ssl=Tg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Tg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=P1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<NR)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Z1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ig({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ig(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uC;switch(r.type){case"firstParty":return new pC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Eg.get(n);r&&(le("ComponentProvider","Removing Datastore"),Eg.delete(n),r.terminate())}(this),Promise.resolve()}}function r2(t,e,n,r={}){var s;t=fn(t,mc);const i=vi(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(q_(`https://${l}`),z_("Firestore",!0)),o.host!==ew&&o.host!==l&&Kr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!As(u,c)&&(t._setSettings(u),r.mockUserToken)){let h,m;if(typeof r.mockUserToken=="string")h=r.mockUserToken,m=Vt.MOCK_USER;else{h=mI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new ie(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Vt(f)}t._authCredentials=new hC(new Fv(h,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ls(this.firestore,e,this._query)}}class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Zo(n,ct._jsonSchema))return new ct(e,r||null,new me(Xe.fromString(n.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:ft("string",ct._jsonSchemaVersion),referencePath:ft("string")};class zr extends Ls{constructor(e,n,r){super(e,n,_d(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new me(e))}withConverter(e){return new zr(this.firestore,e,this._path)}}function Pr(t,e,...n){if(t=at(t),Uv("collection","path",e),t instanceof mc){const r=Xe.fromString(e,...n);return Lm(r),new zr(t,null,r)}{if(!(t instanceof ct||t instanceof zr))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xe.fromString(e,...n));return Lm(r),new zr(t.firestore,null,r)}}function Cn(t,e,...n){if(t=at(t),arguments.length===1&&(e=dd.newId()),Uv("doc","path",e),t instanceof mc){const r=Xe.fromString(e,...n);return Mm(r),new ct(t,null,new me(r))}{if(!(t instanceof ct||t instanceof zr))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xe.fromString(e,...n));return Mm(r),new ct(t.firestore,t instanceof zr?t.converter:null,new me(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="AsyncQueue";class Sg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new k1(this,"async_queue_retry"),this.oc=()=>{const r=uu();r&&le(Ag,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=uu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=uu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new rr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ii(e))throw e;le(Ag,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,cr("INTERNAL UNHANDLED ERROR: ",Pg(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=kd.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&ve(47125,{hc:Pg(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Pg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class os extends mc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Sg,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sg(e),this._firestoreClient=void 0,await e}}}function vo(t,e){const n=typeof t=="object"?t:Y_(),r=typeof t=="string"?t:bl,s=Jh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=fI("firestore");i&&r2(s,...i)}return s}function gc(t){if(t._terminated)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||s2(t),t._firestoreClient}function s2(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,h){return new DC(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Z1(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new JD(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cn(Rt.fromBase64String(e))}catch(n){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cn(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Zo(e,cn._jsonSchema))return cn.fromBase64String(e.bytes)}}cn._jsonSchemaVersion="firestore/bytes/1.0",cn._jsonSchema={type:ft("string",cn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Fn._jsonSchemaVersion}}static fromJSON(e){if(Zo(e,Fn._jsonSchema))return new Fn(e.latitude,e.longitude)}}Fn._jsonSchemaVersion="firestore/geoPoint/1.0",Fn._jsonSchema={type:ft("string",Fn._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class $n{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:$n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zo(e,$n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new $n(e.vectorValues);throw new ie(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$n._jsonSchemaVersion="firestore/vectorValue/1.0",$n._jsonSchema={type:ft("string",$n._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=/^__.*__$/;class o2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}class tw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new is(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:t})}}class Ld{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Dl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(nw(this.Ec)&&i2.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class a2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dc(e)}Dc(e,n,r,s=!1){return new Ld({Ec:e,methodName:n,bc:r,path:Ct.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ia(t){const e=t._freezeSettings(),n=dc(t._databaseId);return new a2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fd(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);$d("Data must be an object, but it was:",o,r);const c=iw(r,o);let l,u;if(i.merge)l=new rn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const m of i.mergeFields){const f=lh(e,m,n);if(!o.contains(f))throw new ie(H.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);aw(h,f)||h.push(f)}l=new rn(h),u=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,u=o.fieldTransforms;return new o2(new Jt(c),l,u)}class yc extends Md{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yc}}function rw(t,e,n,r){const s=t.Dc(1,e,n);$d("Data must be an object, but it was:",s,r);const i=[],o=Jt.empty();ss(r,(l,u)=>{const h=Ud(e,l,n);u=at(u);const m=s.gc(h);if(u instanceof yc)i.push(h);else{const f=oa(u,m);f!=null&&(i.push(h),o.set(h,f))}});const c=new rn(i);return new tw(o,c,s.fieldTransforms)}function sw(t,e,n,r,s,i){const o=t.Dc(1,e,n),c=[lh(e,r,n)],l=[s];if(i.length%2!=0)throw new ie(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)c.push(lh(e,i[f])),l.push(i[f+1]);const u=[],h=Jt.empty();for(let f=c.length-1;f>=0;--f)if(!aw(u,c[f])){const _=c[f];let k=l[f];k=at(k);const C=o.gc(_);if(k instanceof yc)u.push(_);else{const A=oa(k,C);A!=null&&(u.push(_),h.set(_,A))}}const m=new rn(u);return new tw(h,m,o.fieldTransforms)}function l2(t,e,n,r=!1){return oa(n,t.Dc(r?4:3,e))}function oa(t,e){if(ow(t=at(t)))return $d("Unsupported field value:",e,t),iw(t,e);if(t instanceof Md)return function(r,s){if(!nw(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=oa(c,s.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ZC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:Sl(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sl(s.serializer,i)}}if(r instanceof Fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cn)return{bytesValue:w1(s.serializer,r._byteString)};if(r instanceof ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ed(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof $n)return function(o,c){return{mapValue:{fields:{[Yv]:{stringValue:Qv},[El]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.wc("VectorValues must only contain numeric values.");return vd(c.serializer,u)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${nc(r)}`)}(t,e)}function iw(t,e){const n={};return Hv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(t,(r,s)=>{const i=oa(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ow(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Fn||t instanceof cn||t instanceof ct||t instanceof Md||t instanceof $n)}function $d(t,e,n){if(!ow(n)||!Bv(n)){const r=nc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function lh(t,e,n){if((e=at(e))instanceof sa)return e._internalPath;if(typeof e=="string")return Ud(t,e);throw Dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const c2=new RegExp("[~\\*/\\[\\]]");function Ud(t,e,n){if(e.search(c2)>=0)throw Dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sa(...e.split("."))._internalPath}catch{throw Dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ie(H.INVALID_ARGUMENT,c+t+l)}function aw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new u2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_c("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class u2 extends lw{data(){return super.data()}}function _c(t,e){return typeof e=="string"?Ud(t,e):e instanceof sa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bd{}class cw extends Bd{}function zi(t,e,...n){let r=[];e instanceof Bd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof jd).length,c=i.filter(l=>l instanceof vc).length;if(o>1||o>0&&c>0)throw new ie(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class vc extends cw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vc(e,n,r)}_apply(e){const n=this._parse(e);return uw(e._query,n),new Ls(e.firestore,e.converter,Xu(e._query,n))}_parse(e){const n=ia(e.firestore);return function(i,o,c,l,u,h,m){let f;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ie(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Rg(m,h);const k=[];for(const C of m)k.push(Cg(l,i,C));f={arrayValue:{values:k}}}else f=Cg(l,i,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Rg(m,h),f=l2(c,o,m,h==="in"||h==="not-in");return dt.create(u,h,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ma(t,e,n){const r=e,s=_c("where",t);return vc._create(s,r,n)}class jd extends Bd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)uw(o,l),o=Xu(o,l)}(e._query,n),new Ls(e.firestore,e.converter,Xu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hd extends cw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fo(i,o)}(e._query,this._field,this._direction);return new Ls(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ai(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function La(t,e="asc"){const n=e,r=_c("orderBy",t);return Hd._create(r,n)}function Cg(t,e,n){if(typeof(n=at(n))=="string"){if(n==="")throw new ie(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!s1(e)&&n.indexOf("/")!==-1)throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Xe.fromString(n));if(!me.isDocumentKey(r))throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zm(t,new me(r))}if(n instanceof ct)return zm(t,n._key);throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nc(n)}.`)}function Rg(t,e){if(!Array.isArray(t)||t.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uw(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class d2{convertValue(e,n="none"){switch(Jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ss(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[El].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>lt(o.doubleValue));return new $n(i)}convertGeoPoint(e){return new Fn(lt(e.latitude),lt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ic(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=Qr(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Xe.fromString(e);ze(S1(r),9688,{name:e});const s=new Mo(r.get(1),r.get(3)),i=new me(r.popFirst(5));return s.isEqual(n)||cr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ts extends lw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_c("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ts._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ts._jsonSchema={type:ft("string",Ts._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Za extends Ts{data(e={}){return super.data(e)}}class si{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Za(this._firestore,this._userDataWriter,r.key,r,new Zi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Za(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Zi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Za(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Zi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:f2(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=si._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=dd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function f2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){t=fn(t,ct);const e=fn(t.firestore,os);return t2(gc(e),t._key).then(n=>g2(e,t,n))}si._jsonSchemaVersion="firestore/querySnapshot/1.0",si._jsonSchema={type:ft("string",si._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class hw extends d2{constructor(e){super(),this.firestore=e}convertBytes(e){return new cn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function Wi(t){t=fn(t,Ls);const e=fn(t.firestore,os),n=gc(e),r=new hw(e);return h2(t._query),n2(n,t._query).then(s=>new si(e,r,t,s))}function p2(t,e,n){t=fn(t,ct);const r=fn(t.firestore,os),s=qd(t.converter,e,n);return aa(r,[Fd(ia(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Yt.none())])}function du(t,e,n,...r){t=fn(t,ct);const s=fn(t.firestore,os),i=ia(s);let o;return o=typeof(e=at(e))=="string"||e instanceof sa?sw(i,"updateDoc",t._key,e,n,r):rw(i,"updateDoc",t._key,e),aa(s,[o.toMutation(t._key,Yt.exists(!0))])}function m2(t){return aa(fn(t.firestore,os),[new uc(t._key,Yt.none())])}function fu(t,e){const n=fn(t.firestore,os),r=Cn(t),s=qd(t.converter,e);return aa(n,[Fd(ia(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then(()=>r)}function aa(t,e){return function(r,s){const i=new rr;return r.asyncQueue.enqueueAndForget(async()=>HD(await e2(r),s,i)),i.promise}(gc(t),e)}function g2(t,e,n){const r=n.docs.get(e._key),s=new hw(t);return new Ts(t,s,e._key,r,new Zi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ia(e)}set(e,n,r){this._verifyNotCommitted();const s=pu(e,this._firestore),i=qd(s.converter,n,r),o=Fd(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Yt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=pu(e,this._firestore);let o;return o=typeof(n=at(n))=="string"||n instanceof sa?sw(this._dataReader,"WriteBatch.update",i._key,n,r,s):rw(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Yt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=pu(e,this._firestore);return this._mutations=this._mutations.concat(new uc(n._key,Yt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ie(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function pu(t,e){if((t=at(t)).firestore!==e)throw new ie(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(t){return gc(t=fn(t,os)),new y2(t,e=>aa(t,e))}(function(e,n=!0){(function(s){Ei=s})(wi),ui(new Ss("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new os(new dC(r.getProvider("auth-internal")),new mC(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Hr(km,Om,e),Hr(km,Om,"esm2017")})();const pn=L_("auth",{state:()=>({user:null,userProfile:null,isAuthReady:!1,authInstance:null,loading:!1,error:null,successMessage:null,isProfileLoading:!1}),getters:{isProfileComplete:t=>!!t.userProfile?.role&&!!t.userProfile?.birthDate,role:t=>t.userProfile?.role},actions:{initAuth(t){t&&(this.authInstance=t,vv(this.authInstance,async e=>{if(e){this.user=e,this.isProfileLoading=!0;try{const n=vo(),s=Cn(n,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","users",e.uid),i=await ch(s);i.exists()?this.userProfile=i.data():this.userProfile=null}catch(n){console.error("Failed to fetch user profile:",n),this.userProfile=null}finally{this.isProfileLoading=!1}}else this.user=null,this.userProfile=null;this.isAuthReady=!0}))},setUserProfile(t){this.userProfile=t},async logout(){await XS(this.authInstance)},async signupWithEmail(t,e,n){this.loading=!0,this.error=null,this.successMessage=null;try{const r=await zS(this.authInstance,e,n);return await KS(r.user,{displayName:t}),this.user=r.user,this.successMessage="Account created successfully!",!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async signInWithEmail(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{const n=await WS(this.authInstance,t,e);return this.user=n.user,!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async signInWithGoogle(){this.loading=!0,this.error=null,this.successMessage=null;try{const t=new Xn,e=await yP(this.authInstance,t);return this.user=e.user,!0}catch(t){return this.error=t.message,!1}finally{this.loading=!1}},async sendPasswordReset(t){this.loading=!0,this.error=null,this.successMessage=null;try{return await HS(this.authInstance,t),this.successMessage="Password reset link sent to your email!",!0}catch(e){return this.error=e.message,!1}finally{this.loading=!1}},async confirmPasswordReset(t,e){this.loading=!0,this.error=null,this.successMessage=null;try{return await qS(this.authInstance,t,e),this.successMessage="Your password has been reset successfully! You can now sign in with your new password.",!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}}}}),Pi=L_("database",{state:()=>({loading:!1,error:null}),actions:{_getDBEssentials(){const t=pn();if(!t.user?.uid)return this.error="User not authenticated. Operation cancelled.",null;const e=vo(),n="1:382664693760:web:7582abe58d70b3260f20e5",r=t.user.uid;return{db:e,appId:n,userId:r}},async setUserProfile(t,e){console.log(`[DB_STORE] setUserProfile: Updating profile for user ID: ${t}`),this.loading=!0,this.error=null;try{const n=vo(),s=Cn(n,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","users",t);return await p2(s,e,{merge:!0}),console.log(`[DB_STORE] setUserProfile: Successfully updated profile for ${t}.`),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchUserProfile(t){this.loading=!0,this.error=null;try{const e=this._getDBEssentials();if(!e)return null;const{db:n,appId:r}=e,s=Cn(n,"artifacts",r,"users",t),i=await ch(s);return i.exists()?{id:i.id,...i.data()}:null}catch(e){return this.error=e.message,null}finally{this.loading=!1}},async addNewPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=Pr(n,"artifacts",r,"patients"),o={...t,creatorId:s,createdAt:Oe.now(),updatedAt:Oe.now()};return(await fu(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async updatePatientProfile(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=Cn(r,"artifacts",s,"patients",t);return await du(i,{...e,updatedAt:Oe.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchPatientsForDoctor(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=Pr(e,"artifacts",n,"patients"),i=zi(s,Ma("creatorId","==",r),La("createdAt","desc"));return(await Wi(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async deletePatientProfile(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=_2(n),i=Cn(n,"artifacts",r,"patients",t);s.delete(i);const o=Pr(n,"artifacts",r,"scans"),c=zi(o,Ma("patientId","==",t));return(await Wi(c)).forEach(u=>s.delete(u.ref)),await s.commit(),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async createScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=Pr(n,"artifacts",r,"scans"),o={...t,creatorId:s,isPersonalScan:t.patientId===s,createdAt:Oe.now()};return(await fu(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async updateScan(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s}=n,i=Cn(r,"artifacts",s,"scans",t),o={...e,updatedAt:Oe.now()};return await du(i,o),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async deleteScan(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return!1;try{const{db:n,appId:r}=e,s=Cn(n,"artifacts",r,"scans",t);return await m2(s),!0}catch(n){return this.error=n.message,!1}finally{this.loading=!1}},async fetchScansForPatient(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return[];try{const{db:n,appId:r}=e,s=Pr(n,"artifacts",r,"scans"),i=zi(s,Ma("patientId","==",t),La("scanDate","desc"));return(await Wi(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(n){return this.error=n.message,[]}finally{this.loading=!1}},async fetchDoctorCreatedScans(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=Pr(e,"artifacts",n,"scans"),i=zi(s,Ma("creatorId","==",r),La("scanDate","desc"));return(await Wi(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async addPregnancyDeclaration(t){this.loading=!0,this.error=null;const e=this._getDBEssentials();if(!e)return null;try{const{db:n,appId:r,userId:s}=e,i=Pr(n,"artifacts",r,"users",s,"pregnancies"),o={...t,status:"active",endDate:null,createdAt:Oe.now()};return(await fu(i,o)).id}catch(n){return this.error=n.message,null}finally{this.loading=!1}},async fetchPregnancyHistory(){this.loading=!0,this.error=null;const t=this._getDBEssentials();if(!t)return[];try{const{db:e,appId:n,userId:r}=t,s=Pr(e,"artifacts",n,"users",r,"pregnancies"),i=zi(s,La("declarationDate","desc"));return(await Wi(i)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return this.error=e.message,[]}finally{this.loading=!1}},async updatePregnancyRecord(t,e){this.loading=!0,this.error=null;const n=this._getDBEssentials();if(!n)return!1;try{const{db:r,appId:s,userId:i}=n,o=Cn(r,"artifacts",s,"users",i,"pregnancies",t);return await du(o,{...e,updatedAt:Oe.now()}),!0}catch(r){return this.error=r.message,!1}finally{this.loading=!1}},async fetchSinglePatient(t){this.loading=!0,this.error=null;try{const e=vo(),r=Cn(e,"artifacts","1:382664693760:web:7582abe58d70b3260f20e5","patients",t),s=await ch(r);return s.exists()?{id:s.id,...s.data()}:(this.error=`No patient found with ID: ${t}`,console.warn(`[DB_STORE] No patient found with ID: ${t}`),null)}catch(e){return this.error=e.message,null}finally{this.loading=!1}}}}),wt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},v2=["dir"],w2={key:0,class:"loading-state"},b2={class:"counter-label"},E2={class:"progress-details"},T2={class:"counter-bar-container"},I2={class:"counter-value"},A2={__name:"MsvCounter",props:{currentMsv:{type:Number,default:0},yearlyLimit:{type:Number,default:1},currentLanguage:String,isLoading:{type:Boolean,default:!0}},setup(t){const e=t,n=Pe(()=>e.currentMsv>=e.yearlyLimit?"status-danger":e.yearlyLimit>0?e.currentMsv/e.yearlyLimit*100<50?"status-safe":"status-warning":"status-safe");return(r,s)=>(W(),Q("div",{class:Is(["msv-counter",n.value]),dir:t.currentLanguage==="en"?"ltr":"rtl"},[t.isLoading?(W(),Q("div",w2,E(t.currentLanguage==="en"?"Calculating...":"جاري الحساب..."),1)):(W(),Q(st,{key:1},[p("span",b2,E(t.currentLanguage==="en"?"Annual Dose:":"الجرعة السنوية:"),1),p("div",E2,[p("div",T2,[p("div",{class:"counter-bar",style:$l({width:t.yearlyLimit>0?Math.min(t.currentMsv/t.yearlyLimit*100,100)+"%":"100%"})},null,4)]),p("span",I2,E(t.currentMsv.toFixed(2))+" mSv ",1)])],64))],10,v2))}},S2=wt(A2,[["__scopeId","data-v-401d1770"]]),P2={class:"app-header"},C2={class:"app-header-center"},R2={class:"project-title"},D2={__name:"TheHeader",props:{currentLanguage:String,user:Object,msvData:Object},emits:["toggle-language","toggle-info-modal"],setup(t){return(e,n)=>(W(),Q("header",P2,[p("button",{onClick:n[0]||(n[0]=r=>e.$emit("toggle-language")),class:"language-toggle-button"},E(t.currentLanguage==="en"?"العربية":"English"),1),p("div",C2,[p("h1",R2,E(t.currentLanguage==="en"?"mSv Exposure Calculator":"حاسبة التعرض للأشعة"),1),t.user?(W(),In(S2,{key:0,"current-msv":t.msvData.current,"yearly-limit":t.msvData.limit,"is-loading":t.msvData.isLoading,"current-language":t.currentLanguage},null,8,["current-msv","yearly-limit","is-loading","current-language"])):Ee("",!0)]),p("button",{onClick:n[1]||(n[1]=r=>e.$emit("toggle-info-modal")),class:"info-button-global"},E(t.currentLanguage==="en"?"Information":"معلومات"),1)]))}},k2=wt(D2,[["__scopeId","data-v-d06322cd"]]),O2=["dir"],x2={class:"modal-title"},N2={key:0,class:"info-text-content"},V2={key:1,class:"info-text-content"},M2=`
<p>التعرض الإشعاعي هو كمية الإشعاع التي يتلقاها الجسم عند مروره في بيئة تحتوي على إشعاع مؤين، مثل الأشعة السينية (X-rays) أو الأشعة المقطعية (CT). وتُقاس الجرعة الإشعاعية بوحدة "الميلي سيفرت" (mSv)، وهي وحدة تعكس التأثير البيولوجي للإشعاع على أنسجة الجسم.</p>
<p>تكمن الخطورة في أن الإشعاع المؤين يمكن أن يسبب تلفًا في الخلايا، مما يزيد من خطر الإصابة بالأمراض المزمنة مثل السرطان، خاصةً مع التعرض المتكرر أو الطويل. لذلك:</p>
<ul>
  <li><strong>المرضى</strong> يجب ألا يتعرضوا إلا عند الضرورة، ويجب تسجيل كل فحص وتقييم فائدته مقابل ضرره.</li>
  <li><strong>العاملون في المجال الطبي</strong> مثل أطباء الأشعة وفنيي الأشعة، يتعرضون بشكل مزمن، مما يستدعي مراقبة دورية واتباع إجراءات السلامة.</li>
  <li><strong>النساء الحوامل</strong> هن فئة خاصة يجب أخذ الحيطة الشديدة عند تعرّضهن للإشعاع لتجنّب التأثير على الجنين.</li>
</ul>
<p><strong>الحد السنوي المسموح به للتعرض الإشعاعي</strong><br>
وفقًا لتوصيات اللجنة الدولية للحماية من الإشعاع (ICRP)، هذه هي الحدود الموصى بها:</p>
`,L2=`
<p>Radiation exposure is the amount of radiation received by the body when passing through an environment containing ionizing radiation, such as X-rays or CT scans. The radiation dose is measured in "millisieverts" (mSv), a unit that reflects the biological effect of radiation on body tissues.</p>
<p>The danger lies in the fact that ionizing radiation can cause cell damage, increasing the risk of chronic diseases like cancer, especially with repeated or prolonged exposure. Therefore:</p>
<ul>
  <li><strong>Patients</strong> should only be exposed when necessary, and every examination should be recorded and its benefit evaluated against its harm.</li>
  <li><strong>Medical professionals</strong>, such as radiologists and radiology technicians, are chronically exposed, requiring periodic monitoring and adherence to safety procedures.</li>
  <li><strong>Pregnant women</strong> are a special category who should exercise extreme caution when exposed to radiation to avoid affecting the fetus.</li>
</ul>
<p><strong>Annual Permissible Radiation Exposure Limit</strong><br>
According to the recommendations of the International Commission on Radiological Protection (ICRP), these are the recommended limits:</p>
`,F2={__name:"InfoModal",props:{show:Boolean,currentLanguage:String},emits:["close"],setup(t){return(e,n)=>(W(),In(mr,{name:"modal-fade"},{default:bn(()=>[t.show?(W(),Q("div",{key:0,class:"modal-overlay",onClick:n[1]||(n[1]=tt(r=>e.$emit("close"),["self"]))},[p("div",{class:"modal-content",dir:t.currentLanguage==="ar"?"rtl":"ltr"},[p("button",{class:"close-modal-button",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"×"),p("h2",x2,E(t.currentLanguage==="en"?"Radiation Exposure Awareness":"التوعية بالتعرض الإشعاعي"),1),t.currentLanguage==="en"?(W(),Q("div",N2,[p("div",{innerHTML:L2}),n[2]||(n[2]=p("div",{class:"overflow-x-auto mt-4"},[p("table",{class:"info-table"},[p("thead",null,[p("tr",null,[p("th",null,"Category"),p("th",null,"Annual Permissible Limit"),p("th",null,"Notes")])]),p("tbody",null,[p("tr",null,[p("td",null,"Medical Professionals"),p("td",null,"20 mSv"),p("td",null,"Averaged over 5 years, not exceeding 50 mSv in any single year.")]),p("tr",null,[p("td",null,"Patients"),p("td",null,"No strict limit"),p("td",null,"Exposure should be as low as reasonably achievable (ALARA principle).")]),p("tr",null,[p("td",null,"Pregnant Workers"),p("td",null,"1 mSv to the fetus"),p("td",null,"From the date of knowledge of pregnancy until birth.")]),p("tr",null,[p("td",null,"General Public"),p("td",null,"1 mSv"),p("td",null,"Under normal conditions without medical procedures.")])])])],-1))])):(W(),Q("div",V2,[p("div",{innerHTML:M2}),n[3]||(n[3]=p("div",{class:"overflow-x-auto mt-4"},[p("table",{class:"info-table"},[p("thead",null,[p("tr",null,[p("th",null,"الفئة"),p("th",null,"الحد السنوي المسموح به"),p("th",null,"ملاحظات")])]),p("tbody",null,[p("tr",null,[p("td",null,"العاملون في المجال الطبي"),p("td",null,"20 ميلي سيفرت (mSv)"),p("td",null,"كمتوسط على مدى 5 سنوات، بشرط ألا يتجاوز 50 mSv في سنة واحدة.")]),p("tr",null,[p("td",null,"المرضى"),p("td",null,"لا يوجد حد صارم"),p("td",null,"يجب تقليل التعرض بقدر الإمكان وفق مبدأ ALARA.")]),p("tr",null,[p("td",null,"النساء الحوامل العاملات"),p("td",null,"1 ميلي سيفرت للجنين خلال الحمل"),p("td",null,"يجب ألا تتجاوز الجرعة 1 mSv من تاريخ العلم بالحمل وحتى الولادة.")]),p("tr",null,[p("td",null,"العامة (غير العاملين بالمجال)"),p("td",null,"1 ميلي سيفرت"),p("td",null,"في الظروف الطبيعية بدون إجراءات طبية.")])])])],-1))]))],8,O2)])):Ee("",!0)]),_:1}))}},$2=wt(F2,[["__scopeId","data-v-13ace159"]]),U2=["dir"],B2={class:"modal-title"},j2=["innerHTML"],H2={class:"modal-actions"},q2={__name:"HelpModal",props:{show:Boolean,content:Object},emits:["close"],setup(t,{emit:e}){const n=t,r=e,s=$e("currentLanguage"),i=Pe(()=>n.content?s.value==="ar"?n.content.ar.title:n.content.en.title:""),o=Pe(()=>n.content?s.value==="ar"?n.content.ar.body:n.content.en.body:"");return(c,l)=>(W(),In(mr,{name:"modal-fade"},{default:bn(()=>[t.show?(W(),Q("div",{key:0,class:"modal-overlay",onClick:l[2]||(l[2]=tt(u=>r("close"),["self"]))},[p("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[p("button",{onClick:l[0]||(l[0]=u=>r("close")),class:"close-button"},"×"),p("h3",B2,E(i.value),1),p("div",{class:"modal-body",innerHTML:o.value},null,8,j2),p("div",H2,[p("button",{type:"button",onClick:l[1]||(l[1]=u=>r("close")),class:"action-button"},E(y(s)==="en"?"Got it!":"فهمت!"),1)])],8,U2)])):Ee("",!0)]),_:1}))}},z2=wt(q2,[["__scopeId","data-v-f75aa86f"]]),Dg={dashboard:{en:{title:"Dashboard Guide",body:`
        The Dashboard is your central hub.
        <ul>
          <li><strong>Welcome Message:</strong> A quick greeting and overview.</li>
          <li><strong>Get Scan Recommendation:</strong> Navigates to a page where you can use an AI tool to check if a radiological scan is necessary.</li>
          <li><strong>Manage Patients (Doctors Only):</strong> Access a list of your patients to view their history, edit details, or add new scans.</li>
          <li><strong>View Profile:</strong> Go to your personal profile page to see your details and your personal scan history.</li>
        </ul>
        <p>If this is your first time logging in, you will see a "Complete Your Profile" modal. You must fill this out to use the app.</p>
      `},ar:{title:"دليل لوحة التحكم",body:`
        لوحة التحكم هي مركزك الرئيسي.
        <ul>
          <li><strong>رسالة الترحيب:</strong> تحية سريعة ونظرة عامة.</li>
          <li><strong>الحصول على توصية فحص:</strong> ينقلك إلى صفحة حيث يمكنك استخدام أداة الذكاء الاصطناعي للتحقق من ضرورة إجراء فحص إشعاعي.</li>
          <li><strong>إدارة المرضى (للأطباء فقط):</strong> يمكنك الوصول إلى قائمة مرضاك لعرض تاريخهم، تعديل تفاصيلهم، أو إضافة فحوصات جديدة.</li>
          <li><strong>عرض الملف الشخصي:</strong> انتقل إلى صفحتك الشخصية لرؤية تفاصيلك وسجل فحوصاتك الشخصية.</li>
        </ul>
        <p>إذا كانت هذه هي المرة الأولى التي تسجل فيها الدخول، فسترى نافذة "أكمل ملفك الشخصي". يجب عليك ملء هذا النموذج لاستخدام التطبيق.</p>
      `}},recommend:{en:{title:"Recommendation Page Guide",body:`
        This page uses AI to provide a recommendation about a potential radiological scan.
        <ul>
          <li><strong>Mode Switcher:</strong> Choose between getting a recommendation for yourself ('For Myself') or for a patient ('For Another Patient' if you are a doctor).</li>
          <li><strong>Patient Details:</strong> Fill in the patient's information. For 'personal' mode, your data is loaded automatically.</li>
          <li><strong>Scan Details:</strong> Specify the exact type and protocol of the scan being considered. This is critical for an accurate dose estimation.</li>
          <li><strong>Get Recommendation:</strong> After filling the form, click this to send the data to the AI for analysis.</li>
        </ul>
        <p>The goal is to adhere to the <strong>ALARA (As Low As Reasonably Achievable)</strong> principle by avoiding unnecessary radiation exposure.</p>
      `},ar:{title:"دليل صفحة التوصيات",body:`
        تستخدم هذه الصفحة الذكاء الاصطناعي لتقديم توصية بشأن فحص إشعاعي محتمل.
        <ul>
          <li><strong>مفتاح الوضع:</strong> اختر بين الحصول على توصية لنفسك ('لنفسي') أو لمريض ('لمريض آخر' إذا كنت طبيباً).</li>
          <li><strong>تفاصيل المريض:</strong> املأ معلومات المريض. في وضع 'لنفسي'، يتم تحميل بياناتك تلقائيًا.</li>
          <li><strong>تفاصيل الفحص:</strong> حدد النوع والبروتوكول الدقيق للفحص قيد الدراسة. هذا حاسم لتقدير الجرعة بدقة.</li>
          <li><strong>الحصول على توصية:</strong> بعد ملء النموذج، انقر هنا لإرسال البيانات إلى الذكاء الاصطناعي لتحليلها.</li>
        </ul>
        <p>الهدف هو الالتزام بمبدأ <strong>ALARA (أقل ما يمكن تحقيقه بشكل معقول)</strong> عن طريق تجنب التعرض غير الضروري للإشعاع.</p>
      `}},patients:{en:{title:"Manage Patients Guide",body:`
        This page allows doctors to manage their patient records.
        <ul>
          <li><strong>Add New Patient:</strong> Opens a form to add a new patient to your list.</li>
          <li><strong>Patient Table:</strong> Displays all your current patients.</li>
          <li><strong>Actions:</strong> Each patient has four action buttons:
            <ul>
              <li><strong style="color: #5bc0de;">View (Eye Icon):</strong> See the patient's full scan history and edit it.</li>
              <li><strong style="color: #f0ad4e;">Edit (Pencil Icon):</strong> Modify the patient's personal details.</li>
              <li><strong style="color: #d9534f;">Delete (Trash Icon):</strong> Permanently remove the patient and their records.</li>
              <li><strong style="color: #28a745;">Recommend (Medical File Icon):</strong> Go to the Recommendation page for this patient.</li>
            </ul>
          </li>
        </ul>
      `},ar:{title:"دليل إدارة المرضى",body:`
        تتيح هذه الصفحة للأطباء إدارة سجلات مرضاهم.
        <ul>
          <li><strong>إضافة مريض جديد:</strong> يفتح نموذجًا لإضافة مريض جديد إلى قائمتك.</li>
          <li><strong>جدول المرضى:</strong> يعرض جميع مرضاك الحاليين.</li>
          <li><strong>الإجراءات:</strong> لكل مريض أربعة أزرار إجراءات:
            <ul>
              <li><strong style="color: #5bc0de;">عرض (أيقونة العين):</strong> شاهد سجل الفحوصات الكامل للمريض و عدل عليه.</li>
              <li><strong style="color: #f0ad4e;">تعديل (أيقونة القلم):</strong> قم بتعديل التفاصيل الشخصية للمريض.</li>
              <li><strong style="color: #d9534f;">حذف (أيقونة سلة المهملات):</strong> قم بإزالة المريض وسجلاته بشكل دائم.</li>
              <li><strong style="color: #28a745;">توصية (أيقونة الملف الطبي):</strong> انتقل إلى صفحة التوصيات لهذا المريض.</li>
            </ul>
          </li>
        </ul>
      `}},profile:{en:{title:"Profile Page Guide",body:`
        This is your personal space to manage your information and scan history.
        <ul>
          <li><strong>My Profile Section:</strong> Displays your current details. Click 'Edit Profile' to update your information, including pregnancy status.</li>
          <li><strong>Personal Scan History:</strong> This table lists all radiological scans you have logged for yourself.
            <ul>
              <li>Click 'Add Personal Scan' to log a new scan.</li>
              <li>Use the 'Edit' and 'Delete' icons on each row to manage existing entries.</li>
            </ul>
          </li>
        </ul>
        <p>Keeping your profile and scan history accurate ensures the mSv dose tracker in the header is always correct.</p>
      `},ar:{title:"دليل صفحة الملف الشخصي",body:`
        هذه هي مساحتك الشخصية لإدارة معلوماتك وسجل فحوصاتك.
        <ul>
          <li><strong>قسم ملفي الشخصي:</strong> يعرض تفاصيلك الحالية. انقر على 'تعديل الملف الشخصي' لتحديث معلوماتك، بما في ذلك حالة الحمل.</li>
          <li><strong>سجل الفحوصات الشخصية:</strong> يسرد هذا الجدول جميع الفحوصات الإشعاعية التي سجلتها لنفسك.
            <ul>
              <li>انقر على 'إضافة فحص شخصي' لتسجيل فحص جديد.</li>
              <li>استخدم أيقونات 'تعديل' و 'حذف' في كل صف لإدارة الإدخالات الحالية.</li>
            </ul>
          </li>
        </ul>
        <p>يضمن الحفاظ على دقة ملفك الشخصي وسجل الفحوصات أن يكون متتبع جرعات mSv في الرأس صحيحًا دائمًا.</p>
      `}}};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function W2(t,e,n){return(e=K2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kg(Object(n),!0).forEach(function(r){W2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function G2(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function K2(t){var e=G2(t,"string");return typeof e=="symbol"?e:e+""}const Og=()=>{};let zd={},dw={},fw=null,pw={mark:Og,measure:Og};try{typeof window<"u"&&(zd=window),typeof document<"u"&&(dw=document),typeof MutationObserver<"u"&&(fw=MutationObserver),typeof performance<"u"&&(pw=performance)}catch{}const{userAgent:xg=""}=zd.navigator||{},ts=zd,et=dw,Ng=fw,Fa=pw;ts.document;const _r=!!et.documentElement&&!!et.head&&typeof et.addEventListener=="function"&&typeof et.createElement=="function",mw=~xg.indexOf("MSIE")||~xg.indexOf("Trident/");var Y2=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Q2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,gw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},X2={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},yw=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ut="classic",wc="duotone",J2="sharp",Z2="sharp-duotone",_w=[Ut,wc,J2,Z2],ek={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},tk={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},nk=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),rk={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},sk=["fak","fa-kit","fakd","fa-kit-duotone"],Vg={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ik=["kit"],ok={kit:{"fa-kit":"fak"}},ak=["fak","fakd"],lk={kit:{fak:"fa-kit"}},Mg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},$a={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ck=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],uk=["fak","fa-kit","fakd","fa-kit-duotone"],hk={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},dk={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},fk={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},uh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},pk=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],hh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ck,...pk],mk=["solid","regular","light","thin","duotone","brands"],vw=[1,2,3,4,5,6,7,8,9,10],gk=vw.concat([11,12,13,14,15,16,17,18,19,20]),yk=[...Object.keys(fk),...mk,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$a.GROUP,$a.SWAP_OPACITY,$a.PRIMARY,$a.SECONDARY].concat(vw.map(t=>"".concat(t,"x"))).concat(gk.map(t=>"w-".concat(t))),_k={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const hr="___FONT_AWESOME___",dh=16,ww="fa",bw="svg-inline--fa",ks="data-fa-i2svg",fh="data-fa-pseudo-element",vk="data-fa-pseudo-element-pending",Wd="data-prefix",Gd="data-icon",Lg="fontawesome-i2svg",wk="async",bk=["HTML","HEAD","STYLE","SCRIPT"],Ew=(()=>{try{return!0}catch{return!1}})();function la(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ut]}})}const Tw=Z({},gw);Tw[Ut]=Z(Z(Z(Z({},{"fa-duotone":"duotone"}),gw[Ut]),Vg.kit),Vg["kit-duotone"]);const Ek=la(Tw),ph=Z({},rk);ph[Ut]=Z(Z(Z(Z({},{duotone:"fad"}),ph[Ut]),Mg.kit),Mg["kit-duotone"]);const Fg=la(ph),mh=Z({},uh);mh[Ut]=Z(Z({},mh[Ut]),lk.kit);const Kd=la(mh),gh=Z({},dk);gh[Ut]=Z(Z({},gh[Ut]),ok.kit);la(gh);const Tk=Y2,Iw="fa-layers-text",Ik=Q2,Ak=Z({},ek);la(Ak);const Sk=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mu=X2,Pk=[...ik,...yk],wo=ts.FontAwesomeConfig||{};function Ck(t){var e=et.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Rk(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}et&&typeof et.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=Rk(Ck(n));s!=null&&(wo[r]=s)});const Aw={styleDefault:"solid",familyDefault:Ut,cssPrefix:ww,replacementClass:bw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wo.familyPrefix&&(wo.cssPrefix=wo.familyPrefix);const yi=Z(Z({},Aw),wo);yi.autoReplaceSvg||(yi.observeMutations=!1);const de={};Object.keys(Aw).forEach(t=>{Object.defineProperty(de,t,{enumerable:!0,set:function(e){yi[t]=e,bo.forEach(n=>n(de))},get:function(){return yi[t]}})});Object.defineProperty(de,"familyPrefix",{enumerable:!0,set:function(t){yi.cssPrefix=t,bo.forEach(e=>e(de))},get:function(){return yi.cssPrefix}});ts.FontAwesomeConfig=de;const bo=[];function Dk(t){return bo.push(t),()=>{bo.splice(bo.indexOf(t),1)}}const Cr=dh,On={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function kk(t){if(!t||!_r)return;const e=et.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=et.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return et.head.insertBefore(e,r),t}const Ok="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Bo(){let t=12,e="";for(;t-- >0;)e+=Ok[Math.random()*62|0];return e}function Ci(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Yd(t){return t.classList?Ci(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Sw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xk(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Sw(t[n]),'" '),"").trim()}function bc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Qd(t){return t.size!==On.size||t.x!==On.x||t.y!==On.y||t.rotate!==On.rotate||t.flipX||t.flipY}function Nk(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(c)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function Vk(t){let{transform:e,width:n=dh,height:r=dh,startCentered:s=!1}=t,i="";return s&&mw?i+="translate(".concat(e.x/Cr-n/2,"em, ").concat(e.y/Cr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Cr,"em), calc(-50% + ").concat(e.y/Cr,"em)) "):i+="translate(".concat(e.x/Cr,"em, ").concat(e.y/Cr,"em) "),i+="scale(".concat(e.size/Cr*(e.flipX?-1:1),", ").concat(e.size/Cr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Mk=`:root, :host {
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
}`;function Pw(){const t=ww,e=bw,n=de.cssPrefix,r=de.replacementClass;let s=Mk;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(r))}return s}let $g=!1;function gu(){de.autoAddCss&&!$g&&(kk(Pw()),$g=!0)}var Lk={mixout(){return{dom:{css:Pw,insertCss:gu}}},hooks(){return{beforeDOMElementCreation(){gu()},beforeI2svg(){gu()}}}};const dr=ts||{};dr[hr]||(dr[hr]={});dr[hr].styles||(dr[hr].styles={});dr[hr].hooks||(dr[hr].hooks={});dr[hr].shims||(dr[hr].shims=[]);var xn=dr[hr];const Cw=[],Rw=function(){et.removeEventListener("DOMContentLoaded",Rw),kl=1,Cw.map(t=>t())};let kl=!1;_r&&(kl=(et.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(et.readyState),kl||et.addEventListener("DOMContentLoaded",Rw));function Fk(t){_r&&(kl?setTimeout(t,0):Cw.push(t))}function ca(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Sw(t):"<".concat(e," ").concat(xk(n),">").concat(r.map(ca).join(""),"</").concat(e,">")}function Ug(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yu=function(e,n,r,s){var i=Object.keys(e),o=i.length,c=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=c(h,e[u],u,e);return h};function $k(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function yh(t){const e=$k(t);return e.length===1?e[0].toString(16):null}function Uk(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Bg(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function _h(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Bg(e);typeof xn.hooks.addPack=="function"&&!r?xn.hooks.addPack(t,Bg(e)):xn.styles[t]=Z(Z({},xn.styles[t]||{}),s),t==="fas"&&_h("fa",e)}const{styles:jo,shims:Bk}=xn,Dw=Object.keys(Kd),jk=Dw.reduce((t,e)=>(t[e]=Object.keys(Kd[e]),t),{});let Xd=null,kw={},Ow={},xw={},Nw={},Vw={};function Hk(t){return~Pk.indexOf(t)}function qk(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!Hk(s)?s:null}const Mw=()=>{const t=r=>yu(jo,(s,i,o)=>(s[o]=yu(i,r,{}),s),{});kw=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(c=>typeof c=="number").forEach(c=>{r[c.toString(16)]=i}),r)),Ow=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(c=>typeof c=="string").forEach(c=>{r[c]=i}),r)),Vw=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(c=>{r[c]=i}),r});const e="far"in jo||de.autoFetchSvg,n=yu(Bk,(r,s)=>{const i=s[0];let o=s[1];const c=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:c}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:c}),r},{names:{},unicodes:{}});xw=n.names,Nw=n.unicodes,Xd=Ec(de.styleDefault,{family:de.familyDefault})};Dk(t=>{Xd=Ec(t.styleDefault,{family:de.familyDefault})});Mw();function Jd(t,e){return(kw[t]||{})[e]}function zk(t,e){return(Ow[t]||{})[e]}function ws(t,e){return(Vw[t]||{})[e]}function Lw(t){return xw[t]||{prefix:null,iconName:null}}function Wk(t){const e=Nw[t],n=Jd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ns(){return Xd}const Fw=()=>({prefix:null,iconName:null,rest:[]});function Gk(t){let e=Ut;const n=Dw.reduce((r,s)=>(r[s]="".concat(de.cssPrefix,"-").concat(s),r),{});return _w.forEach(r=>{(t.includes(n[r])||t.some(s=>jk[r].includes(s)))&&(e=r)}),e}function Ec(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ut}=e,r=Ek[n][t];if(n===wc&&!t)return"fad";const s=Fg[n][t]||Fg[n][r],i=t in xn.styles?t:null;return s||i||null}function Kk(t){let e=[],n=null;return t.forEach(r=>{const s=qk(de.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function jg(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Tc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=hh.concat(uk),i=jg(t.filter(m=>s.includes(m))),o=jg(t.filter(m=>!hh.includes(m))),c=i.filter(m=>(r=m,!yw.includes(m))),[l=null]=c,u=Gk(i),h=Z(Z({},Kk(o)),{},{prefix:Ec(l,{family:u})});return Z(Z(Z({},h),Jk({values:t,family:u,styles:jo,config:de,canonical:h,givenPrefix:r})),Yk(n,r,h))}function Yk(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?Lw(s):{},o=ws(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!jo.far&&jo.fas&&!de.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const Qk=_w.filter(t=>t!==Ut||t!==wc),Xk=Object.keys(uh).filter(t=>t!==Ut).map(t=>Object.keys(uh[t])).flat();function Jk(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,c=n===wc,l=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(l||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Qk.includes(n)&&(Object.keys(i).find(f=>Xk.includes(f))||o.autoFetchSvg)){const f=nk.get(n).defaultShortPrefixId;r.prefix=f,r.iconName=ws(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=ns()||"fas"),r}class Zk{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=Z(Z({},this.definitions[i]||{}),s[i]),_h(i,s[i]);const o=Kd[Ut][i];o&&_h(o,s[i]),Mw()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:c}=r[s],l=c[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=c)}),e[i][o]=c}),e}}let Hg=[],Qs={};const ii={},eO=Object.keys(ii);function tO(t,e){let{mixoutsTo:n}=e;return Hg=t,Qs={},Object.keys(ii).forEach(r=>{eO.indexOf(r)===-1&&delete ii[r]}),Hg.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Qs[o]||(Qs[o]=[]),Qs[o].push(i[o])})}r.provides&&r.provides(ii)}),n}function vh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Qs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Os(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Qs[t]||[]).forEach(i=>{i.apply(null,n)})}function rs(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ii[t]?ii[t].apply(null,e):void 0}function wh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||ns();if(e)return e=ws(n,e)||e,Ug($w.definitions,n,e)||Ug(xn.styles,n,e)}const $w=new Zk,nO=()=>{de.autoReplaceSvg=!1,de.observeMutations=!1,Os("noAuto")},rO={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _r?(Os("beforeI2svg",t),rs("pseudoElements2svg",t),rs("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;de.autoReplaceSvg===!1&&(de.autoReplaceSvg=!0),de.observeMutations=!0,Fk(()=>{iO({autoReplaceSvgRoot:e}),Os("watch",t)})}},sO={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ws(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ec(t[0]);return{prefix:n,iconName:ws(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(de.cssPrefix,"-"))>-1||t.match(Tk))){const e=Tc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||ns(),iconName:ws(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=ns();return{prefix:e,iconName:ws(e,t)||t}}}},sn={noAuto:nO,config:de,dom:rO,parse:sO,library:$w,findIconDefinition:wh,toHtml:ca},iO=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=et}=t;(Object.keys(xn.styles).length>0||de.autoFetchSvg)&&_r&&de.autoReplaceSvg&&sn.dom.i2svg({node:e})};function Ic(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ca(n))}}),Object.defineProperty(t,"node",{get:function(){if(!_r)return;const n=et.createElement("div");return n.innerHTML=t.html,n.children}}),t}function oO(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Qd(o)&&n.found&&!r.found){const{width:c,height:l}=n,u={x:c/l/2,y:.5};s.style=bc(Z(Z({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function aO(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(de.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Z(Z({},s),{},{id:o}),children:r}]}]}function Zd(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:c,maskId:l,titleId:u,extra:h,watchable:m=!1}=t,{width:f,height:_}=n.found?n:e,k=ak.includes(r),C=[de.replacementClass,s?"".concat(de.cssPrefix,"-").concat(s):""].filter(F=>h.classes.indexOf(F)===-1).filter(F=>F!==""||!!F).concat(h.classes).join(" ");let A={children:[],attributes:Z(Z({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:C,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(_)})};const N=k&&!~h.classes.indexOf("fa-fw")?{width:"".concat(f/_*16*.0625,"em")}:{};m&&(A.attributes[ks]=""),c&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(u||Bo())},children:[c]}),delete A.attributes.title);const x=Z(Z({},A),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:Z(Z({},N),h.styles)}),{children:M,attributes:$}=n.found&&e.found?rs("generateAbstractMask",x)||{children:[],attributes:{}}:rs("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=M,x.attributes=$,o?aO(x):oO(x)}function qg(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:c=!1}=t,l=Z(Z(Z({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[ks]="");const u=Z({},o.styles);Qd(s)&&(u.transform=Vk({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=bc(u);h.length>0&&(l.style=h);const m=[];return m.push({tag:"span",attributes:l,children:[e]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function lO(t){const{content:e,title:n,extra:r}=t,s=Z(Z(Z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=bc(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:_u}=xn;function bh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(de.cssPrefix,"-").concat(mu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(mu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(mu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const cO={found:!1,width:512,height:512};function uO(t,e){!Ew&&!de.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Eh(t,e){let n=e;return e==="fa"&&de.styleDefault!==null&&(e=ns()),new Promise((r,s)=>{if(n==="fa"){const i=Lw(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&_u[e]&&_u[e][t]){const i=_u[e][t];return r(bh(i))}uO(t,e),r(Z(Z({},cO),{},{icon:de.showMissingIcons&&t?rs("missingIconAbstract")||{}:{}}))})}const zg=()=>{},Th=de.measurePerformance&&Fa&&Fa.mark&&Fa.measure?Fa:{mark:zg,measure:zg},eo='FA "6.7.2"',hO=t=>(Th.mark("".concat(eo," ").concat(t," begins")),()=>Uw(t)),Uw=t=>{Th.mark("".concat(eo," ").concat(t," ends")),Th.measure("".concat(eo," ").concat(t),"".concat(eo," ").concat(t," begins"),"".concat(eo," ").concat(t," ends"))};var ef={begin:hO,end:Uw};const el=()=>{};function Wg(t){return typeof(t.getAttribute?t.getAttribute(ks):null)=="string"}function dO(t){const e=t.getAttribute?t.getAttribute(Wd):null,n=t.getAttribute?t.getAttribute(Gd):null;return e&&n}function fO(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(de.replacementClass)}function pO(){return de.autoReplaceSvg===!0?tl.replace:tl[de.autoReplaceSvg]||tl.replace}function mO(t){return et.createElementNS("http://www.w3.org/2000/svg",t)}function gO(t){return et.createElement(t)}function Bw(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?mO:gO}=e;if(typeof t=="string")return et.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Bw(i,{ceFn:n}))}),r}function yO(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const tl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Bw(n),e)}),e.getAttribute(ks)===null&&de.keepOriginalSource){let n=et.createComment(yO(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Yd(e).indexOf(de.replacementClass))return tl.replace(t);const r=new RegExp("".concat(de.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,c)=>(c===de.replacementClass||c.match(r)?o.toSvg.push(c):o.toNode.push(c),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>ca(i)).join(`
`);e.setAttribute(ks,""),e.innerHTML=s}};function Gg(t){t()}function jw(t,e){const n=typeof e=="function"?e:el;if(t.length===0)n();else{let r=Gg;de.mutateApproach===wk&&(r=ts.requestAnimationFrame||Gg),r(()=>{const s=pO(),i=ef.begin("mutate");t.map(s),i(),n()})}}let tf=!1;function Hw(){tf=!0}function Ih(){tf=!1}let Ol=null;function Kg(t){if(!Ng||!de.observeMutations)return;const{treeCallback:e=el,nodeCallback:n=el,pseudoElementsCallback:r=el,observeMutationsRoot:s=et}=t;Ol=new Ng(i=>{if(tf)return;const o=ns();Ci(i).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!Wg(c.addedNodes[0])&&(de.searchPseudoElements&&r(c.target),e(c.target)),c.type==="attributes"&&c.target.parentNode&&de.searchPseudoElements&&r(c.target.parentNode),c.type==="attributes"&&Wg(c.target)&&~Sk.indexOf(c.attributeName))if(c.attributeName==="class"&&dO(c.target)){const{prefix:l,iconName:u}=Tc(Yd(c.target));c.target.setAttribute(Wd,l||o),u&&c.target.setAttribute(Gd,u)}else fO(c.target)&&n(c.target)})}),_r&&Ol.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function _O(){Ol&&Ol.disconnect()}function vO(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],c=i.slice(1);return o&&c.length>0&&(r[o]=c.join(":").trim()),r},{})),n}function wO(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Tc(Yd(t));return s.prefix||(s.prefix=ns()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=zk(s.prefix,t.innerText)||Jd(s.prefix,yh(t.innerText))),!s.iconName&&de.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function bO(t){const e=Ci(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return de.autoA11y&&(n?e["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(r||Bo()):(e["aria-hidden"]="true",e.focusable="false")),e}function EO(){return{iconName:null,title:null,titleId:null,prefix:null,transform:On,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=wO(t),i=bO(t),o=vh("parseNodeAttributes",{},t);let c=e.styleParser?vO(t):[];return Z({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:On,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:i}},o)}const{styles:TO}=xn;function qw(t){const e=de.autoReplaceSvg==="nest"?Yg(t,{styleParser:!1}):Yg(t);return~e.extra.classes.indexOf(Iw)?rs("generateLayersText",t,e):rs("generateSvgReplacementMutation",t,e)}function IO(){return[...sk,...hh]}function Qg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_r)return Promise.resolve();const n=et.documentElement.classList,r=h=>n.add("".concat(Lg,"-").concat(h)),s=h=>n.remove("".concat(Lg,"-").concat(h)),i=de.autoFetchSvg?IO():yw.concat(Object.keys(TO));i.includes("fa")||i.push("fa");const o=[".".concat(Iw,":not([").concat(ks,"])")].concat(i.map(h=>".".concat(h,":not([").concat(ks,"])"))).join(", ");if(o.length===0)return Promise.resolve();let c=[];try{c=Ci(t.querySelectorAll(o))}catch{}if(c.length>0)r("pending"),s("complete");else return Promise.resolve();const l=ef.begin("onTree"),u=c.reduce((h,m)=>{try{const f=qw(m);f&&h.push(f)}catch(f){Ew||f.name==="MissingIcon"&&console.error(f)}return h},[]);return new Promise((h,m)=>{Promise.all(u).then(f=>{jw(f,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(f=>{l(),m(f)})})}function AO(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qw(t).then(n=>{n&&jw([n],e)})}function SO(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:wh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:wh(s||{})),t(r,Z(Z({},n),{},{mask:s}))}}const PO=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=On,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:c=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:m,iconName:f,icon:_}=t;return Ic(Z({type:"icon"},t),()=>(Os("beforeDOMElementCreation",{iconDefinition:t,params:e}),de.autoA11y&&(o?u["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(c||Bo()):(u["aria-hidden"]="true",u.focusable="false")),Zd({icons:{main:bh(_),mask:s?bh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:f,transform:Z(Z({},On),n),symbol:r,title:o,maskId:i,titleId:c,extra:{attributes:u,styles:h,classes:l}})))};var CO={mixout(){return{icon:SO(PO)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Qg,t.nodeCallback=AO,t}}},provides(t){t.i2svg=function(e){const{node:n=et,callback:r=()=>{}}=e;return Qg(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:c,symbol:l,mask:u,maskId:h,extra:m}=n;return new Promise((f,_)=>{Promise.all([Eh(r,o),u.iconName?Eh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[C,A]=k;f([e,Zd({icons:{main:C,mask:A},prefix:o,iconName:r,transform:c,symbol:l,maskId:h,title:s,titleId:i,extra:m,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const c=bc(o);c.length>0&&(r.style=c);let l;return Qd(i)&&(l=rs("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},RO={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ic({type:"layer"},()=>{Os("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(de.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},DO={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Ic({type:"counter",content:t},()=>(Os("beforeDOMElementCreation",{content:t,params:e}),lO({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(de.cssPrefix,"-layers-counter"),...r]}})))}}}},kO={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=On,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Ic({type:"text",content:t},()=>(Os("beforeDOMElementCreation",{content:t,params:e}),qg({content:t,transform:Z(Z({},On),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(de.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,c=null;if(mw){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,c=u.height/l}return de.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,qg({content:e.innerHTML,width:o,height:c,transform:s,title:r,extra:i,watchable:!0})])}}};const OO=new RegExp('"',"ug"),Xg=[1105920,1112319],Jg=Z(Z(Z(Z({},{FontAwesome:{normal:"fas",400:"fas"}}),tk),_k),hk),Ah=Object.keys(Jg).reduce((t,e)=>(t[e.toLowerCase()]=Jg[e],t),{}),xO=Object.keys(Ah).reduce((t,e)=>{const n=Ah[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function NO(t){const e=t.replace(OO,""),n=Uk(e,0),r=n>=Xg[0]&&n<=Xg[1],s=e.length===2?e[0]===e[1]:!1;return{value:yh(s?e[0]:e),isSecondary:r||s}}function VO(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Ah[n]||{})[s]||xO[n]}function Zg(t,e){const n="".concat(vk).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Ci(t.children).filter(f=>f.getAttribute(fh)===e)[0],c=ts.getComputedStyle(t,e),l=c.getPropertyValue("font-family"),u=l.match(Ik),h=c.getPropertyValue("font-weight"),m=c.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&m!=="none"&&m!==""){const f=c.getPropertyValue("content");let _=VO(l,h);const{value:k,isSecondary:C}=NO(f),A=u[0].startsWith("FontAwesome");let N=Jd(_,k),x=N;if(A){const M=Wk(k);M.iconName&&M.prefix&&(N=M.iconName,_=M.prefix)}if(N&&!C&&(!o||o.getAttribute(Wd)!==_||o.getAttribute(Gd)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);const M=EO(),{extra:$}=M;$.attributes[fh]=e,Eh(N,_).then(F=>{const B=Zd(Z(Z({},M),{},{icons:{main:F,mask:Fw()},prefix:_,iconName:x,extra:$,watchable:!0})),T=et.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=B.map(v=>ca(v)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function MO(t){return Promise.all([Zg(t,"::before"),Zg(t,"::after")])}function LO(t){return t.parentNode!==document.head&&!~bk.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ey(t){if(_r)return new Promise((e,n)=>{const r=Ci(t.querySelectorAll("*")).filter(LO).map(MO),s=ef.begin("searchPseudoElements");Hw(),Promise.all(r).then(()=>{s(),Ih(),e()}).catch(()=>{s(),Ih(),n()})})}var FO={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ey,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=et}=e;de.searchPseudoElements&&ey(n)}}};let ty=!1;var $O={mixout(){return{dom:{unwatch(){Hw(),ty=!0}}}},hooks(){return{bootstrap(){Kg(vh("mutationObserverCallbacks",{}))},noAuto(){_O()},watch(t){const{observeMutationsRoot:e}=t;ty?Ih():Kg(vh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ny=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var UO={mixout(){return{parse:{transform:t=>ny(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ny(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},m={transform:"translate(".concat(i/2*-1," -256)")},f={outer:o,inner:h,path:m};return{tag:"g",attributes:Z({},f.outer),children:[{tag:"g",attributes:Z({},f.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:Z(Z({},n.icon.attributes),f.path)}]}]}}}};const vu={x:0,y:0,width:"100%",height:"100%"};function ry(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function BO(t){return t.tag==="g"?t.children:[t]}var jO={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Tc(n.split(" ").map(s=>s.trim())):Fw();return r.prefix||(r.prefix=ns()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:c}=e;const{width:l,icon:u}=s,{width:h,icon:m}=i,f=Nk({transform:c,containerWidth:h,iconWidth:l}),_={tag:"rect",attributes:Z(Z({},vu),{},{fill:"white"})},k=u.children?{children:u.children.map(ry)}:{},C={tag:"g",attributes:Z({},f.inner),children:[ry(Z({tag:u.tag,attributes:Z(Z({},u.attributes),f.path)},k))]},A={tag:"g",attributes:Z({},f.outer),children:[C]},N="mask-".concat(o||Bo()),x="clip-".concat(o||Bo()),M={tag:"mask",attributes:Z(Z({},vu),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,A]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:BO(m)},M]};return n.push($,{tag:"rect",attributes:Z({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(N,")")},vu)}),{children:n,attributes:r}}}},HO={provides(t){let e=!1;ts.matchMedia&&(e=ts.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:Z(Z({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=Z(Z({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Z(Z({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:Z(Z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Z(Z({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:Z(Z({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:Z(Z({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:Z(Z({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Z(Z({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},qO={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},zO=[Lk,CO,RO,DO,kO,FO,$O,UO,jO,HO,qO];tO(zO,{mixoutsTo:sn});sn.noAuto;sn.config;const WO=sn.library;sn.dom;const Sh=sn.parse;sn.findIconDefinition;sn.toHtml;const GO=sn.icon;sn.layer;sn.text;sn.counter;function sy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Jn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sy(Object(n),!0).forEach(function(r){Qt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function KO(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function YO(t){var e=KO(t,"string");return typeof e=="symbol"?e:e+""}function xl(t){"@babel/helpers - typeof";return xl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xl(t)}function Qt(t,e,n){return e=YO(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function QO(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function XO(t,e){if(t==null)return{};var n=QO(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var JO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zw={exports:{}};(function(t){(function(e){var n=function(N,x,M){if(!u(x)||m(x)||f(x)||_(x)||l(x))return x;var $,F=0,B=0;if(h(x))for($=[],B=x.length;F<B;F++)$.push(n(N,x[F],M));else{$={};for(var T in x)Object.prototype.hasOwnProperty.call(x,T)&&($[N(T,M)]=n(N,x[T],M))}return $},r=function(N,x){x=x||{};var M=x.separator||"_",$=x.split||/(?=[A-Z])/;return N.split($).join(M)},s=function(N){return k(N)?N:(N=N.replace(/[\-_\s]+(.)?/g,function(x,M){return M?M.toUpperCase():""}),N.substr(0,1).toLowerCase()+N.substr(1))},i=function(N){var x=s(N);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(N,x){return r(N,x).toLowerCase()},c=Object.prototype.toString,l=function(N){return typeof N=="function"},u=function(N){return N===Object(N)},h=function(N){return c.call(N)=="[object Array]"},m=function(N){return c.call(N)=="[object Date]"},f=function(N){return c.call(N)=="[object RegExp]"},_=function(N){return c.call(N)=="[object Boolean]"},k=function(N){return N=N-0,N===N},C=function(N,x){var M=x&&"process"in x?x.process:x;return typeof M!="function"?N:function($,F){return M($,N,F)}},A={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(N,x){return n(C(s,x),N)},decamelizeKeys:function(N,x){return n(C(o,x),N,x)},pascalizeKeys:function(N,x){return n(C(i,x),N)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=A:e.humps=A})(JO)})(zw);var ZO=zw.exports,ex=["class","style"];function tx(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=ZO.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function nx(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ww(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Ww(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=nx(h);break;case"style":l.style=tx(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,c=XO(n,ex);return oi(t.tag,Jn(Jn(Jn({},e),{},{class:s.class,style:Jn(Jn({},s.style),o)},s.attrs),c),r)}var Gw=!1;try{Gw=!0}catch{}function rx(){if(!Gw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function wu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Qt({},t,e):{}}function sx(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Qt(Qt(Qt(Qt(Qt(Qt(Qt(Qt(Qt(Qt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Qt(Qt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function iy(t){if(t&&xl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Sh.icon)return Sh.icon(t);if(t===null)return null;if(xl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Ft=jh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Pe(function(){return iy(e.icon)}),i=Pe(function(){return wu("classes",sx(e))}),o=Pe(function(){return wu("transform",typeof e.transform=="string"?Sh.transform(e.transform):e.transform)}),c=Pe(function(){return wu("mask",iy(e.mask))}),l=Pe(function(){return GO(s.value,Jn(Jn(Jn(Jn({},i.value),o.value),c.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});it(l,function(h){if(!h)return rx("Could not find one or more icon(s)",s.value,c.value)},{immediate:!0});var u=Pe(function(){return l.value?Ww(l.value.abstract[0],{},r):null});return function(){return u.value}}});const ix={id:"app",class:"min-h-screen bg-gray-100 flex flex-col font-inter"},ox=["title"],ax={__name:"App",setup(t){const e=pn(),n=Pi(),r=O_(),s=Ce("en"),i=Ce(!1),o=Ce(!1),c=Ce(0),l=Ce(20),u=Ce(!0),h=()=>{o.value=!o.value},m=Pe(()=>{const A=r.name;return A&&Dg[A]?Dg[A]:null}),f=()=>{s.value=s.value==="en"?"ar":"en"},_=()=>{i.value=!i.value},k=A=>{if(!A)return null;if(typeof A.toDate=="function")return A.toDate();const N=new Date(A);return isNaN(N.getTime())?null:N},C=async()=>{if(console.log("%c[DOSE_CALC] Starting dose calculation...","color: blue; font-weight: bold;"),!e.user||!e.role){console.log("[DOSE_CALC] User or role not found. Aborting."),c.value=0,l.value=1,u.value=!1;return}u.value=!0;const A=e.user.uid,N=e.role;console.log(`[DOSE_CALC] User ID: ${A}, Role: ${N}`);try{const x=N==="doctor"?await n.fetchDoctorCreatedScans():await n.fetchScansForPatient(A);if(console.log(`[DOSE_CALC] Fetched ${x?.length||0} total scans.`),!x){u.value=!1;return}const M=new Date(new Date().getFullYear(),0,1),$=x.filter(F=>{const B=k(F.scanDate);return B&&B>=M});if(console.log(`[DOSE_CALC] Found ${$.length} scans this year.`),N==="doctor"){const F=$.reduce((b,S)=>S.isPersonalScan?b+(S.patientDose||0):b+(S.doctorDose||0),0);c.value=parseFloat(F.toFixed(3)),console.log(`[DOSE_CALC] Calculated total annual dose: ${F.toFixed(3)} mSv`),console.log("%c[DOSE_CALC] Checking pregnancy status...","color: #f5a623; font-weight: bold;");const B=e.userProfile,T=new Date;T.setHours(0,0,0,0);const v=B?k(B.estimatedDueDate):null;if(console.log("[DOSE_CALC] Profile data for check:",B),console.log("[DOSE_CALC] Profile 'isPregnant' flag:",B?.isPregnant),console.log("[DOSE_CALC] Parsed Due Date:",v),console.log("[DOSE_CALC] Today's Date:",T),v&&console.log("[DOSE_CALC] Is today before due date?",T<v),B?.isPregnant&&v&&T<v){console.log("%c[DOSE_CALC] --- ACTIVE PREGNANCY LOGIC ACTIVATED ---","color: purple; font-weight: bold;");const b=20-F,S=.5-F;console.log(`[DOSE_CALC] Remaining Annual Limit: ${b.toFixed(3)} mSv`),console.log(`[DOSE_CALC] Remaining Pregnancy Limit (stricter interpretation): ${S.toFixed(3)} mSv`),l.value=Math.max(0,Math.min(b,S)),console.log(`[DOSE_CALC] Final limit set to (strictest of the two): ${l.value.toFixed(3)} mSv`)}else console.log("%c[DOSE_CALC] --- STANDARD DOCTOR LOGIC ACTIVATED ---","color: green; font-weight: bold;"),l.value=20}else{console.log("%c[DOSE_CALC] --- PATIENT LOGIC ---","color: orange; font-weight: bold;"),l.value=1;const F=$.reduce((B,T)=>B+(T.patientDose||0),0);c.value=parseFloat(F.toFixed(3))}}catch(x){console.error("[DOSE_CALC_ERROR] Failed to update dose calculation:",x),c.value=0}finally{u.value=!1,console.log(`[DOSE_CALC] FINAL STATE -> currentMsv: ${c.value}, doseLimit: ${l.value}`),console.log("%c[DOSE_CALC] Dose calculation finished.","color: blue; font-weight: bold;")}};return YE(()=>{e.isAuthReady&&!e.isProfileLoading&&C()}),Dn("currentLanguage",s),Dn("toggleLanguage",f),Dn("toggleInfoModal",_),Dn("triggerMsvRecalculation",C),Dn("currentMsv",c),Dn("doseLimit",l),(A,N)=>(W(),Q("div",ix,[Se(k2,{"current-language":s.value,user:y(e).user,"msv-data":{current:c.value,limit:l.value,isLoading:u.value},onToggleLanguage:f,onToggleInfoModal:_},null,8,["current-language","user","msv-data"]),Se(y(k_),null,{default:bn(({Component:x,route:M})=>[Se(mr,{name:"page-fade",mode:"out-in"},{default:bn(()=>[(W(),In(SE(x),{key:M.path}))]),_:2},1024)]),_:1}),y(e).user&&m.value?(W(),Q("button",{key:0,class:"help-fab",onClick:h,title:s.value==="en"?"Help":"مساعدة"},[Se(y(Ft),{icon:"question-circle"})],8,ox)):Ee("",!0),Se($2,{show:i.value,"current-language":s.value,onClose:_},null,8,["show","current-language"]),Se(z2,{show:o.value,content:m.value,onClose:h},null,8,["show","content"])]))}},lx={class:"signup-page"},cx={class:"signup-main-content"},ux={class:"signup-card"},hx=["dir"],dx=["dir"],fx={class:"form-group"},px=["dir"],mx=["placeholder","dir"],gx={class:"form-group"},yx=["dir"],_x=["placeholder","dir"],vx={class:"form-group"},wx=["dir"],bx=["placeholder","dir"],Ex=["disabled"],Tx={key:0},Ix={key:1},Ax=["dir"],Sx=["dir"],Px=["disabled"],Cx=["dir"],Rx={__name:"SignupView",setup(t){const e=Ns(),n=pn(),r=$e("currentLanguage"),s=Ce(""),i=Ce(""),o=Ce(""),c=async()=>{if(i.value!==o.value){n.error=r.value==="en"?"Passwords do not match.":"كلمتا المرور غير متطابقتين.";return}await n.signupWithEmail("",s.value,i.value)},l=async()=>{await n.signInWithGoogle()?console.log("Successfully signed in with Google! Redirecting..."):console.error("Google sign-in failed:",n.error)},u=()=>{e.push("/signin")};return(h,m)=>(W(),Q("div",lx,[p("main",cx,[p("section",ux,[p("h2",{dir:y(r)==="ar"?"rtl":"ltr"},E(y(r)==="en"?"Welcome! Please Sign Up":"أهلاً بك! يرجى التسجيل"),9,hx),p("p",{dir:y(r)==="ar"?"rtl":"ltr"},E(y(r)==="en"?"Create your account to get started.":"أنشئ حسابك للبدء."),9,dx),p("form",{onSubmit:tt(c,["prevent"]),class:"signup-form"},[p("div",fx,[p("label",{for:"email",dir:y(r)==="ar"?"rtl":"ltr"},E(y(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,px),ue(p("input",{type:"email",id:"email","onUpdate:modelValue":m[0]||(m[0]=f=>s.value=f),placeholder:y(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:y(r)==="ar"?"rtl":"ltr",required:""},null,8,mx),[[Ae,s.value]])]),p("div",gx,[p("label",{for:"password",dir:y(r)==="ar"?"rtl":"ltr"},E(y(r)==="en"?"Password":"كلمة المرور"),9,yx),ue(p("input",{type:"password",id:"password","onUpdate:modelValue":m[1]||(m[1]=f=>i.value=f),placeholder:y(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:y(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,_x),[[Ae,i.value]])]),p("div",vx,[p("label",{for:"confirmPassword",dir:y(r)==="ar"?"rtl":"ltr"},E(y(r)==="en"?"Confirm Password":"تأكيد كلمة المرور"),9,wx),ue(p("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":m[2]||(m[2]=f=>o.value=f),placeholder:y(r)==="en"?"Confirm your password":"أكد كلمة المرور",dir:y(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,bx),[[Ae,o.value]])]),p("button",{class:"action-button primary",type:"submit",disabled:y(n).loading},[y(n).loading?(W(),Q("span",Tx,E(y(r)==="en"?"Signing Up...":"جاري التسجيل..."),1)):(W(),Q("span",Ix,E(y(r)==="en"?"Create Account":"إنشاء حساب"),1))],8,Ex)],32),y(n).error?(W(),Q("div",{key:0,class:"message error-message",dir:y(r)==="ar"?"rtl":"ltr"},E(y(n).error),9,Ax)):Ee("",!0),p("div",{class:"divider",dir:y(r)==="ar"?"rtl":"ltr"},[p("span",null,E(y(r)==="en"?"OR":"أو"),1)],8,Sx),p("button",{onClick:l,class:"action-button google-button",disabled:y(n).loading},[m[3]||(m[3]=f_('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a6c83a63><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-a6c83a63></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-a6c83a63></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-a6c83a63></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-a6c83a63></path></svg>',1)),p("span",null,E(y(r)==="en"?"Sign Up with Google":"التسجيل باستخدام جوجل"),1)],8,Px),p("p",{class:"switch-link-container",dir:y(r)==="ar"?"rtl":"ltr"},[mt(E(y(r)==="en"?"Already have an account?":"هل لديك حساب بالفعل؟")+" ",1),p("a",{href:"#",onClick:tt(u,["prevent"])},E(y(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,Cx)])])]))}},Dx=wt(Rx,[["__scopeId","data-v-a6c83a63"]]),kx={class:"login-page"},Ox={class:"login-main-content"},xx={class:"login-card"},Nx=["dir"],Vx=["dir"],Mx={class:"form-group"},Lx=["dir"],Fx=["placeholder","dir"],$x={class:"form-group"},Ux=["dir"],Bx=["placeholder","dir"],jx=["dir"],Hx=["disabled"],qx={key:0},zx={key:1},Wx=["dir"],Gx=["dir"],Kx=["dir"],Yx=["disabled"],Qx=["dir"],Xx={__name:"SigninView",setup(t){const e=Ns(),n=pn(),r=$e("currentLanguage"),s=Ce(""),i=Ce(""),o=async()=>{await n.signInWithEmail(s.value,i.value)},c=async()=>{await n.signInWithGoogle()},l=()=>{e.push("/")},u=()=>{e.push("/resetpassword")};return(h,m)=>(W(),Q("div",kx,[p("main",Ox,[p("section",xx,[p("h2",{dir:y(r)==="ar"?"rtl":"ltr"},E(y(r)==="en"?"Welcome Back! Please Sign In":"أهلاً بعودتك! يرجى تسجيل الدخول"),9,Nx),p("p",{dir:y(r)==="ar"?"rtl":"ltr"},E(y(r)==="en"?"Sign in to access your dashboard.":"سجّل الدخول للوصول إلى لوحة التحكم الخاصة بك."),9,Vx),p("form",{onSubmit:tt(o,["prevent"]),class:"login-form"},[p("div",Mx,[p("label",{for:"email",dir:y(r)==="ar"?"rtl":"ltr"},E(y(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,Lx),ue(p("input",{type:"email",id:"email","onUpdate:modelValue":m[0]||(m[0]=f=>s.value=f),placeholder:y(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:y(r)==="ar"?"rtl":"ltr",required:""},null,8,Fx),[[Ae,s.value]])]),p("div",$x,[p("label",{for:"password",dir:y(r)==="ar"?"rtl":"ltr"},E(y(r)==="en"?"Password":"كلمة المرور"),9,Ux),ue(p("input",{type:"password",id:"password","onUpdate:modelValue":m[1]||(m[1]=f=>i.value=f),placeholder:y(r)==="en"?"Enter your password":"أدخل كلمة المرور",dir:y(r)==="ar"?"rtl":"ltr",required:"",minlength:"6"},null,8,Bx),[[Ae,i.value]]),p("p",{class:"forgot-password-link",dir:y(r)==="ar"?"rtl":"ltr"},[p("a",{href:"#",onClick:tt(u,["prevent"])},E(y(r)==="en"?"Forgot your password?":"هل نسيت كلمة المرور؟"),1)],8,jx)]),p("button",{class:"action-button primary",type:"submit",disabled:y(n).loading},[y(n).loading?(W(),Q("span",qx,E(y(r)==="en"?"Signing In...":"جاري تسجيل الدخول..."),1)):(W(),Q("span",zx,E(y(r)==="en"?"Sign in":"تسجيل الدخول"),1))],8,Hx)],32),y(n).error?(W(),Q("div",{key:0,class:"message error-message",dir:y(r)==="ar"?"rtl":"ltr"},E(y(n).error),9,Wx)):Ee("",!0),y(n).successMessage?(W(),Q("div",{key:1,class:"message success-message",dir:y(r)==="ar"?"rtl":"ltr"},E(y(n).successMessage),9,Gx)):Ee("",!0),p("div",{class:"divider",dir:y(r)==="ar"?"rtl":"ltr"},[p("span",null,E(y(r)==="en"?"OR":"أو"),1)],8,Kx),p("button",{onClick:c,class:"action-button google-button",disabled:y(n).loading},[m[2]||(m[2]=f_('<svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3884b703><path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4" data-v-3884b703></path><path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853" data-v-3884b703></path><path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05" data-v-3884b703></path><path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335" data-v-3884b703></path></svg>',1)),p("span",null,E(y(r)==="en"?"Sign in with Google":"تسجيل الدخول باستخدام جوجل"),1)],8,Yx),p("p",{class:"switch-link-container",dir:y(r)==="ar"?"rtl":"ltr"},[mt(E(y(r)==="en"?"Don't have an account?":"ليس لديك حساب؟")+" ",1),p("a",{href:"#",onClick:tt(l,["prevent"])},E(y(r)==="en"?"Sign Up":"التسجيل"),1)],8,Qx)])])]))}},Jx=wt(Xx,[["__scopeId","data-v-3884b703"]]),Zx=["dir"],eN={class:"recommend-main-content"},tN={class:"recommend-card"},nN={class:"mode-switcher"},rN={key:0,class:"loading-overlay"},sN={key:1,class:"patient-info-display"},iN={class:"form-group"},oN=["disabled"],aN={class:"form-group"},lN=["disabled"],cN={class:"form-group"},uN=["disabled"],hN={value:"male"},dN={value:"female"},fN={key:0,class:"pregnancy-section"},pN={class:"form-group checkbox-group"},mN=["disabled"],gN={key:0,class:"form-group"},yN=["disabled"],_N={class:"form-group"},vN=["disabled"],wN={class:"form-group"},bN={key:1,class:"doctor-exposure-section"},EN={class:"section-title"},TN={class:"form-group"},IN={class:"section-title"},AN={class:"form-group"},SN={disabled:"",value:""},PN=["value"],CN={key:2,class:"form-group"},RN={class:"form-row"},DN={class:"form-group"},kN={value:"CT"},ON={value:"X-ray"},xN={class:"form-group"},NN={disabled:"",value:""},VN=["value"],MN={key:3,class:"form-group"},LN=["placeholder"],FN=["disabled"],$N={key:2,class:"message error-message"},UN={key:3,class:"prediction-result-wrapper"},BN={key:0,class:"message warning-message"},jN={class:"prediction-result"},HN={class:"msv-details-container"},qN={key:0,class:"msv-details"},zN={key:1,class:"msv-details doctor-dose"},WN={class:"result-text"},GN={class:"save-recommendation-section"},KN=["disabled"],YN={class:"save-note"},QN={class:"switch-link-container"},XN={__name:"RecommendView",setup(t){const e=Ns(),n=O_(),r=pn(),s=Pi(),i=$e("currentLanguage"),o=$e("currentMsv"),c=$e("doseLimit"),l=$e("triggerMsvRecalculation"),u={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Swallow",en:"Barium Swallow",ar:"بلع الباريوم"},{value:"Barium Meal",en:"Barium Meal",ar:"وجبة الباريوم"},{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},h=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],m=Ce("personal"),f=Ce({patientId:null,patientName:"",birthDate:"",gender:"male",weight:null,patientCumulativeDose:0,medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",scanType:"CT",scanPlace:"",otherScanPlaceDescription:"",subScanType:"",otherScanDescription:"",doctorAdditionalContext:""}),_=Ce(!1),k=Ce(!1),C=Ce(!1),A=Ce(null),N=Ce(""),x=Pe(()=>r.role),M=Pe(()=>x.value==="doctor"&&m.value==="personal"),$=Pe(()=>u[f.value.scanType]||[]),F=Pe(()=>f.value.subScanType==="Other"),B=Pe(()=>f.value.scanPlace==="other"),T=Pe(()=>m.value==="personal"?i.value==="en"?"Your Estimated Dose":"جرعتك المقدرة":i.value==="en"?"Patient Dose":"جرعة المريض"),v=Pe(()=>i.value==="en"?"Occupational Dose":"الجرعة المهنية"),b=Pe(()=>!A.value||A.value.doctorOccupationalMsv==null?!1:!(x.value==="doctor"&&m.value==="personal")),S=()=>{f.value={patientId:null,patientName:"",birthDate:"",gender:"male",weight:null,patientCumulativeDose:0,medicalHistory:"",currentSymptoms:"",allergies:"",isPregnant:!1,estimatedDueDate:"",scanType:"CT",scanPlace:"",otherScanPlaceDescription:"",subScanType:"",otherScanDescription:"",doctorAdditionalContext:""}},O=ye=>ye?(typeof ye.toDate=="function"?ye.toDate():new Date(ye)).toISOString().split("T")[0]:"",R=async ye=>{if(ye){C.value=!0,S();try{let Y=ye===r.user?.uid?r.userProfile:await s.fetchSinglePatient(ye);if(Y){f.value.patientId=ye,f.value.patientName=Y.displayName||Y.name||"",f.value.birthDate=O(Y.birthDate),f.value.weight=Y.weight||null,f.value.gender=Y.gender||"male",f.value.isPregnant=Y.isPregnant||!1,f.value.estimatedDueDate=O(Y.estimatedDueDate),f.value.medicalHistory=Array.isArray(Y.medicalHistory)?Y.medicalHistory.join(", "):"",f.value.allergies=Array.isArray(Y.allergies)?Y.allergies.join(", "):"";const X=await s.fetchScansForPatient(ye);if(X){const De=new Date(new Date().getFullYear(),0,1),pt=Je=>Je?Je.toDate?Je.toDate():new Date(Je):null,bt=X.filter(Je=>pt(Je.scanDate)>=De);f.value.patientCumulativeDose=parseFloat(bt.reduce((Je,je)=>Je+(je.patientDose||0),0).toFixed(3))}}}catch(Y){console.error("Error fetching patient details:",Y),N.value=i.value==="en"?"Failed to load patient data.":"فشل في تحميل بيانات المريض."}finally{C.value=!1}}};it(m,ye=>{A.value=null,ye==="personal"&&r.user?R(r.user.uid):n.query.patientId||S()}),it(()=>n.query.patientId,ye=>{ye?(m.value="general",R(ye)):r.user&&(m.value="personal",R(r.user.uid))},{immediate:!0}),it(()=>f.value.isPregnant,ye=>{ye||(f.value.estimatedDueDate="")}),it(()=>f.value.scanType,()=>{f.value.subScanType="",f.value.otherScanDescription=""});const I=async()=>{if(_.value=!0,N.value="",A.value=null,!f.value.birthDate||!f.value.scanPlace||B.value&&!f.value.otherScanPlaceDescription||!f.value.subScanType||F.value&&!f.value.otherScanDescription){N.value=i.value==="en"?"Please complete all required fields.":"يرجى إكمال جميع الحقول المطلوبة.",_.value=!1;return}if(f.value.isPregnant&&!f.value.estimatedDueDate){N.value=i.value==="en"?"Estimated Due Date is required for pregnant patients.":"تاريخ الولادة المتوقع مطلوب للحامل.",_.value=!1;return}const ye=new Date().getFullYear()-new Date(f.value.birthDate).getFullYear(),Y=f.value.weight?`Weight: ${f.value.weight} kg.`:"Weight: Not provided.";let X="Not pregnant.";f.value.isPregnant&&f.value.estimatedDueDate&&(X=`Pregnant with an estimated due date of ${f.value.estimatedDueDate}. The AI must carefully weigh risks, especially during the first trimester.`);const De=F.value?f.value.otherScanDescription:f.value.subScanType,pt=h.find(Bt=>Bt.value===f.value.scanPlace);let bt="";B.value?bt=f.value.otherScanPlaceDescription:pt&&(bt=i.value==="en"?pt.en:pt.ar);const Je=`a ${f.value.scanType} of the ${bt} with protocol "${De}"`;let je="",We={};x.value==="doctor"?(M.value?je=`
As a medical radiation safety advisor, provide a recommendation for a doctor who is also the patient.
- Scenario Context: The doctor IS THE PATIENT.
- Doctor's State: My annual occupational dose is ${o.value.toFixed(2)} mSv. The annual limit is ${c.value} mSv.
- Patient Details (My Details):
  - Age: ${ye}, Gender: ${f.value.gender}.
  - ${Y}
  - Pregnancy Status: ${X}
  - My cumulative dose this year: ${f.value.patientCumulativeDose} mSv.
- Scan I am considering: ${Je}
- My Exposure Context: ${f.value.doctorAdditionalContext||"No additional context provided."}
Tasks:
1. **Recommendation (recommendationText):** Justify if the scan is appropriate for me.
2. **Patient Dose (patientCalculatedMsv):** Estimate my effective dose in mSv from THIS SCAN.
3. **Occupational Dose (doctorOccupationalMsv):** This MUST be 0 because I am the patient.
4. **Warning (Warning):** Warn if my new total dose (occupational + patient) exceeds any limits.
Respond ONLY with valid JSON in ${i.value==="en"?"English":"Arabic"}.`:je=`
As a medical radiation safety advisor, provide a recommendation for a patient scan, adhering strictly to the ALARA principle.
- Scenario Context: A doctor is the PRACTITIONER for another patient.
- Doctor's State: The doctor's annual occupational dose is ${o.value.toFixed(2)} mSv. The annual limit is ${c.value} mSv.
- Patient Details:
  - Age: ${ye}, Gender: ${f.value.gender}.
  - ${Y}
  - Pregnancy Status: ${X}
  - Patient's cumulative dose this year: ${f.value.patientCumulativeDose} mSv.
- Scan being considered for the patient: ${Je}
- Doctor's Exposure Context: ${f.value.doctorAdditionalContext||"No additional context provided."}
Tasks:
1. **Recommendation (recommendationText):** Justify if the scan is appropriate for the patient.
2. **Patient Dose (patientCalculatedMsv):** Estimate the patient's effective dose in mSv from THIS SCAN.
3. **Occupational Dose (doctorOccupationalMsv):** Estimate the doctor's occupational dose in mSv from performing this procedure.
4. **Warning (Warning):** Warn if the patient's new total dose will exceed the public limit, OR if the doctor's new occupational dose exceeds their limit.
Respond ONLY with valid JSON in ${i.value==="en"?"English":"Arabic"}.`,We={type:"OBJECT",properties:{recommendationText:{type:"STRING"},patientCalculatedMsv:{type:"NUMBER"},doctorOccupationalMsv:{type:"NUMBER"},Warning:{type:"STRING"}},required:["recommendationText","patientCalculatedMsv","doctorOccupationalMsv","Warning"]}):(je=`
As a patient advocate, explain a medical scan.
- My estimated radiation dose this year: ${f.value.patientCumulativeDose} mSv.
- My Details: Born on ${f.value.birthDate}, Gender: ${f.value.gender}, ${Y}, Pregnancy: ${X}.
- Scan being considered: ${Je}
Tasks:
1. **Information (recommendationText):** Explain the purpose of this scan in simple terms.
2. **Dose Estimation (patientCalculatedMsv):** Estimate my dose in mSv from THIS SCAN.
3. **Warning (Warning):** If my new total dose exceeds 1 mSv, provide a clear warning.
Respond ONLY with valid JSON in ${i.value==="en"?"English":"Arabic"}.`,We={type:"OBJECT",properties:{recommendationText:{type:"STRING"},patientCalculatedMsv:{type:"NUMBER"},Warning:{type:"STRING"}},required:["recommendationText","patientCalculatedMsv","Warning"]});try{const j=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:je}]}],generationConfig:{responseMimeType:"application/json",responseSchema:We}})});if(!j.ok)throw new Error(`API Error: ${j.statusText}`);const ae=await j.json();A.value=JSON.parse(ae.candidates[0].content.parts[0].text)}catch(Bt){console.error("Error getting recommendation:",Bt),N.value=i.value==="en"?`An error occurred: ${Bt.message}`:`حدث خطأ: ${Bt.message}`}finally{_.value=!1}},Ve=async()=>{if(!A.value||!f.value.patientId){alert("No recommendation data to save or patient ID is missing.");return}k.value=!0;try{const ye=f.value.scanPlace==="other"?f.value.otherScanPlaceDescription:f.value.scanPlace,Y=f.value.subScanType==="Other"?f.value.otherScanDescription:f.value.subScanType,X={patientId:f.value.patientId,scanType:f.value.scanType,scanPlace:ye,scanDetail:Y,scanDate:Oe.now(),patientDose:Number(A.value.patientCalculatedMsv)||0,doctorDose:Number(A.value.doctorOccupationalMsv)||0,reason:f.value.currentSymptoms||"As per AI recommendation",notes:A.value.recommendationText,isPersonalScan:m.value==="personal"};if(await s.createScan(X))alert(i.value==="en"?"Scan record saved successfully!":"!تم حفظ سجل الفحص بنجاح"),l&&l(),A.value=null;else throw new Error(s.error)}catch(ye){console.error("Error saving scan from recommendation:",ye),alert(i.value==="en"?`Failed to save scan: ${ye.message}`:`فشل حفظ الفحص: ${ye.message}`)}finally{k.value=!1}};return(ye,Y)=>(W(),Q("div",{class:"recommend-page",dir:y(i)==="ar"?"rtl":"ltr"},[p("main",eN,[p("section",tN,[p("h2",null,E(y(i)==="en"?"Medical Scan Recommendation":"توصية الفحص الطبي"),1),p("p",null,E(y(i)==="en"?"Get an AI-powered recommendation based on patient details and radiation safety principles.":"احصل على توصية مدعومة بالذكاء الاصطناعي بناءً على تفاصيل المريض ومبادئ السلامة من الإشعاع."),1),p("div",nN,[p("button",{class:Is({active:m.value==="personal"}),onClick:Y[0]||(Y[0]=X=>m.value="personal")},E(y(i)==="en"?"For Myself":"لنفسي"),3),x.value==="doctor"?(W(),Q("button",{key:0,class:Is({active:m.value==="general"}),onClick:Y[1]||(Y[1]=X=>m.value="general")},E(y(i)==="en"?"For Another Patient":"لمريض آخر"),3)):Ee("",!0)]),C.value?(W(),Q("div",rN,[p("span",null,E(y(i)==="en"?"Loading Patient Data...":"جاري تحميل بيانات المريض..."),1)])):Ee("",!0),f.value.patientId&&f.value.patientName?(W(),Q("div",sN,[mt(E(y(i)==="en"?"Getting recommendation for:":"الحصول على توصية لـ:")+" ",1),p("strong",null,E(f.value.patientName),1),mt(" ("+E(f.value.weight?`${f.value.weight} kg`:"Weight N/A")+") ",1)])):Ee("",!0),p("form",{onSubmit:tt(I,["prevent"]),class:"recommend-form"},[p("div",iN,[p("label",null,E(y(i)==="en"?"Weight (kg)":"الوزن (كجم)"),1),ue(p("input",{type:"number",step:"0.1","onUpdate:modelValue":Y[2]||(Y[2]=X=>f.value.weight=X),disabled:m.value==="personal",placeholder:"e.g. 70.5"},null,8,oN),[[Ae,f.value.weight]])]),p("div",aN,[p("label",null,[mt(E(y(i)==="en"?"Date of Birth":"تاريخ الميلاد")+" ",1),Y[16]||(Y[16]=p("span",{class:"required-indicator"},"*",-1))]),ue(p("input",{type:"date","onUpdate:modelValue":Y[3]||(Y[3]=X=>f.value.birthDate=X),disabled:m.value==="personal",required:""},null,8,lN),[[Ae,f.value.birthDate]])]),p("div",cN,[p("label",null,[mt(E(y(i)==="en"?"Gender":"الجنس")+" ",1),Y[17]||(Y[17]=p("span",{class:"required-indicator"},"*",-1))]),ue(p("select",{"onUpdate:modelValue":Y[4]||(Y[4]=X=>f.value.gender=X),disabled:m.value==="personal",required:""},[p("option",hN,E(y(i)==="en"?"Male":"ذكر"),1),p("option",dN,E(y(i)==="en"?"Female":"أنثى"),1)],8,uN),[[Kt,f.value.gender]])]),f.value.gender==="female"?(W(),Q("div",fN,[p("div",pN,[p("label",null,[ue(p("input",{type:"checkbox","onUpdate:modelValue":Y[5]||(Y[5]=X=>f.value.isPregnant=X),disabled:m.value==="personal"},null,8,mN),[[Kl,f.value.isPregnant]]),p("span",null,E(y(i)==="en"?"Is Pregnant?":"هل هي حامل؟"),1)])]),f.value.isPregnant?(W(),Q("div",gN,[p("label",null,[mt(E(y(i)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع")+" ",1),Y[18]||(Y[18]=p("span",{class:"required-indicator"},"*",-1))]),ue(p("input",{type:"date","onUpdate:modelValue":Y[6]||(Y[6]=X=>f.value.estimatedDueDate=X),disabled:m.value==="personal",required:""},null,8,yN),[[Ae,f.value.estimatedDueDate]])])):Ee("",!0)])):Ee("",!0),p("div",_N,[p("label",null,E(y(i)==="en"?"Relevant Medical History":"التاريخ الطبي ذو الصلة"),1),ue(p("textarea",{"onUpdate:modelValue":Y[7]||(Y[7]=X=>f.value.medicalHistory=X),rows:"3",disabled:m.value==="personal"},null,8,vN),[[Ae,f.value.medicalHistory]])]),p("div",wN,[p("label",null,E(y(i)==="en"?"Current Symptoms":"الأعراض الحالية"),1),ue(p("textarea",{"onUpdate:modelValue":Y[8]||(Y[8]=X=>f.value.currentSymptoms=X),rows:"3"},null,512),[[Ae,f.value.currentSymptoms]])]),x.value==="doctor"&&m.value==="general"?(W(),Q("div",bN,[p("h3",EN,E(y(i)==="en"?"Occupational Exposure Context":"سياق التعرض المهني"),1),p("div",TN,[p("label",null,E(y(i)==="en"?"Your positioning, shielding, etc. (Optional)":"موقعك، التدريع المستخدم، إلخ (اختياري)"),1),ue(p("textarea",{"onUpdate:modelValue":Y[9]||(Y[9]=X=>f.value.doctorAdditionalContext=X),rows:"3"},null,512),[[Ae,f.value.doctorAdditionalContext]])])])):Ee("",!0),p("h3",IN,E(y(i)==="en"?"Scan to Consider":"الفحص المقترح"),1),p("div",AN,[p("label",null,[mt(E(y(i)==="en"?"Place of Scan":"مكان الفحص")+" ",1),Y[19]||(Y[19]=p("span",{class:"required-indicator"},"*",-1))]),ue(p("select",{"onUpdate:modelValue":Y[10]||(Y[10]=X=>f.value.scanPlace=X),required:""},[p("option",SN,E(y(i)==="en"?"Select...":"اختر..."),1),(W(),Q(st,null,or(h,X=>p("option",{key:X.value,value:X.value},E(y(i)==="en"?X.en:X.ar),9,PN)),64))],512),[[Kt,f.value.scanPlace]])]),B.value?(W(),Q("div",CN,[p("label",null,[mt(E(y(i)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر")+" ",1),Y[20]||(Y[20]=p("span",{class:"required-indicator"},"*",-1))]),ue(p("input",{type:"text","onUpdate:modelValue":Y[11]||(Y[11]=X=>f.value.otherScanPlaceDescription=X),required:""},null,512),[[Ae,f.value.otherScanPlaceDescription]])])):Ee("",!0),p("div",RN,[p("div",DN,[p("label",null,[mt(E(y(i)==="en"?"Scan Category":"فئة الفحص")+" ",1),Y[21]||(Y[21]=p("span",{class:"required-indicator"},"*",-1))]),ue(p("select",{"onUpdate:modelValue":Y[12]||(Y[12]=X=>f.value.scanType=X),required:""},[p("option",kN,E(y(i)==="en"?"CT Scan":"الأشعة المقطعية"),1),p("option",ON,E(y(i)==="en"?"X-ray":"الأشعة السينية"),1)],512),[[Kt,f.value.scanType]])]),p("div",xN,[p("label",null,[mt(E(y(i)==="en"?"Scan Protocol":"بروتوكول الفحص")+" ",1),Y[22]||(Y[22]=p("span",{class:"required-indicator"},"*",-1))]),ue(p("select",{"onUpdate:modelValue":Y[13]||(Y[13]=X=>f.value.subScanType=X),required:""},[p("option",NN,E(y(i)==="en"?"Select...":"اختر..."),1),(W(!0),Q(st,null,or($.value,X=>(W(),Q("option",{key:X.value,value:X.value},E(y(i)==="en"?X.en:X.ar),9,VN))),128))],512),[[Kt,f.value.subScanType]])])]),F.value?(W(),Q("div",MN,[p("label",null,[mt(E(y(i)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص")+" ",1),Y[23]||(Y[23]=p("span",{class:"required-indicator"},"*",-1))]),ue(p("input",{type:"text","onUpdate:modelValue":Y[14]||(Y[14]=X=>f.value.otherScanDescription=X),placeholder:y(i)==="en"?"e.g., Chest X-ray":"مثال: أشعة سينية للصدر",required:""},null,8,LN),[[Ae,f.value.otherScanDescription]])])):Ee("",!0),p("button",{type:"submit",disabled:_.value,class:"action-button"},E(_.value?y(i)==="en"?"Getting Recommendations...":"جاري الحصول على التوصيات...":y(i)==="en"?"Get Recommendation":"الحصول على توصية"),9,FN)],32),N.value?(W(),Q("div",$N,E(N.value),1)):Ee("",!0),A.value?(W(),Q("div",UN,[A.value.Warning?(W(),Q("div",BN,[p("h4",null,E(y(i)==="en"?"Important Warning":"تحذير هام"),1),p("p",null,E(A.value.Warning),1)])):Ee("",!0),p("div",jN,[p("h3",null,E(y(i)==="en"?"AI Powered Recommendation":"التوصية المدعومة بالذكاء الاصطناعي"),1),p("div",HN,[A.value.patientCalculatedMsv!==null?(W(),Q("div",qN,[p("h4",null,E(T.value),1),p("p",null,[p("strong",null,E(A.value.patientCalculatedMsv)+" mSv",1)])])):Ee("",!0),b.value?(W(),Q("div",zN,[p("h4",null,E(v.value),1),p("p",null,[p("strong",null,E(A.value.doctorOccupationalMsv)+" mSv",1)])])):Ee("",!0)]),p("div",WN,[p("h4",null,E(y(i)==="en"?"Recommendation":"التوصية"),1),p("p",null,E(A.value.recommendationText),1)])]),p("div",GN,[p("button",{onClick:Ve,disabled:k.value,class:"action-button save-button"},E(k.value?y(i)==="en"?"Saving...":"...جاري الحفظ":y(i)==="en"?"Save Recommendation as Scan":"حفظ التوصية كفحص"),9,KN),p("p",YN,E(y(i)==="en"?"This will create a new scan record with today's date using the estimated doses.":"سيؤدي هذا إلى إنشاء سجل فحص جديد بتاريخ اليوم باستخدام الجرعات المقدرة."),1)])])):Ee("",!0),p("p",QN,[p("a",{href:"#",onClick:Y[15]||(Y[15]=tt(X=>y(e).push("/dashboard"),["prevent"]))},E(y(i)==="en"?"Back to Dashboard":"العودة إلى لوحة التحكم"),1)])])])],8,Zx))}},JN=wt(XN,[["__scopeId","data-v-dc55f0de"]]),ZN=["dir"],e4={class:"modal-title"},t4={class:"form-group"},n4={class:"form-group"},r4={class:"form-group"},s4={class:"form-group"},i4={value:"male"},o4={value:"female"},a4={key:0,class:"pregnancy-section"},l4={class:"form-group checkbox-group"},c4={key:0,class:"form-group"},u4={class:"form-group"},h4={class:"form-group"},d4={class:"modal-actions"},f4=["disabled"],p4={__name:"PatientFormModal",props:{show:Boolean,patient:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=$e("currentLanguage"),i=fr({id:null,name:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""});it(()=>n.show,c=>{c&&(n.patient?(i.id=n.patient.id,i.name=n.patient.name,i.gender=n.patient.gender,i.weight=n.patient.weight||null,i.isPregnant=n.patient.isPregnant||!1,i.birthDate=n.patient.birthDate?.toDate?n.patient.birthDate.toDate().toISOString().split("T")[0]:"",i.estimatedDueDate=n.patient.estimatedDueDate?.toDate?n.patient.estimatedDueDate.toDate().toISOString().split("T")[0]:"",i.medicalHistory=Array.isArray(n.patient.medicalHistory)?n.patient.medicalHistory.join(", "):"",i.allergies=Array.isArray(n.patient.allergies)?n.patient.allergies.join(", "):""):Object.assign(i,{id:null,name:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",medicalHistory:"",allergies:""}))},{immediate:!0}),it(()=>i.isPregnant,c=>{c||(i.estimatedDueDate="")});const o=()=>{if(!i.name||!i.birthDate){alert("Name and Date of Birth are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Please provide the estimated due date for the pregnancy.");return}(i.gender==="male"||!i.isPregnant)&&(i.isPregnant=!1,i.estimatedDueDate=null);const c={...i,weight:Number(i.weight)||null,birthDate:new Date(i.birthDate),estimatedDueDate:i.estimatedDueDate?new Date(i.estimatedDueDate):null,medicalHistory:i.medicalHistory.split(",").map(l=>l.trim()).filter(Boolean),allergies:i.allergies.split(",").map(l=>l.trim()).filter(Boolean)};r("save",c)};return(c,l)=>(W(),In(mr,{name:"modal-fade"},{default:bn(()=>[t.show?(W(),Q("div",{key:0,class:"modal-overlay",onClick:l[10]||(l[10]=tt(u=>c.$emit("close"),["self"]))},[p("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[p("button",{onClick:l[0]||(l[0]=u=>c.$emit("close")),class:"close-button"},"×"),p("h3",e4,E(t.patient?"Edit Patient":"Add New Patient"),1),p("form",{onSubmit:tt(o,["prevent"]),class:"patient-form"},[p("div",t4,[p("label",null,E(y(s)==="en"?"Name":"الاسم"),1),ue(p("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=u=>i.name=u),required:""},null,512),[[Ae,i.name]])]),p("div",n4,[p("label",null,E(y(s)==="en"?"Weight (kg)":"الوزن (كجم)"),1),ue(p("input",{type:"number",step:"0.1","onUpdate:modelValue":l[2]||(l[2]=u=>i.weight=u),placeholder:"e.g., 70.5"},null,512),[[Ae,i.weight]])]),p("div",r4,[p("label",null,E(y(s)==="en"?"Date of Birth":"تاريخ الميلاد"),1),ue(p("input",{type:"date","onUpdate:modelValue":l[3]||(l[3]=u=>i.birthDate=u),required:""},null,512),[[Ae,i.birthDate]])]),p("div",s4,[p("label",null,E(y(s)==="en"?"Gender":"الجنس"),1),ue(p("select",{"onUpdate:modelValue":l[4]||(l[4]=u=>i.gender=u)},[p("option",i4,E(y(s)==="en"?"Male":"ذكر"),1),p("option",o4,E(y(s)==="en"?"Female":"أنثى"),1)],512),[[Kt,i.gender]])]),i.gender==="female"?(W(),Q("div",a4,[p("div",l4,[p("label",null,[ue(p("input",{type:"checkbox","onUpdate:modelValue":l[5]||(l[5]=u=>i.isPregnant=u)},null,512),[[Kl,i.isPregnant]]),p("span",null,E(y(s)==="en"?"Currently Pregnant?":"هل هي حامل حاليًا؟"),1)])]),i.isPregnant?(W(),Q("div",c4,[p("label",null,E(y(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),ue(p("input",{type:"date","onUpdate:modelValue":l[6]||(l[6]=u=>i.estimatedDueDate=u),required:""},null,512),[[Ae,i.estimatedDueDate]])])):Ee("",!0)])):Ee("",!0),p("div",u4,[p("label",null,E(y(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي"),1),ue(p("textarea",{"onUpdate:modelValue":l[7]||(l[7]=u=>i.medicalHistory=u),rows:"3"},null,512),[[Ae,i.medicalHistory]])]),p("div",h4,[p("label",null,E(y(s)==="en"?"Allergies (comma-separated)":"الحساسية"),1),ue(p("textarea",{"onUpdate:modelValue":l[8]||(l[8]=u=>i.allergies=u),rows:"3"},null,512),[[Ae,i.allergies]])]),p("div",d4,[p("button",{type:"submit",class:"action-button",disabled:t.isSaving},E(t.isSaving?"Saving...":"Save"),9,f4),p("button",{type:"button",onClick:l[9]||(l[9]=u=>c.$emit("close")),class:"action-button secondary"}," Cancel ")])],32)],8,ZN)])):Ee("",!0)]),_:1}))}},m4=wt(p4,[["__scopeId","data-v-8459b92e"]]),g4=["dir"],y4={key:0,class:"patient-context-display"},_4={key:0,class:"form-row pregnancy-section"},v4={class:"form-group checkbox-group"},w4={key:0,class:"form-group"},b4={class:"form-group"},E4={disabled:"",value:""},T4=["value"],I4={key:1,class:"form-group"},A4={class:"form-row"},S4={class:"form-group"},P4={value:"X-ray"},C4={value:"CT"},R4={class:"form-group"},D4={disabled:"",value:""},k4=["value"],O4={key:2,class:"form-group"},x4=["placeholder"],N4={class:"form-group"},V4={class:"form-row"},M4={class:"form-group"},L4=["placeholder"],F4={class:"form-group"},$4=["placeholder"],U4={class:"form-group"},B4={class:"form-group"},j4={class:"form-group"},H4={class:"modal-actions"},q4=["disabled"],z4={__name:"ScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean,patient:{type:Object,default:null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=$e("currentLanguage"),i={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Swallow",en:"Barium Swallow",ar:"بلع الباريوم"},{value:"Barium Meal",en:"Barium Meal",ar:"وجبة الباريوم"},{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},o=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],c=()=>new Date().toISOString().split("T")[0],l=fr({id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",scanDate:c(),dose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""}),u=Pe(()=>i[l.scanType]||[]),h=Pe(()=>l.subScanType==="Other"),m=Pe(()=>l.scanPlace==="other");it(()=>n.show,k=>{if(k&&(Object.assign(l,{id:null,isPregnant:!1,pregnancyMonth:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",scanDate:c(),dose:null,doctorDose:null,reason:"",notes:"",doctorAdditionalContext:""}),n.scan)){l.id=n.scan.id,l.isPregnant=n.scan.isPregnant||!1,l.pregnancyMonth=n.scan.pregnancyMonth||null,l.scanType=n.scan.scanType;const C=n.scan.scanDate?.toDate?n.scan.scanDate.toDate():new Date(n.scan.scanDate);l.scanDate=isNaN(C)?c():C.toISOString().split("T")[0],l.dose=n.scan.patientDose,l.doctorDose=n.scan.doctorDose,l.reason=n.scan.reason,l.notes=n.scan.notes,l.doctorAdditionalContext=n.scan.doctorAdditionalContext;const A=n.scan.scanDetail;(u.value||[]).some($=>$.value===A)?l.subScanType=A:A&&(l.subScanType="Other",l.otherScanDescription=A);const x=n.scan.scanPlace;o.some($=>$.value===x)?l.scanPlace=x:x&&(l.scanPlace="other",l.otherScanPlaceDescription=x)}}),it(()=>l.scanType,()=>{l.subScanType="",l.otherScanDescription=""});const f=async k=>{if(!n.patient)return alert("Cannot estimate dose without a patient context."),!1;const C=n.patient.birthDate?new Date().getFullYear()-new Date(n.patient.birthDate.toDate()).getFullYear():"N/A",A=n.patient.weight||70,N=u.value.find(T=>T.value===l.subScanType);let x="";h.value?x=l.otherScanDescription:N&&(x=s.value==="en"?N.en:N.ar);const M=o.find(T=>T.value===l.scanPlace);let $="";m.value?$=l.otherScanPlaceDescription:M&&($=s.value==="en"?M.en:M.ar);let F="";k==="patient"?F=`Estimate the typical effective dose (in mSv) for a patient undergoing a ${l.scanType} scan of the ${$} with the specific protocol: "${x}". Patient Age: ${C}. Patient Weight: ${A} kg. Reason for scan: "${l.reason||"Not provided"}". Respond ONLY with a single number.`:F=`Estimate the typical occupational dose (in mSv) for a doctor during a patient's ${l.scanType} scan of the ${$} with protocol "${x}". Doctor's additional context: "${l.doctorAdditionalContext||"None"}". Respond ONLY with a single number.`;let B={};k==="patient"?B=l.scanType==="CT"?{min:.5,max:40}:{min:.001,max:10}:B={min:0,max:2};try{const S=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:F}]}],generationConfig:{responseMimeType:"text/plain"}})});if(!S.ok)throw new Error(`API Error: ${S.statusText}`);const R=(await S.json()).candidates?.[0]?.content?.parts?.[0]?.text||"",I=parseFloat(R.match(/[\d.]+/));if(isNaN(I)||I<B.min||I>B.max)throw new Error("AI returned an invalid or out-of-range value.");return k==="patient"?l.dose=I:l.doctorDose=I,!0}catch(T){return console.error(`Dose estimation failed for ${k}:`,T),alert(s.value==="en"?`AI estimation for the ${k} failed. Please enter it manually.`:`فشل تقدير الذكاء الاصطناعي لـ ${k==="patient"?"المريض":"الطبيب"}. يرجى إدخاله يدويًا.`),!1}},_=async()=>{if(!l.scanDate||!l.scanPlace||m.value&&!l.otherScanPlaceDescription||!l.subScanType||h.value&&!l.otherScanDescription){alert("Please fill all required scan details.");return}if((l.dose===null||l.dose==="")&&!await f("patient")||(l.doctorDose===null||l.doctorDose==="")&&!await f("doctor"))return;const k={id:l.id,isPregnant:l.isPregnant,pregnancyMonth:l.pregnancyMonth,scanType:l.scanType,scanDetail:l.subScanType==="Other"?l.otherScanDescription:l.subScanType,scanPlace:l.scanPlace==="other"?l.otherScanPlaceDescription:l.scanPlace,scanDate:l.scanDate,patientDose:l.dose,doctorDose:l.doctorDose,reason:l.reason,notes:l.notes,doctorAdditionalContext:l.doctorAdditionalContext};r("save",k)};return(k,C)=>(W(),In(mr,{name:"modal-fade"},{default:bn(()=>[t.show?(W(),Q("div",{key:0,class:"modal-overlay",onClick:C[15]||(C[15]=tt(A=>k.$emit("close"),["self"]))},[p("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[p("button",{class:"close-modal-button",onClick:C[0]||(C[0]=A=>k.$emit("close"))},"×"),p("h3",null,E(t.scan?y(s)==="en"?"Edit Scan Record":"تعديل سجل الفحص":y(s)==="en"?"Add New Scan Record":"إضافة سجل فحص جديد"),1),t.patient?(W(),Q("div",y4,[mt(E(y(s)==="en"?"For Patient":"للمريض")+": ",1),p("strong",null,E(t.patient.name)+" ("+E(t.patient.weight?`${t.patient.weight} kg`:"Weight N/A")+")",1)])):Ee("",!0),p("form",{onSubmit:tt(_,["prevent"]),class:"scan-form"},[t.patient?.gender==="female"?(W(),Q("div",_4,[p("div",v4,[p("label",null,[ue(p("input",{type:"checkbox","onUpdate:modelValue":C[1]||(C[1]=A=>l.isPregnant=A)},null,512),[[Kl,l.isPregnant]]),p("span",null,E(y(s)==="en"?"Is Pregnant?":"هل المريضة حامل؟"),1)])]),l.isPregnant?(W(),Q("div",w4,[p("label",null,E(y(s)==="en"?"Month of Pregnancy":"شهر الحمل"),1),ue(p("input",{type:"number","onUpdate:modelValue":C[2]||(C[2]=A=>l.pregnancyMonth=A),min:"1",max:"9",placeholder:"1-9"},null,512),[[Ae,l.pregnancyMonth]])])):Ee("",!0)])):Ee("",!0),p("div",b4,[p("label",null,E(y(s)==="en"?"Place of Scan":"مكان الفحص"),1),ue(p("select",{"onUpdate:modelValue":C[3]||(C[3]=A=>l.scanPlace=A),required:""},[p("option",E4,E(y(s)==="en"?"Select...":"اختر..."),1),(W(),Q(st,null,or(o,A=>p("option",{key:A.value,value:A.value},E(y(s)==="en"?A.en:A.ar),9,T4)),64))],512),[[Kt,l.scanPlace]])]),m.value?(W(),Q("div",I4,[p("label",null,E(y(s)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر"),1),ue(p("input",{type:"text","onUpdate:modelValue":C[4]||(C[4]=A=>l.otherScanPlaceDescription=A),required:""},null,512),[[Ae,l.otherScanPlaceDescription]])])):Ee("",!0),p("div",A4,[p("div",S4,[p("label",null,E(y(s)==="en"?"Scan Category":"فئة الفحص"),1),ue(p("select",{"onUpdate:modelValue":C[5]||(C[5]=A=>l.scanType=A),required:""},[p("option",P4,E(y(s)==="en"?"X-ray":"أشعة سينية"),1),p("option",C4,E(y(s)==="en"?"CT":"أشعة مقطعية"),1)],512),[[Kt,l.scanType]])]),p("div",R4,[p("label",null,E(y(s)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),ue(p("select",{"onUpdate:modelValue":C[6]||(C[6]=A=>l.subScanType=A),required:""},[p("option",D4,E(y(s)==="en"?"Select...":"اختر..."),1),(W(!0),Q(st,null,or(u.value,A=>(W(),Q("option",{key:A.value,value:A.value},E(y(s)==="en"?A.en:A.ar),9,k4))),128))],512),[[Kt,l.subScanType]])])]),h.value?(W(),Q("div",O4,[p("label",null,E(y(s)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص"),1),ue(p("input",{type:"text","onUpdate:modelValue":C[7]||(C[7]=A=>l.otherScanDescription=A),placeholder:y(s)==="en"?"e.g., Chest X-ray":"مثال: أشعة سينية للصدر",required:""},null,8,x4),[[Ae,l.otherScanDescription]])])):Ee("",!0),p("div",N4,[p("label",null,E(y(s)==="en"?"Scan Date":"تاريخ الفحص"),1),ue(p("input",{type:"date","onUpdate:modelValue":C[8]||(C[8]=A=>l.scanDate=A),required:""},null,512),[[Ae,l.scanDate]])]),p("div",V4,[p("div",M4,[p("label",null,E(y(s)==="en"?"Patient's Dose (mSv)":"جرعة المريض (mSv)"),1),ue(p("input",{type:"number",step:"0.01","onUpdate:modelValue":C[9]||(C[9]=A=>l.dose=A),placeholder:y(s)==="en"?"Leave blank for AI estimate":"اتركه فارغًا لتقدير الذكاء الاصطناعي"},null,8,L4),[[Ae,l.dose]])]),p("div",F4,[p("label",null,E(y(s)==="en"?"Doctor's Dose (mSv)":"جرعة الطبيب (mSv)"),1),ue(p("input",{type:"number",step:"0.01","onUpdate:modelValue":C[10]||(C[10]=A=>l.doctorDose=A),placeholder:y(s)==="en"?"Leave blank for AI estimate":"اتركه فارغًا لتقدير الذكاء الاصطناعي"},null,8,$4),[[Ae,l.doctorDose]])])]),p("div",U4,[p("label",null,E(y(s)==="en"?"Reason for Scan":"أسباب الفحص"),1),ue(p("textarea",{"onUpdate:modelValue":C[11]||(C[11]=A=>l.reason=A),rows:"2"},null,512),[[Ae,l.reason]])]),p("div",B4,[p("label",null,E(y(s)==="en"?"Additional Notes":"ملاحظات إضافية"),1),ue(p("textarea",{"onUpdate:modelValue":C[12]||(C[12]=A=>l.notes=A),rows:"3"},null,512),[[Ae,l.notes]])]),p("div",j4,[p("label",null,E(y(s)==="en"?"Details affecting your exposure (optional)":"تفاصيل إضافية على تعرضك (اختياري)"),1),ue(p("textarea",{"onUpdate:modelValue":C[13]||(C[13]=A=>l.doctorAdditionalContext=A),rows:"2"},null,512),[[Ae,l.doctorAdditionalContext]])]),p("div",H4,[p("button",{type:"submit",class:"action-button",disabled:t.isSaving},E(t.isSaving?y(s)==="en"?"Saving...":"جار الحفظ...":y(s)==="en"?"Save":"حفظ"),9,q4),p("button",{type:"button",onClick:C[14]||(C[14]=A=>k.$emit("close")),class:"action-button secondary"},E(y(s)==="en"?"Cancel":"إلغاء"),1)])],32)],8,g4)])):Ee("",!0)]),_:1}))}},W4=wt(z4,[["__scopeId","data-v-5c4c6f05"]]),G4={class:"modal-content delete-confirm-modal"},K4={class:"modal-title"},Y4={class:"warning-text"},Q4={class:"modal-actions"},X4={__name:"ConfirmDeleteModal",props:{show:Boolean,title:String,message:String},emits:["close","confirm"],setup(t){const e=$e("triggerMsvRecalculation"),n=$e("currentLanguage");return(r,s)=>(W(),In(mr,{name:"modal-fade"},{default:bn(()=>[t.show?(W(),Q("div",{key:0,class:"modal-overlay",onClick:s[2]||(s[2]=tt(i=>r.$emit("close"),["self"]))},[p("div",G4,[p("h3",K4,E(t.title),1),p("p",null,E(t.message),1),p("p",Y4,E(y(n)==="en"?"This action cannot be undone.":"لا يمكن التراجع عن هذا الإجراء."),1),p("div",Q4,[p("button",{onClick:s[0]||(s[0]=i=>r.$emit("close")),class:"action-button secondary"},E(y(n)==="en"?"Cancel":"إلغاء"),1),p("button",{onClick:s[1]||(s[1]=i=>{r.$emit("confirm"),y(e)()}),class:"action-button delete-button-confirm"},E(y(n)==="en"?"Delete":"حذف"),1)])])])):Ee("",!0)]),_:1}))}},nf=wt(X4,[["__scopeId","data-v-8046b31b"]]),J4=["dir"],Z4={key:0},eV={class:"patient-details-grid"},tV={class:"detail-item"},nV={class:"detail-label"},rV={class:"detail-value"},sV={class:"detail-item"},iV={class:"detail-label"},oV={class:"detail-value"},aV={class:"scans-list-container"},lV={key:0,class:"loading-message"},cV={key:1,class:"no-scans-message"},uV={key:2,class:"scans-list"},hV={class:"scan-info"},dV={class:"scan-type-place"},fV={class:"scan-type"},pV={class:"scan-place"},mV={class:"scan-date"},gV={class:"scan-dose"},yV={class:"scan-actions"},_V=["onClick"],vV=["onClick"],wV={__name:"PatientDetailsModal",props:{show:Boolean,patient:Object},emits:["close"],setup(t,{emit:e}){const n=t,r=Pi(),s=$e("currentLanguage"),i=$e("triggerMsvRecalculation"),o=Ce([]),c=Ce(null),l=Ce(null),u=Ce(!1),h=Ce(!1),m=Pe(()=>n.patient?.id),f=async()=>{if(!m.value){o.value=[];return}const M=await r.fetchScansForPatient(m.value);o.value=M||[]};it(()=>n.show,M=>{M&&m.value&&f()});const _=async M=>{if(!n.patient?.id){alert("Critical error: Patient context was lost.");return}const $={...M,patientId:n.patient.id,scanDate:Oe.fromDate(new Date(M.scanDate)),patientDose:Number(M.patientDose)||0,doctorDose:Number(M.doctorDose)||0};try{($.id?await r.updateScan($.id,$):await r.createScan($))?(u.value=!1,await f(),i&&i()):alert(`Error saving patient scan: ${r.error}`)}catch(F){alert(`A critical error occurred: ${F.message}`)}},k=async()=>{if(!l.value?.id)return;await r.deleteScan(l.value.id)?(h.value=!1,await f(),i&&i()):alert(`Failed to delete scan: ${r.error}`)};function C(){c.value=null,u.value=!0}function A(M){c.value=M,u.value=!0}function N(M){l.value=M,h.value=!0}const x=M=>!M||!M.toDate?"N/A":M.toDate().toLocaleDateString();return(M,$)=>(W(),Q(st,null,[Se(mr,{name:"modal-fade"},{default:bn(()=>[t.show?(W(),Q("div",{key:0,class:"modal-overlay",onClick:$[1]||($[1]=tt(F=>M.$emit("close"),["self"]))},[p("div",{class:"modal-content-details",dir:y(s)==="ar"?"rtl":"ltr"},[p("button",{class:"close-modal-button",onClick:$[0]||($[0]=F=>M.$emit("close"))},"×"),t.patient?(W(),Q("div",Z4,[p("h3",null,[mt(E(y(s)==="en"?"Scan History for":"سجل الفحوصات لـ")+" ",1),p("strong",null,E(t.patient.name),1)]),p("p",null,E(y(s)==="en"?"Review past scans or add a new record.":"مراجعة الفحوصات السابقة أو إضافة سجل جديد."),1),p("div",eV,[p("div",tV,[p("span",nV,E(y(s)==="en"?"Gender":"الجنس"),1),p("span",rV,E(t.patient.gender||"N/A"),1)]),p("div",sV,[p("span",iV,E(y(s)==="en"?"Weight":"الوزن"),1),p("span",oV,E(t.patient.weight?`${t.patient.weight} kg`:"N/A"),1)])]),p("button",{onClick:C,class:"add-scan-button"},[Se(y(Ft),{icon:"plus"}),mt(" "+E(y(s)==="en"?"Add New Scan":"إضافة فحص جديد"),1)]),p("div",aV,[y(r).loading?(W(),Q("div",lV,[Se(y(Ft),{icon:"spinner",spin:""}),mt(" "+E(y(s)==="en"?"Loading scans...":"جاري تحميل الفحوصات..."),1)])):o.value.length===0?(W(),Q("div",cV,E(y(s)==="en"?"No scans recorded for this patient yet.":"لا توجد فحوصات مسجلة لهذا المريض بعد."),1)):(W(),Q("ul",uV,[(W(!0),Q(st,null,or(o.value,F=>(W(),Q("li",{key:F.id,class:"scan-item"},[p("div",hV,[p("span",dV,[p("span",fV,E(F.scanType),1),p("span",pV,"of the "+E(F.scanPlace||"N/A"),1)]),p("span",mV,E(x(F.scanDate)),1),p("span",gV,E(y(s)==="en"?"Dose:":"الجرعة:")+" "+E(F.patientDose)+" mSv",1)]),p("div",yV,[p("button",{onClick:B=>A(F),class:"action-button-icon edit-button"},[Se(y(Ft),{icon:"edit"})],8,_V),p("button",{onClick:B=>N(F),class:"action-button-icon delete-button"},[Se(y(Ft),{icon:"trash-alt"})],8,vV)])]))),128))]))])])):Ee("",!0)],8,J4)])):Ee("",!0)]),_:1}),Se(W4,{show:u.value,patient:t.patient,scan:c.value,"is-saving":y(r).loading,onClose:$[2]||($[2]=F=>u.value=!1),onSave:_},null,8,["show","patient","scan","is-saving"]),Se(nf,{show:h.value,title:y(s)==="en"?"Delete Scan":"حذف الفحص",message:`${y(s)==="en"?"Are you sure you want to delete this scan from":"هل أنت متأكد من حذف هذا الفحص بتاريخ"} ${x(l.value?.scanDate)}?`,onClose:$[3]||($[3]=F=>h.value=!1),onConfirm:k},null,8,["show","title","message"])],64))}},bV=wt(wV,[["__scopeId","data-v-787ec3fa"]]),EV={class:"patient-list-page"},TV={class:"patient-list-main-content"},IV={class:"patient-list-card"},AV=["dir"],SV={key:0,class:"loading-message"},PV={key:1,class:"no-patients-message"},CV={key:2,class:"patient-table-container"},RV={class:"patient-table"},DV={class:"details-column"},kV={class:"details-column"},OV={class:"details-column"},xV={class:"details-column"},NV={class:"action-buttons-wrapper"},VV=["onClick","title"],MV=["onClick","title"],LV=["onClick","title"],FV=["onClick","title"],$V={class:"switch-link-container"},UV={__name:"PatientsView",setup(t){const e=pn(),n=Pi(),r=Ns(),s=$e("currentLanguage"),i=Ce([]),o=Ce(null),c=Ce(null),l=Ce(null),u=Ce(!1),h=Ce(!1),m=Ce(!1),f=Pe(()=>e.user?.uid),_=async()=>{const B=await n.fetchPatientsForDoctor();B&&(i.value=B)},k=B=>{if(!B?.toDate)return"N/A";const T=B.toDate(),v=new Date;let b=v.getFullYear()-T.getFullYear(),S=v.getMonth()-T.getMonth();if(v.getDate()<T.getDate()&&S--,S<0&&(b--,S+=12),b>=2)return`${b} ${s.value==="ar"?"سنوات":"years"}`;{const O=s.value==="ar"?"سنة":"year",R=s.value==="ar"?"أشهر":"months",I=s.value==="ar"?"شهر":"month";return b>0?`${b} ${O}, ${S} ${S===1?I:R}`:S>0?`${S} ${S===1?I:R}`:s.value==="ar"?"أقل من شهر":"Less than a month"}},C=async B=>{const{id:T,...v}=B;let b=!1;T?b=await n.updatePatientProfile(T,v):b=!!await n.addNewPatient(v),b?(u.value=!1,await _()):alert(`Failed to save patient. Error: ${n.error}`)},A=async()=>{if(!o.value?.id)return;await n.deletePatientProfile(o.value.id)?(m.value=!1,await _()):alert(`Failed to delete patient. Error: ${n.error}`)};function N(){l.value=null,u.value=!0}function x(B){l.value=B,u.value=!0}function M(B){c.value=B,h.value=!0}function $(B){o.value=B,m.value=!0}function F(B){B&&r.push({name:"recommend",query:{patientId:B}})}return it(f,B=>{B&&_()},{immediate:!0}),(B,T)=>(W(),Q("div",EV,[p("div",TV,[p("div",IV,[p("h2",null,E(y(s)==="en"?"Manage Patients":"إدارة المرضى"),1),p("p",null,E(y(s)==="en"?"Add new patients or view existing records":"أضف مرضى جدد أو اطلع على السجلات الحالية."),1),p("button",{onClick:N,class:"add-new-patient-button"},E(y(s)==="en"?"Add New Patient":"إضافة مريض جديد"),1),p("div",{class:"patient-list-section",dir:y(s)==="ar"?"rtl":"ltr"},[p("h3",null,E(y(s)==="en"?"Existing Patients":"المرضى الحاليون"),1),y(n).loading?(W(),Q("div",SV,[Se(y(Ft),{icon:"spinner",spin:""}),mt(" "+E(y(s)==="en"?"Loading patients...":"جاري تحميل المرضى..."),1)])):!i.value||i.value.length===0?(W(),Q("div",PV,E(y(s)==="en"?"No patients added yet.":"لم يتم إضافة أي مرضى بعد."),1)):(W(),Q("div",CV,[p("table",RV,[p("thead",null,[p("tr",null,[p("th",null,E(y(s)==="en"?"Name":"الاسم"),1),p("th",null,E(y(s)==="en"?"Age":"العمر"),1),p("th",null,E(y(s)==="en"?"Weight":"الوزن"),1),p("th",null,E(y(s)==="en"?"Gender":"الجنس"),1),p("th",DV,E(y(s)==="en"?"Medical History":"التاريخ الطبي"),1),p("th",kV,E(y(s)==="en"?"Allergies":"الحساسية"),1),p("th",null,E(y(s)==="en"?"Actions":"الإجراءات"),1)])]),p("tbody",null,[(W(!0),Q(st,null,or(i.value,v=>(W(),Q("tr",{key:v.id},[p("td",null,E(v.name??"N/A"),1),p("td",null,E(k(v.birthDate)),1),p("td",null,E(v.weight?`${v.weight} kg`:"N/A"),1),p("td",null,E(y(s)==="en"?(v.gender?.charAt(0).toUpperCase()??"")+(v.gender?.slice(1)??"N/A"):v.gender==="male"?"ذكر":"أنثى"),1),p("td",OV,E(v.medicalHistory?.join(", ")||(y(s)==="en"?"None":"لا يوجد")),1),p("td",xV,E(v.allergies?.join(", ")||(y(s)==="en"?"None":"لا يوجد")),1),p("td",null,[p("div",NV,[p("button",{onClick:b=>M(v),class:"action-button-sm view-button",title:y(s)==="en"?"View Scan History":"عرض سجل الفحوصات"},[Se(y(Ft),{icon:"eye"})],8,VV),p("button",{onClick:b=>x(v),class:"action-button-sm edit-button",title:y(s)==="en"?"Edit Patient Details":"تعديل تفاصيل المريض"},[Se(y(Ft),{icon:"edit"})],8,MV),p("button",{onClick:b=>$(v),class:"action-button-sm delete-button",title:y(s)==="en"?"Delete Patient":"حذف المريض"},[Se(y(Ft),{icon:"trash-alt"})],8,LV),p("button",{onClick:b=>F(v.id),class:"action-button-sm recommend-button",title:y(s)==="en"?"Get Recommendation":"الحصول على توصية"},[Se(y(Ft),{icon:"file-medical"})],8,FV)])])]))),128))])])]))],8,AV),p("div",$V,[p("a",{href:"#",onClick:T[0]||(T[0]=tt(v=>y(r).push("/dashboard"),["prevent"]))},E(y(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])])]),Se(m4,{show:u.value,patient:l.value,"is-saving":y(n).loading,onClose:T[1]||(T[1]=v=>u.value=!1),onSave:C},null,8,["show","patient","is-saving"]),Se(bV,{show:h.value,patient:c.value,onClose:T[2]||(T[2]=v=>h.value=!1)},null,8,["show","patient"]),Se(nf,{show:m.value,title:y(s)==="en"?"Delete Patient":"حذف المريض",message:`${y(s)==="en"?"Are you sure you want to delete":"هل أنت متأكد من الحذف"} ${o.value?.name??"this patient"}?`,onClose:T[3]||(T[3]=v=>m.value=!1),onConfirm:A},null,8,["show","title","message"])]))}},BV=wt(UV,[["__scopeId","data-v-3f129077"]]),jV={key:0,class:"loading-container"},HV={key:0,class:"role-modal-backdrop"},qV={class:"role-modal"},zV={class:"form-group"},WV={value:"",disabled:""},GV={value:"doctor"},KV={value:"patient"},YV={class:"form-group"},QV={class:"form-group"},XV={value:"",disabled:""},JV={value:"male"},ZV={value:"female"},eM={class:"form-group"},tM=["placeholder"],nM={class:"form-group"},rM=["placeholder"],sM=["disabled"],iM={key:1},oM={class:"dashboard-main-content"},aM={class:"dashboard-card"},lM=["dir"],cM=["dir"],uM={class:"dashboard-features"},hM=["dir"],dM=["dir"],fM=["dir"],pM=["dir"],mM=["dir"],gM=["dir"],yM={__name:"DashboardView",setup(t){const e=pn(),n=Pi(),r=Ns(),s=Ce({role:null,birthDate:"",gender:"",allergies:"",medicalHistory:""}),i=Pe(()=>!e.isAuthReady||e.isProfileLoading),o=Pe(()=>e.user?!e.isProfileComplete:!1),c=Pe(()=>e.role),l=$e("currentLanguage"),u=async()=>{const{uid:m,email:f,displayName:_}=e.user,{role:k,birthDate:C,gender:A,allergies:N,medicalHistory:x}=s.value;if(!k||!C||!A){alert("Please fill out all required fields: Role, Birth Date, and Gender.");return}const M={email:f,displayName:_,role:k,birthDate:Oe.fromDate(new Date(C)),gender:A,allergies:N.split(",").map(F=>F.trim()).filter(Boolean),medicalHistory:x.split(",").map(F=>F.trim()).filter(Boolean)};await n.setUserProfile(m,M)?e.setUserProfile(M):alert(`Failed to save profile. Error: ${n.error}`)},h=async()=>{await e.logout(),r.push("/signin")};return(m,f)=>(W(),Q("div",null,[i.value?(W(),Q("div",jV,[p("p",null,E(y(l)==="en"?"Verifying session...":"جار التحقق من الجلسة..."),1),Se(y(Ft),{icon:"spinner",spin:"",size:"2x"})])):(W(),Q(st,{key:1},[o.value?(W(),Q("div",HV,[p("div",qV,[p("h2",null,E(y(l)==="en"?"Complete Your Profile":"أكمل ملفك الشخصي"),1),p("div",zV,[p("label",null,E(y(l)==="en"?"I am a:":"أنا:"),1),ue(p("select",{"onUpdate:modelValue":f[0]||(f[0]=_=>s.value.role=_)},[p("option",WV,E(y(l)==="en"?"-- Select Role --":"-- اختر دورك --"),1),p("option",GV,E(y(l)==="en"?"Doctor":"طبيب"),1),p("option",KV,E(y(l)==="en"?"Patient":"مريض"),1)],512),[[Kt,s.value.role]])]),p("div",YV,[p("label",null,E(y(l)==="en"?"Birth Date":"تاريخ الميلاد"),1),ue(p("input",{type:"date","onUpdate:modelValue":f[1]||(f[1]=_=>s.value.birthDate=_)},null,512),[[Ae,s.value.birthDate]])]),p("div",QV,[p("label",null,E(y(l)==="en"?"Gender":"الجنس"),1),ue(p("select",{"onUpdate:modelValue":f[2]||(f[2]=_=>s.value.gender=_)},[p("option",XV,E(y(l)==="en"?"-- Select Gender --":"-- اختر الجنس --"),1),p("option",JV,E(y(l)==="en"?"Male":"ذكر"),1),p("option",ZV,E(y(l)==="en"?"Female":"أنثى"),1)],512),[[Kt,s.value.gender]])]),p("div",eM,[p("label",null,E(y(l)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),ue(p("textarea",{"onUpdate:modelValue":f[3]||(f[3]=_=>s.value.allergies=_),rows:"2",placeholder:y(l)==="en"?"e.g., Iodine-Based Dyes":"مثال: صبغات اليود"},null,8,tM),[[Ae,s.value.allergies]])]),p("div",nM,[p("label",null,E(y(l)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),ue(p("textarea",{"onUpdate:modelValue":f[4]||(f[4]=_=>s.value.medicalHistory=_),rows:"2",placeholder:y(l)==="en"?"e.g., Diabetes, Asthma":"مثال: مرض السكري, الربو"},null,8,rM),[[Ae,s.value.medicalHistory]])]),p("button",{class:"action-button",onClick:u,disabled:y(n).loading},[y(n).loading?(W(),In(y(Ft),{key:0,icon:"spinner",spin:""})):(W(),Q("span",iM,E(y(l)==="en"?"Save & Continue":"حفظ ومتابعة"),1))],8,sM)])])):Ee("",!0),p("div",{class:Is(["dashboard-page dashboard-blur-area",{"is-blurred":o.value}])},[p("main",oM,[p("section",aM,[p("h2",{dir:y(l)==="ar"?"rtl":"ltr"},E(y(l)==="en"?"Welcome to mSv Dose Tracker":"مرحبًا بك في متتبع جرعات الأشعة السينية"),9,lM),p("p",{dir:y(l)==="ar"?"rtl":"ltr"},E(y(l)==="en"?"Your comprehensive tool for managing radiation exposure.":"أداتك الشاملة لإدارة التعرض للإشعاع."),9,cM),p("div",uM,[p("div",{class:"feature-item",onClick:f[5]||(f[5]=_=>y(r).push("/recommend"))},[f[8]||(f[8]=p("i",{class:"fas fa-file-medical"},null,-1)),p("h3",{dir:y(l)==="ar"?"rtl":"ltr"},E(y(l)==="en"?"Get Scan Recommendation":"الحصول على توصية"),9,hM),p("p",{dir:y(l)==="ar"?"rtl":"ltr"},E(y(l)==="en"?"Use AI to get recommendations on the necessity of radiological scans.":"استخدم الذكاء الاصطناعي للحصول على توصيات حول ضرورة الفحوصات الإشعاعية."),9,dM)]),c.value==="doctor"?(W(),Q("div",{key:0,class:"feature-item",onClick:f[6]||(f[6]=_=>y(r).push("/patients"))},[f[9]||(f[9]=p("i",{class:"fas fa-users"},null,-1)),p("h3",{dir:y(l)==="ar"?"rtl":"ltr"},E(y(l)==="en"?"Manage Patients":"إدارة المرضى"),9,fM),p("p",{dir:y(l)==="ar"?"rtl":"ltr"},E(y(l)==="en"?"View, add, and manage your patient records and their scan histories.":"عرض وإضافة وإدارة سجلات مرضاك وتاريخ فحوصاتهم."),9,pM)])):Ee("",!0),p("div",{class:"feature-item",onClick:f[7]||(f[7]=_=>y(r).push("/profile"))},[f[10]||(f[10]=p("i",{class:"fas fa-user"},null,-1)),p("h3",{dir:y(l)==="ar"?"rtl":"ltr"},E(y(l)==="en"?"View Profile":"عرض الملف الشخصي"),9,mM),p("p",{dir:y(l)==="ar"?"rtl":"ltr"},E(y(l)==="en"?"Review your personal details and dose history.":"راجع معلوماتك الشخصية وسجل جرعاتك."),9,gM)])]),p("button",{onClick:h,class:"action-button secondary logout-button"},E(y(l)==="en"?"Logout":"تسجيل الخروج"),1)])])],2)],64))]))}},_M=wt(yM,[["__scopeId","data-v-2c9adee3"]]),vM={class:"reset-password-page"},wM={class:"reset-password-main-content"},bM={class:"reset-password-card"},EM=["dir"],TM=["dir"],IM={class:"form-group"},AM=["dir"],SM=["placeholder","dir"],PM=["disabled"],CM={key:0},RM={key:1},DM=["dir"],kM=["dir"],OM=["dir"],xM={__name:"ResetPasswordView",setup(t){const e=Ns(),n=pn(),r=$e("currentLanguage"),s=Ce(""),i=async()=>{await n.sendPasswordReset(s.value)},o=()=>{e.push("/signin")};return(c,l)=>(W(),Q("div",vM,[p("main",wM,[p("section",bM,[p("h2",{dir:y(r)==="ar"?"rtl":"ltr"},E(y(r)==="en"?"Reset Your Password":"إعادة تعيين كلمة المرور"),9,EM),p("p",{dir:y(r)==="ar"?"rtl":"ltr"},E(y(r)==="en"?"Enter your email address to receive a password reset link.":"أدخل عنوان بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور."),9,TM),p("form",{onSubmit:tt(i,["prevent"]),class:"reset-password-form"},[p("div",IM,[p("label",{for:"email",dir:y(r)==="ar"?"rtl":"ltr"},E(y(r)==="en"?"Email Address":"عنوان البريد الإلكتروني"),9,AM),ue(p("input",{type:"email",id:"email","onUpdate:modelValue":l[0]||(l[0]=u=>s.value=u),placeholder:y(r)==="en"?"Enter your email":"أدخل بريدك الإلكتروني",dir:y(r)==="ar"?"rtl":"ltr",required:""},null,8,SM),[[Ae,s.value]])]),p("button",{class:"action-button primary",type:"submit",disabled:y(n).loading},[y(n).loading?(W(),Q("span",CM,E(y(r)==="en"?"Sending Link...":"جاري إرسال الرابط..."),1)):(W(),Q("span",RM,E(y(r)==="en"?"Send Reset Link":"إرسال رابط إعادة التعيين"),1))],8,PM)],32),y(n).error?(W(),Q("div",{key:0,class:"message error-message",dir:y(r)==="ar"?"rtl":"ltr"},E(y(n).error),9,DM)):Ee("",!0),y(n).successMessage?(W(),Q("div",{key:1,class:"message success-message",dir:y(r)==="ar"?"rtl":"ltr"},E(y(n).successMessage),9,kM)):Ee("",!0),p("p",{class:"switch-link-container",dir:y(r)==="ar"?"rtl":"ltr"},[mt(E(y(r)==="en"?"Remembered your password?":"هل تذكرت كلمة المرور؟")+" ",1),p("a",{href:"#",onClick:tt(o,["prevent"])},E(y(r)==="en"?"Sign In":"تسجيل الدخول"),1)],8,OM)])])]))}},NM=wt(xM,[["__scopeId","data-v-73a48bd7"]]),VM=["dir"],MM={class:"modal-title"},LM={class:"form-group"},FM={value:"doctor"},$M={value:"patient"},UM={class:"form-group"},BM={class:"form-group"},jM={class:"form-group"},HM={value:"male"},qM={value:"female"},zM={key:0,class:"pregnancy-section"},WM={class:"form-group checkbox-group"},GM={key:0,class:"form-group"},KM={class:"form-group"},YM={class:"form-group"},QM={class:"modal-actions"},XM={type:"submit",class:"action-button"},JM={__name:"ProfileFormModal",props:{show:Boolean,profileData:{type:Object,default:()=>null}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=$e("currentLanguage"),i=fr({role:"",birthDate:"",gender:"male",weight:null,isPregnant:!1,estimatedDueDate:"",allergies:"",medicalHistory:""});it(()=>n.show,c=>{c&&n.profileData&&(i.role=n.profileData.role||"patient",i.birthDate=n.profileData.birthDate||"",i.gender=n.profileData.gender||"male",i.weight=n.profileData.weight||null,i.isPregnant=n.profileData.isPregnant||!1,i.estimatedDueDate=n.profileData.estimatedDueDate||"",i.allergies=Array.isArray(n.profileData.allergies)?n.profileData.allergies.join(", "):"",i.medicalHistory=Array.isArray(n.profileData.medicalHistory)?n.profileData.medicalHistory.join(", "):"")},{immediate:!0}),it(()=>i.gender,c=>{c==="male"&&(i.isPregnant=!1,i.estimatedDueDate="")}),it(()=>i.isPregnant,c=>{c||(i.estimatedDueDate="")});const o=()=>{if(!i.role||!i.birthDate||!i.gender){alert("Role, Birth Date, and Gender are required.");return}if(i.isPregnant&&!i.estimatedDueDate){alert("Estimated due date is required for pregnant patients.");return}r("save",i)};return(c,l)=>(W(),In(mr,{name:"modal-fade"},{default:bn(()=>[t.show?(W(),Q("div",{key:0,class:"modal-overlay",onClick:l[10]||(l[10]=tt(u=>r("close"),["self"]))},[p("div",{class:"modal-content",dir:y(s)==="ar"?"rtl":"ltr"},[p("button",{class:"close-button",onClick:l[0]||(l[0]=u=>r("close"))},"×"),p("h3",MM,E(y(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1),p("form",{onSubmit:tt(o,["prevent"]),class:"profile-form"},[p("div",LM,[p("label",null,E(y(s)==="en"?"Role":"الدور"),1),ue(p("select",{"onUpdate:modelValue":l[1]||(l[1]=u=>i.role=u),required:""},[p("option",FM,E(y(s)==="en"?"Doctor":"طبيب"),1),p("option",$M,E(y(s)==="en"?"Patient":"مريض"),1)],512),[[Kt,i.role]])]),p("div",UM,[p("label",null,E(y(s)==="en"?"Weight (kg)":"الوزن (كجم)"),1),ue(p("input",{type:"number",step:"0.1","onUpdate:modelValue":l[2]||(l[2]=u=>i.weight=u),placeholder:"e.g., 70.5"},null,512),[[Ae,i.weight]])]),p("div",BM,[p("label",null,E(y(s)==="en"?"Birth Date":"تاريخ الميلاد"),1),ue(p("input",{type:"date","onUpdate:modelValue":l[3]||(l[3]=u=>i.birthDate=u),required:""},null,512),[[Ae,i.birthDate]])]),p("div",jM,[p("label",null,E(y(s)==="en"?"Gender":"الجنس"),1),ue(p("select",{"onUpdate:modelValue":l[4]||(l[4]=u=>i.gender=u),required:""},[p("option",HM,E(y(s)==="en"?"Male":"ذكر"),1),p("option",qM,E(y(s)==="en"?"Female":"أنثى"),1)],512),[[Kt,i.gender]])]),i.gender==="female"?(W(),Q("div",zM,[p("div",WM,[p("label",null,[ue(p("input",{type:"checkbox","onUpdate:modelValue":l[5]||(l[5]=u=>i.isPregnant=u)},null,512),[[Kl,i.isPregnant]]),p("span",null,E(y(s)==="en"?"Currently Pregnant?":"هل أنت حامل حاليًا؟"),1)])]),i.isPregnant?(W(),Q("div",GM,[p("label",null,E(y(s)==="en"?"Estimated Due Date":"تاريخ الولادة المتوقع"),1),ue(p("input",{type:"date","onUpdate:modelValue":l[6]||(l[6]=u=>i.estimatedDueDate=u),required:""},null,512),[[Ae,i.estimatedDueDate]])])):Ee("",!0)])):Ee("",!0),p("div",KM,[p("label",null,E(y(s)==="en"?"Allergies (comma-separated)":"الحساسية (مفصولة بفاصلة)"),1),ue(p("textarea",{"onUpdate:modelValue":l[7]||(l[7]=u=>i.allergies=u),rows:"2"},null,512),[[Ae,i.allergies]])]),p("div",YM,[p("label",null,E(y(s)==="en"?"Medical History (comma-separated)":"التاريخ الطبي (مفصول بفاصلة)"),1),ue(p("textarea",{"onUpdate:modelValue":l[8]||(l[8]=u=>i.medicalHistory=u),rows:"2"},null,512),[[Ae,i.medicalHistory]])]),p("div",QM,[p("button",{type:"button",onClick:l[9]||(l[9]=u=>r("close")),class:"action-button secondary"},E(y(s)==="en"?"Cancel":"إلغاء"),1),p("button",XM,E(y(s)==="en"?"Save Changes":"حفظ التغييرات"),1)])],32)],8,VM)])):Ee("",!0)]),_:1}))}},ZM=wt(JM,[["__scopeId","data-v-efada37a"]]),eL=["dir"],tL={class:"form-row"},nL={class:"form-group"},rL={disabled:"",value:""},sL=["value"],iL={key:0,class:"form-group"},oL={class:"form-row"},aL={class:"form-group"},lL={value:"X-ray"},cL={value:"CT"},uL={class:"form-group"},hL={disabled:"",value:""},dL=["value"],fL={key:0,class:"form-group"},pL=["placeholder"],mL={class:"form-group"},gL={class:"form-group"},yL=["placeholder"],_L={class:"form-group"},vL={class:"form-group"},wL={class:"modal-actions"},bL=["disabled"],EL={__name:"PersonalScanFormModal",props:{show:Boolean,scan:Object,isSaving:Boolean},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=pn(),i=$e("currentLanguage"),o={CT:[{value:"Abdomen & Pelvis",en:"Abdomen & Pelvis",ar:"البطن والحوض"},{value:"Brain with contrast",en:"Brain with contrast",ar:"الدماغ بمادة تباين"},{value:"Angiography CTA",en:"Angiography CTA",ar:"تصوير الأوعية CTA"},{value:"Urography",en:"Urography",ar:"تصوير المسالك البولية"},{value:"Enterography",en:"Enterography",ar:"تصوير الأمعاء"},{value:"Other",en:"Other...",ar:"أخرى..."}],"X-ray":[{value:"Barium Swallow",en:"Barium Swallow",ar:"بلع الباريوم"},{value:"Barium Meal",en:"Barium Meal",ar:"وجبة الباريوم"},{value:"Barium Enema",en:"Barium Enema",ar:"حقنة الباريوم الشرجية"},{value:"IV Urogram (IVP)",en:"IV Urogram (IVP)",ar:"أشعة المسالك البولية (IVP)"},{value:"HSG",en:"HSG",ar:"أشعة الرحم (HSG)"},{value:"VCUG",en:"VCUG",ar:"دراسة المثانة بالصبغة (VCUG)"},{value:"Other",en:"Other...",ar:"أخرى..."}]},c=[{value:"head",en:"Head",ar:"الرأس"},{value:"neck",en:"Neck",ar:"الرقبة"},{value:"chest",en:"Chest",ar:"الصدر"},{value:"abdomen",en:"Abdomen",ar:"البطن"},{value:"pelvis",en:"Pelvis",ar:"الحوض"},{value:"spine",en:"Spine",ar:"العمود الفقري"},{value:"upper_extremity",en:"Upper Extremity",ar:"الطرف العلوي"},{value:"lower_extremity",en:"Lower Extremity",ar:"الطرف السفلي"},{value:"other",en:"Other",ar:"أخرى"}],l=fr({id:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",scanDate:"",patientDose:null,reason:"",notes:""}),u=Pe(()=>o[l.scanType]||[]),h=Pe(()=>l.subScanType==="Other"),m=Pe(()=>l.scanPlace==="other");it(()=>n.show,k=>{if(k&&(Object.assign(l,{id:null,scanType:"X-ray",subScanType:"",otherScanDescription:"",scanPlace:"",otherScanPlaceDescription:"",scanDate:new Date().toISOString().split("T")[0],patientDose:null,reason:"",notes:""}),n.scan)){l.id=n.scan.id,l.scanType=n.scan.scanType,l.scanDate=n.scan.scanDate?.toDate()?.toISOString().split("T")[0]||"",l.patientDose=n.scan.patientDose,l.reason=n.scan.reason,l.notes=n.scan.notes;const C=n.scan.scanDetail;u.value.some(M=>M.value===C)?l.subScanType=C:C&&(l.subScanType="Other",l.otherScanDescription=C);const N=n.scan.scanPlace;c.some(M=>M.value===N)?l.scanPlace=N:N&&(l.scanPlace="other",l.otherScanPlaceDescription=N)}}),it(()=>l.scanType,()=>{l.subScanType="",l.otherScanDescription=""});const f=async()=>{const k=s.userProfile;if(!k)return alert("User profile not available. Cannot estimate dose."),!1;const C=k.birthDate?new Date().getFullYear()-k.birthDate.toDate().getFullYear():"N/A",A=k.weight||70,N=u.value.find(T=>T.value===l.subScanType);let x="";h.value?x=l.otherScanDescription:N&&(x=i.value==="en"?N.en:N.ar);const M=c.find(T=>T.value===l.scanPlace);let $="";m.value?$=l.otherScanPlaceDescription:M&&($=i.value==="en"?M.en:M.ar);const F=`Estimate the typical effective dose (in mSv) for a patient undergoing a ${l.scanType} scan of the ${$} with the specific protocol: "${x}". Patient Age: ${C}. Patient Weight: ${A} kg. Reason for scan: "${l.reason||"Not provided"}". Respond ONLY with a single number. Do not add any other text or units.`,B=l.scanType==="CT"?{min:.5,max:40}:{min:.001,max:10};try{const S=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB9KAR0P6sxAj7fP2I-MyVSVOJJaW0J91M",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:F}]}],generationConfig:{responseMimeType:"text/plain"}})});if(!S.ok)throw new Error(`API Error: ${S.statusText}`);const R=(await S.json()).candidates?.[0]?.content?.parts?.[0]?.text||"",I=parseFloat(R.match(/[\d.]+/));if(isNaN(I)||I<B.min||I>B.max)throw new Error("AI returned an invalid or out-of-range value.");return l.patientDose=I,!0}catch(T){return console.error("Dose estimation failed:",T),alert(i.value==="en"?"AI estimation failed. Please enter the dose manually.":"فشل تقدير الذكاء الاصطناعي. يرجى إدخال الجرعة يدويًا."),!1}},_=async()=>{if(!l.scanDate||!l.scanPlace||m.value&&!l.otherScanPlaceDescription||!l.subScanType||h.value&&!l.otherScanDescription){alert(i.value==="en"?"Please fill all required scan details.":"يرجى ملء جميع تفاصيل الفحص المطلوبة.");return}if(!l.patientDose&&l.patientDose!==0&&!await f())return;const k=h.value?l.otherScanDescription:l.subScanType,C=m.value?l.otherScanPlaceDescription:l.scanPlace,A={id:l.id,scanType:l.scanType,scanDetail:k,scanPlace:C,scanDate:l.scanDate,patientDose:l.patientDose,reason:l.reason,notes:l.notes,isPersonalScan:!0};r("save",A)};return(k,C)=>(W(),In(mr,{name:"modal-fade"},{default:bn(()=>[t.show?(W(),Q("div",{key:0,class:"modal-overlay",onClick:C[11]||(C[11]=tt(A=>k.$emit("close"),["self"]))},[p("div",{class:"modal-content",dir:y(i)==="ar"?"rtl":"ltr"},[p("button",{class:"close-modal-button",onClick:C[0]||(C[0]=A=>k.$emit("close"))},"×"),p("h3",null,E(t.scan?y(i)==="en"?"Edit Personal Scan":"تعديل الفحص الشخصي":y(i)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1),p("form",{onSubmit:tt(_,["prevent"]),class:"scan-form"},[p("div",tL,[p("div",nL,[p("label",null,E(y(i)==="en"?"Place of Scan":"مكان الفحص"),1),ue(p("select",{"onUpdate:modelValue":C[1]||(C[1]=A=>l.scanPlace=A),required:""},[p("option",rL,E(y(i)==="en"?"Select...":"اختر..."),1),(W(),Q(st,null,or(c,A=>p("option",{key:A.value,value:A.value},E(y(i)==="en"?A.en:A.ar),9,sL)),64))],512),[[Kt,l.scanPlace]])]),m.value?(W(),Q("div",iL,[p("label",null,E(y(i)==="en"?"Please specify other place":"يرجى تحديد المكان الآخر"),1),ue(p("input",{type:"text","onUpdate:modelValue":C[2]||(C[2]=A=>l.otherScanPlaceDescription=A),required:""},null,512),[[Ae,l.otherScanPlaceDescription]])])):Ee("",!0)]),p("div",oL,[p("div",aL,[p("label",null,E(y(i)==="en"?"Scan Category":"فئة الفحص"),1),ue(p("select",{"onUpdate:modelValue":C[3]||(C[3]=A=>l.scanType=A),required:""},[p("option",lL,E(y(i)==="en"?"X-ray":"أشعة سينية"),1),p("option",cL,E(y(i)==="en"?"CT":"أشعة مقطعية"),1)],512),[[Kt,l.scanType]])]),p("div",uL,[p("label",null,E(y(i)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),ue(p("select",{"onUpdate:modelValue":C[4]||(C[4]=A=>l.subScanType=A),required:""},[p("option",hL,E(y(i)==="en"?"Select...":"اختر..."),1),(W(!0),Q(st,null,or(u.value,A=>(W(),Q("option",{key:A.value,value:A.value},E(y(i)==="en"?A.en:A.ar),9,dL))),128))],512),[[Kt,l.subScanType]])])]),h.value?(W(),Q("div",fL,[p("label",null,E(y(i)==="en"?"Please specify scan protocol":"يرجى تحديد بروتوكول الفحص"),1),ue(p("input",{type:"text","onUpdate:modelValue":C[5]||(C[5]=A=>l.otherScanDescription=A),placeholder:y(i)==="en"?"e.g., Left Hand X-ray":"مثال: أشعة سينية لليد اليسرى",required:""},null,8,pL),[[Ae,l.otherScanDescription]])])):Ee("",!0),p("div",mL,[p("label",null,E(y(i)==="en"?"Scan Date":"تاريخ الفحص"),1),ue(p("input",{type:"date","onUpdate:modelValue":C[6]||(C[6]=A=>l.scanDate=A),required:""},null,512),[[Ae,l.scanDate]])]),p("div",gL,[p("label",null,E(y(i)==="en"?"Your Dose (mSv)":"جرعتك (mSv)"),1),ue(p("input",{type:"number",step:"0.01","onUpdate:modelValue":C[7]||(C[7]=A=>l.patientDose=A),placeholder:y(i)==="en"?"Leave blank for AI estimate":"اتركه فارغًا لتقدير الذكاء الاصطناعي"},null,8,yL),[[Ae,l.patientDose]])]),p("div",_L,[p("label",null,E(y(i)==="en"?"Reason for Scan":"أسباب الفحص"),1),ue(p("textarea",{"onUpdate:modelValue":C[8]||(C[8]=A=>l.reason=A),rows:"2"},null,512),[[Ae,l.reason]])]),p("div",vL,[p("label",null,E(y(i)==="en"?"Additional Notes":"ملاحظات إضافية"),1),ue(p("textarea",{"onUpdate:modelValue":C[9]||(C[9]=A=>l.notes=A),rows:"3"},null,512),[[Ae,l.notes]])]),p("div",wL,[p("button",{type:"button",onClick:C[10]||(C[10]=A=>k.$emit("close")),class:"action-button secondary"},E(y(i)==="en"?"Cancel":"إلغاء"),1),p("button",{type:"submit",class:"action-button",disabled:t.isSaving},E(t.isSaving?y(i)==="en"?"Saving...":"جار الحفظ...":y(i)==="en"?"Save":"حفظ"),9,bL)])],32)],8,eL)])):Ee("",!0)]),_:1}))}},TL=wt(EL,[["__scopeId","data-v-a5d54e2d"]]),IL=["dir"],AL={key:0,class:"loading-state"},SL={key:1,class:"empty-state"},PL={key:2,class:"table-container"},CL={class:"history-table"},RL={class:"details-column"},DL={class:"details-column"},kL={class:"details-column"},OL={class:"details-column"},xL={class:"details-column"},NL={class:"details-column"},VL={class:"details-column"},ML={class:"details-column"},LL={class:"action-buttons"},FL=["onClick","title"],$L=["onClick","title"],UL={__name:"HistoryTable",props:{scans:{type:Array,required:!0},isLoading:{type:Boolean,default:!1},isPersonalView:{type:Boolean,default:!1}},emits:["edit","delete"],setup(t,{emit:e}){const n=$e("currentLanguage"),r=s=>!s||!s.toDate?"N/A":s.toDate().toLocaleDateString();return(s,i)=>(W(),Q("div",{class:"history-table-wrapper",dir:y(n)==="ar"?"rtl":"ltr"},[t.isLoading?(W(),Q("div",AL,[Se(y(Ft),{icon:"spinner",spin:""}),p("span",null,E(y(n)==="en"?"Loading history...":"جاري تحميل السجل..."),1)])):!t.scans||t.scans.length===0?(W(),Q("div",SL,[p("p",null,E(y(n)==="en"?"No scan records found.":"لم يتم العثور على سجلات فحوصات."),1)])):(W(),Q("div",PL,[p("table",CL,[p("thead",null,[p("tr",null,[p("th",null,E(y(n)==="en"?"Scan Type":"نوع الفحص"),1),p("th",RL,E(y(n)==="en"?"Place of Scan":"مكان الفحص"),1),p("th",DL,E(y(n)==="en"?"Scan Protocol":"بروتوكول الفحص"),1),p("th",null,E(y(n)==="en"?"Date":"التاريخ"),1),p("th",null,E(y(n)==="en"?"Patient Dose":"جرعة المريض")+" (mSv)",1),p("th",kL,E(y(n)==="en"?"Reason for Scan":"سبب الفحص"),1),p("th",OL,E(y(n)==="en"?"Additional Notes":"ملاحظات إضافية"),1),p("th",null,E(y(n)==="en"?"Actions":"الإجراءات"),1)])]),p("tbody",null,[(W(!0),Q(st,null,or(t.scans,o=>(W(),Q("tr",{key:o.id},[p("td",null,E(o.scanType||"N/A"),1),p("td",xL,E(o.scanPlace||"N/A"),1),p("td",NL,E(o.scanDetail||"N/A"),1),p("td",null,E(r(o.scanDate)),1),p("td",null,E(o.patientDose??"N/A"),1),p("td",VL,E(o.reason||"N/A"),1),p("td",ML,E(o.notes||"N/A"),1),p("td",null,[p("div",LL,[p("button",{onClick:c=>s.$emit("edit",o),class:"action-button-icon edit-button",title:y(n)==="en"?"Edit":"تعديل"},[Se(y(Ft),{icon:"edit"})],8,FL),p("button",{onClick:c=>s.$emit("delete",o),class:"action-button-icon delete-button",title:y(n)==="en"?"Delete":"حذف"},[Se(y(Ft),{icon:"trash-alt"})],8,$L)])])]))),128))])])]))],8,IL))}},BL=wt(UL,[["__scopeId","data-v-f91f6a62"]]),jL=["dir"],HL={class:"profile-section card"},qL={class:"card-header"},zL={key:0,class:"loading-state"},WL={key:1,class:"profile-details"},GL={key:0,class:"role-tag"},KL={key:1,class:"role-tag"},YL={key:0},QL={key:1},XL={key:2},JL={key:0},ZL={key:0},e6={key:1},t6={class:"history-section card"},n6={class:"card-header"},r6={class:"switch-link-container"},s6={__name:"ProfileView",setup(t){const e=pn(),n=Pi(),r=Ns(),s=$e("currentLanguage"),i=$e("triggerMsvRecalculation"),o=Ce([]),c=Ce(!1),l=Ce(!1),u=Ce(!1),h=Ce(null),m=Ce(null),f=Pe(()=>e.user?.uid),_=Pe(()=>{if(!e.userProfile)return{displayName:e.user?.displayName||"",email:e.user?.email||""};const F=B=>{if(!B)return"";const T=B.toDate?B.toDate():new Date(B);return isNaN(T)?"":T.toISOString().split("T")[0]};return{...e.userProfile,displayName:e.user?.displayName,email:e.user?.email,birthDate:F(e.userProfile.birthDate),estimatedDueDate:F(e.userProfile.estimatedDueDate)}}),k=async()=>{if(!f.value)return;const F=await n.fetchScansForPatient(f.value);F&&(o.value=F)},C=async F=>{if(!f.value)return;const B={...e.userProfile,displayName:e.user.displayName,email:e.user.email,role:F.role,birthDate:Oe.fromDate(new Date(F.birthDate)),gender:F.gender,weight:Number(F.weight)||null,isPregnant:F.isPregnant,estimatedDueDate:F.isPregnant&&F.estimatedDueDate?Oe.fromDate(new Date(F.estimatedDueDate)):null,allergies:Array.isArray(F.allergies)?F.allergies:F.allergies.split(",").map(v=>v.trim()).filter(Boolean),medicalHistory:Array.isArray(F.medicalHistory)?F.medicalHistory:F.medicalHistory.split(",").map(v=>v.trim()).filter(Boolean)};await n.setUserProfile(f.value,B)?(e.setUserProfile(B),c.value=!1,i&&i()):alert(`Failed to save profile. Error: ${n.error}`)},A=async F=>{if(!f.value)return;const B={patientId:f.value,scanType:F.scanType,scanPlace:F.scanPlace,scanDetail:F.scanDetail,scanDate:Oe.fromDate(new Date(F.scanDate)),patientDose:Number(F.patientDose),doctorDose:0,reason:F.reason,notes:F.notes};(F.id?await n.updateScan(F.id,B):await n.createScan(B))?(l.value=!1,await k(),i&&i()):alert(`Failed to save scan: ${n.error}`)},N=async()=>{if(!m.value?.id)return;await n.deleteScan(m.value.id)?(u.value=!1,await k(),i&&i()):alert(`Failed to delete scan: ${n.error}`)},x=()=>{h.value=null,l.value=!0},M=F=>{h.value=F,l.value=!0},$=F=>{m.value=F,u.value=!0};return Hh(()=>{it(()=>e.isAuthReady,F=>{F&&f.value&&k()},{immediate:!0})}),(F,B)=>(W(),Q("div",{class:"profile-page",dir:y(s)==="ar"?"rtl":"ltr"},[p("div",HL,[p("div",qL,[p("h2",null,E(y(s)==="en"?"My Profile":"ملفي الشخصي"),1),p("button",{onClick:B[0]||(B[0]=T=>c.value=!0),class:"action-button"},E(y(s)==="en"?"Edit Profile":"تعديل الملف الشخصي"),1)]),y(e).isProfileLoading?(W(),Q("div",zL,"Loading profile...")):_.value?(W(),Q("div",WL,[p("p",null,[p("strong",null,E(y(s)==="en"?"Name:":"اﻹسم:"),1),p("span",null,E(_.value.displayName),1)]),p("p",null,[p("strong",null,E(y(s)==="en"?"Email:":"البريد اﻹلكتروني:"),1),p("span",null,E(_.value.email),1)]),p("p",null,[p("strong",null,E(y(s)==="en"?"Role":"الدور")+":",1),_.value.role==="doctor"?(W(),Q("span",GL,E(y(s)==="en"?"Doctor":"طبيب"),1)):(W(),Q("span",KL,E(y(s)==="en"?"Patient":"مريض"),1))]),p("p",null,[p("strong",null,E(y(s)==="en"?"Birth Date:":"تاريخ الميلاد:"),1),p("span",null,E(_.value.birthDate||"Not set"),1)]),p("p",null,[p("strong",null,E(y(s)==="en"?"Weight:":"الوزن:"),1),p("span",null,E(_.value.weight?`${_.value.weight} kg`:"Not set"),1)]),p("p",null,[p("strong",null,E(y(s)==="en"?"Gender: ":"الجنس: "),1),_.value.gender==="male"?(W(),Q("span",YL,E(y(s)==="en"?"Male":"ذكر"),1)):_.value.gender==="female"?(W(),Q("span",QL,E(y(s)==="en"?"Female":"أنثى"),1)):(W(),Q("span",XL,"Not set"))]),_.value.gender==="female"?(W(),Q("p",JL,[p("strong",null,E(y(s)==="en"?"Pregnant: ":"حامل: "),1),_.value.isPregnant?(W(),Q("span",ZL,E(y(s)==="en"?"Yes":"نعم")+" ("+E(y(s)==="en"?"Due:":"المتوقع:")+" "+E(_.value.estimatedDueDate)+")",1)):(W(),Q("span",e6,E(y(s)==="en"?"No":"لا"),1))])):Ee("",!0),p("p",null,[p("strong",null,E(y(s)==="en"?"Allergies:":"الحساسية:"),1),p("span",null,E(_.value.allergies?.join(", ")||"None"),1)]),p("p",null,[p("strong",null,E(y(s)==="en"?"Medical History:":"التاريخ الطبي:"),1),p("span",null,E(_.value.medicalHistory?.join(", ")||"None"),1)])])):Ee("",!0)]),p("div",t6,[p("div",n6,[p("h2",null,E(y(s)==="en"?"Personal Scan History":"تاريخ الفحوصات الشخصية"),1),p("button",{onClick:x,class:"action-button"},E(y(s)==="en"?"Add Personal Scan":"إضافة فحص شخصي"),1)]),Se(BL,{scans:o.value,"is-loading":y(n).loading,"is-personal-view":!0,onEdit:M,onDelete:$},null,8,["scans","is-loading"])]),Se(ZM,{show:c.value,"profile-data":_.value,onClose:B[1]||(B[1]=T=>c.value=!1),onSave:C},null,8,["show","profile-data"]),Se(TL,{show:l.value,scan:h.value,"is-saving":y(n).loading,onClose:B[2]||(B[2]=T=>l.value=!1),onSave:A},null,8,["show","scan","is-saving"]),Se(nf,{show:u.value,title:"Delete Scan",message:"Are you sure you want to delete this scan?",onClose:B[3]||(B[3]=T=>u.value=!1),onConfirm:N},null,8,["show"]),p("div",r6,[p("a",{href:"#",onClick:B[4]||(B[4]=tt(T=>y(r).push("/dashboard"),["prevent"]))},E(y(s)==="en"?"Back to dashboard":"العودة إلى لوحة التحكم"),1)])],8,jL))}},i6=wt(s6,[["__scopeId","data-v-7a449450"]]),Nl=XT({history:PT("/X-ray"),routes:[{path:"/",name:"signup",component:Dx},{path:"/signin",name:"signin",component:Jx},{path:"/dashboard",name:"dashboard",component:_M,meta:{requiresAuth:!0}},{path:"/recommend/:patientId?",name:"recommend",component:JN,meta:{requiresAuth:!0}},{path:"/patients",name:"patients",component:BV,meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:i6,meta:{requiresAuth:!0}},{path:"/resetpassword",name:"resetpassword",component:NM},{path:"/__/auth/handler",name:"firebaseAuthHandler",component:{render(){return oi("div")}},beforeEnter:(t,e,n)=>{n()}},{path:"/:catchAll(.*)",redirect:"/dashboard"},{path:"/__/auth/iframe",name:"firebaseAuthIframeHandler",component:{render(){return oi("div")}},beforeEnter:(t,e,n)=>{n()}}]});Nl.beforeEach(async(t,e,n)=>{const r=pn();r.isAuthReady||await new Promise(c=>{const l=r.$subscribe((u,h)=>{h.isAuthReady&&(l(),c())})});const s=!!r.user;if(t.path.startsWith("/__/auth/handler")||t.path.startsWith("/__/auth/iframe")){n();return}console.log(`Navigating to: ${t.path} (name: ${t.name})`),console.log(`isAuthenticated: ${s}`);const o=["signup","signin","resetpassword","newpassword"].includes(t.name);s?o?(console.log(`Redirecting authenticated user from ${t.name} to /dashboard.`),n("/dashboard")):(console.log(`Allowing authenticated access to ${t.path}.`),n()):o?(console.log(`Allowing unauthenticated access to ${t.name}.`),n()):(console.log(`Redirecting unauthenticated user from ${t.path} (requires auth) to /signin.`),n("/signin"))});var o6="firebase",a6="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hr(o6,a6,"app");/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const l6={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},c6=l6,u6={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},h6=u6,d6={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},f6=d6,p6={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},m6={prefix:"fas",iconName:"file-medical",icon:[384,512,[],"f477","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"]},g6={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},y6={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};WO.add(p6,h6,c6,m6,g6,y6,f6);const _6={apiKey:"AIzaSyBKiw2ibjMQB-i_sMorpK5nXyHb87_6uZA",authDomain:"x-ray-b0cb8.firebaseapp.com",projectId:"x-ray-b0cb8",storageBucket:"x-ray-b0cb8.firebasestorage.app",messagingSenderId:"382664693760",appId:"1:382664693760:web:7582abe58d70b3260f20e5",measurementId:"G-5MKNMY9VGY"},Kw=K_(_6),rf=lC(Kw),v6=vo(Kw),vr=K0(ax),w6=ZT();vr.use(w6);vr.use(Nl);vr.component("font-awesome-icon",Ft);const Ph=Ce(null),Yw=Ce(!1),to=pn();to.initAuth(rf);vv(rf,t=>{if(Ph.value=t?t.uid:null,to.user=t,to.isAuthenticated=!!t,Yw.value=!0,t){const e=Nl.currentRoute.value.name;["signup","signin","resetpassword","newpassword"].includes(e)&&Nl.push("/dashboard")}else Ph.value=null,to.user=null,to.isAuthenticated=!1});vr.provide("db",v6);vr.provide("auth",rf);vr.provide("currentUserId",Ph);vr.provide("isAuthReady",Yw);vr.provide("appId",typeof __app_id<"u"?__app_id:"default-app-id");vr.mount("#app");
