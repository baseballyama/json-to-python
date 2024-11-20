import{n as le,s as ut,t as dt}from"./scheduler.CZ_fasPq.js";new URL("sveltekit-internal://");function ht(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function pt(e){return e.split("%25").map(decodeURI).join("%25")}function gt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function fe({href:e}){return e.split("#")[0]}const mt=["href","pathname","search","toString","toJSON"];function yt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of mt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const _t="/__data.json",wt=".html__data.json";function vt(e){return e.endsWith(".html")?e.replace(/\.html$/,wt):e.replace(/\/$/,"")+_t}function bt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function At(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const Ve=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&q.delete(me(e)),Ve(e,n));const q=new Map;function kt(e,n){const t=me(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&q.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=At(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function Et(e,n,t){if(q.size>0){const r=me(e,t),a=q.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);q.delete(r)}}return window.fetch(n,t)}function me(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${bt(...a)}"]`}return r}const St=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Rt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Tt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ue(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ue(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=St.exec(c),[,h,y,u,p]=d;return n.push({name:u,matcher:p,optional:!!h,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ue(c)}).join("")}).join("")}/?$`),params:n}}function It(e){return!/^\([^)]+\)$/.test(e)}function Tt(e){return e.slice(1).split("/").filter(It)}function Ut(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){r[c.name]=l;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ue(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Lt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,l,d]])=>{const{pattern:h,params:y}=Rt(s),u={id:s,exec:p=>{const f=h.exec(p);if(f)return Ut(f,y,r)},errors:[1,...d||[]].map(p=>e[p]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function Be(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ue(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const N=[];function ye(e,n=le){let t;const r=new Set;function a(s){if(ut(e,s)&&(e=s,t)){const c=!N.length;for(const l of r)l[1](),N.push(l,e);if(c){for(let l=0;l<N.length;l+=2)N[l][0](N[l+1]);N.length=0}}}function o(s){a(s(e))}function i(s,c=le){const l=[s,c];return r.add(l),r.size===1&&(t=n(a,o)||le),s(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}var $e;const U=(($e=globalThis.__sveltekit_e0mwlv)==null?void 0:$e.base)??"/json-to-python";var Fe;const Pt=((Fe=globalThis.__sveltekit_e0mwlv)==null?void 0:Fe.assets)??U,xt="1732134013050",qe="sveltekit:snapshot",Ge="sveltekit:scroll",Me="sveltekit:states",Ct="sveltekit:pageurl",D="sveltekit:history",M="sveltekit:navigation",z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},W=location.origin;function He(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function _e(){return{x:pageXOffset,y:pageYOffset}}function O(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Le={...z,"":z.hover};function Ke(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function We(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ke(e)}}function he(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||re(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===W&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function J(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=O(s,"preload-code")),a===null&&(a=O(s,"preload-data")),n===null&&(n=O(s,"keepfocus")),t===null&&(t=O(s,"noscroll")),o===null&&(o=O(s,"reload")),i===null&&(i=O(s,"replacestate")),s=Ke(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Le[r??"off"],preload_data:Le[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Pe(e){const n=ye(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Nt(){const{set:e,subscribe:n}=ye(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${Pt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==xt;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function re(e,n){return e.origin!==W||!e.pathname.startsWith(n)}function xe(e){const n=jt(e),t=new ArrayBuffer(n.length),r=new DataView(t);for(let a=0;a<t.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return t}const Ot="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function jt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,r=0;for(let a=0;a<e.length;a++)t<<=6,t|=Ot.indexOf(e[a]),r+=6,r===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=r=0);return r===12?(t>>=4,n+=String.fromCharCode(t)):r===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const Dt=-1,$t=-2,Ft=-3,Vt=-4,Bt=-5,qt=-6;function Gt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===Dt)return;if(o===Ft)return NaN;if(o===Vt)return 1/0;if(o===Bt)return-1/0;if(o===qt)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],p=s[1],f=xe(p),m=new u(f);r[o]=m;break}case"ArrayBuffer":{const u=s[1],p=xe(u);r[o]=p;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==$t&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const Ye=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ye];const Mt=new Set([...Ye]);[...Mt];function Ht(e){return e.filter(n=>n!=null)}class ae{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class ze{constructor(n,t){this.status=n,this.location=t}}class we extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const Kt="x-sveltekit-invalidated",Wt="x-sveltekit-trailing-slash";function X(e){return e instanceof ae||e instanceof we?e.status:500}function Yt(e){return e instanceof we?e.text:"Internal Error"}const C=Be(Ge)??{},H=Be(qe)??{},P={url:Pe({}),page:Pe({}),navigating:ye(null),updated:Nt()};function ve(e){C[e]=_e()}function zt(e,n){let t=e+1;for(;C[t];)delete C[t],t+=1;for(t=n+1;H[t];)delete H[t],t+=1}function F(e){return location.href=e.href,new Promise(()=>{})}async function Je(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function Ce(){}let oe,pe,Z,L,ge,V;const Xe=[],Q=[];let R=null;const Ze=[],Jt=[];let j=[],_={branch:[],error:null,url:null},be=!1,ee=!1,Ne=!0,K=!1,B=!1,Qe=!1,Ae=!1,ke,E,T,I,te;const G=new Set;async function cn(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),V=e,oe=Lt(e),L=document.documentElement,ge=n,pe=e.nodes[0],Z=e.nodes[1],pe(),Z(),E=(a=history.state)==null?void 0:a[D],T=(o=history.state)==null?void 0:o[M],E||(E=T=Date.now(),history.replaceState({...history.state,[D]:E,[M]:T},""));const r=C[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await an(ge,t):nn(location.href,{replaceState:!0}),rn()}function Xt(){Xe.length=0,Ae=!1}function et(e){Q.some(n=>n==null?void 0:n.snapshot)&&(H[e]=Q.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function tt(e){var n;(n=H[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=Q[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Oe(){ve(E),Ue(Ge,C),et(T),Ue(qe,H)}async function nt(e,n,t,r){return Y({type:"goto",url:He(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(Ae=!0)}})}async function Zt(e){if(e.id!==(R==null?void 0:R.id)){const n={};G.add(n),R={id:e.id,token:n,promise:at({...e,preload:n}).then(t=>(G.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function de(e){const n=oe.find(t=>t.exec(ot(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function rt(e,n,t){var o;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),I=e.props.page,ke=new V.root({target:n,props:{...e.props,stores:P,components:Q},hydrate:t,sync:!1}),tt(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(i=>i(a)),ee=!0}function ne({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(U&&(e.pathname===U||e.pathname===U+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=ht(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Ht(t).map(u=>u.node.component),page:I}};i!==void 0&&(c.props.form=i);let l={},d=!I,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const p=t[u],f=_.branch[u];(p==null?void 0:p.data)!==(f==null?void 0:f.data)&&(d=!0),p&&(l={...l,...p.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==I.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:I.data}),c}async function Ee({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const m of f){const{href:b}=new URL(m,t);c.dependencies.add(b)}};const p={route:new Proxy(a,{get:(f,m)=>(s&&(c.route=!0),f[m])}),params:new Proxy(r,{get:(f,m)=>(s&&c.params.add(m),f[m])}),data:(o==null?void 0:o.data)??null,url:yt(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,m){let b;f instanceof Request?(b=f.url,m={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...m}):b=f;const S=new URL(b,t);return s&&u(S.href),S.origin===t.origin&&(b=S.href.slice(t.origin.length)),ee?Et(b,S.href,m):kt(b,m)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,p)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function je(e,n,t,r,a,o){if(Ae)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(Xe.some(s=>s(new URL(i))))return!0;return!1}function Se(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Qt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function De({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:I,constructors:[]}}}async function at({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((R==null?void 0:R.id)===e)return G.delete(R.token),R.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,y=_.route?a.id!==_.route.id:!1,u=Qt(_.url,t);let p=!1;const f=l.map((g,v)=>{var x;const A=_.branch[v],k=!!(g!=null&&g[0])&&((A==null?void 0:A.loader)!==g[1]||je(p,y,h,u,(x=A.server)==null?void 0:x.uses,r));return k&&(p=!0),k});if(f.some(Boolean)){try{d=await ct(t,f)}catch(g){const v=await $(g,{url:t,params:r,route:{id:e}});return G.has(o)?De({error:v,url:t,params:r,route:a}):se({status:X(g),error:v,url:t,route:a})}if(d.type==="redirect")return d}const m=d==null?void 0:d.nodes;let b=!1;const S=l.map(async(g,v)=>{var ie;if(!g)return;const A=_.branch[v],k=m==null?void 0:m[v];if((!k||k.type==="skip")&&g[1]===(A==null?void 0:A.loader)&&!je(b,y,h,u,(ie=A.universal)==null?void 0:ie.uses,r))return A;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Ee({loader:g[1],url:t,params:r,route:a,parent:async()=>{var Te;const Ie={};for(let ce=0;ce<v;ce+=1)Object.assign(Ie,(Te=await S[ce])==null?void 0:Te.data);return Ie},server_data_node:Se(k===void 0&&g[0]?{type:"skip"}:k??null,g[0]?A==null?void 0:A.server:void 0)})});for(const g of S)g.catch(()=>{});const w=[];for(let g=0;g<l.length;g+=1)if(l[g])try{w.push(await S[g])}catch(v){if(v instanceof ze)return{type:"redirect",location:v.location};if(G.has(o))return De({error:await $(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let A=X(v),k;if(m!=null&&m.includes(v))A=v.status??A,k=v.error;else if(v instanceof ae)k=v.body;else{if(await P.updated.check())return await Je(),await F(t);k=await $(v,{params:r,url:t,route:{id:a.id}})}const x=await en(g,w,i);return x?ne({url:t,params:r,branch:w.slice(0,x.idx).concat(x.node),status:A,error:k,route:a}):await it(t,{id:a.id},k,A)}else w.push(void 0);return ne({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function en(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:e,error:n,url:t,route:r}){const a={};let o=null;if(V.server_loads[0]===0)try{const l=await ct(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==W||t.pathname!==location.pathname||be)&&await F(t)}const s=await Ee({loader:pe,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Se(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return ne({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function Re(e,n){if(!e||re(e,U))return;let t;try{t=V.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=ot(t);for(const a of oe){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:gt(o),url:e}}}function ot(e){return pt(e.slice(U.length)||"/")}function st({url:e,type:n,intent:t,delta:r}){let a=!1;const o=ft(_,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return K||Ze.forEach(s=>s(i)),a?null:o}async function Y({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ce,block:d=Ce}){const h=Re(n,!1),y=st({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=E,p=T;l(),K=!0,ee&&P.navigating.set(y.navigation),te=c;let f=h&&await at(h);if(!f){if(re(n,U))return await F(n);f=await it(n,{id:null},await $(new we(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,te!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await se({status:500,error:await $(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return nt(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await P.updated.check()&&(await Je(),await F(n));if(Xt(),ve(u),et(p),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,g={[D]:E+=w,[M]:T+=w,[Me]:i};(o?history.replaceState:history.pushState).call(history,g,"",n),o||zt(E,T)}if(R=null,f.props.page.state=i,ee){_=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(Jt.map(g=>g(y.navigation)))).filter(g=>typeof g=="function");if(w.length>0){let g=function(){j=j.filter(v=>!w.includes(v))};w.push(g),j.push(...w)}ke.$set(f.props),Qe=!0}else rt(f,ge,!1);const{activeElement:m}=document;await dt();const b=t?t.scroll:a?_e():null;if(Ne){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==m&&document.activeElement!==document.body;!r&&!S&&on(),Ne=!0,f.props.page&&(I=f.props.page),K=!1,e==="popstate"&&tt(T),y.fulfil(void 0),j.forEach(w=>w(y.navigation)),P.navigating.set(null)}async function it(e,n,t,r){return e.origin===W&&e.pathname===location.pathname&&!be?await se({status:r,error:t,url:e,route:n}):await F(e)}function tn(){let e;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){o.defaultPrevented||r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(de(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=We(o,L);if(!s)return;const{url:c,external:l,download:d}=he(s,U);if(l||d)return;const h=J(s),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(i<=h.preload_data){const u=Re(c,!1);u&&Zt(u)}else i<=h.preload_code&&de(c.pathname)}function a(){t.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=he(o,U);if(s||c)continue;const l=J(o);l.reload||(l.preload_code===z.viewport&&t.observe(o),l.preload_code===z.eager&&de(i.pathname))}}j.push(a),a()}function $(e,n){if(e instanceof ae)return e.body;const t=X(e),r=Yt(e);return V.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function nn(e,n={}){return e=He(e),e.origin!==W?Promise.reject(new Error("goto: invalid URL")):nt(e,n,0)}function rn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Oe(),!K){const a=ft(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Ze.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Oe()}),(n=navigator.connection)!=null&&n.saveData||tn(),L.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=We(t.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:i,download:s}=he(r,U);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=J(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=a.href.split("#"),y=d===fe(location);if(o||c.reload&&(!y||!h)){st({url:a,type:"link"})?K=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=_.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const p=r.ownerDocument.getElementById(decodeURIComponent(h));p&&(p.scrollIntoView(),p.focus())}return}if(B=!0,ve(E),e(a),!c.replace_state)return;B=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),Y({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(re(s,U))return;const c=t.target,l=J(c);if(l.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),Y({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[D]){const a=t.state[D];if(te={},a===E)return;const o=C[a],i=t.state[Me]??{},s=new URL(t.state[Ct]??location.href),c=t.state[M],l=fe(location)===fe(_.url);if(c===T&&(Qe||l)){e(s),C[E]=_e(),o&&scrollTo(o.x,o.y),i!==I.state&&(I={...I,state:i},ke.$set({page:I})),E=a;return}const h=a-E;await Y({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{E=a,T=c},block:()=>{history.go(-h)},nav_token:te})}else if(!B){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[D]:++E,[M]:T},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&P.navigating.set(null)});function e(t){_.url=t,P.page.set({...I,url:t}),P.page.notify()}}async function an(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){be=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Re(c,!1)||{});let l;try{const d=r.map(async(u,p)=>{const f=i[p];return f!=null&&f.uses&&(f.uses=lt(f.uses)),Ee({loader:V.nodes[u],url:c,params:a,route:o,parent:async()=>{const m={};for(let b=0;b<p;b+=1)Object.assign(m,(await d[b]).data);return m},server_data_node:Se(f)})}),h=await Promise.all(d),y=oe.find(({id:u})=>u===o.id);if(y){const u=y.layouts;for(let p=0;p<u.length;p++)u[p]||h.splice(p,0,void 0)}l=ne({url:c,params:a,branch:h,status:n,error:t,form:s,route:y??null})}catch(d){if(d instanceof ze){await F(new URL(d.location,location.href));return}l=await se({status:X(d),error:await $(d,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),rt(l,e,!0)}async function ct(e,n){var a;const t=new URL(e);t.pathname=vt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Wt,"1"),t.searchParams.append(Kt,n.map(o=>o?"1":"0").join(""));const r=await Ve(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ae(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return Gt(y,{Promise:u=>new Promise((p,f)=>{i.set(u,{fulfil:p,reject:f})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const p=d.indexOf(`
`);if(p===-1)break;const f=JSON.parse(d.slice(0,p));if(d=d.slice(p+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=lt(m.uses),m.data=l(m.data))}),o(f);else if(f.type==="chunk"){const{id:m,data:b,error:S}=f,w=i.get(m);i.delete(m),S?w.reject(l(S)):w.fulfil(l(b))}}}})}function lt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function on(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ft(e,n,t,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{cn as a,P as s};
