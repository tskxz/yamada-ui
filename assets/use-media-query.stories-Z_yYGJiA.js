import{j as a}from"./extends-CwFRzn3r.js";import{r as f}from"./index-BwDkhjyp.js";import{ac as D,$ as g,F as E}from"./factory-BFmlPmGv.js";import{T as h}from"./text-Cd4dmvuW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-EAJDzyrD.js";import"./theme-provider-BxuddooS.js";const w=(t,{ssr:c=!0,fallback:m}={})=>{const{getWindow:l}=D(),d=E(t)?t:[t];let p=E(m)?m:[m];p=p.filter(r=>r!=null);const[Q,x]=f.useState(()=>d.map((r,n)=>{var s;return{media:r,matches:c?!!p[n]:!!((s=l())!=null&&s.matchMedia(r).matches)}}));return f.useEffect(()=>{const r=l();if(!r)return;x(d.map(e=>({media:e,matches:r.matchMedia(e).matches})));const n=d.map(e=>r.matchMedia(e)),s=e=>{x(y=>y.slice().map(u=>u.media===e.media?{...u,matches:e.matches}:u))};return n.forEach(e=>{g(e.addListener)?e.addListener(s):e.addEventListener("change",s)}),()=>{n.forEach(e=>{g(e.removeListener)?e.removeListener(s):e.removeEventListener("change",s)})}},[l]),Q.map(r=>r.matches)},R={title:"Hooks / useMediaQuery"},o=()=>{const[t]=w("(min-width: 1280px)");return a.jsx(h,{children:t?"larger than 1280px":"smaller than 1280px"})},i=()=>{const[t,c]=w(["(min-width: 1280px)","(prefers-color-scheme: dark)"]);return a.jsxs(a.Fragment,{children:[a.jsx(h,{children:t?"larger than 1280px":"smaller than 1280px"}),a.jsx(h,{children:c?"color mode is dark":"color mode is light"})]})};var L,M,T;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [flg] = useMediaQuery("(min-width: 1280px)");
  return <Text>{flg ? "larger than 1280px" : "smaller than 1280px"}</Text>;
}`,...(T=(M=o.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var k,j,v;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isLarge, isDark] = useMediaQuery(["(min-width: 1280px)", "(prefers-color-scheme: dark)"]);
  return <>
      <Text>{isLarge ? "larger than 1280px" : "smaller than 1280px"}</Text>
      <Text>{isDark ? "color mode is dark" : "color mode is light"}</Text>
    </>;
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const W=["basic","useMulti"];export{W as __namedExportsOrder,o as basic,R as default,i as useMulti};
