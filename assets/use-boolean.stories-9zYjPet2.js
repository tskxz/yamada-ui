import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-Du0-7Fls.js";import{T as c}from"./text-D1mCFSxx.js";import{B as g}from"./button-DfQHZeQx.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-BVTnHHBW.js";import"./factory-CEsHZeW8.js";import"./extends-CF3RwP-h.js";import"./theme-provider-woLZZCt0.js";import"./use-ripple-bahltC27.js";import"./index-UcjmprJc.js";import"./motion-CcTWI5_V.js";import"./motion-Cp3z4NrY.js";import"./loading-BHrGiIMj.js";import"./icon-SoeERY4p.js";import"./index-COQaqARl.js";const _={title:"Hooks / useBoolean"},e=()=>{const[r,{toggle:n}]=p();return o.jsxs(o.Fragment,{children:[o.jsxs(c,{children:["state: ",String(r)]}),o.jsx(g,{onClick:n,children:"Click me to toggle the boolean value"})]})},t=()=>{const[r,{on:n,off:f}]=p();return o.jsx(c,{w:"full",onMouseEnter:n,onMouseLeave:f,children:r?"I am hovered":"Put mouse over me please"})};var s,a,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var l,i,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [flg, {
    on,
    off
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const F=["basic","useOnOff"];export{F as __namedExportsOrder,e as basic,_ as default,t as useOnOff};