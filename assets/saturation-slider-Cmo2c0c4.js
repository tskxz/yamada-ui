import{j as g}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{u as pt}from"./index-Cyz1ja4J.js";import{u as dt,a as mt,b as ft}from"./index-BCvvWxfB.js";import{r as i}from"./index-BwDkhjyp.js";import{u as gt,f as W,g as bt}from"./form-control-CXU_ZptP.js";import{k as Z,B as ht,f as vt,R as yt,a as L,T as U,d as Pt,h as q,r as St,b,c as tt}from"./factory-DqlmaKnk.js";import{r as et,c as h}from"./number-49BHn0Cl.js";import{h as Ct,o as xt}from"./theme-provider-DKpED47L.js";import{f as kt}from"./forward-ref-BmTAT9U5.js";import{a as wt}from"./use-component-style-C3e1SZSW.js";const _t=c=>{let p=[([u])=>({bg:`hsl(${u}, 100%, 50%)`,bgImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, transparent)"})];return c&&(p=[...p,{boxShadow:"rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset"}]),p},It=({focusThumbOnChange:c=!0,...p})=>{c||(p.isReadOnly=!0);let{id:u,name:_,value:I,defaultValue:E=[0,0,1],onChange:N,onChangeStart:T,onChangeEnd:A,step:d=.01,thumbColor:R,required:j,disabled:v,readOnly:y,withShadow:D=!0,overlays:F=_t(D),...o}=gt(p);const B=Z(T),P=Z(A),[m,S]=pt({value:I,defaultValue:E,onChange:N}),[X,Y]=i.useState(!1),V=!(v||y);let[f,r,s]=m;r=h(r,0,1),s=h(s,0,1);const G=i.useRef(null),O=i.useRef(null),K=i.useRef(null),a=dt({value:m,step:d,isInteractive:V,eventSource:null,focusThumbOnChange:c}),$=mt(K),rt=i.useMemo(()=>F.map(t=>ht(t,[f,r,s])),[F,f,r,s]),nt=i.useCallback(t=>{var Q;if(!O.current)return[];const{step:e}=a.current;a.current.eventSource="pointer";const{bottom:n,left:l,height:x,width:k}=O.current.getBoundingClientRect(),{clientX:w,clientY:ct}=((Q=t.touches)==null?void 0:Q[0])??t;let M=h((w-l)/k,0,1),z=h((n-ct)/x,0,1);return e&&(M=parseFloat(et(M,0,e)),z=parseFloat(et(z,0,e))),[M,z]},[a]),H=t=>{const{value:e}=a.current,[n,l]=nt(t);if(n==null||l==null)return;const[,x,k]=e;(n!==x||l!==k)&&S(([w])=>[w,n,l])},st=i.useCallback(()=>{const{focusThumbOnChange:t}=a.current;t&&setTimeout(()=>{var e;return(e=K.current)==null?void 0:e.focus()})},[a]),C=i.useCallback(([t,e])=>{const{isInteractive:n}=a.current;n&&(t=h(t,0,1),e=h(e,0,1),S(([l])=>[l,t,e]))},[a,S]),J=i.useCallback(t=>{const n={ArrowRight:()=>C([r+d,s]),ArrowUp:()=>C([r,s+d]),ArrowLeft:()=>C([r-d,s]),ArrowDown:()=>C([r,s-d])}[t.key];n&&(t.preventDefault(),t.stopPropagation(),n(t),a.current.eventSource="keyboard")},[a,C,r,s,d]);ft(G,{onSessionStart:t=>{const{isInteractive:e,value:n}=a.current;e&&(Y(!0),st(),H(t),B(n))},onSessionEnd:()=>{const{isInteractive:t,value:e}=a.current;t&&(Y(!1),P(e))},onMove:t=>{const{isInteractive:e}=a.current;e&&H(t)}}),vt(()=>{const{eventSource:t,value:e}=a.current;t==="keyboard"&&P(e)},[m,P]);const ot=i.useCallback((t={},e=null)=>({...t,...yt(o,["aria-readonly"]),ref:L(e,G),tabIndex:-1}),[o]),at=i.useCallback((t={},e=null)=>{const{width:n}=$??{width:0},l={...t.style,...o.style,padding:`${n/2}px`};return{...t,ref:e,style:l}},[o,$]),it=i.useCallback((t={},e=null)=>({...U(o,W),...t,id:u,ref:e,type:"hidden",name:_,value:[f,r,s].toString(),required:j,disabled:v,readOnly:y}),[v,u,_,y,j,o,f,r,s]),lt=i.useCallback((t={},e=null)=>({...U(o,bt({omit:["aria-readonly"]})),...t,ref:L(e,O)}),[o]),ut=i.useCallback((t={},e=null)=>{const{width:n,height:l}=$??{width:0,height:0},x=r*100,k=s*100,w={...t.style,position:"absolute",userSelect:"none",touchAction:"none",left:`calc(${x}% - ${n/2}px)`,bottom:`calc(${k}% - ${l/2}px)`};return{"aria-label":"Saturation and brightness thumb",bg:R??Ct([f,r,s])(),...U(o,W),...t,ref:L(e,K),tabIndex:V&&c?0:void 0,role:"slider","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":`saturation ${r}, brightness ${s}`,"data-active":Pt(X&&c),onKeyDown:q(t.onKeyDown,J),onFocus:q(t.onFocus,o.onFocus),onBlur:q(t.onBlur,o.onBlur),style:w}},[f,r,s,R,c,X,V,J,o,$]);return{value:m,overlays:rt,getContainerProps:ot,getInnerProps:at,getTrackProps:lt,getInputProps:it,getThumbProps:ut}},Vt=kt((c,p)=>{const[u,_]=wt("SaturationSlider",c),{className:I,ratio:E=16/9,innerProps:N,inputProps:T,trackProps:A,thumbProps:d,__css:R,...j}=xt(_),{overlays:v,getContainerProps:y,getInnerProps:D,getTrackProps:F,getInputProps:o,getThumbProps:B}=It(j),P={position:"relative",_before:{content:'""',display:"block",h:0,pb:St(E,m=>`${1/m*100}%`)},"& > *":{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",w:"100%",h:"100%"},...u.container,...R};return g.jsx(b.div,{className:tt("ui-saturation-slider",I),__css:P,...y(),children:g.jsxs(b.div,{className:tt("ui-saturation-slider__inner",I),__css:{...u.inner},...D(N),children:[g.jsx(b.input,{...o(T,p)}),v.map((m,S)=>g.jsx(b.div,{className:"ui-saturation-slider__overlay",__css:{position:"absolute",top:0,left:0,right:0,bottom:0,...u.overlay},...m},S)),g.jsx(b.div,{className:"ui-saturation-slider__track",__css:{position:"relative",w:"100%",h:"100%",...u.track},...F(A),children:g.jsx(b.div,{className:"ui-saturation-slider__thumb",__css:{...u.thumb},...B(d)})})]})})});export{Vt as S};
