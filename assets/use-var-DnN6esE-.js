import{r as $}from"./index-BwDkhjyp.js";import{V as j,W as k,F as p,m as C,X as R}from"./factory-DfCPDZht.js";const h=(o,n)=>`${o}-${n}`,y=(o,n,c=h)=>{const a=$.useContext(j);return $.useMemo(()=>E(o,n,c)(a),[o,n,c,a])},E=(o,n,c=h)=>a=>{const r=new Map,d={};if(!a.__breakpoints)return[[],d];const{isResponsive:V}=a.__breakpoints,g=k(o,{separator:"$$",shouldProcess:m=>!V(m)});return Object.entries(g).forEach(([m,t],x)=>{const l=m.split("$$");if(!l.some(s=>n.includes(s)))return;const e=l.at(-1),u=l.slice(0,-1);if(r.has(e)){const s=r.get(e);if(!s)return;const i=u.reduceRight((b,f)=>({[f]:b}),p(t)?t:{base:t});t=C(s.value,i),r.set(e,{...s,value:t})}else{const s=c(e,x),i=R[e],b=p(i)?i.token:void 0;t={base:void 0,...u.reduceRight((O,_)=>({[_]:O}),p(t)?t:{base:t})},r.set(e,{name:s,token:b,value:t}),d[e]=`$${s}`}}),[[...r.values()],d]};export{y as u};
