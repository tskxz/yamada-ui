import{d as n}from"./index-CQE_718C.js";import{m as s,p as o,B as p,R as g,T as l,X as _}from"./factory-CEsHZeW8.js";const x=(e=n)=>(...t)=>({merge:c=!0,pick:d=[],omit:m=[]}={})=>{let r=[...t],a=t[t.length-1];return m.length&&(e=g(e,m)),d.length&&(e=l(e,d)),!_(a)&&r.length>1?(r=r.slice(0,r.length-1),c&&(a=s(e,a))):a=c?e:{},r.reduce((f,u)=>s(f,p(u,f)),a)},C=x(n),$=(e,t)=>s(o(n,e,{}),t??{}),j=(e,t)=>{const c={theme:{__config:{},__cssMap:{},__cssVars:{},__breakpoints:void 0}};return s(p(o(n,`styles.${e}`,{}),c),p(t,c)??{})},z=(e,t)=>s(o(n,`components.${e}`,{}),t??{}),O=(e,t)=>s(o(n,`components.${e}.sizes`,{}),t??{}),k=(e,t)=>s(o(n,`components.${e}.variants`,{}),t??{}),v=(e,t)=>s(o(n,`components.${e}.defaultProps`,{}),t??{});export{$ as a,j as b,z as c,k as d,C as e,O as f,v as g};