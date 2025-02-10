var _e=Object.defineProperty;var ve=(t,e,n)=>e in t?_e(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var x=(t,e,n)=>ve(t,typeof e!="symbol"?e+"":e,n);import{n as dt,s as be,o as $t,t as Ae}from"./D9qJB8QU.js";new URL("sveltekit-internal://");function Se(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function ke(t){return t.split("%25").map(decodeURI).join("%25")}function Ee(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function pt({href:t}){return t.split("#")[0]}function Re(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}const Ie="/__data.json",Ue=".html__data.json";function Le(t){return t.endsWith(".html")?t.replace(/\.html$/,Ue):t.replace(/\/$/,"")+Ie}function Te(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function xe(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const Pe=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&G.delete(bt(t)),Pe(t,e));const G=new Map;function Ce(t,e){const n=bt(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&G.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=xe(a)),Promise.resolve(new Response(a,s))}return window.fetch(t,e)}function Oe(t,e,n){if(G.size>0){const r=bt(t,n),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(e,n)}function bt(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${Te(...a)}"]`}return r}const Ne=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function $e(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${De(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return gt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return gt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Ne.exec(c),[,u,w,h,m]=d;return e.push({name:h,matcher:m,optional:!!u,rest:!!w,chained:w?l===1&&i[0]==="":!1}),w?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return gt(c)}).join("")}).join("")}/?$`),params:e}}function je(t){return!/^\([^)]+\)$/.test(t)}function De(t){return t.slice(1).split("/").filter(je)}function Fe(t,e,n){const r={},a=t.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=e[o+1],u=a[o+1];d&&!d.rest&&d.optional&&u&&c.chained&&(i=0),!d&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function gt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ve({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:u,params:w}=$e(o),h={id:o,exec:m=>{const f=u.exec(m);if(f)return Fe(f,w,r)},errors:[1,...d||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return h.errors.length=h.layouts.length=Math.max(h.errors.length,h.layouts.length),h});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[a.has(o),t[o]]}}function Wt(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function jt(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}const $=[];function At(t,e=dt){let n;const r=new Set;function a(o){if(be(t,o)&&(t=o,n)){const c=!$.length;for(const l of r)l[1](),$.push(l,t);if(c){for(let l=0;l<$.length;l+=2)$[l][0]($[l+1]);$.length=0}}}function s(o){a(o(t))}function i(o,c=dt){const l=[o,c];return r.add(l),r.size===1&&(n=e(a,s)||dt),o(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}var Ht;const T=((Ht=globalThis.__sveltekit_8zdhtm)==null?void 0:Ht.base)??"/json-to-python";var Kt;const Be=((Kt=globalThis.__sveltekit_8zdhtm)==null?void 0:Kt.assets)??T,qe="1739196751608",Yt="sveltekit:snapshot",Jt="sveltekit:scroll",Xt="sveltekit:states",Ge="sveltekit:pageurl",D="sveltekit:history",H="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function Zt(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function St(){return{x:pageXOffset,y:pageYOffset}}function j(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Dt={...X,"":X.hover};function Qt(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function te(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Qt(t)}}function yt(t,e,n){let r;try{if(r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!r||!!a||it(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===J&&t.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function Z(t){let e=null,n=null,r=null,a=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)r===null&&(r=j(o,"preload-code")),a===null&&(a=j(o,"preload-data")),e===null&&(e=j(o,"keepfocus")),n===null&&(n=j(o,"noscroll")),s===null&&(s=j(o,"reload")),i===null&&(i=j(o,"replacestate")),o=Qt(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Dt[r??"off"],preload_data:Dt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Ft(t){const e=At(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const ee={v:()=>{}};function Me(){const{set:t,subscribe:e}=At(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Be}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==qe;return i&&(t(!0),ee.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function it(t,e,n){return t.origin!==J||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Vt(t){const e=He(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const ze="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function He(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=ze.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const Ke=-1,We=-2,Ye=-3,Je=-4,Xe=-5,Ze=-6;function Qe(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(s,i=!1){if(s===Ke)return;if(s===Ye)return NaN;if(s===Je)return 1/0;if(s===Xe)return-1/0;if(s===Ze)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=e==null?void 0:e[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let h=1;h<o.length;h+=1)d.add(a(o[h]));break;case"Map":const u=new Map;r[s]=u;for(let h=1;h<o.length;h+=2)u.set(a(o[h]),a(o[h+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);r[s]=w;for(let h=1;h<o.length;h+=2)w[o[h]]=a(o[h+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const h=globalThis[c],m=o[1],f=Vt(m),g=new h(f);r[s]=g;break}case"ArrayBuffer":{const h=o[1],m=Vt(h);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==We&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const ne=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ne];const tn=new Set([...ne]);[...tn];function en(t){return t.filter(e=>e!=null)}class ct{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class kt{constructor(e,n){this.status=e,this.location=n}}class Et extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const nn="x-sveltekit-invalidated",rn="x-sveltekit-trailing-slash";function Q(t){return t instanceof ct||t instanceof Et?t.status:500}function an(t){return t instanceof Et?t.text:"Internal Error"}let I,K,mt;const on=$t.toString().includes("$$")||/function \w+\(\) \{\}/.test($t.toString());on?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},K={current:null},mt={current:!1}):(I=new class{constructor(){x(this,"data",$state.raw({}));x(this,"form",$state.raw(null));x(this,"error",$state.raw(null));x(this,"params",$state.raw({}));x(this,"route",$state.raw({id:null}));x(this,"state",$state.raw({}));x(this,"status",$state.raw(-1));x(this,"url",$state.raw(new URL("https://example.com")))}},K=new class{constructor(){x(this,"current",$state.raw(null))}},mt=new class{constructor(){x(this,"current",$state.raw(!1))}},ee.v=()=>mt.current=!0);function sn(t){Object.assign(I,t)}const cn=new Set(["icon","shortcut icon","apple-touch-icon"]),N=Wt(Jt)??{},W=Wt(Yt)??{},C={url:Ft({}),page:Ft({}),navigating:At(null),updated:Me()};function Rt(t){N[t]=St()}function ln(t,e){let n=t+1;for(;N[n];)delete N[n],n+=1;for(n=e+1;W[n];)delete W[n],n+=1}function V(t){return location.href=t.href,new Promise(()=>{})}async function re(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(T||"/");t&&await t.update()}}function Bt(){}let lt,_t,tt,P,vt,A;const et=[],nt=[];let U=null;const ae=new Set,fn=new Set,M=new Set;let _={branch:[],error:null,url:null},It=!1,rt=!1,qt=!0,Y=!1,B=!1,oe=!1,Ut=!1,se,R,L,at;const z=new Set;async function Rn(t,e,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),A=t,await((s=(a=t.hooks).init)==null?void 0:s.call(a)),lt=Ve(t),P=document.documentElement,vt=e,_t=t.nodes[0],tt=t.nodes[1],_t(),tt(),R=(i=history.state)==null?void 0:i[D],L=(o=history.state)==null?void 0:o[H],R||(R=L=Date.now(),history.replaceState({...history.state,[D]:R,[H]:L},""));const r=N[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await _n(vt,n):mn(A.hash?ye(new URL(location.href)):location.href,{replaceState:!0}),yn()}function un(){et.length=0,Ut=!1}function ie(t){nt.some(e=>e==null?void 0:e.snapshot)&&(W[t]=nt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function ce(t){var e;(e=W[t])==null||e.forEach((n,r)=>{var a,s;(s=(a=nt[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function Gt(){Rt(R),jt(Jt,N),ie(L),jt(Yt,W)}async function Lt(t,e,n,r){return q({type:"goto",url:Zt(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Ut=!0),e.invalidate&&e.invalidate.forEach(wn)}})}async function hn(t){if(t.id!==(U==null?void 0:U.id)){const e={};z.add(e),U={id:t.id,token:e,promise:fe({...t,preload:e}).then(n=>(z.delete(e),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function wt(t){const e=ue(t);if(!e)return;const n=lt.find(r=>r.exec(he(e)));n&&await Promise.all([...n.layouts,n.leaf].map(r=>r==null?void 0:r[1]()))}function le(t,e,n){var s;_=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(I,t.props.page),se=new A.root({target:e,props:{...t.props,stores:C,components:nt},hydrate:n,sync:!1}),ce(L);const a={from:null,to:{params:_.params,route:{id:((s=_.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};M.forEach(i=>i(a)),rt=!0}function ot({url:t,params:e,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(T&&(t.pathname===T||t.pathname===T+"/"))o="always";else for(const h of n)(h==null?void 0:h.slash)!==void 0&&(o=h.slash);t.pathname=Se(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:s},props:{constructors:en(n).map(h=>h.node.component),page:Ct(I)}};i!==void 0&&(c.props.form=i);let l={},d=!I,u=0;for(let h=0;h<Math.max(n.length,_.branch.length);h+=1){const m=n[h],f=_.branch[h];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(d=!0),m&&(l={...l,...m.data},d&&(c.props[`data_${u}`]=l),u+=1)}return(!_.url||t.href!==_.url.href||_.error!==a||i!==void 0&&i!==I.form||d)&&(c.props.page={error:a,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?l:I.data}),c}async function Tt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:s}){var d,u,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((d=l.universal)!=null&&d.load){let h=function(...f){for(const g of f){const{href:y}=new URL(g,n);c.dependencies.add(y)}};const m={route:new Proxy(a,{get:(f,g)=>(o&&(c.route=!0),f[g])}),params:new Proxy(r,{get:(f,g)=>(o&&c.params.add(g),f[g])}),data:(s==null?void 0:s.data)??null,url:Re(n,()=>{o&&(c.url=!0)},f=>{o&&c.search_params.add(f)},A.hash),async fetch(f,g){let y;f instanceof Request?(y=f.url,g={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...g}):y=f;const E=new URL(y,n);return o&&h(E.href),E.origin===n.origin&&(y=E.href.slice(n.origin.length)),rt?Oe(y,E.href,g):Ce(y,g)},setHeaders:()=>{},depends:h,parent(){return o&&(c.parent=!0),e()},untrack(f){o=!1;try{return f()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=l.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function Mt(t,e,n,r,a,s){if(Ut)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==_.params[i])return!0;for(const i of a.dependencies)if(et.some(o=>o(new URL(i))))return!0;return!1}function xt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function dn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),s=e.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function zt({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:Ct(I),constructors:[]}}}async function fe({id:t,invalidating:e,url:n,params:r,route:a,preload:s}){if((U==null?void 0:U.id)===t)return z.delete(U.token),U.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const u=_.url?t!==st(_.url):!1,w=_.route?a.id!==_.route.id:!1,h=dn(_.url,n);let m=!1;const f=l.map((p,v)=>{var O;const S=_.branch[v],k=!!(p!=null&&p[0])&&((S==null?void 0:S.loader)!==p[1]||Mt(m,w,u,h,(O=S.server)==null?void 0:O.uses,r));return k&&(m=!0),k});if(f.some(Boolean)){try{d=await ge(n,f)}catch(p){const v=await F(p,{url:n,params:r,route:{id:t}});return z.has(s)?zt({error:v,url:n,params:r,route:a}):ft({status:Q(p),error:v,url:n,route:a})}if(d.type==="redirect")return d}const g=d==null?void 0:d.nodes;let y=!1;const E=l.map(async(p,v)=>{var ut;if(!p)return;const S=_.branch[v],k=g==null?void 0:g[v];if((!k||k.type==="skip")&&p[1]===(S==null?void 0:S.loader)&&!Mt(y,w,u,h,(ut=S.universal)==null?void 0:ut.uses,r))return S;if(y=!0,(k==null?void 0:k.type)==="error")throw k;return Tt({loader:p[1],url:n,params:r,route:a,parent:async()=>{var Nt;const Ot={};for(let ht=0;ht<v;ht+=1)Object.assign(Ot,(Nt=await E[ht])==null?void 0:Nt.data);return Ot},server_data_node:xt(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?S==null?void 0:S.server:void 0)})});for(const p of E)p.catch(()=>{});const b=[];for(let p=0;p<l.length;p+=1)if(l[p])try{b.push(await E[p])}catch(v){if(v instanceof kt)return{type:"redirect",location:v.location};if(z.has(s))return zt({error:await F(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let S=Q(v),k;if(g!=null&&g.includes(v))S=v.status??S,k=v.error;else if(v instanceof ct)k=v.body;else{if(await C.updated.check())return await re(),await V(n);k=await F(v,{params:r,url:n,route:{id:a.id}})}const O=await pn(p,b,i);return O?ot({url:n,params:r,branch:b.slice(0,O.idx).concat(O.node),status:S,error:k,route:a}):await pe(n,{id:a.id},k,S)}else b.push(void 0);return ot({url:n,params:r,branch:b,status:200,error:null,route:a,form:e?void 0:null})}async function pn(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function ft({status:t,error:e,url:n,route:r}){const a={};let s=null;if(A.server_loads[0]===0)try{const o=await ge(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==J||n.pathname!==location.pathname||It)&&await V(n)}try{const o=await Tt({loader:_t,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:xt(s)}),c={node:await tt(),loader:tt,universal:null,server:null,data:null};return ot({url:n,params:a,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof kt)return Lt(new URL(o.location,location.href),{},0);throw o}}function ue(t){let e;try{if(e=A.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);A.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}function Pt(t,e){if(!t||it(t,T,A.hash))return;const n=ue(t);if(!n)return;const r=he(n);for(const a of lt){const s=a.exec(r);if(s)return{id:st(t),invalidating:e,route:a,params:Ee(s),url:t}}}function he(t){return ke(A.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(T.length))||"/"}function st(t){return(A.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function de({url:t,type:e,intent:n,delta:r}){let a=!1;const s=we(_,n,t,e);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return Y||ae.forEach(o=>o(i)),a?null:s}async function q({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=Bt,block:d=Bt}){const u=Pt(e,!1),w=de({url:e,type:t,delta:n==null?void 0:n.delta,intent:u});if(!w){d();return}const h=R,m=L;l(),Y=!0,rt&&C.navigating.set(K.current=w.navigation),at=c;let f=u&&await fe(u);if(!f){if(it(e,T,A.hash))return await V(e);f=await pe(e,{id:null},await F(new Et(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(u==null?void 0:u.url)||e,at!==c)return w.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(o>=20)f=await ft({status:500,error:await F(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return Lt(new URL(f.location,e).href,{},o+1,c),!1;else f.props.page.status>=400&&await C.updated.check()&&(await re(),await V(e));if(un(),Rt(h),ie(m),f.props.page.url.pathname!==e.pathname&&(e.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const b=s?0:1,p={[D]:R+=b,[H]:L+=b,[Xt]:i};(s?history.replaceState:history.pushState).call(history,p,"",e),s||ln(R,L)}if(U=null,f.props.page.state=i,rt){_=f.state,f.props.page&&(f.props.page.url=e);const b=(await Promise.all(Array.from(fn,p=>p(w.navigation)))).filter(p=>typeof p=="function");if(b.length>0){let p=function(){b.forEach(v=>{M.delete(v)})};b.push(p),b.forEach(v=>{M.add(v)})}se.$set(f.props),sn(f.props.page),oe=!0}else le(f,vt,!1);const{activeElement:g}=document;await Ae();const y=n?n.scroll:a?St():null;if(qt){const b=e.hash&&document.getElementById(decodeURIComponent(A.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));y?scrollTo(y.x,y.y):b?b.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==g&&document.activeElement!==document.body;!r&&!E&&vn(),qt=!0,f.props.page&&Object.assign(I,f.props.page),Y=!1,t==="popstate"&&ce(L),w.fulfil(void 0),M.forEach(b=>b(w.navigation)),C.navigating.set(K.current=null)}async function pe(t,e,n,r){return t.origin===J&&t.pathname===location.pathname&&!It?await ft({status:r,error:n,url:t,route:e}):await V(t)}function gn(){let t;P.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(s){s.defaultPrevented||r(s.composedPath()[0],1)}P.addEventListener("mousedown",e),P.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(wt(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=te(s,P);if(!o)return;const{url:c,external:l,download:d}=yt(o,T,A.hash);if(l||d)return;const u=Z(o),w=c&&st(_.url)===st(c);if(!u.reload&&!w)if(i<=u.preload_data){const h=Pt(c,!1);h&&hn(h)}else i<=u.preload_code&&wt(c)}function a(){n.disconnect();for(const s of P.querySelectorAll("a")){const{url:i,external:o,download:c}=yt(s,T,A.hash);if(o||c)continue;const l=Z(s);l.reload||(l.preload_code===X.viewport&&n.observe(s),l.preload_code===X.eager&&wt(i))}}M.add(a),a()}function F(t,e){if(t instanceof ct)return t.body;const n=Q(t),r=an(t);return A.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function mn(t,e={}){return t=new URL(Zt(t)),t.origin!==J?Promise.reject(new Error("goto: invalid URL")):Lt(t,e,0)}function wn(t){if(typeof t=="function")et.push(t);else{const{href:e}=new URL(t,location.href);et.push(n=>n.href===e)}}function yn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(Gt(),!Y){const a=we(_,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ae.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Gt()}),(e=navigator.connection)!=null&&e.saveData||gn(),P.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=te(n.composedPath()[0],P);if(!r)return;const{url:a,external:s,target:i,download:o}=yt(r,T,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[d,u]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),w=d===pt(location);if(s||c.reload&&(!w||!u)){de({url:a,type:"link"})?Y=!0:n.preventDefault();return}if(u!==void 0&&w){const[,h]=_.url.href.split("#");if(h===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(B=!0,Rt(R),t(a),!c.replace_state)return;B=!1}n.preventDefault(),await new Promise(h=>{requestAnimationFrame(()=>{setTimeout(h,0)}),setTimeout(h,100)}),q({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),P.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(it(o,T,!1))return;const c=n.target,l=Z(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&d.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(d).toString(),q({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[D]){const a=n.state[D];if(at={},a===R)return;const s=N[a],i=n.state[Xt]??{},o=new URL(n.state[Ge]??location.href),c=n.state[H],l=_.url?pt(location)===pt(_.url):!1;if(c===L&&(oe||l)){i!==I.state&&(I.state=i),t(o),N[R]=St(),s&&scrollTo(s.x,s.y),R=a;return}const u=a-R;await q({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{R=a,L=c},block:()=>{history.go(-u)},nav_token:at})}else if(!B){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{B?(B=!1,history.replaceState({...history.state,[D]:++R,[H]:L},"",location.href)):A.hash&&_.url.hash===location.hash&&q({type:"goto",url:ye(_.url)})});for(const n of document.querySelectorAll("link"))cn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&C.navigating.set(K.current=null)});function t(n){_.url=I.url=n,C.page.set(Ct(I)),C.page.notify()}}async function _n(t,{status:e=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){It=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Pt(c,!1)||{});let l,d=!0;try{const u=r.map(async(m,f)=>{const g=i[f];return g!=null&&g.uses&&(g.uses=me(g.uses)),Tt({loader:A.nodes[m],url:c,params:a,route:s,parent:async()=>{const y={};for(let E=0;E<f;E+=1)Object.assign(y,(await u[E]).data);return y},server_data_node:xt(g)})}),w=await Promise.all(u),h=lt.find(({id:m})=>m===s.id);if(h){const m=h.layouts;for(let f=0;f<m.length;f++)m[f]||w.splice(f,0,void 0)}l=ot({url:c,params:a,branch:w,status:e,error:n,form:o,route:h??null})}catch(u){if(u instanceof kt){await V(new URL(u.location,location.href));return}l=await ft({status:Q(u),error:await F(u,{url:c,params:a,route:s}),url:c,route:s}),t.textContent="",d=!1}l.props.page&&(l.props.page.state={}),le(l,t,d)}async function ge(t,e){var s;const n=new URL(t);n.pathname=Le(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(rn,"1"),n.searchParams.append(nn,e.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new ct(a.status,i)}return new Promise(async i=>{var w;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function d(h){return Qe(h,{...A.decoders,Promise:m=>new Promise((f,g)=>{o.set(m,{fulfil:f,reject:g})})})}let u="";for(;;){const{done:h,value:m}=await c.read();if(h&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const f=u.indexOf(`
`);if(f===-1)break;const g=JSON.parse(u.slice(0,f));if(u=u.slice(f+1),g.type==="redirect")return i(g);if(g.type==="data")(w=g.nodes)==null||w.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=me(y.uses),y.data=d(y.data))}),i(g);else if(g.type==="chunk"){const{id:y,data:E,error:b}=g,p=o.get(y);o.delete(y),b?p.reject(d(b)):p.fulfil(d(E))}}}})}function me(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function vn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function we(t,e,n,r){var c,l;let a,s;const i=new Promise((d,u)=>{a=d,s=u});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:s}}function Ct(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function ye(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{Rn as a,C as s};
