import{j as r}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{T as u}from"./text-D-WKVNTg.js";import{T as p}from"./tag-1yYXCTpa.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-C3e1SZSW.js";import"./factory-DqlmaKnk.js";import"./theme-provider-DKpED47L.js";import"./index-DRSk0S3C.js";import"./index-C2A1EDXj.js";import"./icon-BWDJazoz.js";import"./index-CvHBrwTd.js";const f=()=>{const{userAgent:t}=window.navigator,e=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,a=/(Win32)|(Win64)|(Windows)|(WinCE)/i,c=/(iPhone)|(iPad)|(iPod)/i,d=/Android/i,m=/Linux/i;return e.test(t)?"macos":c.test(t)?"ios":a.test(t)?"windows":d.test(t)?"android":m.test(t)?"linux":"undetermined"},x=()=>typeof window<"u"?f():"undetermined",A={title:"Hooks / useOS"},o=()=>{const t=x();return r.jsxs(u,{children:["Your os is ",r.jsx(p,{children:t})]})};var s,i,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const os = useOS();
  return <Text>
      Your os is <Tag>{os}</Tag>
    </Text>;
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const C=["basic"];export{C as __namedExportsOrder,o as basic,A as default};
