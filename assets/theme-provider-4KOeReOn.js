import{a as ye,j as F}from"./jsx-runtime-5BUNAZ9W.js";import{k as D,n as G,a8 as ke,W as Se,A as U,a9 as Y,l as de,m as M,V as J,o as L,p as E,T as $,B as O,R as N,aa as X,ab as je,ac as ze,ad as Q,j as me,ae as fe,af as we}from"./factory-1uJrB2de.js";import{r as k}from"./index-4g5l5LRQ.js";const xe=(e,t="")=>e.replace(/\s+/g,t),A=(e,...t)=>t.join(` ${e} `).replace(/calc/g,""),Z=(...e)=>`calc(${A("+",...e)})`,ee=(...e)=>`calc(${A("-",...e)})`,B=(...e)=>`calc(${A("*",...e)})`,te=(...e)=>`calc(${A("/",...e)})`,ne=e=>e!=null&&!isNaN(parseFloat(e.toString()))?String(e).startsWith("-")?String(e).slice(1):`-${e}`:B(e,-1),y=Object.assign(e=>({add:(...t)=>y(Z(e,...t)),subtract:(...t)=>y(ee(e,...t)),multiply:(...t)=>y(B(e,...t)),divide:(...t)=>y(te(e,...t)),negate:()=>y(ne(e))}),{add:Z,subtract:ee,multiply:B,divide:te,negate:ne});function S(e,t,n){return Math.min(Math.max(e,n),t)}class ve extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var v=ve;function T(e){if(typeof e!="string")throw new v(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=Re.test(e)?Ce(e):e;const n=Me.exec(t);if(n){const a=Array.from(n).slice(1);return[...a.slice(0,3).map(c=>parseInt(C(c,2),16)),parseInt(C(a[3]||"f",2),16)/255]}const s=Ee.exec(t);if(s){const a=Array.from(s).slice(1);return[...a.slice(0,3).map(c=>parseInt(c,16)),parseInt(a[3]||"ff",16)/255]}const r=Oe.exec(t);if(r){const a=Array.from(r).slice(1);return[...a.slice(0,3).map(c=>parseInt(c,10)),parseFloat(a[3]||"1")]}const o=qe.exec(t);if(o){const[a,c,l,i]=Array.from(o).slice(1).map(parseFloat);if(S(0,100,c)!==c)throw new v(e);if(S(0,100,l)!==l)throw new v(e);return[...Ve(a,c,l),Number.isNaN(i)?1:i]}throw new v(e)}function $e(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}const se=e=>parseInt(e.replace(/_/g,""),36),Te="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const n=se(t.substring(0,3)),s=se(t.substring(3)).toString(16);let r="";for(let o=0;o<6-s.length;o++)r+="0";return e[n]=`${r}${s}`,e},{});function Ce(e){const t=e.toLowerCase().trim(),n=Te[$e(t)];if(!n)throw new v(e);return`#${n}`}const C=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),Me=new RegExp(`^#${C("([a-f0-9])",3)}([a-f0-9])?$`,"i"),Ee=new RegExp(`^#${C("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),Oe=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${C(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),qe=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,Re=/^[a-z]+$/i,re=e=>Math.round(e*255),Ve=(e,t,n)=>{let s=n/100;if(t===0)return[s,s,s].map(re);const r=(e%360+360)%360/60,o=(1-Math.abs(2*s-1))*(t/100),a=o*(1-Math.abs(r%2-1));let c=0,l=0,i=0;r>=0&&r<1?(c=o,l=a):r>=1&&r<2?(c=a,l=o):r>=2&&r<3?(l=o,i=a):r>=3&&r<4?(l=a,i=o):r>=4&&r<5?(c=a,i=o):r>=5&&r<6&&(c=o,i=a);const m=s-o/2,u=c+m,d=l+m,h=i+m;return[u,d,h].map(re)};function he(e,t,n,s){return`rgba(${S(0,255,e).toFixed()}, ${S(0,255,t).toFixed()}, ${S(0,255,n).toFixed()}, ${parseFloat(S(0,1,s).toFixed(3))})`}function _e(e,t,n){const s=(K,be)=>be===3?K:K/255,[r,o,a,c]=T(e).map(s),[l,i,m,u]=T(t).map(s),d=u-c,h=n*2-1,f=((h*d===-1?h:h+d/(1+h*d))+1)/2,_=1-f,p=(r*_+l*f)*255,z=(o*_+i*f)*255,g=(a*_+m*f)*255,b=u*n+c*(1-n);return he(p,z,g,b)}function Fe(e,t){const[n,s,r,o]=T(e);return he(n,s,r,o-t)}function q(e){const[t,n,s,r]=T(e);let o=a=>{const c=S(0,255,a).toString(16);return c.length===1?`0${c}`:c};return`#${o(t)}${o(n)}${o(s)}${r<1?o(Math.round(r*255)):""}`}const Ae=[50,100,200,300,400,500,600,700,800,900,950],rt=e=>e==="gray"||e==="neutral",ot=e=>e==="yellow"||e==="cyan"||e==="lime",W=(e,t)=>(n={},s)=>{var l;const[r,o]=e.split("."),[,a]=Object.entries(((l=n.semantics)==null?void 0:l.colorSchemes)??{}).find(([i])=>r===i)??[];a&&(e=`${a}.${o}`);const c=D(n,`colors.${e}`,e);try{return G(c)?q(String(s!=="dark"?c[0]:c[1])):q(String(c))}catch{return t??"#000000"}},at=(e,t)=>(n,s)=>{const r=W(e,e)(n,s);return q(_e(r,"#fff",t/100))},ct=(e,t)=>(n,s)=>{const r=W(e,e)(n,s);return q(_e(r,"#000",t/100))},it=(e,t)=>(n,s)=>{const r=W(e,e)(n,s);return Fe(r,1-t)},lt=({string:e,colors:t}={})=>{const n=We();return e&&t?Pe(e,t):e&&!t?Ie(e):t&&!e?He(t):n},We=()=>`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`,Ie=e=>{let t=0;if(e.length===0)return t.toString();for(let s=0;s<e.length;s+=1)t=e.charCodeAt(s)+((t<<5)-t),t=t&t;let n="#";for(let s=0;s<3;s+=1){const r=t>>s*8&255;n+=`00${r.toString(16)}`.substr(-2)}return n},Pe=(e,t)=>{let n=0;if(e.length===0)return t[0];for(let s=0;s<e.length;s+=1)n=e.charCodeAt(s)+((n<<5)-n),n=n&n;return n=(n%t.length+t.length)%t.length,t[n]},He=e=>e[Math.floor(Math.random()*e.length)],Ge=e=>{const[t,n,s]=T(e);return(t*299+n*587+s*114)/1e3},Ne=e=>(t,n)=>{const s=t?W(e)(t,n):e;return Ge(s)<128?"dark":"light"},ut=e=>(t,n)=>Ne(e)(t,n)==="light",I=(e,t)=>{const n=["@media screen"];return e&&n.push("and",`(min-width: ${e}px)`),t&&n.push("and",`(max-width: ${t}px)`),n.length>1?n.join(" "):void 0},Be=(e,t)=>{const n=t==="down";return Object.entries(e).map(([s,r],o,a)=>{const[,c]=a[o+1]??[];let l=n?c:r,i=n?r:c;s==="base"&&(n?i=void 0:l=void 0),n?l&&(l+=1):i&&(i-=1);const m=I(void 0,i),u=I(l),d=I(l,i);return{breakpoint:s,minW:l,maxW:i,query:t==="down"?m:u,maxWQuery:m,minWQuery:u,minMaxQuery:d}})},De=(e,t)=>Object.fromEntries(Object.entries(e).map(([n,s])=>[n,ke(s)]).sort((n,s)=>t==="down"?s[1]-n[1]:n[1]-s[1])),Le=(e,t="down")=>{if(!e)return;e.base=t==="down"?"9999px":"0px",e=De(e,t);const n=Se(e),s=Be(e,t);return{keys:n,isResponsive:o=>{const a=Object.keys(o);return a.length>0&&a.every(c=>n.includes(c))},queries:s}},Qe=(e,t)=>{const n=`--${[t,xe(e,"-")].filter(Boolean).join("-")}`,s=`var(${n})`;return{variable:n,reference:s}},oe=(e,t)=>(e=e.replace(/\./g,"-"),Qe(e,t)),w=(e,t="ui")=>({baseTokens:n,cssMap:s={},cssVars:r={}}={})=>{for(let[o,{isSemantic:a,value:c}]of Object.entries(e)){const l=(f="")=>{const[_]=o.split("."),p=[_,f].join(".");if(!(e[p]??(n==null?void 0:n[p])))return[,f];const{variable:g,reference:b}=oe(p,t);return[g,b]},{variable:i,reference:m}=oe(o,t);let u,d;if(o.startsWith("animations."))G(c)?u=c.map(f=>U(f,{__cssMap:s})).join(","):u=U(c,{__cssMap:s});else{let[f,_]=G(c)?[...c]:[c];if(o.startsWith("gradients.")){const[p,z]=l(f),[g,b]=l(_);p?u=z:u=Y(l(f)[1],{__cssMap:s}),g?d=b:d=Y(_,{__cssMap:s})}else u=f,d=_}if(!a){if(o.startsWith("spaces")&&!de(u)){const f=o.split("."),[_,...p]=f,z=`${_}.-${p.join(".")}`,g=y.negate(u),b=y.negate(m);s[z]={value:g,var:i,ref:b}}r[i]=u,d&&(r=M(r,{[J._dark]:{[i]:d}})),s[o]={value:u,var:i,ref:m};continue}const[h,j]=l(u);if(r=M(r,{[i]:j}),d){const[,f]=l(d);r=M(r,{[J._dark]:{[i]:f}})}s[o]={value:h??u,var:i,ref:m}}return{cssMap:s,cssVars:r}},ae=["blurs","borders","colors","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","spaces","zIndices"],ce=["gradients"],Ke=(e,t)=>{var u;e=Ue(e);const{breakpoints:n,themeSchemes:s}=e??{},r=(u=t==null?void 0:t.var)==null?void 0:u.prefix,o=x(e),a=x(e,"secondary"),c=x(e,"animation");let{cssMap:l,cssVars:i}=ie(w(o,r),w(a,r),w(c,r))();if(s)for(const[d,h]of Object.entries(s)){const j=x(h),f=x(h,"secondary"),_=x(h,"animation");let{cssVars:p}=ie(w(j,r),w(f,r),w(_,r))({...o,...a,...c});i={...i,[`[data-theme=${d}] &:not([data-theme]), &[data-theme=${d}]`]:p}}return Object.assign(e,{__config:t,__cssVars:{...{},...i},__cssMap:l,__breakpoints:Le(n,t==null?void 0:t.breakpoint)}),e},x=(e,t="primary")=>{let n=[],s=[],r=[];switch(t){case"primary":n=[...ae,"transitions"],s=[...ae,"transitions","colorSchemes"];break;case"secondary":n=[...ce],s=[...ce];break;case"animation":n=["animations"],s=["animations"],r=["keyframes"];break}const o=N(e,n),a=N(e.semantics??{},s),c=Object.entries(X(o,1/0,r)).map(([i,m])=>[i,{isSemantic:!1,value:m}]),l=Object.entries(X(a,1/0,r)).reduce((i,[m,u])=>{if(m.startsWith("colorSchemes.")){const[,d]=m.split(".");Ae.forEach(h=>{const j={isSemantic:!0,value:`${u}.${h}`};i.push([`colors.${d}.${h}`,j])})}else{const d={isSemantic:!0,value:u};i.push([m,d])}return i},[]);return je([...c,...l])},ie=(...e)=>t=>{let n={},s={};for(const r of e){const{cssMap:o,cssVars:a}=r({baseTokens:t,cssMap:n,cssVars:s});n={...n,...o},s={...s,...a}}return{cssMap:n,cssVars:s}},Ue=e=>L(e,["__cssMap","__cssVar","__breakpoints"]),dt=e=>L(e,["size","variant","colorScheme"]),mt=(e,...t)=>({omit:n=[],pick:s=[]}={})=>t.reduce((r,o)=>R(pe(r)({omit:n,pick:s}),o),e),ft=(e,...t)=>({omit:n=[],pick:s=[]}={})=>t.reduce((r,o)=>R(pe(r)({omit:n,pick:s,isMulti:!0}),o),e),R=(e,t)=>{let n=Object.assign({},e);if(E(t)&&E(e))for(const[s,r]of Object.entries(t)){const o=e[s];e.hasOwnProperty(s)?!$(o)&&!$(r)?n[s]=R(o,r):n[s]=a=>R(O(o,a),O(r,a)):Object.assign(n,{[s]:r})}else n=t;return n},pe=e=>({omit:t,pick:n,isMulti:s=!1})=>(E(e)&&(t.length&&(e=V(e,t,s)(L)),n.length&&(e=V(e,n,s)(N))),e),V=(e,t,n,s=[])=>r=>(E(e)&&(e=r(e,t),Object.entries(e??{}).forEach(([o,a])=>{const c=t.filter(i=>i!==o),l=[...s,o];Ye(l,n)&&($(a)?e[o]=i=>V(a(i),c,n,l)(r):e[o]=V(a,c,n,l)(r))})),e),Ye=(e,t)=>{switch(e[0]){case"baseStyle":return e.length<(t?2:1);case"variants":case"sizes":return e.length<(t?3:2);default:return!1}},ht=(e,t,n=!0)=>{const s={};return Object.entries(e).forEach(([r,o])=>{switch(r){case"baseStyle":$(o)?s[r]=a=>o(a)[t]:s[r]=o[t];break;case"variants":case"sizes":s[r]=Object.entries(o).reduce((a,[c,l])=>($(l)?a[c]=i=>l(i)[t]:a[c]=l[t],a),{});break;case"defaultProps":n&&(s[r]=o);break}}),s},P="ui-theme-scheme",ge=!!(globalThis!=null&&globalThis.document),le=e=>({ssr:!1,type:"localStorage",get:(t="base")=>{if(!ge)return t;try{return localStorage.getItem(e)||t}catch{return t}},set:t=>{try{localStorage.setItem(e,String(t))}catch{}}}),ue=(e,t)=>{const n=e.match(new RegExp(`(^| )${t}=([^;]+)`));return n==null?void 0:n[2]},H=(e,t)=>({ssr:!!t,type:"cookie",get:(n="base")=>t?ue(t,e)||n:ge&&ue(document.cookie,e)||n,set:n=>{document.cookie=`${e}=${n}; max-age=31536000; path=/`}}),Je={localStorage:le(P),cookieStorage:H(P),ssr:e=>H(P,e),createLocalStorage:le,createCookieStorage:H},{localStorage:Xe}=Je,_t=({theme:e={},config:t,themeSchemeManager:n=Xe,children:s})=>{const[r,o]=k.useState(n.get(t==null?void 0:t.initialThemeScheme)),a=k.useCallback(l=>{const i=t!=null&&t.disableTransitionOnChange?et():void 0;document.documentElement.dataset.theme=l,i==null||i(),o(l),n.set(l)},[t,n]),c=k.useMemo(()=>Ke(e,t),[e,t]);return k.useEffect(()=>{const l=n.get();l&&a(l)},[a,n]),ye(ze,{theme:{themeScheme:r,changeThemeScheme:a,...c},children:[F(Ze,{}),s]})},Ze=()=>F(Q,{styles:({__cssVars:e})=>({":host, :root, [data-mode]":e})}),pt=()=>{const{colorMode:e}=me();return F(Q,{styles:t=>{const{themeScheme:n}=t;let s=D(t,"styles.resetStyle",{});const r=O(s,{theme:t,colorMode:e,themeScheme:n});if(r)return fe(r)(t)}})},gt=()=>{const{colorMode:e}=me();return F(Q,{styles:t=>{const{themeScheme:n}=t;let s=D(t,"styles.globalStyle",{});const r=O(s,{theme:t,colorMode:e,themeScheme:n});if(r)return fe(r)(t)}})},bt=()=>{const{themeScheme:e,changeThemeScheme:t,...n}=k.useContext(we);if(!n)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`");const s=k.useMemo(()=>{var a;if(de(e)||e==="base")return n;const o=(a=n.themeSchemes)==null?void 0:a[e];return o?M(n,o):n},[e,n]);return k.useMemo(()=>({themeScheme:e,changeThemeScheme:t,theme:s,internalTheme:n}),[e,t,s,n])},et=()=>{const e=document.createElement("style"),t=document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}");return e.appendChild(t),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(e)})})}};export{gt as G,pt as R,_t as T,rt as a,it as b,I as c,ot as d,mt as e,W as g,ut as i,ft as m,dt as o,ht as p,lt as r,ct as s,at as t,bt as u};
