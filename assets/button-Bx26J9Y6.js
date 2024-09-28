import{j as e}from"./extends-CwFRzn3r.js";import{r as c}from"./index-BwDkhjyp.js";import{o as $,b as d,c as x,d as R,m as q,a as J}from"./factory-CYpx3TMG.js";import{f as G}from"./forward-ref-BWI-Phbn.js";import{u as K,R as Q}from"./use-ripple-ug6Wud9C.js";import{L}from"./loading-DndL1UZp.js";import{u as V}from"./use-component-style-CfUS8Ki1.js";import{o as W}from"./theme-provider-BZKkW4ID.js";const[X,Y]=$({strict:!1,name:"ButtonGroupContext"}),I=G(({className:n,size:t,variant:s,direction:o,isAttached:a,isDisabled:r,gap:l,columnGap:b,rowGap:g,...p},y)=>{const u=o==="column"||o==="column-reverse",i={display:"inline-flex",flexDirection:o},j=c.useMemo(()=>({size:t,variant:s,isDisabled:r}),[t,s,r]);return a?Object.assign(i,{"> *:first-of-type:not(:last-of-type)":u?{borderBottomRadius:0,marginBlockEnd:"-1px"}:{borderRightRadius:0,marginInlineEnd:"-1px"},"> *:not(:first-of-type):not(:last-of-type)":u?{borderRadius:0,marginBlockStart:"-1px"}:{borderRadius:0,marginInlineEnd:"-1px"},"> *:not(:first-of-type):last-of-type":u?{borderTopRadius:0,marginBlockStart:"-1px"}:{borderLeftRadius:0}}):Object.assign(i,{gap:l,columnGap:b,rowGap:g}),e.jsx(X,{value:j,children:e.jsx(d.div,{ref:y,role:"group",className:x("ui-button-group",n),"data-attached":R(a),__css:i,...p})})});I.displayName="ButtonGroup";I.__ui__="ButtonGroup";const T=G(({children:n,__isProcessSkip:t,__styles:s,...o},a)=>{const r=Y(),[l,b]=V("Button",{...r,...o},{isProcessSkip:t,styles:s}),{className:g,as:p,type:y,isRounded:u,isLoading:i,isActive:j,isDisabled:w=r==null?void 0:r.isDisabled,leftIcon:E,rightIcon:M,loadingIcon:D,loadingText:h,loadingPlacement:N="start",disableRipple:v,__css:k,...C}=W(b),B=w||i,{ref:O,type:A}=Z(p),{onPointerDown:z,...F}=K({...C,isDisabled:v||B}),H=c.useMemo(()=>{const U="_focus"in l?q(l._focus??{},{zIndex:"fallback(yamcha, 1)"}):{};return{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"fallback(2, 0.5rem)",appearance:"none",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",overflow:"hidden",outline:"none",...l,...k,...r?{_focus:U}:{},...u?{borderRadius:"fallback(full, 9999px)"}:{}}},[l,k,r,u]),P={leftIcon:E,rightIcon:M,children:n},S={loadingIcon:D,loadingText:h};return e.jsxs(d.button,{ref:J(a,O),as:p,className:x("ui-button",g),type:y??A,disabled:B,"data-active":R(j),"data-loading":R(i),__css:H,...C,onPointerDown:z,children:[i&&N==="start"?e.jsx(m,{className:"ui-button__loading--start",...S}):null,i?h||e.jsx(d.span,{opacity:0,children:e.jsx(f,{...P})}):e.jsx(f,{...P}),i&&N==="end"?e.jsx(m,{className:"ui-button__loading--end",...S}):null,e.jsx(Q,{isDisabled:v||B,...F})]})});T.displayName="Button";T.__ui__="Button";const m=({className:n,loadingIcon:t,loadingText:s})=>{const o=c.useMemo(()=>({display:"flex",alignItems:"center",position:s?"relative":"absolute",fontSize:"1em",lineHeight:"normal"}),[s]),a=c.useMemo(()=>typeof t=="string"?e.jsx(L,{color:"current",variant:t}):t||e.jsx(L,{color:"current"}),[t]);return e.jsx(d.div,{className:x("ui-button__loading",n),__css:o,children:a})};m.displayName="Loading";m.__ui__="Loading";const f=({leftIcon:n,rightIcon:t,children:s})=>e.jsxs(e.Fragment,{children:[n?e.jsx(_,{children:n}):null,s,t?e.jsx(_,{children:t}):null]});f.displayName="Content";f.__ui__="Content";const _=({children:n,className:t,...s})=>e.jsx(d.span,{className:x("ui-button__icon",t),display:"inline-flex",alignSelf:"center",flexShrink:0,"aria-hidden":!0,...s,children:n});_.displayName="Icon";_.__ui__="Icon";const Z=n=>{const t=c.useRef(!n),s=c.useCallback(a=>{a&&(t.current=a.tagName==="BUTTON")},[]),o=t.current?"button":void 0;return{ref:s,type:o}};export{T as B,I as a};
