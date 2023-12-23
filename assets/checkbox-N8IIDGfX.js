import{j as l,a as te}from"./jsx-runtime-TtYKBvr-.js";import{t as se}from"./index-GJUAdCnc.js";import{r as a}from"./index-IybTgENJ.js";import{u as ae}from"./index-6oL1ryJo.js";import{a as J,u as oe,f as E}from"./form-control-3MAtesC0.js";import{d as L,c as ie,p as ce,a as Q,o as A,j as T,X as le,u as R,b as N,y as re,O as B,v as W,H as w,h as v}from"./factory-KjDUWRxd.js";import{A as ue}from"./index-GPdqE8CR.js";import{m as G}from"./motion-AgWUVtfu.js";import{u as de}from"./use-component-style-xqqjtukQ.js";import{o as he}from"./theme-provider-H1stovVN.js";import{F as fe}from"./flex-l98I0aH1.js";const z=t=>t&&T(t)&&T(t.target),ke=({isNative:t,...d})=>{d.onChange=L(d.onChange);const[e,i]=ae({value:d.value,defaultValue:d.defaultValue||[],onChange:d.onChange}),f=a.useCallback(o=>{const h=z(o)?o.target.checked:!e.includes(o),c=z(o)?o.target.value:o,r=h?[...e,c]:e.filter(s=>String(s)!==String(c));i(r)},[e,i]),g=a.useCallback((o={},h=null)=>({...o,ref:h,[t?"checked":"isChecked"]:e.some(c=>String(o.value)===String(c)),onChange:f}),[f,t,e]);return{value:e,setValue:i,onChange:f,getCheckboxProps:g}},[Ce,me]=ie({strict:!1,name:"CheckboxGroupContext"}),be=a.forwardRef(({className:t,size:d,variant:e,colorScheme:i,children:f,items:g=[],direction:o="column",gap:h,...c},r)=>{const{value:s,onChange:I}=ke(c),{isRequired:D,isReadOnly:y,isDisabled:P,isInvalid:S}=J(c),k=ce(f);let p=[];return!k.length&&g.length&&(p=g.map(({label:m,value:u,..._},F)=>l(Y,{value:u,..._,children:m},F))),l(Ce,{value:{size:d,variant:e,colorScheme:i,isRequired:D,isReadOnly:y,isDisabled:P,isInvalid:S,value:s,onChange:I},children:l(fe,{ref:r,className:Q("ui-checkbox-group",t),role:"group",direction:o,gap:h??(o==="row"?"1rem":void 0),...A(c,["value","defaultValue","onChange","isInvalid","isDisabled","isRequired","isReadOnly"]),children:f??p})})});be.displayName="CheckboxGroup";const ve=t=>{const{id:d,name:e,value:i,defaultIsChecked:f,tabIndex:g,required:o,disabled:h,readOnly:c,isIndeterminate:r,...s}=oe(t),[I,D]=a.useState(!1),[y,P]=a.useState(!1),[S,k]=a.useState(!1),[p,m]=a.useState(!1),u=a.useRef(null),[_,F]=a.useState(!0),[j,M]=a.useState(!!f),q=t.isChecked!==void 0,b=q?t.isChecked:j,K=L(n=>{var x;if(c||h){n.preventDefault();return}q||M(!b||r?!0:n.target.checked),(x=s.onChange)==null||x.call(s,n)},[c,h,q,b,r]),O=L(s.onBlur),U=L(s.onFocus),V=a.useCallback(({key:n})=>{n===" "&&m(!0)},[m]),X=a.useCallback(({key:n})=>{n===" "&&m(!1)},[m]);a.useEffect(()=>se(D),[]),N(()=>{u.current&&(u.current.indeterminate=!!r)},[r]),re(()=>{h&&P(!1)},[h,P]),N(()=>{var n;(n=u.current)!=null&&n.form&&(u.current.form.onreset=()=>M(!!f))},[]),N(()=>{u.current&&u.current.checked!==b&&M(u.current.checked)},[u.current]);const Z=a.useCallback((n={},x=null)=>({...B(s,E),...n,ref:W(x,C=>{C&&F(C.tagName==="LABEL")}),"data-checked":w(b),onClick:v(n.onClick,()=>{var C;_||((C=u.current)==null||C.click(),requestAnimationFrame(()=>{var H;return(H=u.current)==null?void 0:H.focus()}))})}),[b,_,s]),$=a.useCallback((n={},x=null)=>({...B(s,E),...n,ref:x,"data-active":w(p),"data-hover":w(S),"data-checked":w(b),"data-focus":w(y),"data-focus-visible":w(y&&I),"data-indeterminate":w(r),"aria-hidden":!0,onMouseDown:v(n.onMouseDown,C=>{y&&C.preventDefault(),m(!0)}),onMouseUp:v(n.onMouseUp,()=>m(!1)),onMouseEnter:v(n.onMouseEnter,()=>k(!0)),onMouseLeave:v(n.onMouseLeave,()=>k(!1))}),[p,b,y,S,I,r,s]),ee=a.useCallback((n={},x=null)=>({...B(s,E),...n,ref:W(u,x),id:d,type:"checkbox",name:e,value:i,tabIndex:g,required:o,disabled:h,readOnly:c,checked:b,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:v(n.onChange,K),onBlur:v(n.onBlur,O,()=>P(!1)),onFocus:v(n.onFocus,U,()=>P(!0)),onKeyDown:v(n.onKeyDown,V),onKeyUp:v(n.onKeyUp,X)}),[s,d,e,i,g,o,h,c,b,K,O,U,V,X]),ne=a.useCallback((n={},x=null)=>({...B(s,E),...n,ref:x,"data-checked":w(b),onMouseDown:v(n.onMouseDown,C=>{C.preventDefault(),C.stopPropagation()}),onTouchStart:v(n.onTouchStart,C=>{C.preventDefault(),C.stopPropagation()})}),[b,s]);return{isFocusVisible:I,isFocused:y,isHovered:S,isActive:p,isChecked:b,isIndeterminate:r,getContainerProps:Z,getIconProps:$,getInputProps:ee,getLabelProps:ne}},Y=a.forwardRef((t,d)=>{const e=me(),i=J(t),[f,g]=de("Checkbox",{...e?A(e,["value"]):{},...t}),{className:o,gap:h="0.5rem",isRequired:c=(e==null?void 0:e.isRequired)??i.isRequired,isReadOnly:r=(e==null?void 0:e.isReadOnly)??i.isReadOnly,isDisabled:s=(e==null?void 0:e.isDisabled)??i.isDisabled,isInvalid:I=(e==null?void 0:e.isInvalid)??i.isInvalid,iconProps:D,inputProps:y,labelProps:P,children:S,...k}=he(g),{isChecked:p,isIndeterminate:m,getContainerProps:u,getInputProps:_,getIconProps:F,getLabelProps:j}=ve({...k,isRequired:c,isReadOnly:r,isDisabled:s,isInvalid:I,isChecked:e!=null&&e.value&&k.value?e.value.includes(k.value):k.isChecked,onChange:e!=null&&e.onChange&&k.value?le(e.onChange,k.onChange):k.onChange}),M=a.cloneElement((D==null?void 0:D.children)??l(pe,{}),{__css:{opacity:p||m?1:0,transform:p||m?"scale(1)":"scale(0.95)",transitionProperty:"transform",transitionDuration:"normal"},isIndeterminate:m,isChecked:p,isRequired:c,isReadOnly:r,isDisabled:s,isInvalid:I});return te(R.label,{className:Q("ui-checkbox",o),...u(),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:h,...f.container},...A(k,["id","name","value","defaultValue","defaultIsChecked","isChecked","isIndeterminate","onChange","onBlur","onFocus","tabIndex"]),children:[l(R.input,{className:"ui-checkbox__input",..._(y,d)}),l(R.span,{className:"ui-checkbox__icon",__css:{pointerEvents:r?"none":void 0,position:"relative",display:"inline-block",userSelect:"none",...f.icon},...F(A(D??{children:void 0},["children"])),children:M}),l(R.span,{className:"ui-checkbox__label",__css:{...f.label},...j(P),children:S})]})});Y.displayName="Checkbox";const pe=({isIndeterminate:t,isChecked:d,...e})=>{const i=A(e,["isRequired","isReadOnly","isDisabled","isInvalid"]);return l(ue,{initial:!1,children:t||d?l(R.div,{__css:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:l(R.div,{as:G.div,variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:t?l(ge,{...i}):l(xe,{...i})})}):null})},xe=t=>l(R.svg,{as:G.svg,width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...t,children:l("polyline",{points:"1.5 6 4.5 9 10.5 1"})}),ge=t=>l(R.svg,{as:G.svg,width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4},...t,children:l("line",{x1:"21",x2:"3",y1:"12",y2:"12"})});export{Y as C,be as a,ve as b,ke as u};