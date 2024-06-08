import{r as m}from"./index-uCp2LrAq.js";import{b as P,i as B,g as j}from"./event-imqIgfLG.js";import{u as J,J as K,s as T}from"./factory-C0k1XOS4.js";const U=e=>{const t=m.useRef(null);return t.current=e,t},H=1/60*1e3,G=typeof performance<"u"?()=>performance.now():()=>Date.now(),O=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(G()),H);function Q(e){let t=[],r=[],n=0,o=!1,a=!1;const u=new WeakSet,f={schedule:(s,i=!1,c=!1)=>{const l=c&&o,d=l?t:r;return i&&u.add(s),d.indexOf(s)===-1&&(d.push(s),l&&o&&(n=t.length)),s},cancel:s=>{const i=r.indexOf(s);i!==-1&&r.splice(i,1),u.delete(s)},process:s=>{if(o){a=!0;return}if(o=!0,[t,r]=[r,t],r.length=0,n=t.length,n)for(let i=0;i<n;i++){const c=t[i];c(s),u.has(c)&&(f.schedule(c),e())}o=!1,a&&(a=!1,f.process(s))}};return f}const X=40;let D=!0,g=!1,S=!1;const x={delta:0,timestamp:0},y=["read","update","preRender","render","postRender"],b=y.reduce((e,t)=>(e[t]=Q(()=>g=!0),e),{}),Y=y.reduce((e,t)=>{const r=b[t];return e[t]=(n,o=!1,a=!1)=>(g||_(),r.schedule(n,o,a)),e},{});y.reduce((e,t)=>(e[t]=b[t].cancel,e),{});y.reduce((e,t)=>(e[t]=()=>b[t].process(x),e),{});const Z=e=>b[e].process(x),V=e=>{g=!1,x.delta=D?H:Math.max(Math.min(e-x.timestamp,X),1),x.timestamp=e,S=!0,y.forEach(Z),S=!1,g&&(D=!1,O(V))},_=()=>{g=!0,D=!0,S||O(V)},L=()=>x,N=(e,t)=>({x:e.x-t.x,y:e.y-t.y}),z=(e,t)=>({point:e.point,delta:N(e.point,t[t.length-1]),offset:N(e.point,t[0]),velocity:k(t,.1)}),$=e=>e*1e3,k=(e,t)=>{if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null;const o=e[e.length-1];for(;r>=0&&(n=e[r],!(o.timestamp-n.timestamp>$(t)));)r--;if(!n)return{x:0,y:0};const a=(o.timestamp-n.timestamp)/1e3;if(a===0)return{x:0,y:0};const u={x:(o.x-n.x)/a,y:(o.y-n.y)/a};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u},ee=(...e)=>t=>e.reduce((r,n)=>n(r),t),R=(e,t)=>Math.abs(e-t),I=e=>"x"in e&&"y"in e,te=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return R(e,t);if(I(e)&&I(t)){const r=R(e.x,t.x),n=R(e.y,t.y);return Math.sqrt(r**2+n**2)}return 0},ne=(e,t,r=3)=>{if(B(e))return;const n=e.view??window,o={point:j(e)},{timestamp:a}=L(),{onSessionStart:u,onStart:f,onMove:s,onEnd:i,onSessionEnd:c}=t,l=[{...o.point,timestamp:a}];let d=null,w=null,E=null;e.stopPropagation(),e.preventDefault(),u==null||u(e,z(o,l));const A=()=>{if(!(w&&E))return;const p=z(E,l),h=d!==null,v=te(p.offset,{x:0,y:0})>=r;if(!h&&!v)return;const{timestamp:q}=L();l.push({...p.point,timestamp:q}),h||(f==null||f(w,p),d=w),s==null||s(w,p)},C=(p,h)=>{w=p,E=h,Y.update(A,!0)},F=(p,h)=>{const v=z(h,l);c==null||c(p,v),M(),!(!i||!d)&&(i==null||i(p,v))},W=p=>{t=p},M=ee(P(n,"pointermove",C),P(n,"pointerup",F),P(n,"pointercancel",F));return{updateHandlers:W,removeListeners:M}},ae=(e,{onMove:t,onStart:r,onEnd:n,onSessionStart:o,onSessionEnd:a,threshold:u})=>{const f=!!t||!!r||!!n||!!o||!!a,s=m.useRef(null),i=U({onSessionStart:o,onSessionEnd:a,onStart:r,onMove:t,onEnd:(c,l)=>{s.current=null,n==null||n(c,l)}});m.useEffect(()=>{var c;(c=s.current)==null||c.updateHandlers(i.current)}),m.useEffect(()=>{const c=e.current;return!c||!f?void 0:P(c,"pointerdown",d=>{s.current=ne(d,i.current,u)})},[e,f,i,u]),m.useEffect(()=>()=>{var c;(c=s.current)==null||c.removeListeners(),s.current=null},[])},se=(e,t)=>{if(!e){t(void 0);return}t({width:e.offsetWidth,height:e.offsetHeight});const r=e.ownerDocument.defaultView??window,n=new r.ResizeObserver(o=>{if(!T(o)||!o.length)return;const[a]=o;let u,f;if("borderBoxSize"in a){const s=a.borderBoxSize,i=T(s)?s[0]:s;u=i.inlineSize,f=i.blockSize}else u=e.offsetWidth,f=e.offsetHeight;t({width:u,height:f})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)},re=(e,t)=>{var o;if(!e||!e.parentElement)return;const r=((o=e.ownerDocument)==null?void 0:o.defaultView)??window,n=new r.MutationObserver(()=>{t()});return n.observe(e.parentElement,{childList:!0}),()=>{n.disconnect()}},oe=({getNodes:e,observeMutation:t=!0})=>{const[r,n]=m.useState([]),[o,a]=m.useState(0);return J(()=>{const u=e(),f=u.map((s,i)=>se(s,c=>{n(l=>[...l.slice(0,i),c,...l.slice(i+1)])}));if(t){const s=u[0];f.push(re(s,()=>{a(i=>i+1)}))}return()=>{f.forEach(s=>{s==null||s()})}},[o]),r},fe=e=>{const[t]=oe({observeMutation:!1,getNodes:()=>[K(e)?e.current:e]});return t};export{fe as a,ae as b,oe as c,U as u};